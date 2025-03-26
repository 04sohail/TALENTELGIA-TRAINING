
import './App.css'
import { AuthProvider } from './features/auth/AuthContext'
import AppRoutes from './routes/app_routes'

function App() {

  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  )
}

export default App
