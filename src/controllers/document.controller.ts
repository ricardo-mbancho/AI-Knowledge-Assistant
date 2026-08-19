import { type Request, type Response, type NextFunction } from 'express';
import { indexDocument } from '../services/document.service.ts';

export async function uploadDocument(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: 'PDF file is required',
      });
    }

    const result = await indexDocument(req.file.path);

    return res.status(201).json({
      message: 'Document indexed successfully',
      ...result,
    });
  } catch (error) {
    next(error);
  }
}
