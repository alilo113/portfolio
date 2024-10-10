import React from "react";

export function Skills() {
    const skills = [
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' },
        { name: 'React', icon: '⚛️' },
        { name: 'JavaScript', icon: '📜' },
        { name: 'MongoDB', icon: '🍃' },
    ];

    return (
        <div className="p-6 items-center">
            <h1 className="text-4xl font-bold mb-8 text-center text-white">My Skills</h1>
            <div className="flex flex-wrap gap-4 justify-center">
                {skills.map(skill => (
                    <div
                        key={skill.name}
                        className="cursor-pointer w-fit bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105"
                    >
                        <div className="text-6xl text-white">{skill.icon}</div>
                        <h2 className="text-xl font-semibold text-white">{skill.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}