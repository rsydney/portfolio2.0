import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import './FloatingNav.css'

const FloatingNav = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-3">
      <Button
        asChild
        className="bg-yellow-400 hover:bg-yellow-50 text-black font-semibold px-8 py-6 text-base float-btn"
      >
        <Link to="/design">Design</Link>
      </Button>

      <Button
        asChild
        className="bg-yellow-400 hover:bg-yellow-50 text-black font-semibold px-8 py-6 text-base float-btn-delayed"
      >
        <Link to="/code">Code</Link>
      </Button>
    </div>
  )
}

export default FloatingNav