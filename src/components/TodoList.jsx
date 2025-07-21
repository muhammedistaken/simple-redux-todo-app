import { useSelector, useDispatch } from "react-redux"
import { toggleTodo, removeTodo } from "../reducers/todo.reducer"

const TodoList = () => {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()

    return (
        <main className="flex-1 h-auto p-4 overflow-y-auto custom-scroll">
            <table className="table-auto md:table-fixed w-full border-collapse bg-transparent text-sm">
                <thead>
                    <tr className="*:p-4 *:border-b *:border-gray-300 dark:*:border-gray-700 *:text-sm *:text-gray-700 dark:*:text-gray-400 *:text-left">
                        <th className="w-1/8">
                            #
                        </th>
                        <th className="w-1/2">
                            Todo
                        </th>
                        <th className="w-1/4">
                            Completed
                        </th>
                        <th className="w-1/4">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="*:*:p-4 *:*:border-b *:*:border-gray-300 dark:*:*:border-gray-700 *:*:text-sm *:*:text-gray-700 dark:*:*:text-gray-400">
                {todos && todos.length > 0 && todos.map(todo => (
                    <tr key={todo.id}>
                        <td>
                            {todo.id}
                        </td>
                        <td className={`text-gray-700 dark:text-gray-400 ${todo.completed ? 'line-through' : ''}`}>
                            {todo.text}
                        </td>
                        <td>
                            <input type="checkbox" onChange={() => dispatch(toggleTodo({ id: todo.id }))} checked={todo.completed} />
                        </td>
                        <td>
                            <button className="text-red-500 hover:underline ml-2" onClick={() => dispatch(removeTodo({ id: todo.id }))}>Delete</button>
                        </td>
                    </tr>
                ))}
                {todos && todos.length === 0 && (
                    <tr>
                        <td colSpan="4" className="text-center text-gray-500 border-none! pt-10!">
                            <h3 className="font-semibold text-xl">
                                No Todos Available.
                            </h3>
                            <p className="text-sm">
                                Please add a todo item.
                            </p>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </main>
    )
}

export default TodoList