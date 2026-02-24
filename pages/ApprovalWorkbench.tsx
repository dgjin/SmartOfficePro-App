import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Approval } from '../types';
import { useNavigate } from 'react-router-dom';

const ApprovalWorkbench: React.FC = () => {
  const [approvals, setApprovals] = useState<Approval[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.getApprovals().then(setApprovals);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <header className="px-5 pt-2 pb-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center justify-between mb-6">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
            <span className="material-icons-round">arrow_back_ios_new</span>
            </button>
            <h1 className="text-lg font-bold">审批工作台</h1>
            <button className="p-2 -mr-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
            <span className="material-icons-round">more_horiz</span>
            </button>
        </div>
        <div className="bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-xl flex items-center">
            <button className="flex-1 py-1.5 text-sm font-medium rounded-lg bg-white dark:bg-slate-700 shadow-sm transition-all">待审批</button>
            <button className="flex-1 py-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">已通过</button>
            <button className="flex-1 py-1.5 text-sm font-medium text-slate-500 dark:text-slate-400">已驳回</button>
        </div>
      </header>

      <main className="flex-1 px-5 pb-32 space-y-4 overflow-y-auto hide-scrollbar">
        {approvals.map((item, idx) => (
             <div key={item.id} className={`bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 ${idx > 0 ? 'opacity-80' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <img alt={item.applicant.name} className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700" src={item.applicant.avatar}/>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white">{item.applicant.name}</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{item.applicant.role}</p>
                        </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-500 rounded-full uppercase tracking-wider">等待审批</span>
                </div>

                <div className="space-y-3 py-4 border-y border-slate-50 dark:border-slate-700/50">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
                            <span className="material-icons-round text-primary text-sm">meeting_room</span>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">预订房间</p>
                            <p className="text-sm font-semibold">{item.roomName}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
                            <span className="material-icons-round text-primary text-sm">schedule</span>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">使用时间</p>
                            <p className="text-sm font-semibold">{item.time}</p>
                        </div>
                    </div>
                    {item.description && (
                         <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                                <span className="material-icons-round text-primary text-sm">description</span>
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tight">申请事由</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-400">申请时间：{item.appliedAt}</span>
                    <button className="text-primary text-xs font-bold flex items-center gap-1">
                        查看详情 <span className="material-icons-round text-sm">chevron_right</span>
                    </button>
                </div>
             </div>
        ))}
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-100 dark:border-slate-800 z-50 max-w-[480px] mx-auto">
        <div className="flex gap-4 max-w-md mx-auto">
            <button className="flex-1 py-4 px-6 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold active:scale-95 transition-transform">
                驳回
            </button>
            <button className="flex-[2] py-4 px-6 rounded-2xl bg-primary text-white font-bold shadow-lg shadow-indigo-500/30 active:scale-95 transition-transform flex items-center justify-center gap-2">
                <span className="material-icons-round text-[20px]">check_circle</span>
                通过
            </button>
        </div>
        {/* iOS Home Indicator */}
        <div className="mt-4 flex justify-center">
            <div className="w-32 h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalWorkbench;