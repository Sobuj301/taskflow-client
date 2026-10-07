import { useEffect, useRef, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';

const Tasks = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const modelRef = useRef(null);

    useEffect(() => {
        axiosSecure.get(`/tasks?userId=${user.uid}`)
            .then(data => {
                setTasks(data.data);
                setLoading(false)
            })
    }, []);

    const handleOpen = (task) => {
        setSelectedTask({ ...task });
        modelRef.current.showModal();
    };

    const handleUpdateTask = (e) => {
        e.preventDefault();
        fetch(`https://taskflow-api-cyan.vercel.app/tasks/${selectedTask._id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(selectedTask)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    setTasks(tasks.map(t => t._id === selectedTask._id ? selectedTask : t));
                    modelRef.current.close();
                }
            });
    };

    const handleDeleteTask = (id) => {
        if (!confirm("Are you sure you want to delete this task?")) return;
        fetch(`https://taskflow-api-cyan.vercel.app/tasks/${id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setTasks(tasks.filter(task => task._id !== id));
                }
            });
    };

    return (

        <div>
            {loading ? (
                <div className="flex flex-col justify-center items-center h-64 space-y-4">
                    <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-gray-400 font-medium animate-pulse">Loading tasks...</span>
                </div>
            ) :
                <div className="p-6 max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-white">My Tasks</h2>

                    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50 shadow-xl">
                        <table className="table w-full">
                            <thead className="bg-slate-800/80 text-slate-300">
                                <tr>
                                    <th>SL</th>
                                    <th>Title</th>
                                    <th>Name</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr><td colSpan="5" className="text-center py-6">Loading tasks...</td></tr>
                                ) : tasks.length === 0 ? (
                                    <tr><td colSpan="5" className="text-center py-6 text-slate-400">No tasks found.</td></tr>
                                ) : (
                                    tasks.map((task, index) => (
                                        <tr key={task._id} className="hover:bg-slate-800/40 border-b border-slate-800">
                                            <th>{index + 1}</th>
                                            <td className="font-medium text-white">{task.title}</td>
                                            <td className="font-medium text-white">{task.name}</td>
                                            <td>
                                                <span className={`badge ${task.priority === 'High' ? 'badge-error' : task.priority === 'Medium' ? 'badge-warning' : 'badge-info'}`}>
                                                    {task.priority}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="badge badge-ghost border-slate-700">{task.status}</span>
                                            </td>
                                            <td className="text-right space-x-2">
                                                <button onClick={() => handleOpen(task)} className="btn btn-xs btn-outline btn-info">Edit</button>
                                                <button onClick={() => handleDeleteTask(task._id)} className="btn btn-xs btn-outline btn-error">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Interactive Edit Modal */}
                    <dialog ref={modelRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box bg-slate-900 text-white border border-slate-800">
                            <h3 className="font-bold text-lg text-indigo-400 mb-4">Edit Task</h3>
                            {selectedTask && (
                                <form onSubmit={handleUpdateTask} className="space-y-4">
                                    <div>
                                        <label className="label text-xs text-slate-400">Title</label>
                                        <input
                                            type="text"
                                            className="input input-bordered w-full bg-slate-800 text-white"
                                            value={selectedTask.title}
                                            onChange={(e) => setSelectedTask({ ...selectedTask, title: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="label text-xs text-slate-400">Priority</label>
                                            <select
                                                className="select select-bordered w-full bg-slate-800 text-white"
                                                value={selectedTask.priority}
                                                onChange={(e) => setSelectedTask({ ...selectedTask, priority: e.target.value })}
                                            >
                                                <option value="Low">Low</option>
                                                <option value="Medium">Medium</option>
                                                <option value="High">High</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="label text-xs text-slate-400">Status</label>
                                            <select
                                                className="select select-bordered w-full bg-slate-800 text-white"
                                                value={selectedTask.status}
                                                onChange={(e) => setSelectedTask({ ...selectedTask, status: e.target.value })}
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="In-progress">In-progress</option>
                                                <option value="Completed">Completed</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="modal-action">
                                        <button type="button" onClick={() => modelRef.current.close()} className="btn btn-ghost text-slate-400">Cancel</button>
                                        <button type="submit" className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 text-white border-0">Save Changes</button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </dialog>
                </div>
            }
        </div>
    );
};

export default Tasks;