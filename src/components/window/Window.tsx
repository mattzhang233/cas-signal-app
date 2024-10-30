import { TopBar } from "./TopBar";
import { StatusBar } from "./StatusBar";

export function Window({ children }: { children?: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="w-full h-[calc(100vh-4rem)] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col">
        <TopBar />
        <main className="flex-1 overflow-auto">
          {children}
        </main>
        <StatusBar />
      </div>
    </div>
  );
}