import {
  Avatar,
  AvatarBadge,
  Box,
  Center,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Stack,
  Table,
  Thead,
  Tbody,
  Text,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../contexts/socket";
import { useParams } from "react-router-dom";
import { updateLocalStorage } from "../utils/localstorage";

export default function ServerViewPage() {
  const { id } = useParams();
  const socket = useContext(SocketContext);
  const [user, setUser] = useState();

  useEffect(() => {
    socket.emit("server:join_room", { id });
  }, []);

  useEffect(() => {
    socket.on("web:save_user_data", ({ user }) => {
      updateLocalStorage(user.id, user);
      setUser(user);
    });
  }, []);

  return (
    <Box minHeight='100vh'>
      <Center pt={10}>
        <Heading>Customer Events</Heading>
      </Center>
      <Center pt={10}>
        <Accordion
          defaultIndex={[0]}
          minWidth='80vw'
          maxWidth='80vw'
          allowToggle
          bg='white'
        >
          <AccordionItem>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                <Stack direction='row' spacing={7}>
                  <Avatar
                    name='Dan Abrahmov'
                    src='https://bit.ly/dan-abramov'
                    size='lg'
                  >
                    <AvatarBadge
                      borderColor='papayawhip'
                      bg='tomato'
                      boxSize='1.25em'
                      p={2}
                    >
                      <Text fontSize='1rem'>1</Text>
                    </AvatarBadge>
                  </Avatar>
                  <Center>
                    <Box flexDirection='column' textAlign='left'>
                      <Heading as='h6' size='md'>
                        {user?.name}
                      </Heading>
                      <Text size='md'>Impairments</Text>
                    </Box>
                  </Center>
                </Stack>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th>Timestamp</Th>
                    <Th>Event</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                  </Tr>
                </Tbody>
              </Table>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
    </Box>
  );
}
