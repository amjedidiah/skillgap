import User from "../models/user";

export const mongoGetUserByProp = (key: string, value: string) => {
  const query = User.where({ [key]: value });
  return query.findOne();
};
