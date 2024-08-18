## Inspiration
Students and early-career professionals often lack access to people who can guide them in their educational and career paths. MentorLink aims to solve this issue by allowing individuals to connect with people with experience who can help.

## What it does
Our vision is to aid anyone seeking to improve themselves and grow, whether by setting goals, or being matched with mentors that can help! MentorLink is a platform that connects students with experienced mentors. Users can schedule virtual meetings using our inbuilt appointment booking solution, receive personalized advice through mentors or AI, and participate in group mentoring sessions.

## How we built it
Our tech stack included React for the front-end work, and Firebase Firestore to store data relating with our platform for the back-end. We further used Cohere's API to integrate an AI goal-setter that can help you set goals and accomplish them.

## Challenges we ran into
We had some problems writing queries in React using Firebase. It took some time to understand how to use it but eventually, we figured it out thanks to out previous knowledge with mySQL.

## Accomplishments that we're proud of
We are proud of creating a full stack application in less than a day for the first time, with using React and firebase!

## What we learned
- How to use Firebase in a real application and how to integrate it with React.
- Got familiar with importing tools and libraries to aid our developmental process.

## What's next for MentorLink
We would love to make a signup & sign in page for mentors and users to sign up and interact with each other. 

### Links
**Netlify Deploy:** https://mentorlink.netlify.app/

**Here is the devpost link:** https://devpost.com/software/mentormatch-fnexma

## Install

npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
npm install firebase
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
npm i --save @fortawesome/react-fontawesome@latest

##
Make a config.js in your source folder then input the following code 
const config = {
    COHERE_API_KEY: 'YOUR-API-KEY',
};

export default config;

