import React from 'react';
import Navigation from '../components/Navigation';

import { Users, UserPlus, Desktop } from '@phosphor-icons/react';

function RealHome() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_bottom_right,#fff59d,#F3F4F6)]">
      <Navigation />
      <main className="p-8 pt-32">
        {/* Top Header Section */}
        <div className="flex justify-between items-start mb-8">
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
                <div className="w-96 h-12 bg-[repeating-linear-gradient(45deg,_#ffffff_0_5px,_transparent_0_10px)] rounded-full mt-2 flex items-center justify-start pl-2 text-gray-500 text-base font-light"> {/* Changed justify-end pr-2 to justify-start pl-2 */}
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

      </main>
    </div>
  );
}

export default RealHome;