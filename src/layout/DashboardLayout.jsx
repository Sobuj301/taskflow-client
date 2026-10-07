import { Link, NavLink, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const {user,loading} = useAuth()
 
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-94 bg-slate-900 border-r border-slate-800/80 p-6 flex flex-col shrink-0">
        {/* Logo / Brand Name */}
        <Link to="/" className="flex items-center gap-3 px-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
            T
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            TaskFlow
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="space-y-1.5 flex-1">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`
            }
          >
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/dashboard/tasks"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`
            }
          >
            <span>My Tasks</span>
          </NavLink>

          <NavLink
            to="/dashboard/addTask"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                isActive
                  ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`
            }
          >
            <span>Create Task</span>
          </NavLink>
        </nav>

        {/* Footer info or User status */}
        <div className="pt-6 mt-6 border-t border-slate-800/80 px-2 text-xs text-slate-500">
          TaskFlow Dashboard v1.0
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 bg-slate-950 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;