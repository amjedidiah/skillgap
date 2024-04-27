import { Request, Response } from "express";
import { mongoGetUserByProp } from "../../lib/db";

export default async function getUserUniqueness(
  request: Request,
  response: Response
) {
  const { key, value } = request.query;
  if (!key || !value)
    return response.status(200).json({
      data: false,
    });

  const res = await mongoGetUserByProp(key as string, value as string);

  response.status(200).json({
    data: !res?.id,
  });
}
