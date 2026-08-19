import { DataAPIClient } from '@datastax/astra-db-ts';
import { env } from '../config/env.ts';

let collection: any = null;

export async function getVectorStore() {
  if (collection) {
    return collection;
  }

  const client = new DataAPIClient(env.astraToken);

  const db = client.db(env.astraEndpoint, {
    keyspace: env.astraNamespace,
  });

  collection = await db.createCollection(env.astraCollection, {
    vector: {
      dimension: 1536,
      metric: 'cosine',
    },
  });

  return collection;
}
