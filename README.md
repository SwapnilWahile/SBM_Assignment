# Full-Stack CRUD Application — Django (REST) + React + Supabase PostgreSQL + Weather API

This is a simple full-stack CRUD application built as part of the SBM assignment.  
The project demonstrates:

- A **Django REST API** backend  
- A **React.js** frontend  
- **CRUD operations** (Create, Read, Update, Delete)  
- A **PostgreSQL database hosted on Supabase**  
- A **third-party API integration** using Open-Meteo (weather data)  
- A clean, responsive UI including modal-based item creation/editing  

This README explains **how to download, install dependencies, and run the entire application**, along with a brief explanation of the **approach and design decisions**.

---

## Features

### Backend (Django)
- REST API built using Django Rest Framework (DRF)
- `Item` model with fields: `title`, `description`
- Endpoints:
  - `GET /api/items/` — list items  
  - `POST /api/items/` — create item  
  - `PUT /api/items/<id>/` — update item  
  - `DELETE /api/items/<id>/` — delete item  

### Frontend (React)
- View all items
- Add/Edit items inside a **modal popup**
- Delete items
- "Loading..." indicator while fetching
- Clean, responsive CSS

### Third-Party API Integration
Uses **Open-Meteo** (free, no API key).

Weather is fetched and displayed on the UI:
https://api.open-meteo.com/v1/forecast?latitude=19.07&longitude=72.87&current_weather=true

---

## Technologies Used

| Layer | Technology |
|------|------------|
| Backend | Django, Django REST Framework |
| Database | Supabase PostgreSQL |
| API Integration | Open-Meteo Weather API |
| Frontend | React.js |
| Styling | CSS (responsive, lightweight) |
| CORS | django-cors-headers |

---

# 1. How to Download / Clone

https://github.com/SwapnilWahile/SBM_Assignment.git
cd SBM_Assignment

---

# Setup

## 2. Navigate to Backend Folder
-cd backend
-pip install -r requirements.txt
-python manage.py migrate   # migrations will apply to YOUR Supabase DB
-python manage.py runserver

## 3. Navigate to Frontend Folder
-cd frontend
-npm install
-npm start


Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.
