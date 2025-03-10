import { useState } from "react";

export default function ToggleButton() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div 
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${enabled ? 'bg-green-500' : 'bg-gray-300'}`}
      onClick={() => setEnabled(!enabled)}
    >
      <div 
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ${enabled ? 'translate-x-8' : 'translate-x-0'}`}
      />
    </div>
  );
}
