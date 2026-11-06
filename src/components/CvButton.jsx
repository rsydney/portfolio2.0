import { FileText } from 'lucide-react'

const CvButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/SYDNEYCV.pdf'
    link.download = ''
    link.click()
  }

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-4 right-4 z-50 bg-white text-black p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 sm:bottom-6 sm:right-6 sm:p-3"
      title="Télécharger mon CV"
    >
      <FileText size={20} className="sm:hidden" />
      <FileText size={24} className="hidden sm:block" />
    </button>
  )
}

export default CvButton