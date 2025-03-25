import express from 'express';

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.get('/', (_req, res) => {
  res.json({ message: '¡Hola desde TypeScript API!' });
});

app.listen(3000, () => {
  console.log('Microservicio corriendo en el puerto 3000');
});
