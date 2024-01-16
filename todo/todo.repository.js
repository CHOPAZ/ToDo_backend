import { client } from "../db.js"
/* Получение всех записи из таблицы */

class ToDoRepository {
  getAll() {
    return client.query('SELECT * FROM todo ORDER BY id')
  }
  
  /* Создание задачи */
  createToDo(text, is_done) {
    return client.query('INSERT INTO todo (text, is_done) VALUES ($1, $2)', [text, is_done])
  }
  
  /* Обновление статуса задачи */
  async updateToDo(id, is_done) {
    const res = await client.query('UPDATE todo SET is_done = $1 WHERE id = $2 RETURNING *', [is_done, id])
    return res.rows[0]
  }
  
  /* Удаление задачи */
  removeToDo(id) {
    return client.query('DELETE FROM todo WHERE id = $1', [id])
  }
}

export const toDoRepository = new ToDoRepository();
