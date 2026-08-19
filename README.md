# 🤖 AI Knowledge Assistant

AI-powered RAG application built with **Node.js, TypeScript, LangChain, OpenAI, and Astra DB**.

Upload documents and ask questions about their content using semantic vector search and AI.

## 🚀 How It Works

```text
PDF
 ↓
Text Extraction
 ↓
Text Chunks
 ↓
OpenAI Embeddings
 ↓
Astra DB
 ↓
Vector Search
 ↓
Relevant Context
 ↓
OpenAI
 ↓
AI Answer


🔌 API
Upload Document

POST /api/documents/upload

curl -X POST http://localhost:4000/api/documents/upload \
  -F "file=@document.pdf"
Ask a Question

POST /api/chat

{
  "question": "What is this document about?"
}

Example response:

{
  "answer": "The document provides information about..."
}
🛠️ Tech Stack

Node.js · TypeScript · Express · LangChain · OpenAI · Astra DB · RAG · Vector Search

⚙️ Setup
npm install
npm run dev
```
