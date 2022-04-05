// Signup as either restaurant or customer
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
import {
  defaultCustomer,
  defaultRestaurant,
  needsInput,
} from "../helpers/signup";

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

const CustomerSignUpForm = ({ setCustomer, handleSignUp, handleBack }) => {
  return (
    <VStack space={3}>
      <FormControl isRequired>
        <FormControl.Label>Full Name</FormControl.Label>
        <Input
          placeHolder="Name"
          onChangeText={(text) =>
            setCustomer((prev) => ({ ...prev, name: text }))
          }
        />
        <FormControl.HelperText>Enter your full name.</FormControl.HelperText>
        <Text bold>Select your needs</Text>
        {needsInput.map(({ label, key }) => (
          <Checkbox
            key={key}
            onPress={() =>
              setCustomer((prev) => ({
                ...prev,
                needs: { ...prev.needs, [key]: !prev.needs[key] },
              }))
            }
          >
            {label}
          </Checkbox>
        ))}
      </FormControl>
      <Button onPress={handleSignUp}>Sign Up</Button>
      <Button onPress={handleBack}>Back</Button>
    </VStack>
  );
};

const RestaurantSignUpForm = ({ handleSignUp, setRestaurant, handleBack }) => {
  return (
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
      <Button onPress={handleSignUp}>Sign Up</Button>
      <Button onPress={handleBack}>Back</Button>
    </VStack>
  );
};

export default function SignUp({ navigation }) {
  const [_, dispatch] = useStateContext();

  const handleCustomerSignUp = async () => {
    if (customer) {
      storeAuth("customer", { name: customer, id: nanoid() });
      const auth = await getAuth();
      dispatch({
        type: SET_AUTH,
        auth,
      });
      navigation.push("Customer", { screen: "ScanPage" });
    }
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

  const [customer, setCustomer] = useState(defaultCustomer);
  const [restaurant, setRestaurant] = useState(defaultRestaurant);
  const [flow, setFlow] = useState();

  return (
    <Box style={styles.container}>
      <VStack space={5}>
        {!flow ? (
          <>
            <Button onPress={() => setFlow("restaurant")}>
              Sign Up as Restaurant
            </Button>
            <Button onPress={() => setFlow("customer")}>
              Sign Up as Customer
            </Button>
          </>
        ) : flow === "customer" ? (
          <CustomerSignUpForm
            handleBack={() => setFlow()}
            setCustomer={setCustomer}
            handleSignUp={handleCustomerSignUp}
          />
        ) : (
          <RestaurantSignUpForm
            handleBack={() => setFlow()}
            setRestaurant={setRestaurant}
            handleSignUp={handleRestaurantSignUp}
          />
        )}
      </VStack>
    </Box>
  );
}
