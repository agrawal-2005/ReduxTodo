import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editTodoId, setEditTodoId] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditTodo = (todo) => {
    setEditTodoId(todo.id);
    setEditText(todo.text);
  };

  const saveEditTodo = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditTodoId(null);
    setEditText("");
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editTodoId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}
            <div className="flex justify-center items-center gap-x-4">
              {editTodoId === todo.id ? (
                <button
                  onClick={() => saveEditTodo(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEditTodo(todo)}
                  className="text-black bg-white border-0 py-1 px-4 focus:outline-none rounded text-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12.015 4.055l-9.943 9.944 3.775 3.775 9.944-9.943zm2.197 2.197l2.197-2.197 2.93 2.93-2.197 2.197zm-1.607-1.607l2.197-2.197 3.4 3.4-2.197 2.197zm-7.214 13.435l2.197-2.197-3.775-3.775-2.197 2.197zm1.148-1.148l.82.82-2.195.98.982-2.197zm9.929-9.929l1.414-1.414 2.12 2.12-1.414 1.414zm-1.142 0l.83.83-2.415 2.414-.82-.82zm-1.08 1.08l-.831-.83-2.414 2.415.83.83z" />
                  </svg>
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
