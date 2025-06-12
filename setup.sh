chmod +x setup.sh
#!/bin/bash

echo "📦 Setting up SkillMapper..."

# Backend Setup
echo "🔧 Setting up Python backend..."
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
deactivate
cd ..

# Frontend Setup
echo "🎨 Setting up React frontend..."
cd frontend
npm install
cd ..

echo "✅ Setup complete. You can now run backend and frontend separately."
echo ""
echo "To run backend: "
echo "  cd backend && source venv/bin/activate && python app.py"
echo ""
echo "To run frontend:"
echo "  cd frontend && npm start"
