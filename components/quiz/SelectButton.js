import { Center } from "@chakra-ui/react";

export default function SelectButton({ children, ...rest }) {
  return (
    <Center
      bg="cherry"
      border="2px solid"
      color="cream"
      borderColor="cherry"
      w="sm"
      py={3}
      fontSize="3xl"
      sx={{ transition: "350ms all" }}
      _hover={{
        // transform: "translateY(-4px)",
        cursor: "pointer",
        bg: "royal",
        color: "cream",
        borderColor: "royal",
      }}
      {...rest}
    >
      {children}
    </Center>
  );
}
