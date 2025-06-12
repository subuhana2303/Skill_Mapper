from flask import Flask, request, jsonify
from resume_parser import extract_skills_from_resume
from career_mapper import map_skills_to_role
from roadmap_generator import generate_roadmap

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze_resume():
    if 'resume' not in request.files:
        return jsonify({"error": "No resume uploaded"}), 400

    resume_file = request.files['resume']
    skills = extract_skills_from_resume(resume_file)

    if not skills:
        return jsonify({"error": "No skills found"}), 404

    role = map_skills_to_role(skills)
    roadmap = generate_roadmap(role)

    return jsonify({
        "skills": skills,
        "suggested_role": role,
        "learning_roadmap": roadmap
    })

@app.route('/')
def home():
    return "SkillMapper Backend is running!"

if __name__ == '__main__':
    app.run(debug=True)
