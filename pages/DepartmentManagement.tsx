import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Department } from '../types';
import { useNavigate } from 'react-router-dom';

const DepartmentManagement: React.FC = () => {
  const [depts, setDepts] = useState<Department[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.getDepartments().then(setDepts);
  }, []);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24">
      <header className="h-14 bg-white/80 dark:bg-slate-900/80 sticky top-0 z-50 backdrop-blur-md px-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
            <button onClick={() => navigate('/roles')} className="text-slate-600">
                 <span className="material-icons text-xl">corporate_fare</span>
            </button>
            <h1 className="text-lg font-bold tracking-tight">部门管理</h1>
        </div>
        <div className="flex gap-4">
            <button className="text-primary hover:opacity-70 transition-opacity">
                <span className="material-icons">add_circle_outline</span>
            </button>
            <button className="text-slate-500 dark:text-slate-400 hover:opacity-70 transition-opacity">
                <span className="material-icons">search</span>
            </button>
        </div>
      </header>

      <main className="p-4 space-y-3">
        {depts.map((dept, index) => (
            <div key={dept.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="material-icons text-slate-400 dark:text-slate-500 text-sm">
                            {index === 0 ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}
                        </span>
                        <div>
                            <h3 className="font-semibold text-slate-800 dark:text-slate-100">{dept.name}</h3>
                            <p className="text-xs text-slate-400 dark:text-slate-500">{dept.memberCount} 人</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                            <span className="material-icons text-[20px]">add_box</span>
                        </button>
                        <button className="p-2 text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                            <span className="material-icons text-[20px]">edit</span>
                        </button>
                    </div>
                </div>
                
                {dept.subDepartments && (
                    <div className="pl-11 pr-4 pb-4 space-y-4 border-t border-slate-50 dark:border-slate-700/50 pt-4">
                        {dept.subDepartments.map(sub => (
                            <div key={sub.id} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-6 bg-primary/20 rounded-full"></div>
                                    <div>
                                        <h4 className="text-sm font-medium text-slate-700 dark:text-slate-200">{sub.name}</h4>
                                        <p className="text-[10px] text-slate-400">{sub.memberCount} 人</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <button className="p-1.5 text-slate-300 dark:text-slate-600 hover:text-primary">
                                        <span className="material-icons text-sm">edit</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ))}
      </main>

      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-40">
        <span className="material-icons">add</span>
      </button>
    </div>
  );
};

export default DepartmentManagement;