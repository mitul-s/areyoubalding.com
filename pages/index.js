import { useQuiz } from "@/lib/quiz";
import { useRouter } from "next/router";
import NextLink from "next/link";
import Shell from "@/components/Shell";
import CheckButton from "@/components/CheckButton";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  List,
  ListItem,
  Button,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations"


const MotionBox = motion.custom(Box);


export default function Home() {
  const router = useRouter();
  const { end } = useQuiz();

  if (end) {
    router.push("/results");
  }

  return (
    <Shell>
      <Center flexDirection="column" flex="1">
        <MotionBox variants={fadeInUp} textAlign="center">
          <Stack spacing={8} w="879px" alignItems="center">
            <Box>
              <Heading
                fontSize="42px"
                fontWeight="bold"
                fontStyle="normal"
                letterSpacing="-1.37308px"
                textTransform="uppercase"
                color="royal"
                lineHeight="52px"
              >
                Are you
              </Heading>
              <Heading
                textTransform="uppercase"
                color="royal"
                fontWeight="900"
                fontSize="144px"
                // fontSize="6xl"
                letterSpacing="-2.35385px"
              >
                Balding?
              </Heading>
            </Box>
            <Text fontSize="2xl">
              Answer a few questions about yourself through this short
              interactive quiz to find out if a future without hair is coming
              for you.
            </Text>
            <NextLink href="/quiz">
              <Button
                color="cream"
                bg="cherry"
                fontSize="2xl"
                textTransform="uppercase"
                borderRadius={0}
                width="max-content"
                px={20}
                py={8}
              >
                Start
              </Button>
            </NextLink>
          </Stack>
        </MotionBox>
      </Center>
    </Shell>
  );
}
