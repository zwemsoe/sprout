import {
  Flex,
  Avatar,
  Box,
  Center,
  Text,
  Heading,
  Stack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { FaPencilAlt, FaMoneyBillAlt } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";

export default function UserViewPage() {
  return (
    <Box minHeight='100vh'>
      <Center pt={10}>
        <Heading>Scan Success!</Heading>
      </Center>
      <Center flexDirection='column' pt={10}>
        <Avatar
          name='Dan Abrahmov'
          src='https://bit.ly/dan-abramov'
          size='2xl'
        />
        <Text pt={5} fontSize='2em'>
          Name here
        </Text>
      </Center>
      <Center pt='100px'>
        <Stack direction='column' spacing={5} width={300}>
          <Button leftIcon={<FaPencilAlt />} colorScheme='teal' variant='solid'>
            Make an order
          </Button>
          <Button
            leftIcon={<FaMoneyBillAlt />}
            colorScheme='teal'
            variant='solid'
          >
            Make payment
          </Button>
          <Button
            leftIcon={<BsChatTextFill />}
            colorScheme='teal'
            variant='solid'
          >
            Talk to server
          </Button>
        </Stack>
      </Center>
    </Box>
  );
}
