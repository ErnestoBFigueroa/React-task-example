// https://www.youtube.com/watch?v=rLoWMU4L_qE
// 4 horas 42 min

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { useEffect, useState } from "react";

function App() {
  return (
    <main className="bg-zinc-900">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
