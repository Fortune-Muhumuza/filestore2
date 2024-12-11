import { FileListProps } from "../../../types/components";

const FileList: React.FC<FileListProps> = ({ files, onSelect }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <ul>
        {files.map((file, index) => (
          <li
            key={index}
            className="py-2 px-3 border-b hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelect(file)}
          >
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;

  