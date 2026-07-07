# Inventory Management Dashboard

A full-stack inventory management application built with Next.js, Node.js, Prisma, Redux Toolkit, and AWS. The web app provides an intuitive interface for managing products, inventory, users, and expenses while leveraging a scalable cloud infrastructure for deployment and storage.

## Live Demo

View the fully deployed app in your browser here: 👉 **[Inventory Dashboard Demo](https://main.d2ej0cbxl4rvo1.amplifyapp.com/)** (_Note: loading may take a few seconds_)

## Features

* Interactive dashboard with business insights
* Product management
* Inventory tracking
* User management
* Expense management
* Application settings
* Responsive design with Navbar/Sidebar
* Advanced data tables with Material UI Data Grid
* Global state management with Redux Toolkit
* Efficient data fetching using Redux Toolkit Query
* Database management with Prisma ORM
* Cloud deployment on AWS

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Material UI/Material UI Data Grid
* Redux Toolkit/Redux Toolkit Query

### Backend

* Node.js
* Express.js
* Prisma ORM

### Database

* PostgreSQL

## Core Functionality

The dashboard includes the following modules:

* **Dashboard** — Overview of key inventory metrics and business insights.
* **Products** — Create and manage products.
* **Inventory** — Monitor stock levels and inventory data.
* **Users** — Manage application users.
* **Expenses** — Track and filter business expenses.
* **Settings** — Configure application preferences (username, notifications, dark mode).

## AWS Architecture

The application uses several AWS services to provide a scalable deployment:

* **Amazon EC2** for hosting the backend API.
* **Amazon RDS** for PostgreSQL database hosting.
* **AWS Amplify** for frontend deployment.
* **Amazon API Gateway** for API management.
* **Amazon S3** for static asset storage.

## Local Setup

### Prerequisites

* Node.js
* PostgreSQL local database (pgAdmin4)
* npm or yarn
* Git

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/vinukranaweera/inventory-management.git
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Install frontend dependencies

```bash
cd ../client
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the `client` directory.

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

Create a `.env` file in the `server` directory. Replace DB_USER and DB_PASSWORD with your username and password for the database.

```env
DATABASE_URL="postgresql://DB_USER:DB_PASSWORD@localhost:5432/inventory_db?schema=public"
PORT=8000
```

### 5. Generate the Prisma Client

```bash
cd ../client
npx prisma generate
```

### 6. Run database migrations

```bash
npx prisma migrate dev
```

### 7. Seed the database

```bash
npm run seed
```

### 8. Start the backend

```bash
npm run dev
```

### 9. Start the frontend

```bash
cd ../client
npm run dev
```

The application can then be viewed using the web browser on **http://localhost:3000**.