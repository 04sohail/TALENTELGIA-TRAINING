import './App.css';
import { AuthProvider } from './features/auth/AuthContext';
import AppRoutes from './routes/app_routes';
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <AuthProvider>
      <UserProvider >
        <AppRoutes />
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
