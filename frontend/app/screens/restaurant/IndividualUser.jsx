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
  useTheme,
} from "native-base";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    paddingTop: 80,
  },
});

export default function IndividualUserPage() {
  const { colors } = useTheme();
  return (
    <Box style={styles.container}>
      <Box
        minW='90%'
        p='5'
        borderColor='coolGray.200'
        bgColor='blue.400'
        minH='120'
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Avatar
            source={{
              uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
            }}
            size='lg'
          />
          <VStack>
            <Heading>Name</Heading>
            <Text>Impairments</Text>
          </VStack>
        </Box>
      </Box>
      <Center style={{ marginTop: 10 }}>
        <ScrollView
          minW='95%'
          h='80'
          _contentContainerStyle={{
            px: "20px",
            mb: "4",
            minW: "72",
          }}
        >
          <VStack flex='1'>
            {Object.keys(colors.cyan).map((key, index) => {
              if (index >= 1 && index <= 5)
                return (
                  <Center py='4' bg={`cyan.${key}`}>
                    {key}
                  </Center>
                );
            })}
            {Object.keys(colors.cyan).map((key, index) => {
              if (index >= 1 && index <= 5)
                return (
                  <Center py='4' bg={`cyan.${key}`}>
                    {key}
                  </Center>
                );
            })}
            {Object.keys(colors.cyan).map((key, index) => {
              if (index >= 1 && index <= 5)
                return (
                  <Center py='4' bg={`cyan.${key}`}>
                    {key}
                  </Center>
                );
            })}
          </VStack>
          <VStack flex='1'>
            {Object.keys(colors.cyan).map((key, index) => {
              if (index >= 1 && index <= 5)
                return (
                  <Center py='4' bg={`cyan.${key}`}>
                    {key}
                  </Center>
                );
            })}
            {Object.keys(colors.cyan).map((key, index) => {
              if (index >= 1 && index <= 5)
                return (
                  <Center py='4' bg={`cyan.${key}`}>
                    {key}
                  </Center>
                );
            })}
            {Object.keys(colors.cyan).map((key, index) => {
              if (index >= 1 && index <= 5)
                return (
                  <Center py='4' bg={`cyan.${key}`}>
                    {key}
                  </Center>
                );
            })}
          </VStack>
        </ScrollView>
      </Center>
    </Box>
  );
}
