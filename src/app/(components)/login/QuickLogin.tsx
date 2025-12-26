import { Box, Button, Image, Text } from "@chakra-ui/react";
import { prefixed } from "@/utils/media";

const QuickLogin = ({
  mode,
  cb,
}: {
  mode: "Apple" | "Google";
  cb: () => void;
}) => {
  const modeMap = {
    Apple: {
      src: prefixed("/login-icon/apple.svg"),
      alt: "Apple Logo",
    },
    Google: {
      src: prefixed("/login-icon/google.svg"),
      alt: "Google Logo",
    },
  };

  return (
    <>
      <Button
        w="100%"
        h="43px"
        bg="#222"
        _hover={{ bg: "#aaa" }}
        onClick={() => cb()}
      >
        <Box mr="10px" borderRadius="50%">
          <Image
            w="20px"
            h="20px"
            src={modeMap[mode]?.src}
            alt={modeMap[mode]?.alt}
          ></Image>
        </Box>
        <Text color="white" fontFamily="Eina01-Bold" fontSize="14px">
          Continue with {mode}
        </Text>
      </Button>
    </>
  );
};

export default QuickLogin;
