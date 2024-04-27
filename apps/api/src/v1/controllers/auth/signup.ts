import { Request, Response } from "express";
import User from "../../models/user";
import { handleResponseError, handleValidationErrors } from "../../utils";
import { verifyAuth } from "../../lib/auth";

const postAuthSignup = async (request: Request, response: Response) => {
  try {
    // Validate request
    handleValidationErrors(request);

    const {
      firstName,
      lastName,
      email,
      tag,
      country,
      countryCode,
      phoneNumber,
    } = request.body;
    const { user_id } = await verifyAuth(request);

    const res = await User.create({
      id: user_id,
      name: firstName || lastName ? [firstName, lastName].join(" ").trim() : "",
      email,
      tag,
      country,
      countryCode,
      phoneNumber,
    });
    if (res.errors) throw new Error(res.errors?.message);

    response.status(201).json({
      data: res,
      message: `Signed up ${res.id} successfully`,
    });
  } catch (error) {
    handleResponseError(response, error);
  }
};

export default postAuthSignup;
