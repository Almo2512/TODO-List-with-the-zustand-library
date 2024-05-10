"use client";
import React, { useState } from "react";
import UseTodoStore from "@/hook/useTodoStore";
export default function Todolist() {
  const [todoText, setTodoText] = useState("");
  const [edit, setEndEdit] = useState(false);
  const [id, setId] = useState(-1);

  const { todos, addTodo, deleteTodo, editTodo } = UseTodoStore();

  const submithandler = (event: any) => {
    event.preventDefault();
    if (!edit) {
      if (todoText == "") {
      } else addTodo(todoText);

      setTodoText("");
    } else {
      editTodo(id, todoText);
      setEndEdit(false);
      setId(-1);
      setTodoText("");
    }
  };
  const editHandler = (id: number, text: string) => {
    setTodoText(text);
    setEndEdit(true);
    setId(id);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row ">
          <form onSubmit={submithandler}>
            <h1 className="text-black">TODO-List </h1>
            <div className="divider" />
            <input
              className=" input input-bordered w-full max-w-xs"
              placeholder="enter something"
              type="text"
              onChange={(e: any) => setTodoText(e.target.value)}
              value={todoText}
            />
            <div className="divider" />
            <button className="btn btn-outline mt-2" type="submit">
              {edit ? "Update Todo" : "Add Todo"}
            </button>
            <div className="divider" />
            <ul>
              {todos.map((todo: any) => (
                <li
                  className="flex items-center py-2 border-b border-gray-300 justify-between  w-full"
                  key={todo.id}
                  id={todo.id}
                >
                  <span className="text-gray-800">{todo.text}</span>
                  <div className="flex">
                    <button
                      disabled={edit}
                      onClick={() => deleteTodo(todo.id)}
                      className="btn btn-outline btn-error text-sm btn-xs mr-1"
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      onClick={() => editHandler(todo.id, todo.text)}
                      className="btn btn-outline btn-info text-xs  btn-xs"
                    >
                      Edit
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </form>
        </div>
      </div>
    </main>
  );
}
