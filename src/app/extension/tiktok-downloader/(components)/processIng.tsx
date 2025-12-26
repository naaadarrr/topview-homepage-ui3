import { Spinner, Stack, Text } from "@chakra-ui/react";

export default function ProcessIng() {
  return (
    <Stack
      bg="#000"
      h="100%"
      justifyContent="center"
      alignItems="center"
      gap={0}
    >
      <Text fontSize="22px" fontWeight="600">
        Your video is being
      </Text>
      <Text fontSize="22px" fontWeight="600">
        processed...
      </Text>
      <Spinner
        w="30px"
        h="30px"
        mt="7px"
        thickness="4px"
        speed="1s"
        emptyColor="gray.500"
        color="gray.200"
      />
    </Stack>
  );
}
