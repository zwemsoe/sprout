import {
  Avatar,
  Box,
  Center,
  Heading,
  Text,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import QRCode from "qrcode.react";
import { useContext, useEffect } from "react";
import { SocketContext } from "../contexts/socket";
import { getLocalStorage } from "../utils/localstorage";
import { useNavigate } from "react-router-dom";
import { client_url } from "../constants";

export default function QRCodePage() {
  const user = getLocalStorage("user");
  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  useEffect(() => {
    socket.on("web:get_user_data", () => {
      socket.emit("user:receive_user_data", { user });
    });

    socket.on("web:scan_success", () => {
      navigate(`/user/${user.id}`);
    });
  }, []);

  useEffect(() => {
    socket.emit("user:join_room", { user });
  }, []);

  return (
    <div id="doqr">
      <Flex minHeight="100vh" align="center" justify="center">
        <Stack direction="column" width={300}>
          <Center>
            <Wrap>
              <WrapItem>
                <Avatar
                  name={user?.name}
                  src={`https://avatars.dicebear.com/api/jdenticon/${user?.id}.svg`}
                  size="2xl"
                />{" "}
              </WrapItem>
            </Wrap>
          </Center>
          <Center pt={5}>
            <Heading fontSize="3xl" fontWeight={800}>
              {" "}
              Hello {`${user?.name}`},
            </Heading>
          </Center>
          <Center pt={5} textAlign="center">
            <Text>
              Your QR code is ready to be used
              <br />
              at your favourite restaurants!
            </Text>
          </Center>
          <Center pt={50}>
            <Box maxW="sm" borderWidth="10px" borderRadius="md" overflow="show">
              <QRCode value={`${client_url}/${user?.id}`} />
            </Box>
          </Center>
        </Stack>
      </Flex>
    </div>
  );
}
