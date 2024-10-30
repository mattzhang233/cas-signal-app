export function MenuBar() {
  return (
    <div className="h-7 bg-[#f9f9f9] border-b flex items-center px-2">
      <div className="flex space-x-4">
        <button className="px-2 text-sm hover:bg-gray-200 rounded">File</button>
        <button className="px-2 text-sm hover:bg-gray-200 rounded">Edit</button>
        <button className="px-2 text-sm hover:bg-gray-200 rounded">View</button>
        <button className="px-2 text-sm hover:bg-gray-200 rounded">Help</button>
      </div>
    </div>
  );
}