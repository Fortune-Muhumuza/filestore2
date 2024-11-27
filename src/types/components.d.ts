// Types for FileUpload Component
export interface FileUploadProps {
    onUpload: (file: File) => void;
  }
  
  // Types for FileList Component
  export interface FileListProps {
    files: FileItem[];
    onSelect: (file: FileItem) => void;
  }
  
  // Types for FileDetails Component
  export interface FileDetailsProps {
    file: FileItem | null; // Nullable for "No file selected" state
  }
  
  // Types for TeamSelector Component
  export interface TeamSelectorProps {
    teams: Team[];
    onSelect: (teamId: string) => void;
  }
  
  // Types for Layout Component
  export interface LayoutProps {
    children: React.ReactNode; // Represents the child components rendered inside Layout
  }

  // Dashboard Page Props
export interface DashboardProps {}

// File object used in the Dashboard's state
export interface DashboardFile {
  name: string;
  uploadDate: string; // Example: "2024-11-25" (formatted as string)
}

// Types for Shared File Summary
export interface SharedFilesSummary {
  sharedWithMe: number; // Total number of files shared with the user
  sharedByMe: number;   // Total number of files shared by the user
}

// Types for Team Collaboration Activity
export interface TeamActivity {
  activityPercentage: number; // Percentage of team collaboration (0-100)
}

  