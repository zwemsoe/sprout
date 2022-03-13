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

export default function SignUp({ navigation }) {
  const pressHandler = () => {
    navigation.push("Scan Page");
  };

  const [user, setUser] = useState();
  const [restaurant, setRestaurant] = useState();
  const [needs, setNeeds] = useState({
    speech: false,
    hearing: false,
    motor: false,
  });

  return (
    <Box style={styles.container}>
      <FormControl isRequired>
        <VStack space={3}>
          <FormControl.Label>Full Name</FormControl.Label>
          <Input placeHolder="Name" />
          <FormControl.HelperText>Enter your full name.</FormControl.HelperText>
          {needsInput.map(({ label, key }) => (
            <Checkbox
              key={key}
              onPress={() =>
                setNeeds((prevNeeds) => ({
                  ...prevNeeds,
                  [key]: !prevNeeds[key],
                }))
              }
            >
              {label}
            </Checkbox>
          ))}
        </VStack>
      </FormControl>
      <Button onPress={pressHandler}>Sign Up as Customer?</Button>
      <Button>Sign Up as Restaurant</Button>
    </Box>
  );
}
