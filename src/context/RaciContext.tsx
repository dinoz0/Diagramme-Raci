import React, { createContext, useContext, useState } from 'react';

// Define the shape of our context
interface RaciContextType {
  roles: string[];
  activities: string[];
  raciData: Record<number, Record<number, string>>;
  addRole: () => void;
  removeRole: (index: number) => void;
  updateRoleName: (index: number, name: string) => void;
  addActivity: () => void;
  removeActivity: (index: number) => void;
  updateActivityName: (index: number, name: string) => void;
  updateRaciValue: (activityIndex: number, roleIndex: number, value: string) => void;
}

// Create context with default values
const RaciContext = createContext<RaciContextType>({
  roles: [],
  activities: [],
  raciData: {},
  addRole: () => {},
  removeRole: () => {},
  updateRoleName: () => {},
  addActivity: () => {},
  removeActivity: () => {},
  updateActivityName: () => {},
  updateRaciValue: () => {},
});

export const useRaciContext = () => useContext(RaciContext);

interface RaciProviderProps {
  children: React.ReactNode;
}

export const RaciProvider: React.FC<RaciProviderProps> = ({ children }) => {
  const [roles, setRoles] = useState<string[]>(['Product Owner', 'Project Manager', 'Designer', 'Developer', 'QA']);
  const [activities, setActivities] = useState<string[]>([
    'Requirements gathering', 
    'Design approval', 
    'Implementation',
    'Testing',
    'Deployment'
  ]);
  const [raciData, setRaciData] = useState<Record<number, Record<number, string>>>({
    0: { 0: 'A', 1: 'R', 2: 'C', 3: 'I', 4: '' },
    1: { 0: 'A', 1: 'C', 2: 'R', 3: 'I', 4: '' },
    2: { 0: 'I', 1: 'A', 2: 'C', 3: 'R', 4: 'C' },
    3: { 0: '', 1: 'C', 2: '', 3: 'C', 4: 'R' },
    4: { 0: 'I', 1: 'A', 2: '', 3: 'R', 4: 'C' }
  });

  const addRole = () => {
    setRoles([...roles, '']);
  };

  const removeRole = (index: number) => {
    const newRoles = [...roles];
    newRoles.splice(index, 1);
    setRoles(newRoles);

    // Update raciData to remove the deleted role
    const newRaciData = { ...raciData };
    Object.keys(newRaciData).forEach((activityKey) => {
      const activityIndex = Number(activityKey);
      const newActivityData = { ...newRaciData[activityIndex] };
      
      // Shift all roles after the deleted one
      for (let i = index; i < roles.length - 1; i++) {
        newActivityData[i] = newActivityData[i + 1];
      }
      
      // Remove the last role
      delete newActivityData[roles.length - 1];
      
      newRaciData[activityIndex] = newActivityData;
    });
    
    setRaciData(newRaciData);
  };

  const updateRoleName = (index: number, name: string) => {
    const newRoles = [...roles];
    newRoles[index] = name;
    setRoles(newRoles);
  };

  const addActivity = () => {
    setActivities([...activities, '']);
  };

  const removeActivity = (index: number) => {
    const newActivities = [...activities];
    newActivities.splice(index, 1);
    setActivities(newActivities);

    // Update raciData to remove the deleted activity
    const newRaciData = { ...raciData };
    delete newRaciData[index];
    
    // Shift all activities after the deleted one
    for (let i = index; i < activities.length - 1; i++) {
      newRaciData[i] = newRaciData[i + 1];
    }
    
    // Remove the last activity
    delete newRaciData[activities.length - 1];
    
    setRaciData(newRaciData);
  };

  const updateActivityName = (index: number, name: string) => {
    const newActivities = [...activities];
    newActivities[index] = name;
    setActivities(newActivities);
  };

  const updateRaciValue = (activityIndex: number, roleIndex: number, value: string) => {
    const newRaciData = { ...raciData };
    
    // Initialize activity object if it doesn't exist
    if (!newRaciData[activityIndex]) {
      newRaciData[activityIndex] = {};
    }
    
    // Update value
    newRaciData[activityIndex][roleIndex] = value;
    
    setRaciData(newRaciData);
  };

  const value = {
    roles,
    activities,
    raciData,
    addRole,
    removeRole,
    updateRoleName,
    addActivity,
    removeActivity,
    updateActivityName,
    updateRaciValue,
  };

  return <RaciContext.Provider value={value}>{children}</RaciContext.Provider>;
};