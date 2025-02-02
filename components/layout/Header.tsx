import React from 'react';
const Header: React.FC = () => {
    return (
        <header className='text-white py-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='text-2xl font-bold'>
                    <a href="/" className='hover:underline text-orange-500'>Logo</a>
                </div>
                <div className="flex-grow mx-4 relative">
                    <input 
                    type="text" 
                    placeholder='Search...'
                    className="w-full py-2 px-4 pl-10 rounded-lg border border-gray-300 text-gray-600"
                    />
                    <span className='absolute top-1/2 transform -translate-y-1/2 left-3'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35m-5.65 0a7 7 0 100-14 7 7 0 000 14z"
                                className='text-gray-600'
                            />
                        </svg>
                    </span>
                </div>
                {/* Sign In and Sign Up Buttons */}
                <div className='space-x-4'>
                    <button className='py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-600'>Sign In</button>
                    <button className='py-2 px-4 bg-green-500 rounded-lg hover:bg-green-600'>Sign Up</button>
                </div>
            </div>
            <nav className='mt-4'>
                <ul className='flex justify-center space-x-8'>
                    <li>
                        <a href="#" className='hover:underline'>Rooms</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Mansion</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Countryside</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Apartments</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;