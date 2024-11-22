
interface SkillsCardProps {
    title: string;
    skills: string[];
    }

export default function SkillsCard({ title, skills }: SkillsCardProps) {
  return (
    <div className="relative group bg-gray-800 rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:bg-green-900 hover:bg-opacity-70">
      {/* Border Lighting Effect */}
      <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-sky-500 transition duration-300 ease-in-out"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-slate-200 opacity-0 group-hover:opacity-20 transition duration-300 ease-in-out"></div>

      {/* Card Title */}
      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-blue-100 transition duration-300 ease-in-out text-center">
        {title}
      </h3>

      {/* Skills List */}
      <ul className="flex flex-wrap justify-center gap-3 text-center">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-500 transition duration-200 ease-in-out"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
