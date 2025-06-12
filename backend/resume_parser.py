import spacy
import re
from PyPDF2 import PdfReader

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

# Sample skill list (can be replaced by DB or JSON)
TECH_SKILLS = [
    "python", "java", "c++", "html", "css", "javascript", "react", "node", "flask",
    "django", "mysql", "mongodb", "tensorflow", "keras", "pandas", "numpy"
]

def extract_text_from_pdf(pdf_file):
    reader = PdfReader(pdf_file)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text.lower()

def extract_skills_from_resume(file):
    text = extract_text_from_pdf(file)
    doc = nlp(text)
    found_skills = []

    for token in doc:
        if token.text.lower() in TECH_SKILLS:
            found_skills.append(token.text.lower())

    return list(set(found_skills))  # remove duplicates
