import { TeamSelectorProps } from "../../types/components";

const TeamSelector: React.FC<TeamSelectorProps> = ({ teams, onSelect }) => {
  return (
    <select
      className="border p-2 rounded-lg"
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">Select a Team</option>
      {teams.map((team) => (
        <option key={team.id} value={team.id}>
          {team.name}
        </option>
      ))}
    </select>
  );
};

export default TeamSelector;
