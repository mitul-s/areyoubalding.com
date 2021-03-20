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
import StartButton from "@/components/StartButton";
import styles from "@/styles/blobs.module.css";


const MotionBox = motion.custom(Box);


export default function Home() {
  const router = useRouter();
  const { end } = useQuiz();

  if (end) {
    router.push("/results");
  }

  return (
    <Shell>
      <Box className={styles.shapeblob}></Box>
      <Box className={`${styles.shapeblob} ${styles.one}`}></Box>
      <Box className={`${styles.shapeblob} ${styles.two}`}></Box>
      <Box className={`${styles.shapeblob} ${styles.three}`}></Box>
      <Center flexDirection="column" flex="1" zIndex="4">
        <MotionBox variants={fadeInUp} textAlign="center">
          <Box maxW="879px" alignItems="center">
            <Box mb={0}>
              <Heading
                fontSize="42px"
                // fontSize="2vw"
                // fontSize="7vw"
                fontWeight="black"
                fontStyle="normal"
                letterSpacing="-1.37308px"
                textTransform="uppercase"
                color="royal"
                lineHeight="8px"
              >
                Are you
              </Heading>
              <Heading
                textTransform="uppercase"
                color="royal"
                fontWeight="900"
                fontSize="144px"
                fontSize="10vw"
                // fontSize="6xl"
                letterSpacing="-2.35385px"
              >
                Balding?
              </Heading>
            </Box>
            <Text fontSize={["md", null, "2xl"]} mb={8}>
              Answer a few questions about yourself through this short
              interactive quiz to find out if a future without hair is coming
              for you.
            </Text>

            <StartButton />
          </Box>
        </MotionBox>
      </Center>
    </Shell>
  );
}
