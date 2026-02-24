import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Dashboard from './pages/Dashboard';
import SpaceManagement from './pages/SpaceManagement';
import ApprovalWorkbench from './pages/ApprovalWorkbench';
import ProcessConfig from './pages/ProcessConfig';
import DepartmentManagement from './pages/DepartmentManagement';
import RoleManagement from './pages/RoleManagement';
import MemberManagement from './pages/MemberManagement';
import DataReport from './pages/DataReport';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/spaces" element={<SpaceManagement />} />
          <Route path="/approvals" element={<ApprovalWorkbench />} />
          <Route path="/config" element={<ProcessConfig />} />
          <Route path="/departments" element={<DepartmentManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/members" element={<MemberManagement />} />
          <Route path="/report" element={<DataReport />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;