import app from './app';
import 'express-async-errors';
import AppError from './midlleware/error/AppError';
const port = process.env.PORT || 3000;

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      statusCode: error.statusCode,
      message: error.message,
    });
  }
  next(error);
});

app.listen(port, () => {
  console.log(`Server runs on port: ${port}`);
});
