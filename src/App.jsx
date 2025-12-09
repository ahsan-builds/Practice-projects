import React, { useState } from "react";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

const App = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { taskTitle, taskDesc }]);
    setTaskDesc("");
    setTaskTitle("");
  };

  const handleDelete = (index) => {
    let copyTask = [...tasks];
    copyTask.splice(index, 1);
    setTasks(copyTask);
  };

  return (
    <div className="min-h-screen w-full text-white p-6">
      {/* DIV 1 (CENTERED FORM) */}
      <div className="w-full flex justify-center mb-10">
        <div className="w-full max-w-md p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Taskify</h1>

          <form onSubmit={submitHandler} className="space-y-4">
            <input
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full p-3 rounded-lg border border-zinc-500 outline-none focus:ring-1 focus:ring-white"
            />

            <textarea
              placeholder="Task Description"
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
              className="w-full p-3 h-28 rounded-lg bg-zinc-500 border border-zinc-700 outline-none resize-none focus:ring-1 focus:ring-white"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-semibold cursor-pointer border"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>

      {/* DIV 2 (TASKS FULL WIDTH IN 2-COLUMN GRID) */}
      <div className="w-full">
        {tasks.length === 0 ? (
          <p className="text-zinc-500">No tasks added.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="w-full border border-zinc-500 p-4 rounded-md relative"
              >
                <h2 className="text-xl font-semibold">{task.taskTitle}</h2>
                <p className="text-zinc-300 mt-1">{task.taskDesc}</p>

                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                  className="absolute top-3 right-3 text-red-600 hover:text-red-400 focus:outline-none"
                >
                  <MdDeleteOutline size={20} />
                </button>

                <button 
                onClick={()=>{
                  
                }}
                className="absolute top-3 right-10">
                  <MdEdit size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
