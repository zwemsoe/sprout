import QRCode from "react-qr-code";
import { StyleSheet } from "react-native";
import { Box, Text, VStack, Heading } from "native-base";
import { useStateContext } from "../../store/provider";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default function QRCodePage() {
  const [{ auth }, _] = useStateContext();

  return (
    <Box style={styles.container}>
      <VStack space={10} alignItems="center">
        <Heading>Hello, {auth?.value.name}</Heading>
        <Text fontSize="md">Here's your QR Code: </Text>
        <QRCode value={auth?.value.id} size={200} />
      </VStack>
    </Box>
  );
}
