## Inspiration

With the COVID-19 pandemic, getting your vaccine passport scanned is the new norm when dining in at a restaurant. This is what inspired the Accessibility Passport, which uses a QR code to open a communication port between customers with various accessibility needs and the restaurant staff without having to pre-download a mobile application. With a quick scan of a QR code, the waiters are notified in real-time whenever a customer wants to make an order, pay their bill or call over for help at a restaurant.

## What it does

Our application, Accessibility Passport, tries to bridge the communication gap between people affected by Speech, Hearing or Motor impairments that want to enjoy a delicious meal at their favourite restaurant and the waiters there by providing a common platform that gets rid of uncertainty about the order or any sort of service provided. We are trying to ensure that the user has a very smooth experience and leaves the restaurant more than satisfied. The user can sign up on our web application that generates a unique QR code which is then scanned by their waiter at the restaurant. After the waiter scans it, the user is able to make an order, send a message to the waiter about something and when they are done with their meal, they can let the waiter know their choice of payment method as well.

## How we built it

We decided to approach the problem with a web application since the time was limited. We used React.js with Chakra UI for the frontend with an Express backend server. For real-time communication, we used the Socket.io library to efficiently relay information back and forth between server and browser. Finally, the frontend part of the application is hosted on Netlify and our backend on Heroku.

## Challenges we ran into

As the nature of the project was to provide a method of communication between two entirely separate users, sharing user inputted data between the two browsers was a big challenge for us. To keep our project fairly simple, we also wanted to avoid the need to create a shared database. After brainstorming, we devised a solution around this issue by passing in this data as a prop to web socket events we were already using to automatically redirect each flow (the customer and the waiter) to corresponding pages of our application. For example, the customer’s browser emits a socket event to notify the waiter once they successfully input their information. The waiter’s browser listens to this event and parses the data to store in their local storage once the event is fired so the user’s information can be accessed in subsequent steps of the flow.

## Accomplishments that we're proud of

The foremost thing we are proud of is that we were able to complete building a proof of concept of what we had envisioned on the first day of this hackathon. We are also glad that we were able to figure out how to make the server-side system stateless. We were successfully able to incorporate the usage of generating and scanning QR Codes like the currently prevalent vaccine passport to navigate through our application. We managed to implement real-time communication between the user and the waiter by using Socket.io library which enabled us to send instant notifications from the user to the server if they required anything.

## What we learned

Through this project, we learned about various techniques to keep development fairly lightweight and scalable. One of the ways we achieved this was through web sockets that can fire notifications and share data between two web servers without the need for complex API calls and an external database. We also tried using the Chakra UI library for the first time, which we learned was a lot more flexible in terms of its styling compared to Material UI components that we were more familiar with.

## What's next for Accessibility Passport

Our immediate next steps would be to implement exciting features such as multiple users support and integrating restaurant menus. Restaurants will be able to sign up, upload their menu and generate QR codes. The customers scan it and join the restaurant room where they can interact with waiters in real-time. We also have plans to convert the entire project into a mobile-first app which we think will be more convenient for the users. Furthermore, we envision our product to be useful for different types of businesses other than restaurants.

## Screenshots

![Screen Shot 2022-02-20 at 8 19 25 AM](https://user-images.githubusercontent.com/23249184/154854322-d2a7c484-84ba-4888-8d53-23a24f5cae7b.png)
![Screen Shot 2022-02-20 at 8 19 13 AM](https://user-images.githubusercontent.com/23249184/154854323-f2508d7c-5ff4-4bb5-8b3c-f0640bcc218f.png)
<img width="443" alt="Screen Shot 2022-02-20 at 8 17 28 AM" src="https://user-images.githubusercontent.com/23249184/154854325-4e337c69-ba08-4fbd-b2f1-f314886e6baa.png">
<img width="441" alt="Screen Shot 2022-02-20 at 8 17 11 AM" src="https://user-images.githubusercontent.com/23249184/154854326-11a1af16-c5cf-4743-b253-d50c21091a4f.png">
<img width="445" alt="Screen Shot 2022-02-20 at 8 16 58 AM" src="https://user-images.githubusercontent.com/23249184/154854327-67b5ebc3-2b51-4b8b-9570-b2d1e32c8c95.png">
<img width="351" alt="Screen Shot 2022-02-20 at 8 14 51 AM" src="https://user-images.githubusercontent.com/23249184/154854328-24cd3f74-1906-4fb1-b3bf-9168439fad27.png">
<img width="352" alt="Screen Shot 2022-02-20 at 8 14 24 AM" src="https://user-images.githubusercontent.com/23249184/154854329-b4cd1fc5-f2d1-4687-a925-469acee219b1.png">
<img width="353" alt="Screen Shot 2022-02-20 at 8 13 30 AM" src="https://user-images.githubusercontent.com/23249184/154854330-8f269737-06d0-48d9-8f57-844c78c26578.png">
<img width="353" alt="Screen Shot 2022-02-20 at 8 13 17 AM" src="https://user-images.githubusercontent.com/23249184/154854331-18c6ee0c-817b-4afb-af01-a77b409d4b83.png">
<img width="351" alt="Screen Shot 2022-02-20 at 8 12 57 AM" src="https://user-images.githubusercontent.com/23249184/154854332-6673c263-5dbf-4f69-9e81-68f92ef510e2.png">

## Video
You can find the demo video here: https://youtu.be/SiscyXqZqdw
