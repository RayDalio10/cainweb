import React from 'react';
import { Calendar as CalendarIcon, Clock, ChevronRight } from 'lucide-react';

const DeadlineCalendar = () => {
  const deadlines = [
    { id: 1, title: 'Chevening Scholarship', date: 'Nov 1, 2025', daysLeft: 215, color: 'text-rose-600', bg: 'bg-rose-50' },
    { id: 2, title: 'Mastercard Foundation - Edinburgh', date: 'May 15, 2026', daysLeft: 410, color: 'text-blue-600', bg: 'bg-blue-50' },
    { id: 3, title: 'Rhodes Trust West Africa', date: 'Sep 30, 2025', daysLeft: 182, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden animate-in slide-in-from-right duration-700">
      <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <CalendarIcon className="w-5 h-5 text-slate-900" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 leading-none mb-1">Scholarship Calendar</h3>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Upcoming Deadlines</p>
          </div>
        </div>
        <button className="text-rose-600 font-black text-xs uppercase tracking-widest hover:underline transition-all">
          Sync Calendar
        </button>
      </div>

      <div className="p-8 space-y-6">
        {deadlines.map((d) => (
          <div key={d.id} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-3xl hover:border-slate-200 hover:shadow-md transition-all group">
            <div className="flex items-center space-x-6">
              <div className={`w-16 h-16 ${d.bg} rounded-2xl flex flex-col items-center justify-center border-l-4 border-slate-900 shadow-sm`}>
                <span className={`text-xl font-black ${d.color}`}>{d.daysLeft}</span>
                <span className="text-[8px] font-black uppercase tracking-tighter text-slate-400">Days Left</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-rose-600 transition-colors leading-tight">{d.title}</h4>
                <div className="flex items-center text-slate-400">
                  <Clock className="w-3.5 h-3.5 mr-2" />
                  <p className="text-xs font-semibold">{d.date}</p>
                </div>
              </div>
            </div>
            <button className="p-3 bg-slate-50 rounded-xl text-slate-400 group-hover:bg-slate-900 group-hover:text-white transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        ))}

        <div className="p-6 bg-slate-900 rounded-3xl text-center relative overflow-hidden mt-4">
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
          <h4 className="text-white text-sm font-bold mb-2">Need a checklist?</h4>
          <p className="text-slate-400 text-[10px] font-medium leading-relaxed mb-4 px-4">Our AI Mentor can help you break down these deadlines into daily tasks.</p>
          <button className="px-6 py-2 bg-rose-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-700 transition-all shadow-lg shadow-rose-900/50">
            Start Mentorship
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeadlineCalendar;
