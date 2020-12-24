import { Box, Button } from "@chakra-ui/react"

const CheckButtonComponent = ({ checked, onChange, label }) => {
    return (
        <Box bg="cyan.900" onClick={() => onChange()}>
            <Button colorScheme="cyan">
                {label}
            </Button>
        </Box>
    )   
}

export default CheckButtonComponent;