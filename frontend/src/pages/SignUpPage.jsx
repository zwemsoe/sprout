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
  const namePlaceHolder = "Your Name";
  const needsPlaceHolder = "Your Needs";

  const socket = useContext(SocketContext);

  const [name, setName] = useState("");
  const [needs, setNeeds] = useState({
    speech: false,
    hearing: false,
    motor: false,
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    fetch(`${server_url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, needs }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateLocalStorage("user", data);
        /// emit socket event to join room
        socket.emit("user:join_room", { user: data });
        navigate("/qrcode");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Flex minHeight='100vh' align='center' justify='center'>
      <Center>
        <Stack direction='column' width={300}>
          <Center>
            <Heading size='3xl'>Welcome!</Heading>
          </Center>
          <Text textAlign='center' fontWeight={500}>
            Fill in your information
            <br />
            to get started
          </Text>
          <Stack pt={10}>
            <Input
              placeholder={namePlaceHolder}
              minHeight='34px'
              backgroundColor='white'
              onChange={(e) => setName(e.target.value)}
            />
            <Menu closeOnSelect={false}>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <Text align='left' color='gray' fontWeight={400}>
                  {`${
                    Object.keys(needs)
                      .filter((n) => needs[n])
                      .map((n) => `${n.charAt(0).toUpperCase() + n.slice(1)}`)
                      .join(", ") || needsPlaceHolder
                  }`}
                </Text>
              </MenuButton>
              <MenuList minWidth='304px'>
                <MenuItem>
                  <Checkbox
                    onChange={(e) =>
                      setNeeds({ ...needs, speech: e.target.checked })
                    }
                  >
                    Speech Impairment
                  </Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox
                    onChange={(e) =>
                      setNeeds({ ...needs, hearing: e.target.checked })
                    }
                  >
                    Hearing Impairment
                  </Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox
                    onChange={(e) =>
                      setNeeds({ ...needs, motor: e.target.checked })
                    }
                  >
                    Motor Impairment
                  </Checkbox>
                </MenuItem>
              </MenuList>
            </Menu>
            <Button onClick={handleSubmit} backgroundColor='yellow'>
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Flex>
  );
}
