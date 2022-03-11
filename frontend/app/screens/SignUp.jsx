// Signup as either restaurant or user
import { StyleSheet } from "react-native";
import { Box, Button } from "native-base";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "white",
  },
});

export default function SignUp({ navigation }) {
  const pressHandler = () => {
    navigation.push('Scan Page')
  }

  return (
    <Box style={styles.container}>
      <Button onPress={pressHandler}>Sign Up as Customer</Button>
      <Button>Sign Up as Restaurant</Button>
    </Box>
  );
}
