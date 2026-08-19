import express from 'express';
import cors from 'cors';

import documentRoutes from './routes/document.routes.ts';
import chatRoutes from './routes/chat.routes.ts';
import { errorMiddleware } from './middleware/error.middleware.ts';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
  });
});

app.use('/api/documents', documentRoutes);
app.use('/api/chat', chatRoutes);

app.use(errorMiddleware);

export default app;
