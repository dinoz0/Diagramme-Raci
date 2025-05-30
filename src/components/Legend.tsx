import React from 'react';

const Legend: React.FC = () => {
  const items = [
    { label: 'R', description: 'Responsible - Does the work', color: 'bg-green-100 text-green-800' },
    { label: 'A', description: 'Accountable - Ultimately answerable', color: 'bg-blue-100 text-blue-800' },
    { label: 'C', description: 'Consulted - Asked for input', color: 'bg-yellow-100 text-yellow-800' },
    { label: 'I', description: 'Informed - Kept updated', color: 'bg-purple-100 text-purple-800' }
  ];

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">RACI Legend</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-center">
            <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center font-medium mr-2`}>
              {item.label}
            </div>
            <span className="text-sm text-gray-600">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;