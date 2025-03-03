// File: src/components/ui/SidebarMenu.tsx

import { useState } from 'react';

interface SidebarMenuProps {
  onAdjust: () => void;
}

export default function SidebarMenu({ onAdjust }: SidebarMenuProps) {
  return (
    <div className="flex flex-col space-y-2 p-4 bg-gray-100">
      <button onClick={onAdjust} className="px-4 py-2 bg-blue-500 text-white rounded">
        Adjust Parameters
      </button>
      {/* You can add more buttons as needed */}
    </div>
  );
}