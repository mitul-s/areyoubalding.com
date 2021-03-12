import { Stack, Box, Heading, Text, Image, Button } from "@chakra-ui/react"

const ProductCard = ({ title, description, img }) => (

    <Stack m="0 auto" bg="royal" color="cream" p={8} borderRadius="8px" spacing={4}>
      <Box>
        <Heading>{title}</Heading>
        <Heading fontSize="3xs" color="whiteAlpha.800" fontWeight="500">
          RX Certified
        </Heading>
      </Box>
      <Text fontSize="lg">
        {description}
      </Text>
      <Box boxSize="xs" mx="auto !important">
        <Image src={img} />
      </Box>
      <Button color="royal" bg="cream">
        Get your pack
      </Button>
    </Stack>
);

export default ProductCard;