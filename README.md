# UniBridge – AI Study Abroad Counseling Platform

UniBridge is a full-stack AI-powered counseling platform designed to streamline student admissions workflows. It combines multilingual voice interactions, sentiment analysis, intelligent follow-ups, and automation to transform traditional counseling into structured, actionable outcomes.

---

## 🚀 Why UniBridge

Admissions teams often struggle with:

* Repetitive discovery calls
* Incomplete student profiles
* Manual follow-ups

UniBridge solves this by converting every interaction into structured insights:

* ✅ Better student profiling through natural conversations
* ⚡ Faster lead qualification (Hot / Warm / Cold + Hard / Soft)
* 🎯 Instant next actions (university recommendations + scheduling)
* 📊 Real-time visibility for counselors and admins

---

## ✨ Core Features

* Multilingual voice counseling flow
* Sentiment detection (excited, confused, hesitant)
* Smart follow-up questions for missing profile fields
* Multi-turn conversational memory
* Lead scoring and classification post-call
* AI-powered university recommendations
* Google OAuth-only authentication
* Google Calendar integration for booking
* WhatsApp summary and reminder automation
* Admin dashboard (priority queue, analytics, reports)
* Student dashboard (recommendations, progress tracking)
* RAG-based FAQ system (Supabase + LLM fallback)

---

## 🔄 Product Workflow

1. Student logs in via Google OAuth
2. Student joins AI-powered counseling call
3. System captures transcript and extracts profile signals
4. Backend generates:

   * Sentiment analysis
   * Lead score
   * Classification
   * Detailed report
5. Universities are recommended and session data is stored
6. Student books a meeting via Google Calendar
7. WhatsApp summary and reminders are sent automatically
8. Admin dashboard updates with priority queue and reports

---

## 🏗️ Architecture

**Frontend**

* Next.js (App Router)
* TypeScript

**Backend**

* FastAPI (Python)

**Data & Auth**

* Supabase (Postgres, Auth, REST APIs)

**Voice & Telephony**

* Twilio (webhooks + call handling)

**LLM Layer**

* Groq API (analysis, summaries, recommendations)

**Session & Persona**

* Anam session APIs

**Messaging**

* Twilio WhatsApp

---

## 📂 Repository Structure

```
frontend/     # Next.js app (student + admin UI)
backend/      # FastAPI backend, integrations, APIs
features.md   # Product roadmap and notes
```

---

## ⚙️ Key Backend Capabilities

* OAuth-based authentication with role handling (student/admin)
* Supabase sync for users and sessions
* AI-enriched call session storage
* Phone normalization and identity resolution
* WhatsApp messaging (inbound + outbound)
* Calendar integrations (event creation + listing)

### Recommendation APIs

* Default recommendations
* Personalized recommendations (latest session-based)

### Admin APIs

* University listings
* Priority queue
* Student reports

---

## 🔌 API Highlights

### Health

```
GET /health
```

### Auth

```
GET /api/v1/auth/*
POST /api/v1/students/complete
```

### Calls & Webhooks

```
POST /api/v1/calls/*
POST /api/v1/webhook/voice/*
```

### Messaging

```
POST /api/v1/messages/whatsapp/*
POST /api/v1/webhook/whatsapp/*
```

### Recommendations & Dashboard

```
GET /api/v1/universities/*
GET /api/v1/students/{student_id}/*
GET /api/v1/admin/*
```

### Calendar

```
POST /api/v1/book
GET /api/v1/calendar/events
```

---

## 💻 Local Development

### Prerequisites

* Node.js 18+
* Python 3.10+
* Supabase project
* Twilio account (Voice + WhatsApp)
* Google OAuth credentials
* (Optional) Groq API key
* (Optional) Public webhook URL (ngrok / cloudflared)

---

### 1️⃣ Backend Setup

```bash
cd backend
python -m venv .venv

# Activate virtual environment
# Windows:
.venv\\Scripts\\activate

# macOS/Linux:
# source .venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:8000](http://localhost:8000)

---

## 🔒 Security Notes

* Keep service role keys strictly server-side
* Restrict CORS to trusted origins
* Use HTTPS for production webhooks
* Verify webhook signatures
* Rotate keys and tokens regularly

---

## 📌 Current Status

### ✅ Implemented

* End-to-end backend APIs (auth, calls, summaries, recommendations, admin reports, calendar)
* Next.js app scaffolding (student + admin dashboards)

### 🚧 In Progress

* Multilingual routing optimization
* Real-time dashboards and analytics
* Improved recommendation ranking + explainability
* Production-grade observability and webhook validation

---

## 🙌 Acknowledgements

Built using:

* FastAPI
* Next.js
* Supabase
* Twilio
* Groq

---
