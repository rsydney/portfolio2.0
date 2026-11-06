import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import './FloatingNav.css'

const FloatingNav = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 sm:bottom-6 sm:gap-3">
      <Button
        asChild
        className="bg-yellow-400 hover:bg-yellow-50 text-black font-semibold px-5 py-4 text-sm sm:px-8 sm:py-6 sm:text-base float-btn"
      >
        <Link to="/design">Design</Link>
      </Button>

      <Button
        asChild
        className="bg-yellow-400 hover:bg-yellow-50 text-black font-semibold px-5 py-4 text-sm sm:px-8 sm:py-6 sm:text-base float-btn-delayed"
      >
        <Link to="/code">Code</Link>
      </Button>
    </div>
  )
}

export default FloatingNav