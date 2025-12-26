export const getFullSignInUrl = (path: string) =>
  path.startsWith("/")
    ? `${process.env.NEXT_PUBLIC_TRPC_BASE_URL}${path}`
    : `${process.env.NEXT_PUBLIC_TRPC_BASE_URL}/${path}`;

export const getAuthInfo = async ({
  url,
  data,
}: {
  url: string;
  data: unknown;
}) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(({ result }: { result: { data?: any } }) => {
      if (result?.data) {
        return result.data;
      } else {
        throw new Error("No data returned");
      }
    });
};

export const checkEmailExist = async (email: string) => {
  return new Promise((r) => {
    const requestUrl = getFullSignInUrl("/api/trpc/account.checkEmailExist");
    getAuthInfo({
      url: requestUrl,
      data: { email },
    }).then((res: { status: "success" | "error"; data: any }) => {
      if (res.status === "success") {
        r(true);
      } else {
        r(false);
      }
    });
  });
};

export const sendVerifyCode2Email = async (email: string) => {
  const requestUrl = getFullSignInUrl("/api/trpc/account.sendVerifyCode2Email");
  return await getAuthInfo({
    url: requestUrl,
    data: { email },
  });
};

export const verifyCodeFromUserInput = async (email: string, code: string) => {
  const requestUrl = getFullSignInUrl(
    "/api/trpc/account.verifyCodeFromUserInput",
  );
  return await getAuthInfo({
    url: requestUrl,
    data: { email, code },
  });
};

export const updateUserInfo = async (
  email: string,
  password: string,
  username?: string,
) => {
  const requestUrl = getFullSignInUrl("/api/trpc/account.updateUserInfo");
  return await getAuthInfo({
    url: requestUrl,
    data: { email, password, username },
  });
};

export const signInWithEmail = async (email: string, password: string) => {
  const requestUrl = getFullSignInUrl("/api/trpc/account.signInWithEmail");
  return await getAuthInfo({
    url: requestUrl,
    data: { email, password },
  });
};
