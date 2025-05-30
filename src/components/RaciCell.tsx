import React from 'react';
import { useRaciContext } from '../context/RaciContext';

interface RaciCellProps {
  activityIndex: number;
  roleIndex: number;
}

const RaciCell: React.FC<RaciCellProps> = ({ activityIndex, roleIndex }) => {
  const { raciData, updateRaciValue } = useRaciContext();
  
  const options = [
    { value: '', label: '' },
    { value: 'R', label: 'R', title: 'Responsible' },
    { value: 'A', label: 'A', title: 'Accountable' },
    { value: 'C', label: 'C', title: 'Consulted' },
    { value: 'I', label: 'I', title: 'Informed' }
  ];

  const currentValue = raciData[activityIndex] && raciData[activityIndex][roleIndex]
    ? raciData[activityIndex][roleIndex]
    : '';

  const getColorClass = (value: string) => {
    switch (value) {
      case 'R':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'A':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'C':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      case 'I':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      default:
        return 'bg-gray-50 text-gray-500 hover:bg-gray-100';
    }
  };
  
  const handleChange = (value: string) => {
    updateRaciValue(activityIndex, roleIndex, value);
  };
  
  return (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
      <div className="flex justify-center">
        <select
          value={currentValue}
          onChange={(e) => handleChange(e.target.value)}
          className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 appearance-none ${getColorClass(currentValue)}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} title={option.title}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </td>
  );
};

export default RaciCell;