import express from 'express';

const app = express();
app.use(express.json());

app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log('Microservicio corriendo en el puerto 3000');
});
