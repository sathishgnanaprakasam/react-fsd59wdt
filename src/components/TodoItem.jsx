import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo }) => {

    const handleCheckboxChange = async () => {
        try {
            const updatedTodo = {
                ...todo,
                completed: !todo.completed
            };

            const response = await axios.put(
                `https://665eb6121e9017dc16f10996.mockapi.io/api/v1/todos/${todo.id}`,
                updatedTodo
            );

            onUpdateTodo && onUpdateTodo(response.data);

        } catch (error) {
            console.error(`Failed to update todo: ${error}`);
        }
    }

    const handleDeleteTodo = async () => {
        try {
            const response = await axios.delete(
                `https://665eb6121e9017dc16f10996.mockapi.io/api/v1/todos/${todo.id}`
            );

            onDeleteTodo && onDeleteTodo(todo.id);

        } catch (error) {
            console.error(`Failed to delete todo: ${error}`);
        }
    }

  return (
      <div>
          <input 
              type="checkbox" 
              checked={todo.completed}
              onChange={handleCheckboxChange}
          />
          <span>
              <strong>{todo.title.toUpperCase()}</strong> : <em>{todo.description}</em>
          </span> &nbsp;&nbsp;
          <span>
              <FontAwesomeIcon
                  icon={faTrash} 
                  color="red"
                  fontSize={16}
                  onClick={handleDeleteTodo}
                />
          </span>
          <br /><br />
    </div>
  )
}

export default TodoItem;