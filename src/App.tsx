import { Window } from "./components/window/Window";

function App() {
  return (
    <Window>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Desktop App</h1>
        <p className="mt-2 text-gray-600">This is the main content area.</p>
      </div>
    </Window>
  );
}

export default App;