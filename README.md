# LMS Backend

## 🌐 Frontend

The frontend is live at: [https://edtech-ruby.vercel.app/](https://edtech-ruby.vercel.app/)

---

## 📁 Project Structure

```
lms/
├── README.md           # This file
└── server/            # Backend API server
    ├── package.json
    ├── server.js
    └── ...
```

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (v4.4 or higher)
- [npm](https://www.npmjs.com/)

### Setup

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd lms
   ```

2. **Backend Setup**

   ```bash
   cd server
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm run dev
   ```

   Server runs at `http://localhost:5000`

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **File Storage**: Cloudinary
- **Payment Gateway**: Razorpay
- **Email Service**: Nodemailer

## 🔌 API Endpoints

- **User Management**: `/api/v1/user/*`
- **Course Management**: `/api/v1/courses/*`
- **Payment Processing**: `/api/v1/payments/*`
- **Miscellaneous**: `/api/v1/*`

## 🔧 Scripts

From the `/server` directory:

- `npm start` — Start production server
- `npm run dev` — Start development server with nodemon

## 🚨 Environment Variables

Copy `server/.env.example` to `server/.env` and fill in your values.
