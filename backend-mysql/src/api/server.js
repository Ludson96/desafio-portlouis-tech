const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

const port = process.env.API_PORT;

app.listen(port);
console.log(`Api rodando na porta ${port}`);
