import json

def load_templates():
    with open("data/role_templates.json", "r") as f:
        return json.load(f)

def generate_roadmap(role):
    templates = load_templates()
    return templates.get(role, ["Explore general tech topics", "Pick a specialization", "Build projects"])
