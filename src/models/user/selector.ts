import { User } from "./type";

//引数に渡されたデータを変更するのではなくデータを元に何らかの値や判定結果を返す関数を記述する

export const selectFullName = (user: User) => {
  return `${user.firstName} ${user.lastName}`;
};
