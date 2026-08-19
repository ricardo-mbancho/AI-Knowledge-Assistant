import { loadPdf } from '../rag/loader.ts';
import { embeddings } from '../rag/embeddings.ts';
import { getVectorStore } from '../rag/vectore-store.ts';

export async function indexDocument(filePath: string) {

  const documents = await loadPdf(filePath);

  const collection = await getVectorStore();

  const texts = documents.map((doc) => doc.pageContent);

  const vectors = await embeddings.embedDocuments(texts);

  const rows = documents.map((doc, index) => ({
    text: doc.pageContent,
    metadata: doc.metadata,
    $vector: vectors[index],
  }));

  await collection.insertMany(rows);

  return {
    chunks: documents.length,
  };
}
