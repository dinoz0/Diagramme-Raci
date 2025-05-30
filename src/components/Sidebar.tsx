import React from 'react';
import { useRaciContext } from '../context/RaciContext';
import { Plus, Trash2 } from 'lucide-react';

const Sidebar: React.FC = () => {
  const { 
    roles, 
    activities,
    addRole, 
    addActivity, 
    removeRole, 
    removeActivity, 
    updateRoleName, 
    updateActivityName 
  } = useRaciContext();

  const handleRoleChange = (index: number, value: string) => {
    updateRoleName(index, value);
  };

  const handleActivityChange = (index: number, value: string) => {
    updateActivityName(index, value);
  };

  return (
    <aside className="w-full md:w-80 bg-white border-r border-gray-200 p-4 md:p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-900">Roles</h3>
          <button 
            onClick={addRole}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            aria-label="Add role"
          >
            <Plus size={18} />
          </button>
        </div>
        <div className="space-y-2">
          {roles.map((role, index) => (
            <div key={`role-${index}`} className="flex items-center">
              <input
                type="text"
                value={role}
                onChange={(e) => handleRoleChange(index, e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Role name"
              />
              <button 
                onClick={() => removeRole(index)}
                className="ml-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Remove role"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-medium text-gray-900">Activities</h3>
          <button 
            onClick={addActivity}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            aria-label="Add activity"
          >
            <Plus size={18} />
          </button>
        </div>
        <div className="space-y-2">
          {activities.map((activity, index) => (
            <div key={`activity-${index}`} className="flex items-center">
              <input
                type="text"
                value={activity}
                onChange={(e) => handleActivityChange(index, e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Activity name"
              />
              <button 
                onClick={() => removeActivity(index)}
                className="ml-2 p-1 text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Remove activity"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;