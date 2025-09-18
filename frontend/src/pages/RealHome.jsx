import React, { useState } from 'react';
import Navigation from '../components/Navigation';

import { Users, UserPlus, Desktop, CaretDown } from '@phosphor-icons/react';

const FAQItem = ({ index, question, answer, openQuestionIndex, setOpenQuestionIndex }) => {
  const isOpen = openQuestionIndex === index;

  return (
    <div className="border-b border-dashed border-gray-200 py-2 ">
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

function RealHome() {
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
            <div className="flex-1 bg-white rounded-4xl p-4">
              <div className="flex flex-col space-y-2 justify-center">
                {(() => {
                  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
                  const faqs = [
                    { question: "What is Carbon Cents?", answer: "Carbon Cents is a platform that helps you track and reduce your carbon footprint." },
                    { question: "How can I earn rewards?", answer: "You can earn rewards by completing eco-friendly challenges and reducing your carbon emissions." },
                    { question: "Is my data secure?", answer: "Yes, we use industry-standard encryption and security measures to protect your data." },
                    { question: "How do I get started?", answer: "Simply sign up, complete your profile, and start tracking your environmental impact." },
                  ];
                  return faqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      index={index}
                      question={faq.question}
                      answer={faq.answer}
                      openQuestionIndex={openQuestionIndex}
                      setOpenQuestionIndex={setOpenQuestionIndex}
                    />
                  ));
                })()}
              </div>
            </div>
          </div>

          {/* Middle Column (double size) */}
          <div className="flex-2 bg-white rounded-4xl p-4 h-full">
            Middle Column
          </div>

          {/* Right Column */}
          <div className="flex-1 bg-white rounded-4xl p-4 h-full">
            Right Column
          </div>
        </div>

      </main>
    </div>
  );
}

export default RealHome;