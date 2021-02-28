import { Center } from "@chakra-ui/react";

export default function SelectButton({ children, ...rest }) {
  return (
    <Center
      bg="cherry"
      border="2px solid"
      color="cream"
      borderColor="cherry"
      w="sm"
    //   py={8}
      fontSize="3xl"
      sx={{ transition: "350ms all" }}
      _hover={{
        transform: "translateY(-4px)",
        bg: "royal",
        color: "cream",
        borderColor: "burgundy",
      }}
      {...rest}
    >
      {children}
    </Center>
  );
}
