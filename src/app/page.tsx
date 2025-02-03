'use client'
import { useState } from 'react'

interface Task {
  id: number
  text: string
  completed: boolean
  category: 'specific-time' | 'do-it-now' | 'next-action'
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')
  const [activeTab, setActiveTab] = useState<'specific-time' | 'do-it-now' | 'next-action'>('do-it-now')

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { 
        id: Date.now(), 
        text: newTask, 
        completed: false,
        category: activeTab
      }])
      setNewTask('')
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const filteredTasks = tasks.filter(task => task.category === activeTab)

  const getTabTitle = () => {
    switch(activeTab) {
      case 'specific-time':
        return 'Tasks for Specific Time'
      case 'do-it-now':
        return 'Done in Less than 2min'
      case 'next-action':
        return 'Next Action Tasks'
    }
  }

  const getTabSubtitle = () => {
    switch(activeTab) {
      case 'specific-time':
        return 'Schedule it'
      case 'do-it-now':
        return 'Do it Now'
      case 'next-action':
        return 'Plan your next move'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto pt-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-black">FOVY Work Manager</h1>
          <div className="flex gap-4 mb-6">
            <button 
              onClick={() => setActiveTab('specific-time')}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === 'specific-time' 
                  ? 'bg-gray-100 text-black' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Specific Time
            </button>
            <button 
              onClick={() => setActiveTab('do-it-now')}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === 'do-it-now' 
                  ? 'bg-gray-100 text-black' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Do It Now
            </button>
            <button 
              onClick={() => setActiveTab('next-action')}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === 'next-action' 
                  ? 'bg-gray-100 text-black' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Next Action List
            </button>
          </div>
        </div>

        {/* Main Task Container */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <span className="text-gray-400">⏰</span>
              </div>
              <div>
                <h2 className="font-semibold text-black">{getTabTitle()}</h2>
                <p className="text-sm text-gray-500">{getTabSubtitle()}</p>
              </div>
            </div>
          </div>

          {/* Add Task Input */}
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  addTask()
                }
              }}
              placeholder={`Add a new task to ${activeTab.replace('-', ' ')}...`}
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent text-black"
            />
            <button
              onClick={addTask}
              className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors"
            >
              +
            </button>
          </div>

          {/* Task List */}
          <div className="space-y-3">
            {filteredTasks.map(task => (
              <div 
                key={task.id}
                className="flex items-center justify-between p-3 border-b hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 rounded border-gray-300 text-gray-800 focus:ring-gray-800"
                  />
                  <span className={task.completed ? 'text-gray-400 line-through' : 'text-black'}>
                    {task.text}
                  </span>
                </div>
              </div>
            ))}
            {filteredTasks.length === 0 && (
              <div className="text-center text-gray-500 py-4">
                No tasks yet in {activeTab.replace('-', ' ')}. Type a task and press Enter or +
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
