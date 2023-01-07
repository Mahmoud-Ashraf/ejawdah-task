import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import ReservedNameRequest from './views/ReserveNameRequest/ReserveNameRequest';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reserved-name-request" element={<ReservedNameRequest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
