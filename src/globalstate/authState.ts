import React from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

type AuthState = {
  token: string | null;
};

const authRecoilState = atom<AuthState>({
  key: "auth",
  default: {
    token: null,
  },
});

export const useAuthState = () => {
  return useRecoilValue(authRecoilState);
};

export const useAuthMutators = () => {
  const setState = useSetRecoilState(authRecoilState);

  const clearToken = React.useCallback(() => {
    setState(() => ({ token: null }));
  }, [setState]);

  const setToken = React.useCallback(
    (token: string) => {
      setState(() => ({ token: token }));
    },
    [setState]
  );

  return { clearToken, setToken };
};
