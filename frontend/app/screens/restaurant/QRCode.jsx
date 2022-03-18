import QRCode from "react-qr-code";
import { StyleSheet } from "react-native";
import { Box, Text, VStack, Heading } from "native-base";

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
  return (
    <Box style={styles.container}>
      <VStack space={10} alignItems='center'>
        <Heading>Hello, (RestaurantName)</Heading>
        <Text fontSize='md'>Here's your QR Code: (update copy)</Text>
        <QRCode value='yolo' size={200} />
      </VStack>
    </Box>
  );
}
