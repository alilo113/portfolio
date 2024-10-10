import React, { useRef } from "react";
import { Header } from "./header";
import { Main } from "./main";
import { Skills } from "./skills";
import { Project } from "./projects";

export function Home() {
    // Create a reference for the Project section
    const projectRef = useRef(null);

    // Scroll handler to scroll to the Project section
    const scrollToProject = () => {
        projectRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-zinc-900 min-h-screen">
            <Header/>
            {/* Pass the scroll handler to the Main component */}
            <Main onScrollToProject={scrollToProject} />
            <Skills/>
            {/* Assign the ref to the Project component */}
            <div ref={projectRef}>
                <Project/>
            </div>
        </div>   
    );
}