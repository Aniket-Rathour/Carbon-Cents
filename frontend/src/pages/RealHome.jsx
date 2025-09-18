import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';

import { Users, UserPlus, Desktop, CaretDown, ArrowUpRight, Play, Pause, Alarm, User, CreditCard, FileArrowUp, CalendarBlank, Rocket, Check } from '@phosphor-icons/react';

const FAQItem = ({ index, question, answer, openQuestionIndex, setOpenQuestionIndex }) => {
    const isOpen = openQuestionIndex === index;

    return (
        <div className="border-b border-dashed border-gray-200 py-2 w-full">
            <button
                className="flex justify-between items-center w-full cursor-pointer"
                onClick={() => setOpenQuestionIndex(isOpen ? null : index)}
            >
                <span className="font-light">{question}</span>
                <CaretDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="mt-2 text-gray-600 text-center">
                    {answer}
                </div>
            )}
        </div>
    );
};

const WeeklyActivityChart = () => {
    const activityData = [
        { day: 'S', height: 'h-8', color: 'bg-gray-200' }, // Sunday gray
        { day: 'M', height: 'h-12', color: 'bg-black' }, // Monday black
        { day: 'T', height: 'h-16', color: 'bg-black' }, // Tuesday black
        { day: 'W', height: 'h-10', color: 'bg-black' }, // Wednesday black
        { day: 'T', height: 'h-10', color: 'bg-black' }, // Thursday black
        { day: 'F', height: 'h-24', color: 'bg-yellow-400', timer: '2h 30m' }, // Friday yellow
        { day: 'S', height: 'h-10', color: 'bg-gray-200' }, // Saturday gray
    ];

    return (
        <div className="relative flex flex-col items-center">
            {/* Dotted line */}
            <div className="absolute inset-x-0 top-1/4 border-t-2 border-dashed border-gray-100"></div> {/* Dotted line */}

            {/* Bars */}
            <div className="flex items-end justify-between w-full h-24"> {/* Fixed height for bars container */}
                {activityData.map((item, index) => (
                    <div key={index} className="flex flex-col items-center"> {/* Wrapper for bar and dot */}
                        <div className={`relative w-2 rounded-full ${item.color} ${item.height}`}>
                            {item.timer && (
                                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-yellow-400 text-white text-xs px-5 py-1 rounded-full min-w-[5rem] text-center">
                                    {item.timer}
                                </div>)}
                        </div>
                        {/* Dot below the bar */}
                        <div className={`w-2 h-2 rounded-full ${item.color} ${item.day === 'S' || item.day === 'T' ? 'mt-3' : 'mt-1'}`}></div> {/* Dot with same color and width, conditional mt */}
                    </div>
                ))}
            </div>

            {/* Days */}
            <div className="flex justify-between w-full mt-1">
                {activityData.map((item, index) => (
                    <p key={index} className="text-xs text-gray-500">{item.day}</p>
                ))}
            </div>
        </div>
    );
};

const FAQList = () => {
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
    const faqs = [
        { question: "What is Carbon Cents?", answer: "Carbon Cents is a platform that helps you track and reduce your carbon footprint." },
        { question: "How can I earn rewards?", answer: "You can earn rewards by completing eco-friendly challenges and reducing your carbon emissions." },
        { question: "Is my data secure?", answer: "Yes, we use industry-standard encryption and security measures to protect your data." },
        { question: "How do I get started?", answer: "Simply sign up, complete your profile, and start tracking your environmental impact." },
    ];

    return (
        <>
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    index={index}
                    question={faq.question}
                    answer={faq.answer}
                    openQuestionIndex={openQuestionIndex}
                    setOpenQuestionIndex={setOpenQuestionIndex}
                />
            ))}
        </>
    );
};

function RealHome() {
    const [timerValue, setTimerValue] = useState(0); // Initialize timer

    useEffect(() => {
        const interval = setInterval(() => {
            setTimerValue(prevValue => prevValue + 1); // Increment timer every second
        }, 1000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_right,#fff59d,#F3F4F6)]">
            <Navigation />
            <main className="pt-32 flex flex-col h-screen pb-8">
                {/* Top Header Section */}
                <div className="flex justify-between items-start mb-8 px-8">
                    {/* Left Side - now includes Interview, Hired, Project Time, and Output Text */}
                    <div>
                        <h1 className="text-6xl font-light text-gray-900 mb-6">Welcome in, Aniket</h1>
                        <div className="flex space-x-2">
                            {/* Interview Section */}
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-gray-700 text-left pl-2">Interview</p>
                                <div className="w-28 h-12 bg-[#30302E] rounded-full mt-2 flex items-center justify-start pl-2 text-white text-base font-light"> {/* Changed justify-end pr-2 to justify-start pl-2 */}
                                    15%
                                </div>
                            </div>
                            {/* Hired Section */}
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-gray-700 text-left pl-2">Hired</p>
                                <div className="w-28 h-12 bg-[#fed95f] rounded-full mt-2 flex items-center justify-start pl-2 text-black text-base font-light"> {/* Changed justify-end pr-2 to justify-start pl-2 */}
                                    15%
                                </div>
                            </div>
                            {/* Project Time Section */}
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-gray-700 text-left pl-2">Project time</p>
                                <div className="w-96 h-12 bg-[repeating-linear-gradient(45deg,_#ffffff_0_5px,_transparent_0_10px)] rounded-full mt-2 flex items-center justify-start pl-2 text-black text-base font-light"> {/* Changed justify-end pr-2 to justify-start pl-2 */}
                                    60%
                                </div>
                            </div>
                            {/* Output Text Section (moved here) */}
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-gray-700 text-left pl-2">Output text</p>
                                <div className="w-28 h-12 border border-black rounded-full mt-2 flex items-center justify-start pl-2 text-black text-base font-light"> {/* Changed justify-end pr-2 to justify-start pl-2 */}
                                    10%
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex space-x-8 self-end">
                        <div className="flex items-end">
                            <div className="flex flex-col items-center mr-1">
                                <div className="bg-black/10 backdrop-blur-sm rounded-xl p-1">
                                    <Users size={20} />
                                </div>
                                <p className="text-xs text-black mt-1">Employee</p>
                            </div>
                            <p className="text-8xl font-extralight">78</p>
                        </div>
                        <div className="flex items-end">
                            <div className="flex flex-col items-center mr-1">
                                <div className="bg-black/10 backdrop-blur-sm rounded-xl p-1">
                                    <UserPlus size={20} />
                                </div>
                                <p className="text-xs text-blackmt-1">Hiring</p>
                            </div>
                            <p className="text-8xl font-extralight">56</p>
                        </div>
                        <div className="flex items-end">
                            <div className="flex flex-col items-center mr-1">
                                <div className="bg-black/10 backdrop-blur-sm rounded-xl p-1">
                                    <Desktop size={20} />
                                </div>
                                <p className="text-xs text-black mt-1">Projects</p>
                            </div>
                            <p className="text-8xl font-extralight">203</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex space-x-1 mt-8 px-8 flex-grow">
                    {/* Left Column */}
                    <div className="flex-1 flex flex-col rounded-4xl space-y-1 h-full">
                        {/* Top Card */}
                        <div className="flex-1 rounded-4xl bg-cover bg-center p-4 relative overflow-hidden" style={{ backgroundImage: `url('https://i.pinimg.com/736x/39/6d/f5/396df568a4325fe46c4a4801e198e7ef.jpg')` }}>
                            <div className="absolute inset-0  rounded-4xl"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-2/7 rounded-b-4xl backdrop-blur-md">
                                <div className="absolute inset-0 rounded-b-4xl"></div>
                            </div>
                            <div className="relative z-10 text-white h-full flex flex-row justify-between items-end p-1">
                                <div>
                                    <p className="text-2xl font-light">Aasheesh</p>
                                    <p className="text-sm">SDE - 1</p>
                                </div>
                                <button className="border border-white bg-transparent text-white rounded-full px-6 py-3 text-lg font-bold">
                                    $2000
                                </button>
                            </div>
                        </div>

                        {/* Bottom Card */}
                        <div className="flex-1 bg-white/80 rounded-4xl p-4 backdrop-blur-sm">
                            <div className="flex flex-col space-y-2 items-center h-full">
                                <FAQList />
                            </div>
                        </div>
                    </div>

                    {/* Middle Column (double size) */}
                    <div className="flex-2 flex flex-col rounded-4xl space-y-1 h-full">
                        {/* Top Half */}
                        <div className="flex-1 flex space-x-1 ">
                            {/* Top-Left Card */}
                            <div className="flex-1 bg-white/70 rounded-4xl p-8 backdrop-blur-sm flex flex-col h-full">
                                {/* Top row: Progress and Icon, now including Work Time */}
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center">
                                        <p className="text-lg font-light">Progress</p>
                                        <div className="bg-white rounded-full p-1">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>

                                    {/* Work Time / thisWeek */}
                                    <div className="flex items-end h-full mt-4">
                                        <p className="text-4xl font-light">6.1h</p>
                                        <div className="flex flex-col ml-2">
                                            <p className="text-sm font-light">Work Time</p>
                                            <p className="text-xs text-gray-500 font-light">thisWeek</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bar Chart Component */}
                                <div className="mt-8">
                                    <WeeklyActivityChart />
                                </div>
                            </div>
                            {/* Top-Right Card */}
                            <div className="flex-1 bg-white/70 rounded-4xl p-8 backdrop-blur-sm flex flex-col justify-between">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-lg font-light">Time Tracker</p>
                                    <div className="bg-white rounded-full p-1">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <div className="relative w-40 h-40 flex items-center justify-center "> {/* Outer container for SVG and text */}
                                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                            {/* Black dashed background circle */}
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="transparent"
                                                stroke="black"
                                                strokeWidth="4"
                                                strokeDasharray="1 10" // Small dash, long gap to simulate verticality when viewed from a distance
                                                strokeLinecap="butt"
                                            />
                                            {/* Yellow progress circle */}
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                fill="transparent"
                                                stroke="#facc15" // yellow-400
                                                strokeWidth="8"
                                                strokeDasharray="169.64 282.74" // 60% progress
                                                strokeDashoffset="113.1"
                                                strokeLinecap="round"
                                                transform="rotate(-90 50 50)" // Start from top
                                            />
                                        </svg>

                                        {/* Text content */}
                                        <div className="absolute flex flex-col items-center">
                                            <p className="text-4xl font-light">02:30</p>
                                            <p className="text-sm font-light">Work Time</p>
                                        </div>
                                    </div>                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex space-x-2">
                                        <button className="bg-white text-black rounded-full p-2">
                                            <Play size={20} />
                                        </button>
                                        <button className="bg-white text-black rounded-full p-2">
                                            <Pause size={20} />
                                        </button>
                                    </div>
                                    <button className="bg-black text-white rounded-full p-2">
                                        <Alarm size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Half */}
                        <div className="flex-1 bg-white/70 rounded-4xl backdrop-blur-sm p-4">
                            <div className="flex justify-between items-center mb-4">
                                <button className="bg-white rounded-full px-4 py-2 text-sm font-light">
                                    September
                                </button>
                                <p className="text-lg font-light">September 2025</p>
                                <button className="bg-white rounded-full px-4 py-2 text-sm font-light">
                                    October
                                </button>
                            </div>
                            {/* New bottom section */}
                            <div className="flex flex-grow mt-4">
                                {/* Left side - Timer */}
                                <div className="flex flex-col pr-4 text-xs text-gray-500 mt-8 ml-8">
                                    {Array.from({ length: 4 }, (_, i) => 10 + i).map(hour => (
                                        <div key={hour} className="h-12 flex items-center justify-end">
                                            {`${hour}:00`}
                                        </div>
                                    ))}
                                </div>
                                {/* Right side - Days and Dates */}
                                <div className="flex flex-col flex-grow">
                                    <div className="flex justify-around mb-2 flex-grow">
                                        {Array.from({ length: 6 }, (_, i) => {
                                            const today = new Date('2025-09-19T00:00:00'); // September 19, 2025
                                            const date = new Date(today);
                                            date.setDate(today.getDate() - 2 + i); // -2, -1, 0, +1, +2, +3
                                            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
                                            const dateNum = date.getDate();
                                            const isCurrentDay = i === 2; // Assuming 3rd element (index 2) is the current day

                                            return (
                                                <div key={i} className="flex flex-col items-center flex-grow">
                                                    <p className="text-xs text-gray-500">{dayName}</p>
                                                    <p className={`text-sm ${isCurrentDay ? 'text-black' : 'text-gray-400'}`}>{dateNum}</p>
                                                    <div className={`flex-grow border-r border-dashed border-gray-200 mx-auto w-px ${i === 5 ? 'border-r-0' : ''}`}></div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {/* Event Cards Container */}
                                    <div className="relative flex-grow">
                                        {/* Card 1 */}
                                        <div className="absolute bg-black text-white rounded-lg p-2 text-xs flex flex-col justify-between"
                                            style={{ left: `calc(100% / 6 * 0.5)`, width: `calc(100% / 6 * 3.5)`, top: '-1rem', height: '3rem' }}>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="font-bold">Team Meeting</p>
                                                    <p>Project discussion</p>
                                                </div>
                                                <img src="https://preview.redd.it/post-your-silly-cat-selfies-v0-9frjxiht4ehe1.jpeg?auto=webp&s=e79f644b89b2592cbdcae7b766ccb8b4b27bb6b0" alt="silly cat" className="w-8 h-8 rounded-full object-cover" />
                                            </div>
                                        </div>
                                        {/* Card 2 */}
                                        <div className="absolute bg-white text-black rounded-lg p-2 text-xs flex flex-col justify-between"
                                            style={{ left: `calc(100% / 6 * 2)`, width: `calc(100% / 6 * 1.5)`, top: '3rem', height: '3rem' }}>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="font-bold">Client Call</p>
                                                    <p>Discuss Q4 strategy</p>
                                                </div>
                                                <img src="https://i.pinimg.com/736x/1b/fc/e9/1bfce97a85aecdd0c0a0cd48348c15ef.jpg" alt="cat in box" className="w-8 h-8 rounded-full object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1 bg-white/70 rounded-4xl p-4 h-full backdrop-blur-sm flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-3xl font-light">Onboarding</p>
                            <p className="text-4xl font-light">18%</p>
                        </div>
                        {/* New section with cards */}
                        <div className="mt-4 flex flex-col space-y-0">
                            {/* Text Labels */}
                            <div className="flex justify-between text-xs font-light mb-1">
                                <p>30%</p>
                                <p>25%</p>
                                <p>0%</p>
                            </div>
                            {/* Cards */}
                            <div className="flex">
                                <div className="bg-yellow-400 h-8 rounded-lg" style={{ width: '50%' }}></div>
                                <div className="bg-black h-8 rounded-lg" style={{ width: '30%' }}></div>
                                <div className="bg-gray-700 h-8 rounded-lg" style={{ width: '20%' }}></div>
                            </div>
                        </div>
                        {/* Black Card Section */}
                        <div className="flex-grow bg-[#303030] rounded-4xl pt-8 p-4 mt-4 text-white">
                            {/* Top section of Black Card */}
                            <div className="flex justify-between items-center mb-4">
                                <p className="text-lg font-light">Onboarding Task</p>
                                <p className="text-lg font-light">2/8</p>
                            </div>
                            {/* Task List */}
                            <div className="flex flex-col space-y-6">
                                {[
                                    { id: 1, text: 'Complete profile', selected: true, iconBg: 'bg-gray-700', icon: User },
                                    { id: 2, text: 'Set up payment', selected: false, iconBg: 'bg-white', icon: CreditCard },
                                    { id: 3, text: 'Upload documents', selected: false, iconBg: 'bg-white', icon: FileArrowUp },
                                    { id: 4, text: 'Attend orientation', selected: false, iconBg: 'bg-white', icon: CalendarBlank },
                                    { id: 5, text: 'Start first project', selected: false, iconBg: 'bg-white', icon: Rocket },
                                ].map(task => {
                                    const IconComponent = task.icon;
                                    return (
                                        <div key={task.id} className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-2 ${task.iconBg}`}>
                                                    <IconComponent size={24} className={`${task.selected ? 'text-gray-400' : 'text-black'}`} />
                                                </div>
                                                <p className={`${task.selected ? 'line-through text-gray-400' : 'text-white'} text-base`}>{task.text}</p>
                                            </div>
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${task.selected ? 'bg-yellow-400' : 'bg-gray-700'}`}>
                                                {task.selected && (
                                                    <Check size={12} weight="bold" className="text-black" />
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>                        </div>
                </div>

            </main>
        </div>
    );
}

export default RealHome;