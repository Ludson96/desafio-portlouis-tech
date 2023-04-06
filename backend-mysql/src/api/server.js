import { listen } from './app';

const port = process.env.API_PORT || 3000;

listen(port);
console.log(`Api rodando na porta ${port}`);
