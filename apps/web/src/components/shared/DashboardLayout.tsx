import React from 'react';
import { LayoutDashboard, Search, FileText, Calendar, MessageSquare, Settings } from 'lucide-react';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-red-600">ScholarPath AI</h1>
        </div>
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-3 text-gray-700 bg-gray-100 rounded-lg">
                <LayoutDashboard className="w-5 h-5 mr-3" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Search className="w-5 h-5 mr-3" />
                <span>Scholarship Scout</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
                <FileText className="w-5 h-5 mr-3" />
                <span>Essay Reviewer</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
                <Calendar className="w-5 h-5 mr-3" />
                <span>Deadlines</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-3 text-gray-600 hover:bg-gray-100 rounded-lg">
                <MessageSquare className="w-5 h-5 mr-3" />
                <span>Interview Coach</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h2 className="text-xl font-semibold">Dashboard Overview</h2>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Settings className="w-6 h-6" />
            </button>
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
              MA
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
