import express from 'express';

const app = express();
app.use(express.json());

// Middleware para loguear cada request
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.get('/health', (_req, res) => {
  console.log('✔️ Health check recibido');
  res.status(200).json({ status: 'OK' });
});

app.get('/', (_req, res) => {
  console.log('📨 Petición recibida en /');
  res.json({ message: '¡Hola desde TypeScript API!' });
});

app.listen(3000, () => {
  console.log('🚀 Microservicio corriendo en el puerto 3000');
});
