import { Route, Routes } from 'react-router-dom';
import Home from './home';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
