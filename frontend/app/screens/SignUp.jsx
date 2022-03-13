// Signup as either restaurant or user
import { StyleSheet } from "react-native";
import { Box, Button, FormControl, VStack, Input, Checkbox } from "native-base";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "white",
  },
});

export default function SignUp({ navigation }) {
  const pressHandler = () => {
    navigation.push("Scan Page");
  };

  const [user, setUser] = useState();
  const [restaurant, setRestaurant] = useState();

  return (
    <Box style={styles.container}>
      <FormControl isRequired>
        <VStack space={3}>
          <FormControl.Label>Full Name</FormControl.Label>
          <Input placeHolder="Name" />
          <FormControl.HelperText>Enter your full name.</FormControl.HelperText>
          <Checkbox.Group>
            <Checkbox value="Hearing">
              Hearing Impairment
            </Checkbox>
            <Checkbox value="Speech">
              Speech Impairment
            </Checkbox>
            <Checkbox value="Motor">
              Motor Impairment
            </Checkbox>
          </Checkbox.Group>
          <Button onPress={pressHandler}>Sign Up as Customer</Button>
        </VStack>
      </FormControl>
      <Button>Sign Up as Restaurant</Button>
    </Box>
  );
}
