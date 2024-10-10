import React from "react";

export function Main({ onScrollToProject }) {
    return (
        <div className="text-white flex flex-col justify-center items-center max-h-screen py-12 px-6">
            <div className="text-9xl mb-6">👋</div>
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Hi, my name is Sid ali dendenne</h1>
                <p className="text-lg max-w-xl mx-auto">
                    I’m a passionate web developer specializing in full-stack development. I create dynamic and responsive web applications
                    with a focus on clean, efficient code and user-centered design.
                </p>
                <div className="mt-8">
                    {/* Button that triggers the scroll */}
                    <button
                        onClick={onScrollToProject}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                    >
                        View My Work
                    </button>
                </div>
            </div>
        </div>
    );
}