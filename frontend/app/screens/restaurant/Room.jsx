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
} from "native-base";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    paddingTop: 100,
    backgroundColor: "white",
  },
});

const UserCard = () => {
  return (
    <Box
      minW='90%'
      p='5'
      rounded='xl'
      borderColor='coolGray.200'
      bgColor='blue.400'
      minH='120'
    >
      <HStack space={10}>
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
        <VStack>
          <Badge
            colorScheme='danger'
            rounded='full'
            mb={-4}
            mr={-4}
            zIndex={1}
            variant='solid'
            alignSelf='flex-end'
            _text={{
              fontSize: 12,
            }}
          >
            2
          </Badge>
          <Button
            mx={{
              base: "auto",
              md: 0,
            }}
            p='2'
            bg='gray.500'
            _text={{
              fontSize: 14,
            }}
          >
            Notifications
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default function RoomPage() {
  return (
    <Box style={styles.container}>
      <VStack space={10} alignItems='center'>
        <UserCard />
      </VStack>
    </Box>
  );
}
