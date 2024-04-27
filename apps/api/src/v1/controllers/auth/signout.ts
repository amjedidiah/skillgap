import { Request, Response } from "express";
import { verifyAuth } from "../../lib/auth";
import { handleResponseError } from "../../utils";
import magic from "../../lib/magic";
import Session from "../../models/session";

const postAuthSignout = async (request: Request, response: Response) => {
  try {
    const { user_id } = await verifyAuth(request);
    await magic.users.logoutByIssuer(user_id);

    // Destroy user session in DB
    await Session.findByIdAndDelete(user_id);

    return response.status(200).json({
      message: `Signed out ${user_id} successfully`,
    });
  } catch (error) {
    handleResponseError(response, error);
  }
};

export default postAuthSignout;
