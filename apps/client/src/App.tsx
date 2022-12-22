import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import TrpcQueryProvider from './providers/trpcQuery.provider';
import LoginSucess from './components/LoginForm/LoginSucess';

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
          <Route path="/login/sucess" element={<LoginSucess />} />
        </Routes>
      </Router>
    </TrpcQueryProvider>
  );
}

export default App;
