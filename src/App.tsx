import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

const App: React.FC = () => (
  <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path="/tab1" element={<Tab1 />} />
        <Route path="/tab2" element={<Tab2 />} />
        <Route path="/tab3" element={<Tab3 />} />
        <Route path="/" element={<Navigate to="/tab1" replace />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;

