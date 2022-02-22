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
  TableCaption,
  Flex,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../contexts/socket";
import { useParams } from "react-router-dom";
import { getLocalStorage, updateLocalStorage } from "../utils/localstorage";
import {
  formatDetails,
  formatEvent,
  formatEventTime,
} from "../utils/formatter";

export default function RestaurantViewPage() {
  const { id } = useParams();
  const socket = useContext(SocketContext);
  const [user, setUser] = useState();
  const [notiCount, setNotiCount] = useState(0);

  useEffect(() => {
    socket.emit("restaurant:join_room", { id });
  }, []);

  useEffect(() => {
    socket.on("web:save_user_data", ({ user }) => {
      updateLocalStorage(user.id, user);
      setUser(user);
    });

    socket.on("web:notify_server", (user) => {
      let preExistingUser = getLocalStorage(user.id);
      if (preExistingUser.events.length < user.events.length) {
        setNotiCount(user.events.length - preExistingUser.events.length);
        setTimeout(() => {
          setNotiCount(0);
        }, 60000);
      }
      preExistingUser.events = [...user.events];
      updateLocalStorage(user.id, preExistingUser);
      const new_user = getLocalStorage(user.id);
      setUser(new_user);
    });
  }, []);

  return (
    <Flex minHeight="100vh" align="center" justify="center">
      <Stack direction="column" width={300}>
        <Center textAlign="center">
          <Heading>Customer Notifications</Heading>
        </Center>
        <Center pt={10}>
          <Accordion
            defaultIndex={[0]}
            minWidth="80vw"
            maxWidth="80vw"
            allowToggle
            bg="white"
          >
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <Stack direction="row" spacing={7}>
                    <Avatar
                      name={user?.name}
                      src={`https://avatars.dicebear.com/api/jdenticon/${user?.id}.svg`}
                      size="lg"
                    >
                      {notiCount !== 0 && (
                        <AvatarBadge
                          borderColor="papayawhip"
                          bg="tomato"
                          boxSize="1.25em"
                          p={2}
                        >
                          <Text fontSize="1rem">{notiCount}</Text>
                        </AvatarBadge>
                      )}
                    </Avatar>
                    <Center>
                      <Box flexDirection="column" textAlign="left">
                        <Heading as="h6" size="md">
                          {user?.name}
                        </Heading>
                        <Text size="md">{`${Object.keys(user ? user.needs : [])
                          .filter((n) => user.needs[n])
                          .map(
                            (n) => `${n.charAt(0).toUpperCase() + n.slice(1)}`
                          )
                          .join(", ")} Impairments`}</Text>
                      </Box>
                    </Center>
                  </Stack>
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <Box overflowY="auto" maxHeight="60vh">
                  <Table variant="simple">
                    <TableCaption>Event history</TableCaption>
                    <Thead position="sticky" top={0} bg="white">
                      <Tr>
                        <Th>Timestamp</Th>
                        <Th>Event</Th>
                        <Th>Details</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {user?.events.map(
                        ({ type, created_at, details }, index) => (
                          <Tr
                            bg={
                              index >= user.events.length - notiCount
                                ? "orange.200"
                                : "white"
                            }
                          >
                            <Td>{formatEventTime(created_at)}</Td>
                            <Td>{formatEvent(type)}</Td>
                            <Td>{formatDetails(type, details)}</Td>
                          </Tr>
                        )
                      )}
                    </Tbody>
                  </Table>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Center>
      </Stack>
    </Flex>
  );
}
