import express, { type Request, type Response } from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
const app = express();

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

app.use(express.json());
app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
    res.json({
        message: "API funcionando perfeitamente!"
    });    
});

export default app;