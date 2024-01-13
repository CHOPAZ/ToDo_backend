import express from 'express';
import cors from 'cors';
import { toDoRouter } from './todo/todo.router.js';

const app = express()
const port = 3000;

app.use(cors({origin: ['http://127.0.0.1:5173','http://localhost:5173' ]}))

/* прослойка(Middleware) для передачи json в response */
app.use(express.json());
app.use('/todo', toDoRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})