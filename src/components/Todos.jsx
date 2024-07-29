import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()
  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id))
  }
  return (
    <div>
      <h5>Todos</h5>
      <ul className="list-none">
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                onClick={() => handleRemoveTodo(todo.id)}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 11V17"
                  stroke="#f00"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 11V17"
                  stroke="#f00"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 7H20"
                  stroke="#f00"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                  stroke="#f00"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="#f00"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {todo.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todos;
