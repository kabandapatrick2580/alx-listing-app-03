import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className='bg-gray-800 text-white py-6'>
            <div>
                <div>
                    <ul>
                        <li>
                            <a href="#">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth={2}
                                        stroke='currentColor'
                                        className='w-6 h-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d="M12 6.75a4 4 0 100 8 4 4 0 000-8zm0 0V5.25a4.5 4.5 0 019 0V6.75M3.75 6.75a4.5 4.5 0 019 0"
                                        />
                                    </svg>
                                </span>
                                <span>Privacy Policy</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6.75V3.75m0 3V12m-8.25-2.25V21.25A2.25 2.25 0 006 21.25h12a2.25 2.25 0 002.25-2.25V4.5"
                                        />
                                    </svg>
                                </span>
                                <span>Contact us</span>
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Social Media Icons */}
                <div>
                    <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.94 2a8.94 8.94 0 019 8.94v.86a3.89 3.89 0 01-3.89 3.88H12v6.13a9 9 0 10-1.06-20z"
                                />
                        </svg>
                    </a>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.75 9a3.75 3.75 0 007.5 0M9.38 10a3.74 3.74 0 006.34 1.91 5.47 5.47 0 005.24-1.63 8.63 8.63 0 01-2.25 2.13"
                                    />
                            </svg>
                        </a>
                        <a href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 3h2.63a3.13 3.13 0 013.12 3.12V21a2.88 2.88 0 01-3 2.88h-4.75"
                                />
                            </svg>
                        </a>
                    
                </div>
                {/* Copy Right */}
                <p>&copy; 2025 My Property Listing. all rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;