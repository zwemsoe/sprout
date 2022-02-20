const EventType = {
  PayBill: "PAY_BILL",
  Order: "ORDER",
  Message: "MESSAGE",
};

const client_url =
  process.env.NODE_ENV === "production"
    ? "https://accessibility-passport.netlify.app"
    : "http://localhost:3000";

module.exports = {
  EventType,
  client_url,
};
