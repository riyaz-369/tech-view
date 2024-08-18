# Explore Modern Electronics Gadget

This project is a full-stack single-page application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to explore and search for electronics products, offering functionalities such as pagination, search, categorization, sorting, and authentication.

Live site: https://tech-views.web.app

## Features

- **Pagination**: Efficient loading of products with navigation controls.
- **Search**: Search products by name.
- **Categorization**: Filter products by brand, category, and price range, with options for combined filtering.
- **Sorting**: Sort products by price (low to high, high to low) and date added.
- **Authentication**: Google and email/password authentication using Firebase.
- **Responsive Design**: Fully responsive with a mobile-first approach.

## Getting Started

### Prerequisites

- **Node.js** and **npm** installed.
- **MongoDB** for the database (local or cloud-based).
- **Firebase** account for authentication.

### Installation

1. **Clone the repositories:**

   ```
   git clone
   npm install

   ```

2. **Set up environment variables:**

Create a .env file in the backend directory with the following variables:

```
MONGODB_URI=<your-mongodb-connection-string>
FIREBASE_API_KEY=<your-firebase-api-key>
FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
FIREBASE_PROJECT_ID=<your-firebase-project-id>
FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
FIREBASE_APP_ID=<your-firebase-app-id>
```
