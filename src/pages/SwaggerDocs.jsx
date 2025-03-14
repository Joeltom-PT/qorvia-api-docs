import { useState } from 'react'
import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import { apiServices } from '../config/services'
import { XMarkIcon } from '@heroicons/react/24/outline'

function SwaggerDocs() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">API Documentation</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apiServices.map((service) => (
          <div key={service.url} className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <button
              onClick={() => setSelectedService(service)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View API
            </button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-50">
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all w-full max-w-6xl max-h-[90vh] overflow-y-auto">
                <div className="absolute right-0 top-0 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setSelectedService(null)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <h3 className="text-xl font-semibold leading-6 text-gray-900 mb-4">
                    {selectedService.name}
                  </h3>
                  <div className="mt-2">
                    <SwaggerUI url={selectedService.url} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SwaggerDocs