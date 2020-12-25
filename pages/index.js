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

const MotionBox = motion.custom(Box);

const easing = [.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.4,
    }
  }
}

export default function Home() {
  const router = useRouter();
  const { end } = useQuiz();

  if (end) {
    router.push("/results");
  }

  return (
    <Shell>
      <Center flexDirection="column" h="100vh">
        <MotionBox variants={fadeInUp} textAlign="center">
          <Stack spacing={8} mb={8}>
            <MotionBox
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heading fontSize="6xl" color="royal">
                Are you balding?
              </Heading>
            </MotionBox>
            <Text fontSize="2xl">
              Answer a few questions about yourself to find out if a future
              without hair is coming for you.
            </Text>
          </Stack>

          <NextLink href="/quiz">
            <Button color="cream" bg="cherry">
              Start
            </Button>
          </NextLink>
        </MotionBox>
      </Center>
    </Shell>
  );
}
