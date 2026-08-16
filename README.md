# PIXSTER-CLIENT

### React Frontend Application for Pixster

<p align="left">
  <img src="https://img.shields.io/badge/Status-Production-success?style=for-the-badge" alt="Production" />
</p>

Pixster is a production-ready full-stack social media platform built with the **MERN stack**, featuring real-time communication, social interactions, secure media management, and AI-assisted content creation.

---

## Technology Stack

### Frontend

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" alt="DaisyUI" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand" />
  <img src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.IO" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" alt="Vitest" />
</p>

### Backend & Data

<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Atlas" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Amazon_S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white" alt="Amazon S3" />
</p>

### Services & Infrastructure

<p align="left">
  <img src="https://img.shields.io/badge/AWS_EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white" alt="AWS EC2" />
  <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" alt="nginx" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions" />
  <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Google Gemini" />
</p>

---

## Live Application

<p align="left">
  <a href="https://pixster-client.vercel.app/login">
    <img src="https://img.shields.io/badge/Live_Application-Pixster-181717?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Application" />
  </a>
  <a href="https://github.com/midhunkalarikkal/pixster-server">
    <img src="https://img.shields.io/badge/Backend_Repository-Pixster_Server-181717?style=for-the-badge&logo=github&logoColor=white" alt="Backend Repository" />
  </a>
</p>

---

## Core Features

### Authentication & Account Management

- Email-based OTP verification
- JWT authentication with HTTP-only cookies
- Secure password hashing with bcrypt
- Password reset
- Public and private accounts

### Posts & Content

- Image and text-only posts
- Captions, likes, comments, and replies
- Post editing and deletion
- Save posts
- Paginated feeds

### Stories

- Create and view stories
- Automatic 24-hour expiration

### Social Connections

- Follow and unfollow users
- Follow requests for private accounts
- Follower and following management
- Block and unblock users
- Follow suggestions

### Real-Time Communication

Powered by **Socket.IO** and **Redis**:

- Private messaging
- Online presence
- Connection status
- Typing indicators
- Real-time notifications

### Notifications

Real-time notifications for:

- Follow activity
- Messages
- Likes
- Comments

### AI-Assisted Captions

Google Gemini integration provides:

- Topic-based caption generation
- Maximum 5 caption-generation requests per user per day
- Redis-based request limiting

### Secure Media Management

Amazon S3 is used for private media storage.

- Private S3 objects
- AWS signed URLs
- Server-side media handling
- Media access caching

---

## Architecture

Pixster follows an MVC-oriented backend architecture with a modular separation of application responsibilities.

```text
                         ┌─────────────────────┐
                         │    Pixster Client   │
                         │    React + Vite     │
                         └──────────┬──────────┘
                                    │
                          HTTP / Socket.IO
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │       nginx         │
                         │    Reverse Proxy    │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Express Server    │
                         │                     │
                         │ REST API            │
                         │ Socket.IO           │
                         │ Authentication      │
                         │ Business Logic      │
                         └──────┬──────┬────┬──┘
                                │      │    │
                   ┌────────────┘      └─┐  └──────────────┐
                   ▼                     ▼                 ▼
          ┌──────────────────┐  ┌──────────────────┐ ┌─────────────┐ 
          │  MongoDB Atlas   │  │      Redis       │ │  Amazon s3  │
          │                  │  │                  │ └─────────────┘
          │ Application Data │  │ Caching          │
          │ Social Data      │  │ Rate Limiting    │
          └──────────────────┘  │ Real-Time Data   │
                                └──────────────────┘
```

## Related Project

### [Pixster Server](https://github.com/midhunkalarikkal/pixster-server)

The **Pixster Server** is the backend service powering the Pixster social media platform.

Built with Node.js, Express.js, MongoDB, Redis, Socket.IO, and Amazon S3, it provides REST APIs, authentication, data management, real-time communication, caching, and secure media storage for the Pixster Client.

<p align="left">
  <a href="https://github.com/midhunkalarikkal/pixster-server">
    <img src="https://img.shields.io/badge/View_Pixster_Client-181717?style=for-the-badge&logo=github&logoColor=white" alt="View Pixster Client" />
  </a>
</p>

---

## Contribution

This repository is currently **not accepting contributions**.

The project is maintained as a personal portfolio and educational project.

---

## License

**Proprietary**

This project is proprietary and provided for portfolio and educational viewing purposes only.

All rights reserved.

                   