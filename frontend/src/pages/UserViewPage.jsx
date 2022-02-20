import {
  Avatar,
  Box,
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
} from "@chakra-ui/react";
import { FaPencilAlt, FaMoneyBillAlt } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";
import { getLocalStorage, updateLocalStorage } from "../utils/localstorage";
import { SocketContext } from "../contexts/socket";
import { useContext, useState } from "react";

export default function UserViewPage() {
  const user = getLocalStorage("user");
  const [orderValue, setOrderValue] = useState("");
  const [paymentValue, setPaymentValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const eventTypeEnum = {
    ORDER: "Order",
    PAY_BILL: "Pay Bill",
    MESSAGE: "Message",
  };
  const socket = useContext(SocketContext);

  const handleSendEvent = (event) => {
    let user = getLocalStorage("user");
    console.log(user.events);
    user.events.push(event);
    console.log(user.events);
    updateLocalStorage("user", user);
    /// emit socket event to join room
    socket.emit("user:send_event", user);
  };

  return (
    <Box minHeight="100vh">
      <Center pt={10}>
        <Heading>Scan Success!</Heading>
      </Center>
      <Center flexDirection="column" pt={10}>
        <Avatar
          name="Dan Abrahmov"
          src={`https://avatars.dicebear.com/api/jdenticon/${user.id}.svg`}
          size="2xl"
        />
        <Text pt={5} fontSize="2em">
          {user.name}
        </Text>
      </Center>
      <Center pt="100px">
        <Stack direction="column" spacing={5} width={300}>
          <EventButton
            header="Make an order"
            value={orderValue}
            placeholder="Please enter what you would like to order!"
            setValue={setOrderValue}
            buttonText="Make an order"
            icon={<FaPencilAlt />}
            handleSendEvent={handleSendEvent}
            operation={eventTypeEnum.ORDER}
          />

          <Button
            onClick={onOpen}
            leftIcon={<FaMoneyBillAlt />}
            colorScheme="teal"
            variant="solid"
          >
            Make payment
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Choose your payment method:</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <RadioGroup onChange={setPaymentValue} value={paymentValue}>
                  <Stack direction="column">
                    <Radio value="Cash">Cash</Radio>
                    <Radio value="Credit">Credit</Radio>
                    <Radio value="Debit">Debit</Radio>
                  </Stack>
                </RadioGroup>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() => {
                    handleSendEvent({
                      created_at: new Date(Date.now()),
                      type: eventTypeEnum.PAY_BILL,
                      details: paymentValue,
                    });
                    onClose()
                  }}
                >
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <EventButton
            header="Message"
            value={messageValue}
            placeholder="Please enter a message for your server!"
            setValue={setMessageValue}
            buttonText="Send message"
            icon={<BsChatTextFill />}
            handleSendEvent={handleSendEvent}
            operation={eventTypeEnum.MESSAGE}
          />
        </Stack>
      </Center>
    </Box>
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
      <Button
        onClick={onOpen}
        leftIcon={icon}
        colorScheme="teal"
        variant="solid"
      >
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
                onClose()
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
