// Send actions to restaurant
import {
  Button,
  VStack,
  Modal,
  FormControl,
  Radio,
  TextArea,
} from "native-base";
import { useState } from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {
    maxWidth: 400,
  },
});

export default function ActionsPage() {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [payMethod, setPayMethod] = useState()

  return (
    <VStack space={3}>
      <Button onPress={() => setShowOrderModal(true)}>Make an order</Button>
      <Modal isOpen={showOrderModal} onClose={() => setShowOrderModal(false)}>
        <Modal.Content style={styles.modal}>
          <Modal.CloseButton />
          <Modal.Header>Make an Order</Modal.Header>
          <Modal.Body>
            <FormControl>
              <TextArea placeholder="Enter your order details" />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={() => setShowOrderModal(false)}>Submit</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button onPress={() => setShowPaymentModal(true)}>Make payment</Button>
      <Modal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
      >
        <Modal.Content style={styles.modal}>
          <Modal.CloseButton />
          <Modal.Header>Choose your method of payment</Modal.Header>
          <Modal.Body>
            <Radio.Group value={payMethod} onChange={value => setPayMethod(value)}>
              <Radio value="credit">Credit Card</Radio>
              <Radio value="debit">Debit Card</Radio>
              <Radio value="cash">Cash</Radio>
            </Radio.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={() => setShowPaymentModal(false)}>Submit</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button onPress={() => setShowMessageModal(true)}>Send message</Button>
      <Modal
        isOpen={showMessageModal}
        onClose={() => setShowMessageModal(false)}
      >
        <Modal.Content style={styles.modal}>
          <Modal.CloseButton />
          <Modal.Header>Send a message to your waiter</Modal.Header>
          <Modal.Body>
            <FormControl>
              <TextArea placeholder="Enter your message" />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={() => setShowMessageModal(false)}>Submit</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </VStack>
  );
}
