// Mock data for Users
export const mockUsers = [
    {
      id: 1,
      username: "admin_user",
      email: "admin@example.com",
      password: "password123",
      role: "admin",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      username: "john_doe",
      email: "john.doe@example.com",
      password: "password123",
      role: "user",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      username: "jane_smith",
      email: "jane.smith@example.com",
      password: "password123",
      role: "manager",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      username: "team_lead",
      email: "team.lead@example.com",
      password: "password123",
      role: "user",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      username: "student_user",
      email: "student.user@example.com",
      password: "password123",
      role: "user",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
  ];
  
  // Mock data for Teams
  export const mockTeams = [
    {
      id: 1,
      name: "Engineering Team",
      description: "Handles all product development and maintenance.",
      members: [1, 2, 3],
    },
    {
      id: 2,
      name: "Marketing Team",
      description: "Focuses on advertising and outreach campaigns.",
      members: [3, 4],
    },
    {
      id: 3,
      name: "Student Group A",
      description: "Study group for project collaboration.",
      members: [4, 5],
    },
  ];
  
  // Mock data for Files
  export const mockFiles = [
    {
      id: 1,
      name: "Design_Document.pdf",
      path: "/files/Design_Document.pdf",
      uploadedBy: 1,
      uploadDate: "2024-11-01T10:15:30Z",
      size: "2 MB",
      tags: ["design", "project"],
      version: 1,
      teamId: 1,
    },
    {
      id: 2,
      name: "Marketing_Plan.docx",
      path: "/files/Marketing_Plan.docx",
      uploadedBy: 2,
      uploadDate: "2024-11-02T12:00:00Z",
      size: "1.5 MB",
      tags: ["marketing"],
      version: 2,
      teamId: 2,
    },
    {
      id: 3,
      name: "Group_Project.xlsx",
      path: "/files/Group_Project.xlsx",
      uploadedBy: 5,
      uploadDate: "2024-11-03T14:30:00Z",
      size: "4 MB",
      tags: ["study", "group work"],
      version: 1,
      teamId: 3,
    },
  ];
  
  // Mock data for Activity Logs
  export const mockActivityLogs = [
    {
      id: 1,
      userId: 1,
      action: "Uploaded file Design_Document.pdf",
      timestamp: "2024-11-01T10:16:00Z",
    },
    {
      id: 2,
      userId: 2,
      action: "Downloaded file Marketing_Plan.docx",
      timestamp: "2024-11-02T12:30:00Z",
    },
    {
      id: 3,
      userId: 5,
      action: "Shared file Group_Project.xlsx",
      timestamp: "2024-11-03T15:00:00Z",
    },
    {
      id: 4,
      userId: 3,
      action: "Updated team description for Marketing Team",
      timestamp: "2024-11-04T11:20:00Z",
    },
  ];
  
  // Mock data for Notifications
  export const mockNotifications = [
    {
      id: 1,
      message: "Your file Design_Document.pdf has been approved.",
      type: "info",
      timestamp: "2024-11-01T11:00:00Z",
    },
    {
      id: 2,
      message: "Team Engineering Team shared a new file: Design_Document.pdf",
      type: "team",
      timestamp: "2024-11-01T12:00:00Z",
    },
    {
      id: 3,
      message: "Your file Marketing_Plan.docx was downloaded by john_doe.",
      type: "file",
      timestamp: "2024-11-02T12:30:00Z",
    },
    {
      id: 4,
      message: "Group_Project.xlsx has been shared with your team.",
      type: "team",
      timestamp: "2024-11-03T15:15:00Z",
    },
  ];
  
  // Mock data for Tags
  export const mockTags = [
    { id: 1, name: "design" },
    { id: 2, name: "project" },
    { id: 3, name: "marketing" },
    { id: 4, name: "study" },
    { id: 5, name: "group work" },
  ];
  
  // Mock data for Roles and Permissions
  export const mockRoles = [
    {
      role: "admin",
      permissions: ["create_user", "delete_user", "upload_file", "delete_file", "manage_teams"],
    },
    {
      role: "manager",
      permissions: ["upload_file", "delete_file", "manage_teams"],
    },
    {
      role: "user",
      permissions: ["upload_file", "download_file"],
    },
  ];
  
  // Mock data for Team Requests
  export const mockTeamRequests = [
    {
      id: 1,
      userId: 4,
      teamId: 1,
      status: "pending",
      requestDate: "2024-11-05T09:00:00Z",
    },
    {
      id: 2,
      userId: 5,
      teamId: 3,
      status: "approved",
      requestDate: "2024-11-06T10:30:00Z",
    },
  ];
  
  