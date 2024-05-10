import create from "zustand";

type Todo = {
  id: number;
  text: string;
};

type useTodoStore = {
  todos: Todo[];
  addTodo: (todoText: string) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
};

const useTodoStore = create<useTodoStore>((set) => ({
  todos: [],
  addTodo: (todoText: string) => {
    set((state) => ({
      todos: [...state.todos, { id: state.todos.length + 1, text: todoText }],
    }));
  },
  deleteTodo: (id: number) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  editTodo: (id: number, newText: string) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      ),
    }));
  },
}));

export default useTodoStore;
