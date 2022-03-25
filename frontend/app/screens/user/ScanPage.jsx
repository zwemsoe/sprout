import { StyleSheet } from "react-native";
import { Box, Button, Text } from "native-base";
import { Camera } from "expo-camera";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: "100%",
    height: "100%",
    justifyContent: 'center'
  },
  camera: {
    height: "50%",
    margin: 10
  },
  buttonContainer: {
    display: 'flex',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    marginLeft: 10,
  },
  backButton: {
    flex: 0.1,
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 20
  }
});

// Show camera to scan qr code, ask permission, click to scan
export default function ScanPage({ navigation }) {
  const popHandler = () => {
    navigation.pop();
  };

  const handleQRScan = ({ type, data }) => {
    console.log(type)
    console.log(data)
  }

  const [hasPermission, setHasPermission] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return <Box />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Box style={styles.container}>
      <Box style={styles.buttonContainer}>
        <Button style={styles.backButton} onPress={popHandler}>Back</Button>
      </Box>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} onBarCodeScanned={handleQRScan} />
      <Text style={styles.text}>Please scan the restaurant's QR code</Text>
    </Box>
  );
}
