import React, { useState } from 'react';
import { Cat, Heart, Plus, Trash2, Check } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input.trim(), completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200">
      <div className="max-w-md mx-auto pt-12 px-4">
        {/* Header */}
        <div className="bg-white rounded-t-2xl p-6 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/images/akshita.jpg"
              alt="Akshita's profile" 
              className="w-24 h-24 rounded-full object-cover border-4 border-pink-300"
            />
          </div>
          <h1 className="text-3xl font-bold text-center text-pink-600 mb-2">
            Akshita's Todo List
            <Heart className="inline-block ml-2 text-pink-500 fill-pink-500" size={24} />
          </h1>
          <div className="flex items-center gap-2 bg-pink-50 rounded-lg p-3 mt-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Add a new task..."
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-pink-300"
            />
            <button
              onClick={addTodo}
              className="bg-pink-500 hover:bg-pink-600 text-white rounded-lg p-2 transition-colors"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        {/* Todo List */}
        <div className="bg-white rounded-b-2xl p-6 shadow-lg">
          {todos.length === 0 ? (
            <div className="text-center py-8">
              <Cat className="mx-auto text-pink-300 mb-3" size={40} />
              <p className="text-pink-400">No tasks yet! Add some tasks to get started!</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {todos.map(todo => (
                <li
                  key={todo.id}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    todo.completed ? 'bg-pink-50' : 'bg-white'
                  } border border-pink-100 hover:shadow-md`}
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`rounded-full p-1 transition-colors ${
                      todo.completed ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-500'
                    }`}
                  >
                    <Check size={16} />
                  </button>
                  <span
                    className={`flex-1 ${
                      todo.completed ? 'line-through text-pink-300' : 'text-gray-700'
                    }`}
                  >
                    {todo.text}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-pink-400 hover:text-pink-600 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-pink-400 text-sm">
          Made with <Heart className="inline-block mx-1 fill-pink-400" size={14} /> for Akshita
        </div>
      </div>
    </div>
  );
}

export default App;