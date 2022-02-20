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
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateLocalStorage } from '../utils/localstorage'

export default function SignUpPage() {
  const namePlaceHolder = "Your Name";
  const needsPlaceHolder = "Your Needs";

  const [name, setName] = useState("");
  const [needs, setNeeds] = useState({
    speech: false,
    hearing: false,
    motor: false,
  });
  const navigate = useNavigate()

  const handleSubmit = () => {
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, needs }),
    })
      .then((response) => response.json())
      .then((data) => {
        updateLocalStorage("user", data)
        navigate('/qrcode')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    console.log(needs);
  }, [needs]);

  return (
    <Box minHeight="100vh">
      <Center>
        <Stack direction="column" width={300}>
          <Stack pt={10}>
            <Center>
              <Text fontSize="5xl" fontWeight={800}>
                Welcome!
              </Text>
            </Center>
            <Text textAlign={"center"}>
              Fill in your information below to get started
            </Text>
          </Stack>
          <Stack pt={10}>
            <Input
              placeholder={namePlaceHolder}
              minHeight="34px"
              backgroundColor="white"
              onChange={(e) => setName(e.target.value)}
            />
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <Text align="left" color="gray">
                  {needsPlaceHolder}
                </Text>
              </MenuButton>
              <MenuList minWidth="304px">
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
            <Button onClick={handleSubmit}>Sign Up</Button>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
}
