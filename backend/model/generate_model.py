# generate_model.py
from sentence_transformers import SentenceTransformer
import pickle
import os

model = SentenceTransformer('all-MiniLM-L6-v2')
os.makedirs("model", exist_ok=True)
with open("model/sbert_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("✅ Model saved successfully")
