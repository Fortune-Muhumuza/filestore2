export default function Navbar() {
    return (
      <nav className="bg-blue-600 text-white px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">DocShare</h1>
          <div className="flex items-center space-x-6">
            <a href="/" className="hover:underline">Dashboard</a>
            <a href="/shared-with-me" className="hover:underline">Shared With Me</a>
            <a href="/team-files" className="hover:underline">Teams</a>
          </div>
        </div>
      </nav>
    );
  }
  