import React, { useMemo } from "react";
import { User } from "../../models/user/type";
import { post } from "../server";

const createUser = async (user: User, token: string) => {
  const res = await post(
    "user/create",
    {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    token
  );

  return res;
};
