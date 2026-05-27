import { Link } from 'react-router-dom'
import RS from '@/assets/RS.png'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center px-8 py-4">
      <Link to="/">
        <img src={RS} alt="RS Logo" className="h-10 w-auto" />
      </Link>
    </nav>
  )
}

export default Navbar