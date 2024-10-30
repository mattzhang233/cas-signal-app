import { Minus, Square, X, Triangle, FileText, Save, FolderOpen, Settings, HelpCircle, Info } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function TopBar() {
  return (
    <div className="h-9 bg-white border-b flex items-center justify-between px-3">
      <div className="flex items-center">
        <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-md mr-4">
          <Triangle className="h-4 w-4 fill-blue-500 text-blue-500" />
          <div className="text-sm font-medium">Signal</div>
        </div>
        <div className="flex space-x-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-3 text-sm hover:bg-gray-200 rounded">File</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>New</span>
                <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FolderOpen className="mr-2 h-4 w-4" />
                <span>Open</span>
                <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Save className="mr-2 h-4 w-4" />
                <span>Save</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-3 text-sm hover:bg-gray-200 rounded">Edit</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <span>Undo</span>
                <DropdownMenuShortcut>⌘Z</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Redo</span>
                <DropdownMenuShortcut>⇧⌘Z</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Cut</span>
                <DropdownMenuShortcut>⌘X</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Copy</span>
                <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Paste</span>
                <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-3 text-sm hover:bg-gray-200 rounded">View</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <span>Zoom In</span>
                <DropdownMenuShortcut>⌘+</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Zoom Out</span>
                <DropdownMenuShortcut>⌘-</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-3 text-sm hover:bg-gray-200 rounded">Help</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Documentation</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Info className="mr-2 h-4 w-4" />
                <span>About</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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