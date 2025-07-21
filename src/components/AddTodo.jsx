import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todo.reducer";
import { useState } from "react";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState("");
    let isEmpty = todoText.trim() === "";
    
    const submitHandle = e => {
        e.preventDefault()
        if (isEmpty) return;
        dispatch(addTodo(todoText));
        setTodoText("");
    }

    return (
        <form
            className="flex items-center p-4"
            onSubmit={submitHandle}
        >
            <input
                type="text"
                placeholder="Add a new todo"
                className="border-b border-b-gray-100/30 flex-1 p-2 focus:border-b-gray-300 transition-all duration-200 placeholder:text-gray-500"
                value={todoText}
                onChange={e => setTodoText(e.target.value)}
            />
            <button
                className="disabled:opacity-50 disabled:cursor-not-allowed! text-[#f1f3f5]/80 hover:text-[#f1f3f5]/95 px-4 py-2 ml-2 border border-[#f1f3f5]/30 hover:border-[#f1f3f5]/50 bg-gray-100/10 hover:bg-gray-300/25 transition-all duration-200"
                disabled={isEmpty}
                type="submit"
            >
                Create Todo
            </button>
        </form>
    );
}

export default AddTodo;