import { FileBox, History, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
            Dashboard
          </h1>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-blue-600" />
                <h2 className="ml-3 text-lg font-medium text-gray-900">
                  Evidence Status
                </h2>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                All evidence files are secure and verified
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center">
                <FileBox className="h-8 w-8 text-blue-600" />
                <h2 className="ml-3 text-lg font-medium text-gray-900">
                  Recent Uploads
                </h2>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                3 new evidence files in the last 24 hours
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <div className="flex items-center">
                <History className="h-8 w-8 text-blue-600" />
                <h2 className="ml-3 text-lg font-medium text-gray-900">
                  Access Logs
                </h2>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                View detailed access history
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="rounded-lg bg-white shadow">
              <div className="p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Recent Activity
                </h3>
                <div className="mt-6">
                  <Button>View All Activity</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}