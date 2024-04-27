import {
  emailExistsValidator,
  emailValidator,
  notEmptyValidator,
  nameValidator,
  tagExistsValidator,
  tagValidator,
  phoneNumberValidator,
  phoneNumberExistsValidator,
} from ".";

export const signupValidator = [
  nameValidator("firstName", "firstName"),
  nameValidator("lastName", "lastName"),
  emailValidator(),
  emailExistsValidator(),
  tagValidator(),
  tagExistsValidator(),
  notEmptyValidator("country", "country"),
  notEmptyValidator("countryCode", "countryCode"),
  phoneNumberValidator(),
  phoneNumberExistsValidator(),
];
