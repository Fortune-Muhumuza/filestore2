export default function Sidebar() {
    return (
      <aside className="w-64 bg-white shadow-lg h-screen p-6">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <ul className="space-y-4">
          <li>
            <a href="/dashboard" className="block py-2 px-3 rounded hover:bg-gray-200">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/teamfiles" className="block py-2 px-3 rounded hover:bg-gray-200">
              Team Files
            </a>
          </li>
          <li>
            <a href="/sharedwithme" className="block py-2 px-3 rounded hover:bg-gray-200">
              Shared With Me
            </a>
          </li>
        </ul>
      </aside>
    );
  }
  