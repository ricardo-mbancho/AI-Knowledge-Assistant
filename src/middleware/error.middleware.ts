import { type Request, type Response, type NextFunction } from 'express';

export function errorMiddleware(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.error(error);

  return res.status(500).json({
    message: 'Internal server error',
  });
}
