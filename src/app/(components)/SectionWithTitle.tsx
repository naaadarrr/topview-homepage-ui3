import { Box, Heading } from "@chakra-ui/react";
import React from "react";

interface SectionWithTitleProps {
    title?: string;
    titleStyle?: any;
    children: React.ReactNode;
}

export default function SectionWithTitle({ title, titleStyle, children }: SectionWithTitleProps) {
    return (
        <Box w="100%" px={{ base: "16px", xl: "0" }} mt={{ base: "48px", xl: "104px" }}>
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
