import React from "react";
import { useTasks } from "../context/TasksContext";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { VscTrash, VscTasklist } from "react-icons/vsc";

function Home() {
  const { tasks , deleteTask} = useTasks();
  const router= useRouter();

return (

  <Layout>
  <div className="flex justify-center">
  {tasks.length === 0 ? (
    <div className="block">
    <h2 className="text-2xl">No hay más tareas</h2>
    <VscTasklist size="8rem" />
    </div>
  ) : (


    <div className="w-7/10">
      {tasks.map((task , i ) => (
      <div 
      key = {task.id}
      className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-between"
      onClick={() => router.push ("/edit/" + task.id)}
      >
  
  <span className="text-5xl mr-5">{i}</span>
<div>
<div className="flex justify-between">
<h1 className="font-bold mr-2">{task.title}</h1>
<button
className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center"
onClick={(e) => {
  e.stopPropagation();
  deleteTask(task.id);
}}
> 

<VscTrash className="mr-1 " /> Eliminar
</button>
</div>


<p className="text-gray-300 py-2">{task.description}</p>
<span className="text-gray-400">{task.id}</span>
        </div>
      </div>
      ))}
    </div>
  )}
  </div>
  </Layout>
  );
}

export default Home;
