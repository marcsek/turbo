import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import TrpcQueryProvider from './providers/trpcQuery.provider';

function App() {
  return (
    <TrpcQueryProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<h1>Main page</h1>} />
            <Route path="login" element={<LoginForm />} />
            <Route element={<RequireAuth />}>
              <Route path="protected" element={<div>Protected Route</div>} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </TrpcQueryProvider>
  );
}

export default App;
