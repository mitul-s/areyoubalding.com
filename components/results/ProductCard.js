import { Stack, Box, Heading, Text, Image, Button } from "@chakra-ui/react"

const ProductCard = ({ title }) => (

    <Stack m="0 auto" bg="royal" color="cream" p={8} borderRadius="8px" spacing={4}>
      <Box>
        <Heading>{title}</Heading>
        <Heading fontSize="3xs" color="whiteAlpha.800" fontWeight="500">
          RX Certified
        </Heading>
      </Box>
      <Text fontSize="lg">
        This FDA approved daily tablet increases volume and health of hair in 3
        to 6 months. It prevents testosterone from breaking down into DHT, a
        hormone that damages hair follicles.
      </Text>
      <Box boxSize="xs" mx="auto !important">
        <Image src="/media/imgs/gummies.webp" />
      </Box>
      <Button color="royal" bg="cream">
        Get your pack
      </Button>
    </Stack>
);

export default ProductCard;