export const EventType = {
  PayBill: "PAY_BILL",
  Order: "ORDER",
  Message: "MESSAGE",
};

export const client_url =
  process.env.NODE_ENV === "production"
    ? "https://accessibility-passport.netlify.app"
    : "http://localhost:19002";
