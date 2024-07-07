"use client";
import { useTodos } from "@/store/todos";
import React, { FormEvent, useState } from "react";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="border-black border-2"
        placeholder="Write Your TODO"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
