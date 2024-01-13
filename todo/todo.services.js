import { toDoRepository } from "./todo.repository.js";


class ToDoService {
  async getAll() {
    return await toDoRepository.getAll()
  }

  async createToDo(text, is_done) {
    return await toDoRepository.createToDo(text, is_done)
  }

  async updateToDo(id, is_done) {
    return await toDoRepository.updateToDo(id, is_done)
  }
  
  async removeToDo(id) {
    return await toDoRepository.removeToDo(id)
  }
}

export const toDoService = new ToDoService();