import { Link } from 'react-router-dom'
import RS from '@/assets/RS.png'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center px-4 py-3 sm:px-8 sm:py-4">
      <Link to="/">
        <img src={RS} alt="RS Logo" className="h-8 w-auto sm:h-10" />
      </Link>
    </nav>
  )
}

export default Navbar