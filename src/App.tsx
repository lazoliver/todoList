import { useState, ChangeEvent } from "react"
/* Import da interface dos dados coletados */
import { ITask } from './interfaces/interfaces'
import { TodoTask } from './components/todoTask'

/* Aplicação */
function App() {

  /* Estados da aplicação */
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<string>('');
  const [todoList, setTodoList] = useState<ITask[]>([]);

  /* Coletar os inputs do usuário */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(event.target.value)
    }
  };

  /* Adicionar uma nova Task */
  const addTask = (): void => {
    const newTask = {taskName: task, deadline: deadline};
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline('');
    console.log(todoList)
  }

  /* Deletar a Task completada */
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete
      })
    );
  };

  /* renderização da aplicação */
  return (
    <div>
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange} />
          <input type="number" placeholder="Deadline" name="deadline" value={deadline} onChange={handleChange} required />
        </div>
        <button onClick={addTask} >Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  )
}

export default App
