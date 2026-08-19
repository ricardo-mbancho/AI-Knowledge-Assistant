import { type Request, type Response, type NextFunction } from 'express';
import { askQuestion } from '../services/rag.service.ts';

export async function chat(req: Request, res: Response, next: NextFunction) {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        message: 'question is required',
      });
    }

    const result = await askQuestion(question);

    return res.json(result);
  } catch (error) {
    next(error);
  }
}
