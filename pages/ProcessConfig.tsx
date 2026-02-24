import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProcessConfig: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-20">
      <header className="px-5 py-4 flex items-center justify-between sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50">
        <button onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-start text-slate-600 dark:text-slate-400">
            <span className="material-icons-round text-3xl">chevron_left</span>
        </button>
        <h1 className="text-lg font-semibold">流程配置</h1>
        <button className="text-primary font-medium">保存</button>
      </header>

      <main className="px-4 space-y-6">
        <section>
            <h2 className="px-2 mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">预订规则设置</h2>
            <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden divide-y divide-slate-100 dark:divide-slate-700 shadow-sm">
                <div className="flex items-center justify-between px-4 py-3.5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                            <span className="material-icons-round text-xl">verified_user</span>
                        </div>
                        <span className="font-medium">需要审批</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox"/>
                        <div className="w-12 h-7 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500"></div>
                    </label>
                </div>
                <div className="flex items-center justify-between px-4 py-3.5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                            <span className="material-icons-round text-xl">schedule</span>
                        </div>
                        <span className="font-medium">允许跨天预订</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input className="sr-only peer" type="checkbox"/>
                        <div className="w-12 h-7 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-500"></div>
                    </label>
                </div>
            </div>
        </section>

        <section>
            <div className="flex items-center justify-between px-2 mb-4">
                <h2 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">多级审批流</h2>
                <button className="text-xs font-bold text-primary flex items-center gap-1">
                    <span className="material-icons-round text-sm">add_circle</span>
                    重置模板
                </button>
            </div>
            
            <div className="space-y-0 relative ml-6">
                <div className="absolute left-[-1.5rem] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 ml-[11px]"></div>
                
                {/* Level 1 */}
                <div className="relative mb-8">
                    <div className="absolute left-[-1.5rem] top-4 w-6 h-6 rounded-full bg-primary border-4 border-background-light dark:border-background-dark flex items-center justify-center z-10">
                        <span className="text-[10px] text-white font-bold tracking-tighter">1</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h3 className="font-bold text-sm">直属主管审批</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">申请人所在部门负责人</p>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-500 font-medium">或签</span>
                        </div>
                        <div className="flex -space-x-2">
                             <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?u=1" alt="u1"/></div>
                             <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?u=2" alt="u2"/></div>
                             <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-primary text-[10px] font-bold">+3</div>
                        </div>
                    </div>
                </div>

                 {/* Level 2 */}
                 <div className="relative mb-8">
                    <div className="absolute left-[-1.5rem] top-4 w-6 h-6 rounded-full bg-primary border-4 border-background-light dark:border-background-dark flex items-center justify-center z-10">
                        <span className="text-[10px] text-white font-bold tracking-tighter">2</span>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <h3 className="font-bold text-sm">行政中心终审</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">指定具体岗位或人员</p>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">会签</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-slate-400">
                                <span className="material-icons-round text-lg">person_add</span>
                            </div>
                            <span className="text-xs text-slate-400">点击添加审批人</span>
                        </div>
                    </div>
                </div>

                <div className="relative pb-4">
                    <div className="absolute left-[-1.5rem] top-0 w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-background-light dark:border-background-dark flex items-center justify-center z-10">
                        <span className="material-icons-round text-slate-400 dark:text-slate-600 text-sm">add</span>
                    </div>
                    <button className="w-full border-2 border-dashed border-slate-200 dark:border-slate-800 py-3 rounded-xl flex items-center justify-center gap-2 text-slate-400 dark:text-slate-500 text-sm font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                        <span className="material-icons-round text-lg">playlist_add</span>
                        添加审批层级
                    </button>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default ProcessConfig;