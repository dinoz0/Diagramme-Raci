import React from 'react';
import { ChevronLeft, ChevronRight, Download, Plus, Save, Trash2 } from 'lucide-react';
import Header from './components/Header';
import RaciMatrix from './components/RaciMatrix';
import Sidebar from './components/Sidebar';
import { RaciProvider } from './context/RaciContext';

function App() {
  return (
    <RaciProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <div className="flex flex-col md:flex-row flex-1">
          <Sidebar />
          <main className="flex-1 p-4 md:p-8">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Project RACI Matrix</h2>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                    <Save size={20} />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex space-x-2">
                  <button className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors">
                    <ChevronLeft size={16} className="mr-1" />
                    Previous
                  </button>
                  <button className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition-colors">
                    Next
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
                <span className="text-sm text-gray-500">Page 1 of 1</span>
              </div>
              <RaciMatrix />
            </div>
          </main>
        </div>
      </div>
    </RaciProvider>
  );
}

export default App;