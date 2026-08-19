import { embeddings } from './embeddings.ts';
import { getVectorStore } from './vectore-store.ts';

export async function searchDocuments(question: string) {
  const [queryVector] = await embeddings.embedDocuments([question]);

  const collection = await getVectorStore();

  const results = await collection.find(
    {},
    {
      sort: {
        $vector: queryVector,
      },
      limit: 4,
      projection: {
        text: 1,
        metadata: 1,
      },
    },
  );

  return results.toArray();
}
