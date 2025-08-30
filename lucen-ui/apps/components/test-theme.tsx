"use client"

import { ComponentThemeProvider, useComponentTheme } from './components/theme/component-theme-provider';
import ComponentThemeToggle from './components/theme/component-theme-toggle';

function TestContent() {
  const { theme } = useComponentTheme();
  
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Theme Test ({theme})
      </h1>
      
      <ComponentThemeToggle size="md" />
      
      <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Test Card
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          This card should change colors when you toggle the theme.
          Current theme: {theme}
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded">
          <span className="text-blue-800 dark:text-blue-200">Blue card</span>
        </div>
        <div className="p-3 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded">
          <span className="text-green-800 dark:text-green-200">Green card</span>
        </div>
      </div>
    </div>
  );
}

export default function TestTheme() {
  return (
    <ComponentThemeProvider defaultTheme="dark">
      <TestContent />
    </ComponentThemeProvider>
  );
}
