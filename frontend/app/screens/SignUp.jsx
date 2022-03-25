// Signup as either restaurant or user
import { StyleSheet } from "react-native";
import {
  Box,
  Button,
  FormControl,
  VStack,
  Input,
  Checkbox,
  Text,
} from "native-base";
import { useState } from "react";
import { customAlphabet } from "nanoid/non-secure";
import { getAuth, storeAuth } from "../utils";
import { useStateContext } from "../store/provider";
import { SET_AUTH } from "../store/actions";

const nanoid = customAlphabet(
  "abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM0123456789",
  10
);

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
  const [_, dispatch] = useStateContext();

  const handleCustomerSignUp = () => {
    navigation.push("ScanPage");
  };
  const handleRestaurantSignUp = async () => {
    if (restaurant) {
      storeAuth("restaurant", { name: restaurant, id: nanoid() });
      const auth = await getAuth();
      dispatch({
        type: SET_AUTH,
        auth,
      });
      navigation.push("Restaurant", { screen: "QRCodePage" });
    }
  };

  const [user, setUser] = useState();
  const [restaurant, setRestaurant] = useState("");
  const [needs, setNeeds] = useState({
    speech: false,
    hearing: false,
    motor: false,
  });

  return (
    <Box style={styles.container}>
      <VStack space={5}>
        <VStack space={3}>
          <FormControl isRequired>
            <FormControl.Label>Full Name</FormControl.Label>
            <Input placeHolder="Name" onChangeText={(text) => setUser(text)} />
            <FormControl.HelperText>
              Enter your full name.
            </FormControl.HelperText>
            <Text bold>Select your needs</Text>
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
          </FormControl>
          <Button onPress={handleCustomerSignUp}>Sign Up as Customer</Button>
        </VStack>
        <VStack space={3}>
          <FormControl isRequired>
            <FormControl.Label>Restaurant Name</FormControl.Label>
            <Input
              placeHolder="Name"
              onChangeText={(text) => setRestaurant(text)}
            />
            <FormControl.HelperText>
              Enter the restaurant name.
            </FormControl.HelperText>
          </FormControl>
          <Button onPress={handleRestaurantSignUp}>
            Sign Up as Restaurant
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
}
