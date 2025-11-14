import { useState } from "react";
import SearchBar from "./SearchBar";
import ItemsList from "./ItemsList";

const ToDoList = () => {
    const [todos, setTodos] = useState(["Learn React", "Do laundry", "Buy groceries"]);
    const [search, setSearch] = useState("");
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        const text = newTodo.trim();
        if (text) {
            setTodos((prev) => [...prev, text]);
            setNewTodo("");
        }
    };

    const removeTodo = (index) => {
        setTodos((prev) => 
            prev.filter((_, i) => i !== index));
    };

    const filtered = todos.filter((t) => 
        t.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="container mt-4">
            <h1>Todo List</h1>

            <div className="input-group mb-3">
                <input type="text" 
                className="form-control" 
                placeholder="Add a task..." 
                value={newTodo} onChange={(e) => setNewTodo(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addTodo()} />
                <button className="btn btn-primary" onClick={addTodo}>
                    Add
                </button>
            </div>

            <SearchBar value={search} onChange={setSearch} />

            <ItemsList todos={filtered} onDelete={removeTodo} />
        </div>
    );
};

export default ToDoList;