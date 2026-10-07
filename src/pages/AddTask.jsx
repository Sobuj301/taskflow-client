import { useState } from "react";
import useAuth from "../hooks/useAuth";

const AddTask = () => {
    const {user} = useAuth()
    const userId = user.uid
    const name = user.displayName
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState("")
    const [status, setStatus] = useState('')

    const handleCreateTask = (e) => {

        e.preventDefault()
        const taskInfo = { title, description, priority, status,userId,name }
        fetch('https://taskflow-api-cyan.vercel.app/tasks', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(taskInfo)
        }
        )
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("data inserted successfully")
                    setTitle('')
                    setDescription('')
                    setPriority('')
                    setStatus('')
                }
            })
    }
    return (
        <div className="max-w-lg mx-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6 sm:p-8">
            {/* Form Header */}
            <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-100">Create New Task</h2>
                <p className="text-xs text-slate-400 mt-1">Fill in the details below to add a new task.</p>
            </div>

            <form onSubmit={handleCreateTask} className="space-y-4">
                {/* Task Title Input */}
                <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Task Title
                    </label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        type="text"
                        placeholder="e.g. Design Landing Page"
                        className="input w-full bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                    />
                </div>

                {/* Priority and Status in a 2-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Priority Input */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                            Priority
                        </label>
                        <input
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            required
                            type="text"
                            className="input w-full bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                            placeholder="Select Priority"
                            list="priority-list"
                        />
                        <datalist id="priority-list">
                            <option value="Low" />
                            <option value="Medium" />
                            <option value="High" />
                        </datalist>
                    </div>

                    {/* Status Input */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                            Status
                        </label>
                        <input
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            required
                            type="text"
                            className="input w-full bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                            placeholder="Select Status"
                            list="status-list"
                        />
                        <datalist id="status-list">
                            <option value="Pending" />
                            <option value="In-progress" />
                            <option value="Completed" />
                        </datalist>
                    </div>
                </div>

                {/* Description Textarea */}
                <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="textarea w-full bg-slate-950 border border-slate-800 text-slate-100 placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm h-28 resize-none focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                        placeholder="Add task details..."
                    ></textarea>
                </div>

                {/* Submit Button */}
                <input
                    type="submit"
                    value="Create Task"
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 px-4 rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-200 cursor-pointer text-sm mt-2"
                />
            </form>
        </div>
    );
};

export default AddTask;