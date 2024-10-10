import React from "react";
import Img1 from "../assets/projects/E-Commerce-Review-Sentiment-Analysis-API.png";

export function Project() {
    const projects = [
        {
            title: "E-Commerce Review Sentiment Analysis API",
            description: "This API utilizes the Sentiment library to analyze customer reviews for e-commerce platforms. This API processes review text to determine overall sentiment, categorizing it as positive, negative, or neutral. After analysis, it generates a detailed PDF report summarizing the sentiment findings, providing valuable insights for businesses to enhance customer experience and make data-driven decisions.",
            code: "https://github.com/alilo113/E-Commerce-Review-Sentiment-Analysis-API",
            preview: "https://api-webpage.pages.dev/",
        },
        {
            title: "E-commerce-Store",
            description: "A fully functional E-Commerce store that enables users to browse, search for, and purchase products across multiple categories. The platform supports features such as user authentication, product filtering, and a smooth checkout process. It also offers a responsive design, ensuring a seamless shopping experience on both desktop and mobile devices. Additionally, the store integrates payment gateways, allowing for secure and efficient transactions.",
            code: "https://github.com/alilo113/E-commerce-Store", 
        }
    ];

    return (
        <>
            <h1 className="text-4xl font-bold mb-8 text-center text-white">My work</h1>
            <div className="flex justify-center items-center flex-wrap gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden w-full sm:w-80">
                        <div className="p-4">
                            <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                            <p className="text-gray-300">{project.description}</p>
                            {project.preview ?  (
                            <button className="mr-4 mt-4 bg-blue-500 text-white p-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
                                <a href={project.preview}>Preview</a>
                            </button>
                            ) : (
                                null
                            )}
                            <button className="bg-blue-500 text-white p-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
                                <a href={project.code}>Code source</a>
                            </button>
                        </div>
                    </div>
                ))} 
            </div>
        </>
    );
}