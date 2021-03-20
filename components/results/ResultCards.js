import { Box, Center, Heading, Text } from "@chakra-ui/react";


export const StatsCard = () => {
  return (
    <Box
      border="5px solid"
      borderColor="royal"
      borderRadius="5px"
      // width="auto"
      maxW="1200px"
      px={8}
      py={12}
    >
      <Heading mb={3}>What to do if you're balding?</Heading>
      <Text fontSize="xl">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit
        amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      </Text>
    </Box>
  );
}

export const InformationCard = () => {
    return (
        <Box maxW="1200px" mx="auto !important">
          <Center color="cream" bg="cherry" p={12} borderTopRadius="5px">
            <Heading fontSize="6xl" fontWeight="black">
              What do you do if you're balding?
            </Heading>
          </Center>
          <Box
            p={8}
            border="5px solid"
            borderColor="cherry"
            bgColor="cream"
            color="black"
            borderBottomRadius="5px"
          >
            <Text fontSize="xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>
          </Box>
        </Box>
    );
}

export default InformationCard;