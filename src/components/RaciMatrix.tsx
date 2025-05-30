import React from 'react';
import { useRaciContext } from '../context/RaciContext';
import RaciCell from './RaciCell';

const RaciMatrix: React.FC = () => {
  const { roles, activities, raciData } = useRaciContext();

  if (roles.length === 0 || activities.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="bg-blue-50 rounded-full p-4 mb-4">
          <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="mt-2 text-lg font-medium text-gray-900">Get started with your RACI diagram</h3>
        <p className="mt-1 text-sm text-gray-500">
          Add roles and activities in the sidebar to create your RACI matrix.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10">
              Activities / Roles
            </th>
            {roles.map((role, index) => (
              <th 
                key={`header-${index}`} 
                scope="col" 
                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {role || `Role ${index + 1}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {activities.map((activity, activityIndex) => (
            <tr key={`row-${activityIndex}`} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 sticky left-0 bg-white z-10 border-r border-gray-200">
                {activity || `Activity ${activityIndex + 1}`}
              </td>
              {roles.map((_, roleIndex) => (
                <RaciCell 
                  key={`cell-${activityIndex}-${roleIndex}`}
                  activityIndex={activityIndex}
                  roleIndex={roleIndex}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RaciMatrix;