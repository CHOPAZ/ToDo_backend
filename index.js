import express from 'express';
import cors from 'cors';
import { getAll, createToDo, updateToDo, removeToDo } from './db.js';

const app = express()
const port = 3000;

app.use(cors({origin: ['http://localhost:5173']}))

/* прослойка(Middleware) для передачи json в response */
app.use(express.json())


/* Получение всех записей */
app.get('/todo', async (req, res) => {
  const items = await getAll()
  res.send(items.rows);
})

/* Создать запись */
app.post('/todo', async (req, res) => {
  const result = await createToDo(req.body.text, req.body.is_done);
  res.send(result);
})

/* Обновление статуса задачи */
app.put('/todo', async (req, res) => {
  const result = await updateToDo(req.body.id, req.body.is_done);
  res.send(result);
})

/* Удаление задачи */
app.delete('/todo/:id', async (req, res) => {
  const result = await removeToDo(req.params.id);
  res.send(result);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})