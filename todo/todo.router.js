import * as express from 'express'

import { toDoService } from './todo.services.js';

export const toDoRouter = express.Router()

/* Получение всех задач */
toDoRouter.get('/', async (req, res) => {
  const items = await toDoService.getAll()
  res.send(items.rows);
})

/* Создать задачу */
toDoRouter.post('/', async (req, res) => {
  const result = await toDoService.createToDo(req.body.text, req.body.is_done);
  res.send(result);
})

/* Обновление статуса задачи */
toDoRouter.put('/', async (req, res) => {
  const result = await toDoService.updateToDo(req.body.id, req.body.is_done);
  res.send(result);
})

/* Удаление задачи */
toDoRouter.delete('/:id', async (req, res) => {
  const result = await toDoService.removeToDo(req.params.id);
  res.send(result);
})