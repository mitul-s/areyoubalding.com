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
          <Stack spacing={12}>
            <Heading fontSize="3xl" textTransform="uppercase" color="royal">
              Are you
            </Heading>
            <Box>
              <Heading textTransform="uppercase" fontSize="120px" color="royal">
                Balding?
              </Heading>
            </Box>
            <Text fontSize="2xl">
              Answer a few questions about yourself to find out if a future
              without hair is coming for you.
            </Text>
          </Stack>
          <NextLink href="/quiz">
            <Button color="cream" bg="cherry" mt={10}>
              Start
            </Button>
          </NextLink>
        </MotionBox>
      </Center>
    </Shell>
  );
}
