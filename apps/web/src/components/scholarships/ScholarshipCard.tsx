import React from 'react';
import { Award, Calendar, DollarSign, ExternalLink } from 'lucide-react';

interface ScholarshipCardProps {
  title: string;
  provider: string;
  amount: string;
  deadline: string;
  matchScore: number;
  eligibility: string;
}

const ScholarshipCard = ({ title, provider, amount, deadline, matchScore, eligibility }: ScholarshipCardProps) => {
  const scoreColor = matchScore >= 0.9 ? 'text-green-600' : matchScore >= 0.7 ? 'text-blue-600' : 'text-amber-600';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-rose-50 rounded-xl group-hover:bg-rose-100 transition-colors">
            <Award className="w-6 h-6 text-rose-600" />
          </div>
          <div className="text-right">
            <span className={`text-xl font-black ${scoreColor}`}>
              {Math.round(matchScore * 100)}%
            </span>
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Match Score</p>
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-1 leading-tight">{title}</h3>
        <p className="text-sm font-medium text-slate-500 mb-4">{provider}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-slate-600">
            <DollarSign className="w-4 h-4 mr-2 text-slate-400" />
            <span className="text-xs font-semibold">{amount}</span>
          </div>
          <div className="flex items-center text-slate-600">
            <Calendar className="w-4 h-4 mr-2 text-slate-400" />
            <span className="text-xs font-semibold">{deadline}</span>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl mb-6">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Eligibility Highlights</p>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 italic">"{eligibility}"</p>
        </div>

        <div className="flex space-x-3">
          <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-center">
            View Details
          </button>
          <button className="px-4 py-3 border border-slate-200 rounded-xl text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
