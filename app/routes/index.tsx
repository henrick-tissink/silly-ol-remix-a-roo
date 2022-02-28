import  { Navigate } from 'react-router-dom'

// Take us somewhere that we can work with
// index is quite useless for routing
export default function Index() {
  return (
    <Navigate to="/selector/color" />
  )
}
