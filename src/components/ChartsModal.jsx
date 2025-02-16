import React from 'react'
import { X } from 'lucide-react'

const ChartsModal = ({ isOpen, onClose, imageUrl, imageTitle }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg lg:text-xl font-medium">{imageTitle}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          <img src={imageUrl || "/placeholder.svg"} alt={imageTitle} className="w-full h-auto max-h-[70vh] object-contain rounded-lg" />
        </div>
      </div>
    </div>
  )
}

export default ChartsModal
