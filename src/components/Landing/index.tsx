import Image from "next/image";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";

import imgLanding from "../../../public/images/ilustra.png";

export function Landing() {
  return (
    <Box>
      <Container maxW={"5xl"} display={"flex"} h={{ calc: "100vh - 200px" }}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          margin={"auto"}
          h={"100vh"}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={"25px"}
          >
            ACCOUNT
            <Text as={"span"} color={"orange.400"}>
              ED
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"3xl"} fontWeight={"bold"}>
            Centralize e controle suas finanças. Accounted nasceu para ajudar
            você a organizar seus gastos. Nunca foi tão fácil organizar suas
            finanças de forma fácil e eficiente, totalmente gratuita e sem
            burocracia.
          </Text>
          <Stack spacing={2} direction={"column"}>
            <Text color={"gray.500"} fontWeight={"bold"}>
              Sign In with:
            </Text>
            <Stack>
              <Button
                rounded={"full"}
                px={6}
                colorScheme={"orange"}
                bg={"#db4a39"}
                _hover={{ bg: "red.500", transform: "scale(1.1)" }}
              >
                Entrar com Google
              </Button>
              <Button
                rounded={"full"}
                px={6}
                colorScheme={"orange"}
                bg={"#171515"}
                _hover={{ bg: "gray.800", transform: "scale(1.1)" }}
              >
                Entrar com Github
              </Button>
            </Stack>
          </Stack>

          <Flex w={"full"} justifyContent={"center"} minW={"300px"}>
            <Image src={imgLanding} />
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
