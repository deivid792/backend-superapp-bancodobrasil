import express, { urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { mainRouter } from './routers/main';


const server = express();
server.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
server.use(helmet());
server.use(urlencoded({extended: true}));
server.use(express.json());

server.use(mainRouter)
if (process.env.NODE_ENV !== 'test') {
server.listen(process.env.PORT || 3000, ()=>{
    console.log(`o servidor esta rodando na url: ${process.env.BASE_URL}`)
})}

export default server;


