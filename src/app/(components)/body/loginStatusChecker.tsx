// import { Button, Link, Text } from "@chakra-ui/react";
// import { SessionProvider, useSession } from "next-auth/react";
// import { type ReactNode } from "react";

// export default function LoginStatusChecker({
//   children,
// }: {
//   children: ReactNode;
// }) {
//   return <SessionProvider>{children}</SessionProvider>;
// }

// export  function GetFreeButton({ getFree }: { getFree: string }) {

//   // const { data: session } = useSession();

//   // 判断会话状态，如果会话存在，则导航到/gen/m2v，否则导航到/account/signin
//   // const navigateTo = session ? "/gen/m2v" : "/account/signin";

//   return (
//     <Link display="block" w="100%" isExternal href="/account/signin">
//       <Button
//         w="189px"
//         h="56px"
//         borderRadius="100px"
//         padding="20px 24px"
//         border="1px solid hsla(245, 88%, 60%, 1)"
//         bg="hsla(245, 88%, 60%, 0.8)"
//         _hover={{ bg: "hsla(245, 88%, 80%, 0.8)" }}
//         color="#fff"
//         zIndex="1"
//       >
//         <Text fontWeight="500" flex={1} lineHeight="19.36px" fontSize="16px">
//           {getFree}
//         </Text>
//         <NextArrow />
//       </Button>
//     </Link>
//   );
// }l

// export function GetFreeButtonNav({ startFree }: { startFree: string }) {
//   // const { data: session } = useSession();

//   // 判断会话状态，如果会话存在，则导航到/gen/m2v，否则导航到/account/signin
//   // const navigateTo = session ? "/dashboard/home" : "/account/signin";

//   return (
//     <Link isExternal href="/account/signin">
//       <Button
//         bg="hsla(245, 88%, 60%, 0.8)"
//         border="1px solid hsla(245, 88%, 60%, 1)"
//         _hover={{ bg: "hsla(245, 80%, 80%)" }}
//         color="#fff"
//         borderRadius="100px"
//         padding="10px 20px"
//         fontSize="14px"
//         lineHeight="17px"
//         fontWeight="450"
//       >
//         {startFree}
//       </Button>
//     </Link>
//   );
// }

// function NextArrow() {
//   return (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M4.00375 13.0001L4.00375 11.0001L16.0037 11.0001L10.5037 5.50008L11.9237 4.08008L19.8437 12.0001L11.9237 19.9201L10.5037 18.5001L16.0037 13.0001L4.00375 13.0001Z"
//         fill="white"
//       />
//     </svg>
//   );
// }
