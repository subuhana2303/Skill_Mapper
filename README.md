# 🚀 SkillMapper — AI-Powered Career Roadmap & Resume Analyzer

[![Made by Subuhana B](https://img.shields.io/badge/MADE%20BY-Subuhana%20B-blueviolet)](https://github.com/subuhana2303)
[![License](https://img.shields.io/badge/license-MIT-brightgreen)](LICENSE)
[![Deploy with Vercel](https://img.shields.io/badge/Frontend-Deployed%20on%20Vercel-black?logo=vercel)]()
[![Python Flask](https://img.shields.io/badge/Backend-Flask-blue)]()
[![Streamlit Ready](https://img.shields.io/badge/Streamlit-Ready-orange)]()

> ✨ AI meets career guidance — Built for students, job seekers, and future engineers.

---

## 🧩 Overview

**SkillMapper** helps you upload a resume or list your skills, and in return:

✅ **Analyzes your skills using NLP**  
✅ **Matches them with trending tech roles**  
✅ **Generates a week-by-week personalized roadmap**  
✅ **Recommends handpicked resources (YouTube, docs, etc.)**  
✅ **Downloadable PDF learning plan**

Built using:
- 🎯 NLP with spaCy & Sentence-BERT  
- 🧠 Roadmap logic for roles like *Frontend Developer*, *Data Analyst*, *ML Engineer*  
- ⚡ React.js frontend & Flask backend  
- 📄 Resume parsing & skill classification  

---

## 🔍 Local Development

Once you start both frontend and backend:

- 🌐 Frontend runs at: [`http://localhost:3000`](http://localhost:3000)
- 🧠 Backend runs at: [`http://localhost:5000`](http://localhost:5000)

You can now open **SkillMapper** in your browser and start using it!

---

## 📸 Demo Screenshot

![SkillMapper Demo](./src/assets/demo.png)

---

## ⚙️ Tech Stack

| Layer        | Tech Stack                     |
|--------------|--------------------------------|
| Frontend     | React.js + React Router DOM    |
| Backend      | Flask                          |
| AI/NLP       | spaCy, Sentence-BERT           |
| DB (Optional)| SQLite or JSON-based files     |
| Style        | CSS (Responsive + Clean UI)    |
| Hosting      | Vercel (Frontend), Render (API)|

---

## 💼 Features

- 📝 Upload Resume (PDF) or enter skills manually  
- 🔍 Extracts & parses resume content  
- 🤖 AI-based Role Matching  
- 📚 Smart Roadmap Generator  
- 📥 Download roadmap as a PDF  
- 🎯 Clean, professional UI/UX  
- 🧑‍🎓 Tailored for student/early-career engineers  

---

## 🛠️ Project Structure

```
SKILLMAPPER/
├── backend/
│   ├── app.py
│   ├── resume_parser.py
│   ├── career_mapper.py
│   ├── roadmap_generator.py
│   ├── utils.py
│   ├── model/
│   │   └── sbert_model.pkl
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   │   └── demo.png
│   │   ├── components/
│   │   │   ├── UploadResume.js
│   │   │   ├── SkillList.js
│   │   │   ├── RoleMatch.js
│   │   │   └── RoadmapView.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Analyze.js
│   │   │   ├── Match.js
│   │   │   ├── Roadmap.js
│   │   │   └── Download.js
│   │   ├── styles/
│   │   │   └── main.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── data/
│   ├── role_templates.json
│   └── skills_db.json
│
├── setup.sh
├── .gitignore
└── README.md
```

---

## 🧪 How to Run Locally

### ✅ 1. Clone the repo

```bash
git clone https://github.com/subuhana2303/skillmapper.git
cd skillmapper
```

### ✅ 2. Run setup script

```bash
chmod +x setup.sh
./setup.sh
```

### ✅ 3. Start backend (in one terminal)

```bash
cd backend
source venv/bin/activate
python app.py
```

### ✅ 4. Start frontend (in another terminal)

```bash
cd frontend
npm start
```

App will be available at:  
🌐 `http://localhost:3000`

---

## 📬 Contact

**👩🏻 Subuhana B**  
📧 subuhanabasheer41@gmail.com  
🌐 [GitHub: @subuhana2303](https://github.com/subuhana2303)

---

## 📃 License

This project is licensed under the **MIT License**.  
Feel free to fork, build, and share with credits.

---

