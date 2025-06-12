import os
import pickle
from sentence_transformers import util
import torch

# ✅ Safely load SBERT model regardless of where script is run
model_path = os.path.join(os.path.dirname(__file__), "model", "sbert_model.pkl")
with open(model_path, "rb") as f:
    model = pickle.load(f)

# Define career role profiles using key skill/tech keywords
ROLE_PROFILES = {
    "Frontend Developer": "html css javascript react vue angular frontend user interface responsive design",
    "Backend Developer": "nodejs flask django python java api server database mongodb mysql backend",
    "Full Stack Developer": "frontend backend react nodejs api integration html css javascript databases flask",
    "Data Analyst": "excel pandas numpy data visualization statistics tableau powerbi reporting insights",
    "Machine Learning Engineer": "machine learning algorithms sklearn keras pytorch transformers deep learning models",
    "DevOps Engineer": "ci/cd docker kubernetes cloud aws linux automation deployment pipelines monitoring",
    "UI/UX Designer": "figma adobe xd wireframing prototyping user experience interface design usability research",
    "Mobile App Developer": "flutter react native android ios mobile development ui dart kotlin swift"
}

def map_skills_to_role(user_skills):
    """
    Maps a list of extracted user skills to the closest matching career role
    using SBERT-based semantic similarity.
    """
    if not user_skills:
        return "Generalist"

    # Combine user skills into a single string and embed it
    input_text = " ".join(user_skills)
    input_embedding = model.encode(input_text, convert_to_tensor=True)

    best_score = -1
    best_role = "Generalist"

    # Compare input with each role description
    for role, description in ROLE_PROFILES.items():
        role_embedding = model.encode(description, convert_to_tensor=True)
        similarity = util.cos_sim(input_embedding, role_embedding).item()

        if similarity > best_score:
            best_score = similarity
            best_role = role

    return best_role
