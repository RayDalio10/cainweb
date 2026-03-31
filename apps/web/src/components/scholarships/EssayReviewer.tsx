import React from 'react';
import { Send, FileText, CheckCircle2, AlertCircle, TrendingUp, HelpCircle } from 'lucide-react';

const EssayReviewer = () => {
  return (
    <div className="flex flex-col h-full space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-center bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Essay Reviewer</h1>
          <p className="text-sm font-medium text-slate-500 mt-2">Get high-quality feedback on your scholarship statements from our Claude 3.5 Sonnet agent.</p>
        </div>
        <div className="flex space-x-4">
          <div className="text-right">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Selected Scholarship</span>
            <p className="text-sm font-black text-rose-600">Chevening Scholarship 2026</p>
          </div>
          <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-slate-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        {/* Editor Side */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col h-[700px] overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <div className="flex items-center space-x-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Essay Draft</h3>
              <span className="px-2 py-1 bg-rose-100 text-rose-600 text-[10px] font-black rounded-lg">Leadership Prompt</span>
            </div>
            <p className="text-[10px] font-bold text-slate-400">452 / 500 Words</p>
          </div>
          <div className="flex-1 p-8">
            <textarea
              className="w-full h-full resize-none focus:outline-none text-slate-700 leading-relaxed font-medium placeholder:text-slate-300"
              placeholder="Paste your essay draft here..."
            />
          </div>
          <div className="p-6 border-t border-slate-100 flex justify-end space-x-3 bg-slate-50/50">
            <button className="px-6 py-3 border border-slate-200 rounded-2xl text-xs font-bold text-slate-500 hover:text-slate-900 hover:bg-white transition-all">
              Save Draft
            </button>
            <button className="px-8 py-3 bg-rose-600 text-white rounded-2xl text-xs font-black shadow-lg shadow-rose-200 hover:bg-rose-700 transition-all flex items-center">
              <Send className="w-4 h-4 mr-2" />
              Analyze Essay
            </button>
          </div>
        </div>

        {/* Feedback Side */}
        <div className="flex flex-col space-y-8 h-[700px] overflow-y-auto pr-2 custom-scrollbar">
          {/* Analysis Card */}
          <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl shadow-slate-200">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Overall Feedback</h3>
                <p className="text-slate-400 text-sm font-medium">Draft #3 | Analyzed by Essay Reviewer</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center justify-center">
                <span className="text-2xl font-black leading-none">8.2</span>
                <span className="text-[10px] font-bold uppercase mt-1 opacity-60">Score</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-500/20 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-green-400 mb-1">Strong Narrative Focus</p>
                  <p className="text-xs text-slate-300 leading-relaxed">Your story about the community health clinic in Lagos is compelling and shows direct impact.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-amber-500/20 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-amber-400 mb-1">Missing Leadership Metrics</p>
                  <p className="text-xs text-slate-300 leading-relaxed">You mention managing a team, but try to quantify it. How many people? What was the budget? What was the outcome?</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Insights Bento */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <TrendingUp className="w-6 h-6 text-rose-600 mb-4" />
              <p className="text-sm font-black text-slate-900 mb-1">Tonal Alignment</p>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">92% Match with Chevening values.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <HelpCircle className="w-6 h-6 text-slate-400 mb-4" />
              <p className="text-sm font-black text-slate-900 mb-1">Clarity Score</p>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">Reading level: Undergraduate+</p>
            </div>
          </div>

          {/* Detailed Feedback List */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Detailed Suggestions</h3>
            </div>
            <div className="p-6 space-y-6">
              {[1, 2].map(i => (
                <div key={i} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                  <p className="text-xs font-black text-rose-600 mb-2 uppercase tracking-wide">Section 2: The Project</p>
                  <p className="text-sm font-bold text-slate-900 leading-relaxed mb-3 italic">"...and then we decided to start the project to help the children."</p>
                  <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-slate-900">
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      "Instead of 'decided to start', use a more active verb like 'spearheaded' or 'conceptualized'. This emphasizes your personal initiative."
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssayReviewer;
