
interface JobExperienceProps {
    title: string;
    date: string;
    company: string;
    location: string;
    responsibilities: string[];
    }

// components/JobExperience.jsx
export default function JobExperience({ title, date, company, location, responsibilities }: JobExperienceProps) {
  return (
    <div className="relative mb-12 pl-8">
      {/* Dot on the green line */}
      <div className="absolute left-[-1rem] top-2 w-4 h-4 bg-green-500 rounded-full border-4 border-black"></div>
      
      {/* Job details */}
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-sm font-light italic text-gray-400">{date}</p>
      <p className="mt-1 text-md font-medium text-gray-300">{company}, {location}</p>
      <ul className="mt-4 list-disc list-outside pl-5 space-y-2 text-gray-400">
        {responsibilities.map((item, index) => (
          <li key={index}><b>{item.split(":")[0]}:</b>{item.split(":")[1]}</li>
        ))}
      </ul>
    </div>
  );
}


