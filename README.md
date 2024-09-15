# Major Project

## Project Description

Red Alert is a notification system that keeps users informed about critical news affecting their stock portfolio. In today's fast-paced market, staying updated on relevant information can be overwhelming with a flood of news from various sources. Red Alert streamlines this process by delivering timely notifications for important articles directly to users, eliminating the need to constantly monitor multiple platforms.

## Key Features

**Personalized Notifications:** Users receive notifications tailored to their specific stock portfolio, ensuring they stay informed about relevant news.<br>
**AI/ML Integration:** Leveraging advanced Artificial Intelligence and Machine Learning algorithms, Red Alert identifies and prioritizes news articles based on their potential impact on the user's investments.<br>
**Efficient Information Delivery:** Red Alert minimizes information overload by delivering only the most critical news articles, allowing users to focus on key updates without sifting through countless irrelevant sources.<br>
**MERN Stack:** The application is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, providing a robust and scalable foundation for development.

## How It Works

**User Profile Setup:** Users create a profile and input their stock portfolio details.<br>
**AI Analysis:** Red Alert's AI algorithms continuously monitor news sources and analyze articles to identify those relevant to the user's portfolio.<br>
**Notification Delivery:** Red Alert sends a notification to the user's preferred device when significant news is detected, ensuring timely access to important information.

## Benefits

**Stay Ahead in the Game**: Users will be a step ahead in gaining relevant information about their stock portfolio among other retail investors.<br>
**Time-Saving**: Users would not have to read irrelevant articles about the things that they do not need to worry about.<br>
**Decision Making**: Showing only the news with priority level will not manipulate the user about a certain stock, it will give the user the ability to read the articile and make decision of buying and selling themselves. 

## Why Red Alert?

**Save Time:** No need to constantly monitor multiple news sources for updates.<br>
**Stay Informed:** Receive timely notifications about critical news affecting your investments.<br>
**Personalized Experience:** Tailored notifications ensure relevance to your specific stock portfolio.<br>
**Efficiency:** Focus on essential updates without getting overwhelmed by irrelevant information.

## Tech Stack Used

- **React** - To build a dynamic frontend to capability to render dynamically<br>
- **Express** - To build the REST APIs with protected routes using JWT and verification mail to avoid fake accounts.<br>
- **Node** - For overall javascript run time environment, used on both frontend and backend<br>
- **MongoDB** - Nosql database to store user information<br>
- **AI/Ml** - Different opensource LLMs like llama and mixtral are being planned to used.  

## How to use the Project

- Clone the project
- Install all the dependencies in the frontend and backend folder using npm install command from your console.
- Create your .env files in both frontend and backend
- Inside your frontend .env write VITE_SERVER_URL=(something if you want to host) and VITE_LOCALHOST = http://localhost:8000
- Inside your backend .env write PORT=8000, EMAIL_ID= Your email (for verification mail during sign up), APP_PASSWORD = (password of your google email service for nodemailer), CORS_ORIGIN = http://localhost:5173, MONGODB_URI = )(MongoDB atlas URL), JWT_SECRET = 1234 (JWT Token for your)
- Run the frontend and backend using npm run dev command from the console.
