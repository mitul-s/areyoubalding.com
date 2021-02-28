import NextLink from "next/link"
import { Button } from "@chakra-ui/react"

export default function StartButton({ href }) {
    return (
      <NextLink href="/quiz">
        <Button
          color="cream"
          bg="cherry"
          fontSize="2xl"
          textTransform="uppercase"
          borderRadius={0}
          border="2px solid transparent"
          width="max-content"
          px={20}
          py={8}
          _hover={{
            color: "cherry",
            background: "cream",
            border: "2px solid",
            borderColor: "cherry",
          }}
        >
          Start
        </Button>
      </NextLink>
    );
}