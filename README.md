# Decathlon Chatbot Project

## Overview

This project is a full-stack chatbot for Decathlon products, with:

- Frontend: React + Vite + Tailwind
- Backend: Node + Express + TypeScript

## Structure

```bash
/decathlon
├── packages/
│   ├── decathlon-frontend/
│   └── decathlon-backend/
```

## Setup

### Install dependencies

```bash
npm install
```

## Frontend (packages/decathlon-frontend/.env)

Environment variables for the React + Vite app.

```bash
VITE_API_URL=http://localhost:5000/api/chat
VITE_DEFAULT_USER_ID=036848ac-a2d3-48e7-9b6e-453dba5dcccf
```

- VITE_API_URL → points the frontend to your backend API.
- VITE_DEFAULT_USER_ID → demo user ID used for testing.

## Start dev environment

```bash
npm start
```
