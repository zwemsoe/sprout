export const EventType = {
  PayBill: "PAY_BILL",
  Order: "ORDER",
  Message: "MESSAGE",
};

export const server_url =
  process.env.NODE_ENV === "production"
    ? "https://accessibility-passport.herokuapp.com"
    : "http://localhost:5000";
