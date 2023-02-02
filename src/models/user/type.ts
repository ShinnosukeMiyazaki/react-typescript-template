import { Id } from "../common/types/id";

export type UserId = Id<"User">;

export type User = {
  id: UserId;
  firstName: string;
  lastName: string;
  email: string | null;
};
