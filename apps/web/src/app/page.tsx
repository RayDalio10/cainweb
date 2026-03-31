import DashboardLayout from '@/components/shared/DashboardLayout';
import ScholarshipCard from '@/components/scholarships/ScholarshipCard';
import DeadlineCalendar from '@/components/scholarships/DeadlineCalendar';
import { Sparkles, ArrowRight, UserCheck, Search, BookOpen, GraduationCap } from 'lucide-react';

export default function Home() {
  const mockScholarships = [
    {
      title: 'Mastercard Foundation Scholars Program',
      provider: 'University of Edinburgh',
      amount: 'Fully Funded',
      deadline: 'May 15, 2026',
      matchScore: 0.95,
      eligibility: 'Citizens of Sub-Saharan African countries, including Nigeria.',
    },
    {
      title: 'Chevening Scholarships',
      provider: 'UK Government',
      amount: 'Full Tuition + Stipend',
      deadline: 'Nov 1, 2025',
      matchScore: 0.88,
      eligibility: 'Nigerian citizens with 2+ years of work experience.',
    },
    {
      title: 'Rhodes Trust West Africa',
      provider: 'Oxford University',
      amount: 'Fully Funded',
      deadline: 'Sep 30, 2025',
      matchScore: 0.72,
      eligibility: 'High-achieving West African students (Nigeria, Ghana, etc.).',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-12 animate-in fade-in duration-1000">
        {/* Welcome Hero Bento Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-slate-200 group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-rose-600/30 transition-all duration-700" />
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-rose-400 text-xs font-black uppercase tracking-widest flex items-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  AI Matching Active
                </div>
                <div className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-slate-400 text-xs font-black uppercase tracking-widest">
                  v1.0 Beta
                </div>
              </div>
              <h2 className="text-5xl font-black tracking-tight leading-[1.1] mb-6">
                Hello, May Asagba. <br />
                <span className="text-slate-400">Your potential is global.</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg max-w-lg mb-10 leading-relaxed italic">
                "We found <span className="text-white font-bold">12 new fully-funded scholarships</span> that match your Mechanical Engineering background and 4.5 GPA."
              </p>
              <div className="flex items-center space-x-4">
                <button className="px-10 py-5 bg-rose-600 text-white rounded-3xl text-sm font-black shadow-xl shadow-rose-900/50 hover:bg-rose-700 hover:scale-105 transition-all flex items-center group">
                  Start My Applications
                  <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-3xl text-sm font-black hover:bg-white/20 transition-all">
                  Update Academic Profile
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center shadow-sm">
                  <UserCheck className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Verification Status</p>
                  <p className="text-sm font-black text-slate-900">4 / 5 Documents Verified</p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center shadow-sm">
                  <Search className="w-6 h-6 text-slate-400" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Scout Searches</p>
                  <p className="text-sm font-black text-slate-900">142 Opportunities Indexed</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Current Goals</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-500">Masters in Renewable Energy</span>
                  <span className="font-black text-rose-600">80% Ready</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-600 w-4/5 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-start">
          <section className="xl:col-span-2 space-y-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <Sparkles className="w-5 h-5 text-rose-600" />
                </div>
                <h3 className="text-2xl font-black tracking-tight text-slate-900">High Probability Matches</h3>
              </div>
              <button className="text-sm font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">
                View Detailed Matches
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mockScholarships.map((s, i) => (
                <ScholarshipCard key={i} {...s} />
              ))}
            </div>

            {/* AI Insights Card */}
            <div className="bg-rose-600 rounded-[2rem] p-10 text-white shadow-2xl shadow-rose-200 relative overflow-hidden flex items-center group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-1000" />
              <div className="flex-1 space-y-4">
                <h4 className="text-2xl font-bold">The Essay Reviewer is Ready.</h4>
                <p className="text-rose-100 font-medium text-sm leading-relaxed max-w-lg italic">
                  "Your Personal Statement for the Mastercard Foundation Scholarship is currently at 72%. Our AI Reviewer suggests more focus on your leadership in local NGOs to reach the 90%+ tier."
                </p>
                <button className="px-8 py-4 bg-white text-rose-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center">
                  Review Essay Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
              <div className="hidden lg:flex w-24 h-24 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 items-center justify-center">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
            </div>
          </section>

          <aside className="space-y-12">
            <DeadlineCalendar />

            {/* Quick Actions Bento */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Quick Actions</h4>
              <div className="grid grid-cols-1 gap-4">
                <button className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center text-left hover:bg-white hover:shadow-md transition-all group">
                  <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center mr-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Upload Transcript</span>
                </button>
                <button className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center text-left hover:bg-white hover:shadow-md transition-all group">
                  <div className="w-10 h-10 bg-white rounded-xl border border-slate-200 flex items-center justify-center mr-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Mock Interview Session</span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </DashboardLayout>
  );
}

// Sub-component for MessageSquare icon
const MessageSquare = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);
