import { StyleSheet } from "react-native";
import {
  Box,
  Text,
  VStack,
  Heading,
  HStack,
  Avatar,
  Badge,
  Button,
  ScrollView,
  Center,
  ArrowBackIcon,
} from "native-base";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    paddingTop: 40,
  },
});

const Event = ({ type, message, timestamp }) => {
  return (
    <Box p={12} rounded="lg" bgColor="blueGray.500" w="100%">
      Event: {`${type}`}
    </Box>
  );
};

export default function IndividualUserPage() {
  return (
    <Box style={styles.container}>
      <Box ml={3}>
        <ArrowBackIcon size="10" />
      </Box>
      <Box p="5" borderColor="coolGray.200" bgColor="blue.400" minH="120">
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Avatar
            source={{
              uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
            }}
            size="lg"
          />
          <VStack>
            <Heading>Name</Heading>
            <Text>Impairments</Text>
          </VStack>
        </Box>
      </Box>
      <Center style={{ marginTop: 10 }}>
        <Heading>User Events:</Heading>
        <ScrollView
          h={600}
          pt={5}
          _contentContainerStyle={{
            px: "20px",
            mb: "4",
            minW: "100%",
          }}
        >
          <VStack flex="1">
            {[...Array(20).keys()].map((key, index) => (
              <Center py="4">
                <Event type="PAY_BILL" />
              </Center>
            ))}
          </VStack>
        </ScrollView>
      </Center>
    </Box>
  );
}
