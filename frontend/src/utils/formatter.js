import { EventType } from "../constants";

export const formatEvent = (type) => {
  switch (type) {
    case EventType.PayBill:
      return "Pay Bill";
    case EventType.Order:
      return "Order";
    case EventType.Message:
      return "Message";
    default:
      return "";
  }
};

export const formatDetails = (type, details = "") => {
  switch (type) {
    case EventType.PayBill:
      return `Customer wants to pay bill with ${details}.`;
    case EventType.Order:
      return `Customer wants to order ${details}.`;
    case EventType.Message:
      return `Customer wants to send this message: ${details}.`;
    default:
      return "";
  }
};
