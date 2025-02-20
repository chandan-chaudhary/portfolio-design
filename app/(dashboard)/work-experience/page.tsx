import { experiences, ExperienceProps } from "./experience";

export default function WorkExperience() {

    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
            {experiences.map((exp: ExperienceProps, index: number) => (
                <div key={index} className="relative flex gap-4">
                    <div className="relative flex flex-col items-center">
                        {/* Yellow Dot */}
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        {/* Vertical Line */}
                        <div className="w-0.5 bg-yellow-500 flex-1" />
                    </div>
                    {/* Experience Content */}
                    <div className="pb-8">
                        <h3 className="text-xl font-semibold">{exp.position}</h3>
                        <p className="text-gray-400 flex items-center gap-2">
                            {exp.company} {exp.countryFlag} {exp.location} • {exp.type}
                        </p>
                        <p className="text-gray-500">{exp.duration}</p>
                        <ul className="mt-2 list-disc list-inside text-gray-300">
                            {exp.responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

