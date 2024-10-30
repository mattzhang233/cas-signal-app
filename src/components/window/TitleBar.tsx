import { Minus, Square, X } from "lucide-react";

export function TitleBar() {
  return (
    <div className="h-9 bg-white border-b flex items-center justify-between px-3">
      <div className="flex-1">
        <div className="text-sm font-medium">Desktop App</div>
      </div>
      <div className="flex space-x-2">
        <button className="p-1 hover:bg-gray-100 rounded">
          <Minus className="h-4 w-4" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <Square className="h-4 w-4" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded text-red-600">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}