import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const activeClass = "text-primary dark:text-primary";
  const inactiveClass = "text-slate-400 dark:text-slate-500";

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-effect border-t border-slate-100 dark:border-slate-800 px-6 py-2 flex justify-between items-end pb-6 z-50 max-w-[480px] mx-auto">
      <button onClick={() => navigate('/')} className={`flex flex-col items-center ${isActive('/') ? activeClass : inactiveClass}`}>
        <span className="material-icons-round text-2xl">dashboard</span>
        <span className="text-[10px] mt-1 font-medium">看板</span>
      </button>
      
      <button onClick={() => navigate('/spaces')} className={`flex flex-col items-center ${isActive('/spaces') ? activeClass : inactiveClass}`}>
        <span className="material-icons-round text-2xl">meeting_room</span>
        <span className="text-[10px] mt-1 font-medium">预订</span>
      </button>

      <div className="relative -top-5">
         <button className="w-14 h-14 rounded-full bg-primary shadow-lg shadow-indigo-300 dark:shadow-indigo-900/40 flex items-center justify-center text-white transform active:scale-95 transition-transform">
            <span className="material-icons-round text-3xl">add</span>
         </button>
      </div>

      <button onClick={() => navigate('/report')} className={`flex flex-col items-center ${isActive('/report') ? activeClass : inactiveClass}`}>
        <span className="material-icons-round text-2xl">analytics</span>
        <span className="text-[10px] mt-1 font-medium">报表</span>
      </button>

      <button onClick={() => navigate('/members')} className={`flex flex-col items-center ${isActive('/members') ? activeClass : inactiveClass}`}>
        <span className="material-icons-round text-2xl">person_outline</span>
        <span className="text-[10px] mt-1 font-medium">我的</span>
      </button>
    </nav>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  // Hide bottom nav on specific configuration or detail pages if needed
  const showNav = ['/', '/spaces', '/report', '/members'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 relative">
       {/* Status Bar Shim */}
       <div className="px-6 pt-4 pb-2 flex justify-between items-center text-xs font-semibold sticky top-0 z-50 bg-inherit">
        <span>9:41</span>
        <div className="flex items-center space-x-1">
          <span className="material-icons-round text-sm">signal_cellular_alt</span>
          <span className="material-icons-round text-sm">wifi</span>
          <span className="material-icons-round text-sm">battery_full</span>
        </div>
      </div>
      
      <div className={`pb-24`}>
        {children}
      </div>

      {showNav && <BottomNav />}
    </div>
  );
};
