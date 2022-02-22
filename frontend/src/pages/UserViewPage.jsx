import {
  Avatar,
  Center,
  Text,
  Heading,
  Stack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
  RadioGroup,
  Radio,
  Flex,
} from "@chakra-ui/react";
import { FaPencilAlt, FaMoneyBillAlt } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";
import { getLocalStorage, updateLocalStorage } from "../utils/localstorage";
import { SocketContext } from "../contexts/socket";
import { useContext, useEffect, useState } from "react";
import { EventType } from "../constants";

export default function UserViewPage() {
  const socket = useContext(SocketContext);
  const user = getLocalStorage("user");
  const [orderValue, setOrderValue] = useState("");
  const [paymentValue, setPaymentValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  useEffect(() => {
    socket.on("web:get_user_data", () => {
      socket.emit("user:receive_user_data", { user });
    });
  }, []);

  const handleSendEvent = (event) => {
    let user = getLocalStorage("user");
    user.events.push(event);
    updateLocalStorage("user", user);
    socket.emit("user:send_event", user);
  };

  return (
    <Flex minHeight="100vh" align="center" justify="center">
      <Stack direction="column" width={300}>
        <Center>
          <Heading>Scan Success!</Heading>
        </Center>
        <Center flexDirection="column" pt={10}>
          <Avatar
            name={`${user.name}`}
            src={`https://avatars.dicebear.com/api/jdenticon/${user.id}.svg`}
            size="2xl"
          />
          <Text pt={5} fontSize="2em">
            {user.name}
          </Text>
        </Center>
        <Center pt={10}>
          <Stack direction="column" spacing={5} width={300}>
            <EventButton
              header="Make an order:"
              buttonText="Make an order"
              icon={<FaPencilAlt />}
              handleSendEvent={handleSendEvent}
              operation={EventType.Order}
              inputGroup={
                <Textarea
                  value={orderValue}
                  onChange={(e) => setOrderValue(e.target.value)}
                  placeholder="Please enter what you would like to order!"
                />
              }
            />
            <EventButton
              header="Choose your payment method:"
              buttonText="Make payment"
              icon={<FaMoneyBillAlt />}
              handleSendEvent={handleSendEvent}
              operation={EventType.PayBill}
              inputGroup={
                <RadioGroup onChange={setPaymentValue} value={paymentValue}>
                  <Stack direction="column">
                    <Radio value="Cash">Cash</Radio>
                    <Radio value="Credit">Credit</Radio>
                    <Radio value="Debit">Debit</Radio>
                  </Stack>
                </RadioGroup>
              }
            />
            <EventButton
              header="Message"
              buttonText="Send message:"
              icon={<BsChatTextFill />}
              handleSendEvent={handleSendEvent}
              operation={EventType.Message}
              inputGroup={
                <Textarea
                  value={messageValue}
                  onChange={(e) => setMessageValue(e.target.value)}
                  placeholder="Please enter a message for your server!"
                />
              }
            />
          </Stack>
        </Center>
      </Stack>
    </Flex>
  );
}

const EventButton = ({
  header,
  value,
  placeholder,
  setValue,
  buttonText,
  icon,
  handleSendEvent,
  operation,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} leftIcon={icon} bgColor="yellow" variant="solid">
        {buttonText}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleSendEvent({
                  created_at: new Date(Date.now()),
                  type: operation,
                  details: value,
                });
                onClose();
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
