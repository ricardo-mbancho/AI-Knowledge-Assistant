import dotenv from 'dotenv';

dotenv.config();

function required(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export const env = {
  port: Number(process.env.PORT ?? 4000),

  openaiApiKey: required('OPENAI_API_KEY'),

  astraEndpoint: required('ASTRA_DB_API_ENDPOINT'),

  astraToken: required('ASTRA_DB_APPLICATION_TOKEN'),

  astraNamespace: process.env.ASTRA_DB_NAMESPACE ?? 'default_keyspace',

  astraCollection: process.env.ASTRA_DB_COLLECTION ?? 'documents',
};
