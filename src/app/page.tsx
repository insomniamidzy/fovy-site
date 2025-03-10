'use client'
import {  useEffect } from 'react'
import { useRouter } from "next/navigation";



 

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/Homepage"); // 當訪問 `/`，自動跳轉到 `/Homepage`
  }, [router]);
  return null; // 不需要顯示任何內容，因為會立刻跳轉
}


//   const [tasks, setTasks] = useState<Task[]>([])
//   const [newTask, setNewTask] = useState('')
//   const [activeTab, setActiveTab] = useState<'specific-time' | 'do-it-now' | 'next-action' | 'Focus-Mode'>('do-it-now')
//   const [focusTask, setFocusTask] = useState<Task | null>(null)
//   const [elapsedTime, setElapsedTime] = useState(0) // 從 0 開始計時
//   const [isRunning, setIsRunning] = useState(false)

//   useEffect(() => {
//     let timer: NodeJS.Timeout
//     if (isRunning) {
//       timer = setInterval(() => {
//         setElapsedTime((prev) => prev + 1)
//       }, 1000)
//     }
//     return () => clearInterval(timer)
//   }, [isRunning])

//   const formatTime = (seconds: number) => {
//     const minutes = Math.floor(seconds / 60)
//     const secs = seconds % 60
//     return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
//   }

//   const addTask = () => {
//     if (newTask.trim()) {
//       setTasks([...tasks, { 
//         id: Date.now(), 
//         text: newTask, 
//         completed: false,
//         category: activeTab
//       }])
//       setNewTask('')
//     }
//   }

//   const toggleTask = (id: number) => {
//     setTasks(tasks.map(task => 
//       task.id === id ? { ...task, completed: !task.completed } : task
//     ))
//   }

//   const startFocusMode = (task: Task) => {
//     setFocusTask(task)
//     setActiveTab('Focus-Mode')
//     setElapsedTime(0) // 重設計時器
//     setIsRunning(false)
//   }

//   const startTimer = () => setIsRunning(true)
//   const pauseTimer = () => setIsRunning(false)
//   const resetTimer = () => {
//     setElapsedTime(0)
//     setIsRunning(false)
//   }

//   const filteredTasks = tasks.filter(task => task.category === activeTab)

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-3xl mx-auto pt-8 px-4">
//         {/* Header */}
//         <div className="mb-8">
//             <h1 className="text-3xl font-bold mb-4 text-black">FOVY Work Manager</h1>
//           <div className="flex gap-4 mb-6">
//             <button onClick={() => setActiveTab('specific-time')} className={`px-4 py-2 rounded transition-colors ${activeTab === 'specific-time' ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-100'}`}>Specific Time</button>
//             <button onClick={() => setActiveTab('do-it-now')} className={`px-4 py-2 rounded transition-colors ${activeTab === 'do-it-now' ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-100'}`}>Do It Now</button>
//             <button onClick={() => setActiveTab('next-action')} className={`px-4 py-2 rounded transition-colors ${activeTab === 'next-action' ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-100'}`}>Next Action</button>
//             <button onClick={() => setActiveTab('Focus-Mode')} className={`px-4 py-2 rounded transition-colors ${activeTab === 'Focus-Mode' ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-100'}`}>Focus Mode</button>
//           </div>
//         </div>

//         {/* Focus Mode UI */}
//         {activeTab === 'Focus-Mode' ? (
//           <div className="bg-white rounded-lg p-6 shadow-sm text-center">
//             {focusTask ? (
//               <>
//                 <h2 className="font-semibold text-2xl text-black">{focusTask.text}</h2>
//                 <p className="text-sm text-gray-500 mb-4">Stay focused and complete this task!</p>
//                 <div className="text-4xl font-bold text-gray-800">{formatTime(elapsedTime)}</div>
//                 <div className="flex justify-center gap-4 mt-4">
//                   {!isRunning ? (
//                     <button onClick={startTimer} className="bg-green-500 text-white px-6 py-2 rounded">Start</button>
//                   ) : (
//                     <button onClick={pauseTimer} className="bg-yellow-500 text-white px-6 py-2 rounded">Pause</button>
//                   )}
//                   <button onClick={resetTimer} className="bg-gray-500 text-white px-6 py-2 rounded">Reset</button>
//                 </div>
//                 <button 
//                   onClick={() => {
//                     toggleTask(focusTask.id)
//                     setFocusTask(null)
//                     setActiveTab('next-action')
//                   }}
//                   className="bg-blue-500 text-white px-6 py-2 rounded mt-4"
//                 >
//                   Mark as Done
//                 </button>
//               </>
//             ) : (
//               <p className="text-gray-500">No active focus task. Select a task from the list.</p>
//             )}
//           </div>
//         ) : (
//           // Regular Task Management UI
//           <div className="bg-white rounded-lg p-6 shadow-sm">
//             <div className="mb-6">
//               <h2 className="font-semibold text-black">Tasks</h2>
//             </div>

//             {/* Add Task Input */}
//             <div className="mb-4 flex gap-2">
//               <input
//                 type="text"
//                 value={newTask}
//                 onChange={(e) => setNewTask(e.target.value)}
//                 onKeyPress={(e) => { if (e.key === 'Enter') addTask() }}
//                 placeholder="Add a new task..."
//                 className="flex-1 px-4 py-2 border rounded-lg text-black"
//               />
//               <button onClick={addTask} className="bg-gray-100 text-black px-4 py-2 rounded">+</button>
//             </div>

//             {/* Task List */}
//             <div className="space-y-3">
//               {filteredTasks.map(task => (
//                 <div key={task.id} className="flex items-center justify-between p-3 border-b hover:bg-gray-50 transition-colors">
//                   <div className="flex items-center gap-3">
//                     <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} className="w-5 h-5 rounded border-gray-300 text-gray-800"/>
//                     <span className={task.completed ? 'text-gray-400 line-through' : 'text-black'}>{task.text}</span>
//                   </div>
//                   <button onClick={() => startFocusMode(task)} className="bg-blue-500 text-white px-4 py-1 rounded text-sm">Focus</button>
//                 </div>
//               ))}
//               {filteredTasks.length === 0 && (
//                 <div className="text-center text-gray-500 py-4">No tasks yet.</div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }
