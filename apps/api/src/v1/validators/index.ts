import { body } from "express-validator";
import { validate } from "deep-email-validator";
import { isDev } from "@skillgap/shared/constants";
import { mongoGetUserByProp } from "../lib/db";
import validator, { MobilePhoneLocale } from "validator";
import clm from "country-locale-map";

export const emailValidator = () =>
  body("email", "Valid email is required")
    .isString()
    .trim()
    .notEmpty()
    .isEmail()
    .custom(async (email) => {
      const { validators, valid, reason } = await validate({
        email,
        validateDisposable: !isDev,
        validateMx: true,
        validateRegex: true,
        validateSMTP: !isDev,
        validateTypo: false,
      });
      console.info("Validation complete by deep-email-validator:", validators);

      if (!valid) throw new Error(`${email} failed validation: ${reason}`);
      return true;
    });

export const emailExistsValidator = () =>
  body("email")
    .toLowerCase()
    .custom(async (value) => {
      const user = await mongoGetUserByProp("email", value);
      if (user)
        throw new Error("A user with this email address already exists.");

      return true;
    })
    .normalizeEmail();

export const tagValidator = () =>
  body("tag", "Your user tag should be between 2 and 20 characters")
    .isString()
    .trim()
    .notEmpty()
    .isLength({ min: 4, max: 41 });

export const tagExistsValidator = () =>
  body("tag").custom(async (value) => {
    const user = await mongoGetUserByProp("tag", value.toLowerCase());
    if (user) throw new Error("A user with this tag already exists");

    return true;
  });

export const phoneNumberValidator = () =>
  body("phoneNumber", "Valid phoneNumber is required")
    .isString()
    .trim()
    .notEmpty()
    .custom((value, { req }) => {
      const cc = req.body.countryCode as string;
      const country = clm.getCountryByAlpha2(cc);
      if (!country) throw new Error(`${cc} is an invalid country code`);

      const locales = country.languages.map(
        (item) => `${item}-${cc.toUpperCase()}`
      ) as MobilePhoneLocale[];

      if (!validator.isMobilePhone(value, locales))
        throw new Error(`${value} is an invalid ${cc} phone number`);

      return true;
    });

export const phoneNumberExistsValidator = () =>
  body("phoneNumber").custom(async (value) => {
    const user = await mongoGetUserByProp("phoneNumber", value);
    if (user)
      throw new Error(
        "An account with this phone number already exists, use a different one."
      );

    return true;
  });

export const nameValidator = (fields: string, label: string) =>
  body(fields, `${label} should be between 2 and 20 characters`)
    .isString()
    .trim()
    .notEmpty()
    .isLength({ min: 2, max: 20 });

export const notEmptyValidator = (fields: string, label: string) =>
  body(fields, `${label} is required`).isString().trim().notEmpty();
