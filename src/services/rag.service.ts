import { ChatOpenAI } from '@langchain/openai';
import { searchDocuments } from '../rag/retreiver.ts';

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: 'gpt-4o-mini',
});

export async function askQuestion(question: string) {
  const documents = await searchDocuments(question);

  const context = documents.map((doc: any) => doc.text).join('\n\n');

  const prompt = `
You are a helpful assistant.

Answer the user's question using ONLY the information
provided in the context.

Context:
${context}

Question:
${question}
`;

  const response = await model.invoke(prompt);

  return {
    answer: response.content,
    sources: documents,
  };
}
