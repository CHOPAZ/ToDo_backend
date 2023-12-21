import pkg from 'pg';
const { Client } = pkg;
 
const client = new Client({
  host: '127.0.0.1',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'example',
})

await client.connect();

/* Получение всех записи из таблицы */
export function getAll() {
  return client.query('SELECT * FROM todo')
}

/* Создание задачи */
export function createToDo(text, is_done) {
  return client.query('INSERT INTO todo (text, is_done) VALUES ($1, $2)', [text, is_done])
}

/* Обновление статуса задачи */
export function updateToDo(id, is_done) {
  return client.query('UPDATE todo SET is_done = $1 WHERE id = $2', [is_done, id])
}

/* Удаление задачи */
export function removeToDo(id) {
  return client.query('DELETE FROM todo WHERE id = $1', [id])
}