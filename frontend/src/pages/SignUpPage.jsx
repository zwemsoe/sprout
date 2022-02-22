import {
  Input,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
  Center,
  Stack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateLocalStorage } from "../utils/localstorage";
import { SocketContext } from "../contexts/socket";
import { server_url } from "../constants";

export default function SignUpPage() {
  const navigate = useNavigate();
  const socket = useContext(SocketContext);
  const [name, setName] = useState("");
  const [needs, setNeeds] = useState({
    speech: false,
    hearing: false,
    motor: false,
  });

  const needsInput = [
    {
      label: "Speech impairment",
      key: "speech",
    },
    {
      label: "Hearing impairment",
      key: "hearing",
    },
    {
      label: "Motor impairment",
      key: "motor",
    },
  ];

  const handleSubmit = async () => {
    const res = await fetch(`${server_url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, needs }),
    });
    const data = await res.json();
    updateLocalStorage("user", data);
    socket.emit("user:join_room", { user: data });
    navigate("/qrcode");
  };

  return (
    <Flex minHeight="100vh" align="center" justify="center">
      <Center>
        <Stack direction="column" width={300}>
          <Center>
            <Heading size="3xl">Welcome!</Heading>
          </Center>
          <Text textAlign="center" fontWeight={500}>
            Fill in your information
            <br />
            to get started
          </Text>
          <Stack pt={10}>
            <Input
              placeholder="Your name"
              minHeight="34px"
              backgroundColor="white"
              onChange={(e) => setName(e.target.value)}
            />
            <Menu closeOnSelect={false}>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <Text align="left" color="gray" fontWeight={400}>
                  {`${
                    Object.keys(needs)
                      .filter((n) => needs[n])
                      .map((n) => `${n.charAt(0).toUpperCase() + n.slice(1)}`)
                      .join(", ") || "Your needs"
                  }`}
                </Text>
              </MenuButton>
              <MenuList minWidth="304px">
                {needsInput.map(({ label, key }) => (
                  <MenuItem>
                    <Checkbox
                      onChange={(e) =>
                        setNeeds({ ...needs, [key]: e.target.checked })
                      }
                    >
                      {label}
                    </Checkbox>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Button onClick={handleSubmit} backgroundColor="yellow">
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Flex>
  );
}
