import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface SectionWithTitleProps {
    title?: string;
    titleStyle?: any;
    children: React.ReactNode;
    px?: any;
}

export default function SectionWithTitle({ title, titleStyle, children, px }: SectionWithTitleProps) {
    return (
        <Box w="100%" px={px !== undefined ? px : { base: "16px", xl: "0" }} mt="0">
            {title && (
                <Heading
                    as="h2"
                    fontSize={{ base: "24px", xl: "48px" }}
                    fontWeight="600"
                    textAlign="center"
                    mb="40px"
                    {...titleStyle}
                >
                    {title}
                </Heading>
            )}
            {children}
        </Box>
    );
}
