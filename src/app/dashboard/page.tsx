'use client'
import { useState } from "react";
import { DashboardFile, SharedFilesSummary, TeamActivity } from "../../types/components";
import FileUpload from "../components/FileUpload";
import FileList from "../components/FileList";
import { mockUsers, mockFiles, mockTeams, mockActivityLogs } from "../data/mockdata";

const Dashboard: React.FC = () => {
  // State for uploaded files
  const [files, setFiles] = useState<DashboardFile[]>([]);

  // Shared files summary
  const sharedFilesSummary: SharedFilesSummary = {
    sharedWithMe: 12,
    sharedByMe: 8,
  };

  // Team activity stats
  const teamActivity: TeamActivity = {
    activityPercentage: 75,
  };

  // File upload handler
  const handleUpload = (file: File) => {
    const newFile: DashboardFile = {
      name: file.name,
      uploadDate: new Date().toLocaleDateString(),
    };
    setFiles([...files, newFile]);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

            {/* Statistics Section */}
            <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-xl font-bold">{mockUsers.length}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold">Total Files</h3>
          <p className="text-xl font-bold">{mockFiles.length}</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-lg font-semibold">Total Teams</h3>
          <p className="text-xl font-bold">{mockTeams.length}</p>
        </div>
      </div>

      {/* File Upload Section */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Upload Files</h2>
        <FileUpload onUpload={handleUpload} />
      </section>

      {/* Recent Files Section */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Uploads</h2>
        {files.length > 0 ? (
          <FileList files={files} onSelect={(file) => alert(file.name)} />
        ) : (
          <p className="text-gray-500">No recent uploads</p>
        )}
      </section>

      {/* Shared Files Summary */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Shared Files</h2>
        <div className="flex justify-between">
          <div className="text-center">
            <p className="text-2xl font-bold">{sharedFilesSummary.sharedWithMe}</p>
            <p className="text-gray-500">Shared With Me</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">{sharedFilesSummary.sharedByMe}</p>
            <p className="text-gray-500">Shared By Me</p>
          </div>
        </div>
      </section>

      {/* Team Collaboration Stats */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Team Collaboration</h2>
        <p className="text-gray-500">Your teams are actively sharing files.</p>
        <div className="mt-4 flex items-center">
          <div className="w-full bg-gray-200 rounded h-3">
            <div
              className="bg-blue-500 h-3 rounded"
              style={{ width: `${teamActivity.activityPercentage}%` }}
            ></div>
          </div>
          <span className="ml-3 text-sm">
            {teamActivity.activityPercentage}% Activity
          </span>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
