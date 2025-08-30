'use client';

import React, { createContext, useContext, useState } from 'react';
import clsx from 'clsx';

interface TabsContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tab components must be used within a TabGroup');
  }
  return context;
}

export function TabGroup({ 
  children, 
  defaultValue 
}: { 
  children: React.ReactNode;
  defaultValue?: string;
}) {
  const [activeTab, setActiveTab] = useState(defaultValue || '0');

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabList({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { tabIndex: index.toString() });
        }
        return child;
      })}
    </div>
  );
}

export function Tab({ 
  children, 
  tabIndex 
}: { 
  children: React.ReactNode;
  tabIndex?: string;
}) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === tabIndex;

  return (
    <button
      onClick={() => setActiveTab(tabIndex || '0')}
      className={clsx(
        'px-4 py-2 font-medium text-sm transition-colors relative',
        {
          'text-blue-600 dark:text-blue-400': isActive,
          'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200': !isActive,
        }
      )}
    >
      {children}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" />
      )}
    </button>
  );
}

export function TabPanels({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function TabPanel({ 
  children, 
  tabIndex 
}: { 
  children: React.ReactNode;
  tabIndex?: string;
}) {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === tabIndex;

  if (!isActive) return null;

  return <div>{children}</div>;
}
