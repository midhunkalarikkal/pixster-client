# Pixster

A production-ready social media platform built with the MERN stack, featuring real-time communication, social interactions, secure media management, and AI-assisted content creation.

## Overview

Pixster is a full-stack social media platform inspired by modern social networking applications. The project evolved from an initial chat application into a complete social experience supporting content creation, stories, user relationships, real-time messaging, notifications, and AI-powered caption generation.

The application is designed with a focus on maintainability, secure data handling, efficient database operations, real-time communication, and cloud deployment.

## Live Application

* **Frontend:** [Link to frontend](https://example.com/frontend)
* **Backend:** [Link to backend](https://example.com/backend)

---

## Screenshots

### Login

![Pixster Login](docs/screenshots/login.png)

### Home

![Pixster Home](docs/screenshots/home.png)

### Profile

![Pixster Profile](docs/screenshots/profile.png)

### Create Post

![Pixster Create Post](docs/screenshots/create-post.png)

### Settings

![Pixster Settings](docs/screenshots/settings.png)

---

## Technology Stack

| Category                 | Technology                         |
| ------------------------ | ---------------------------------- |
| Frontend                 | React, Vite, Tailwind CSS, DaisyUI |
| Backend                  | Node.js, Express.js                |
| Database                 | MongoDB Atlas, Mongoose            |
| State Management         | Zustand                            |
| Real-Time Communication  | Socket.IO                          |
| In-Memory Data & Caching | Upstash Redis                      |
| Media Storage            | Amazon S3                          |
| HTTP Client              | Axios                              |
| AI                       | Google Gemini                      |
| Animations               | GSAP                               |
| UI Components            | Aceternity UI, DaisyUI             |
| Notifications            | React Toastify                     |
| Testing                  | Vitest                             |
| Frontend Deployment      | Vercel                             |
| Backend Deployment       | AWS EC2                            |
| CI/CD                    | GitHub Actions                     |
| Reverse Proxy            | Nginx                              |

---

## Core Features

### Authentication & Account Management

* Email-based OTP verification using Nodemailer
* JWT-based authentication
* HTTP-only authentication cookies
* Sign up and login
* Password reset
* Secure password hashing using bcrypt
* Public and private account types

### Posts & Content

* Image posts with captions
* Text-only posts
* Post creation, editing, and deletion
* Likes
* Comments
* One-level nested comment replies
* Save posts
* Paginated feeds
* Responsive content presentation

### Stories

* Create and view stories
* Stories automatically expire after 24 hours

### Social Connections

* Follow and unfollow users
* Follow requests for private accounts
* Accept and reject follow requests
* Follower and following management
* Paginated follower and following lists
* Block and unblock users
* Follow suggestions

### User Search

* User search
* Search suggestions
* Debounced search requests to reduce unnecessary server requests

### Real-Time Communication

Pixster uses Socket.IO to provide real-time communication and presence features.

Supported real-time functionality includes:

* Private messaging
* Online user indicators
* Real-time connection status between users
* Real-time notifications
* Typing indicators

Redis is used as part of the application's real-time infrastructure.

### Real-Time Notifications

Users receive notifications for relevant social and communication events, including:

* Follow activity
* Messages
* Likes
* Comments

### AI-Assisted Caption Generation

Pixster integrates Google Gemini to assist users with post caption generation.

* Topic-based caption generation
* Maximum of 5 caption-generation requests per user per day
* Redis-based request limiting

### Media Management

Media is stored using Amazon S3 with a private storage model.

* Private S3 objects
* AWS signed URLs for controlled media access
* Server-side media handling
* Caching for media access

---

## Application Pages

### Home

Provides the primary social feed along with the story section and user interactions.

### Search

Allows users to search for other users with suggestions and debounced requests.

### Profile

Provides user information, posts, followers, and following information.

### Notifications

Displays real-time social and communication notifications.

### Chat

Provides private real-time messaging between users with online presence and connection status.

### Create

Allows users to create image-based posts with captions or text-only posts.

### Settings

Provides account information, theme preferences, and privacy controls.

---

## Architecture

Pixster follows an MVC-oriented backend architecture with a modular separation of application responsibilities.

At a high level, the application is structured as follows:

```text
                         ┌────────────────────┐
                         │      Client        │
                         │ React + Vite       │
                         └─────────┬──────────┘
                                   │
                         HTTP / Socket.IO
                                   │
                                   ▼
                         ┌────────────────────┐
                         │       Nginx        │
                         │   Reverse Proxy    │
                         └─────────┬──────────┘
                                   │
                                   ▼
                         ┌────────────────────┐
                         │  Express Server    │
                         │                    │
                         │ REST API           │
                         │ Socket.IO          │
                         │ Authentication     │
                         │ Business Logic     │
                         └──────┬─────┬───────┘
                                │     │
                 ┌──────────────┘     └────────────────┐
                 ▼                                     ▼
       ┌──────────────────┐                  ┌──────────────────┐
       │  MongoDB Atlas   │                  │  Upstash Redis   │
       │                  │                  │                  │
       │ Application Data │                  │ Caching          │
       │ Social Data      │                  │ Rate Limiting    │
       └──────────────────┘                  │ Real-Time Data   │
                                             └──────────────────┘

                 ┌──────────────────┐
                 │    Amazon S3     │
                 │                  │
                 │ Private Media    │
                 │ Signed URLs      │
                 └──────────────────┘
```

### Backend Architecture

The backend follows an MVC-oriented structure to separate:

* Request handling
* Business logic
* Data access
* Authentication
* Middleware
* Real-time communication

This separation makes the application easier to maintain and extend as new features are introduced.

---

## Database

MongoDB Atlas is used as the primary database, with Mongoose providing schema modeling and database interaction.

The application uses:

* Referenced document relationships where appropriate
* MongoDB aggregation pipelines for complex data retrieval
* Database indexes for frequently queried data
* Paginated data retrieval for feeds and social lists

Indexes are used to improve the performance of frequently accessed search and feed-related queries.

---

## Real-Time Infrastructure

Socket.IO is integrated with the Express server to provide real-time functionality.

Redis supports the real-time infrastructure as well as application-level caching and rate limiting.

The real-time system handles:

```text
User
 │
 ├── Socket.IO Connection
 │
 ├── Online Presence
 │
 ├── Connection Status
 │
 ├── Private Messages
 │
 ├── Typing Indicators
 │
 └── Notifications
          │
          ▼
        Redis
```

This architecture allows real-time application state to be coordinated efficiently while reducing unnecessary database operations.

---

## Media Storage & Privacy

Pixster uses Amazon S3 for media storage.

Media objects are kept private and are accessed through AWS signed URLs rather than exposing permanent public object URLs.

The media flow is conceptually:

```text
User
  │
  ▼
Application
  │
  ▼
Amazon S3
  │
  └── Private Object
          │
          ▼
      Signed URL
          │
          ▼
        Client
```

Caching is also used to improve media access efficiency.

---

## Security

Security is implemented across authentication, API access, request processing, and media storage.

Implemented security measures include:

* JWT authentication
* HTTP-only cookies
* bcrypt password hashing
* Email OTP verification
* OTP expiration
* Helmet
* CORS configuration
* API rate limiting
* Input validation and sanitization
* Request size limits
* Private S3 bucket policies
* Signed URLs for protected media

---

## Performance & Scalability

### Frontend

* Lazy loading
* Debounced search
* Shimmer loading states
* Skeleton loaders
* Responsive UI
* Zustand-based state management

### Backend

* MongoDB indexes
* Aggregation pipelines
* Paginated queries
* Redis-based caching
* Redis-based rate limiting
* Socket.IO for real-time communication

### Media

Private media is stored in Amazon S3 and accessed through signed URLs. Caching helps reduce repeated processing and improves media access efficiency.

---

## Project Structure

A simplified representation of the project structure:

```text
pixster/
├── frontend/
│   ├── src/
│   └── ...
│
├── backend/
│   ├── src/
│   └── ...
│
├── docs/
│   └── screenshots/
│       ├── login.png
│       ├── home.png
│       ├── profile.png
│       ├── create-post.png
│       └── settings.png
│
└── README.md
```

The exact structure may vary depending on the repository organization.

---


## License

Copyright © 2026  [midhunkalarikkal](https://github.com/midhunkalarikkal). All rights reserved.

This project and its source code are proprietary. The source code is provided for viewing and educational/reference purposes only.

You may not copy, modify, distribute, reproduce, sublicense, publish, or use this code or substantial portions of it without prior written permission from the copyright holder.

---

**Pixster** — A full-stack social media platform focused on real-time communication, secure media handling, scalable application architecture, and AI-assisted content creation.
