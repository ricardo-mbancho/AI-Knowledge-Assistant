import fs from 'node:fs/promises';
import { PDFParse } from 'pdf-parse';
import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters';

export async function loadPdf(filePath: string) {
  const buffer = await fs.readFile(filePath);

  const parser = new PDFParse({
    data: buffer,
  });

  const result = await parser.getText();

  await parser.destroy();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });

  const documents = await splitter.createDocuments(
    [result.text],
    [
      {
        source: filePath,
      },
    ],
  );

  return documents;
}
