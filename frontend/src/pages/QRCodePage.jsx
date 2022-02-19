import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import QRCode from "qrcode.react";

export default function QRCodePage() {
  return (
    <div id="doqr">
      <Box minHeight="100vh">
        <Center pt={120}>
          <Wrap>
            <WrapItem>
              <Avatar
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
                size="2xl"
              />{" "}
            </WrapItem>
          </Wrap>
        </Center>

        <Center pt={5}>
          <Heading> Hello User,</Heading>
        </Center>

        <Center pt={50} textAlign="center">
          <Text>
            Your QR code is ready to be used at your favourite restaurants!
          </Text>
        </Center>

        <Center pt={50}>
          <Box maxW="sm" borderWidth="10px" borderRadius="md" overflow="show">
            <QRCode value="https://github.com/zwemsoe/sprout/" />
          </Box>
        </Center>
      </Box>
    </div>
  );
}
