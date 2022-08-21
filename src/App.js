import 'antd/dist/antd.css';
import './static/style/main.css'
import { Route, Routes } from 'react-router-dom';
import LayoutWrapper from './layout/Layout';
import Dashboard from './page/dashboard/Dashboard';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutWrapper />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
