import { FileBox, LogOut, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">ProofLock</span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900"
          >
            Dashboard
          </Link>
          <Link
            to="/upload"
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900"
          >
            <FileBox className="h-5 w-5" />
            Upload Evidence
          </Link>
          <Button variant="outline" size="sm">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}