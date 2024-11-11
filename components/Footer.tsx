import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image"; // Import the Image component

const Footer: React.FC = () => {
    return (
        <footer className="bg-white mt-4 dark:bg-gray-700/30">
            <div className="container px-6 py-4 mx-auto mt-9">
                <div className="flex flex-col items-center text-center">
                    <a href="#">
                        {/* Replace <img> with <Image> for optimization */}
                        <Image
                            className="w-auto h-16"
                            src="/IOTAxGDG.png" // Make sure to provide a correct path
                            alt="Logo"
                            width={100} // Provide a width (adjust as necessary)
                            height={64} // Provide a height (adjust as necessary)
                        />
                    </a>

                    <p className="max-w-md mx-auto mt-2 text-gray-500 dark:text-gray-400">
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                    </p>

                    <div className="flex flex-col mt-3 sm:flex-row sm:items-center sm:justify-center">
                        <button className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            Register Now
                        </button>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm mt-8 text-gray-500">
                        © Copyright 2021. All Rights Reserved.
                    </p>

                    <div className="flex items-center mt-1 mx-10 sm:mt-0 space-x-8">
                        <div className="flex flex-col items-center mx-4">
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">
                                IOTA
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/company/iota-iiits/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                                    aria-label="IOTA Linkedin"
                                >
                                    <FaLinkedin className="text-xl mb-4" />
                                </a>
                                <a
                                    href="https://www.instagram.com/iota_iiits/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                                    aria-label="IOTA Instagram"
                                >
                                    <FaInstagram className="text-xl mb-4" />
                                </a>
                            </div>
                        </div>

                        <div className="text-gray-500 text-2xl">X</div>

                        <div className="flex flex-col items-center mx-4">
                            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-400 mb-2">
                                GDG
                            </h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/company/gdg-iiits/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                                    aria-label="GDG Linkedin"
                                >
                                    <FaLinkedin className="text-xl mb-4" />
                                </a>
                                <a
                                    href="https://www.instagram.com/gdgiiits/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-blue-500 transition-colors duration-300"
                                    aria-label="GDG Instagram"
                                >
                                    <FaInstagram className="text-xl mb-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
