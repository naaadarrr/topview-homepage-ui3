import { atom } from "recoil";

export const loginState = atom<{
  active: string;
  callbackUrl: string;
  email: string;
  alertInfo: {
    message: string;
    status: "error" | "info" | "warning" | "success" | "loading" | undefined;
  };
}>({
  key: "loginState",
  default: {
    active: "login",
    callbackUrl: "/",
    email: "",
    alertInfo: {
      message: "",
      status: undefined,
    },
  },
});
