# Law-Assistant

A full-stack web application that provides legal information and assistance to users. It covers multiple areas of law, offers an AI-powered chatbot, displays real-time legal news, and includes user authentication.

---

## Features

- **Law Categories** – Dedicated information pages for Family, Employment, Property, Labour, Traffic, and Voting law
- **AI Chatbot** – Interactive chatbot for legal queries
- **AI Chat Assistant** – Conversational interface for guided legal assistance
- **Employment Contracts** – Browse and understand common employment contract clauses
- **Famous Court Cases** – Explore landmark court rulings
- **Legal News** – Real-time legal headlines scraped from Times of India
- **User Authentication** – Secure sign-up and sign-in with JWT
- **About Us / Our Vision** – Information about the platform

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, React Router v6, Material UI, Axios |
| Backend (Auth) | Node.js, Express, MongoDB (Mongoose), JWT, bcryptjs |
| Backend (Sessions) | Node.js, Express, MongoDB (Mongoose) |
| News Scraper | Python, Flask, BeautifulSoup, Selenium |

---

## Project Structure

```
law_assistance/
├── frontend/           # React frontend (Vite)
│   └── src/
│       ├── components/ # UI components (NavBar, Footer, cards, chatbot, etc.)
│       ├── App.jsx     # Main router
│       └── ...
├── backend/            # Node.js/Express backend
│   ├── models/         # Mongoose models (User, Session)
│   ├── routes/         # API routes (auth, sessions)
│   ├── index.js        # Auth server entry point
│   └── server.js       # Session server entry point (port 3004)
├── main.py             # Flask news scraper (BeautifulSoup)
└── scrapper.py         # Selenium-based news scraper
```

---

## Prerequisites

- **Node.js** (v16+) and npm
- **MongoDB** running locally on `mongodb://localhost:27017`
- **Python 3** with pip
- **Chrome** (for Selenium scraper)

---

## Getting Started

### 1. Frontend

```bash
cd frontend
npm install
npm start
```

The app will be available at `http://localhost:5173` (Vite default).

### 2. Backend – Authentication

```bash
cd backend
npm install
npm start
```

Runs the authentication server (sign-up / sign-in API).

### 3. Backend – Chatbot Sessions

```bash
cd backend
node server.js
# or with hot-reload:
nodemon server.js
```

Runs the session server at `http://localhost:3004`.

### 4. News Scraper (Flask)

```bash
pip install flask flask-cors requests beautifulsoup4
python main.py
```

Serves scraped legal news at `http://localhost:5000/news`.

---

## API Endpoints

### Auth (backend/index.js)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/signup` | Register a new user |
| POST | `/api/signin` | Login and receive a JWT |

### News (main.py)

| Method | Endpoint | Description |
|---|---|---|
| GET | `/news` | Fetch latest legal headlines |

---

## Frontend Routes

| Path | Component | Description |
|---|---|---|
| `/` | Home | Landing / hero section |
| `/home` | CardF | Law category cards |
| `/familycard` | FamilyCard | Family law info |
| `/employmentcard` | EmploymentCard | Employment law info |
| `/propertycard` | PropertyCard | Property law info |
| `/labourcard` | LabourCard | Labour law info |
| `/trafficcard` | TrafficCard | Traffic law info |
| `/votingcard` | VotingCard | Voting rights info |
| `/login` | LoginPage | User login |
| `/register` | RegistrationPage | User registration |
| `/chatbot` | Chatbot | AI chatbot |
| `/assist` | ChatInterface | AI chat assistant |
| `/contract` | EmploymentContracts | Employment contracts |
| `/famous` | CourtCases | Famous court cases |
| `/news` | News | Legal news feed |
| `/ourvision` | OurVision | Platform vision |
| `/aboutus` | AboutUsPage | About the team |

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request