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

export default function SignUpPage() {
  const namePlaceHolder = "Your Name";
  const needsPlaceHolder = "Your Needs";

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
            />
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <Text align="left" color='gray'>{needsPlaceHolder}</Text>
              </MenuButton>
              <MenuList minWidth="304px">
                <MenuItem>
                  <Checkbox>Speech Impairment</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Hearing Impairment</Checkbox>
                </MenuItem>
                <MenuItem>
                  <Checkbox>Motor Impairment</Checkbox>
                </MenuItem>
              </MenuList>
            </Menu>
            <Button>
              Sign Up
            </Button>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
}
