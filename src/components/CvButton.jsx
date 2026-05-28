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
      className="fixed bottom-6 right-6 z-50 bg-white text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      title="Télécharger mon CV"
    >
      <FileText size={24} />
    </button>
  )
}

export default CvButton