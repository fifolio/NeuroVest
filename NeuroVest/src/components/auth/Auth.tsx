import Navbar from "../common/Navbar";
import { TypeAnimation } from 'react-type-animation';

// ICONS
import { FaGithub } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";



export default function Auth() {

  // Update teh background color to white
  document.body.style.backgroundColor = "white";


  return (
    <>
      {/* NAVBAR */}
      <Navbar breadcrumb={false} currentPage="" predictionBtn={false} dropdownMenu={false} />

      {/* AUTH */}
      <div className="container flex mx-auto px-5 sm:px-0 min-h-[80vh]">

        {/* LEFT AREA */}
        <div className="mt-[100px] w-full lg:w-3/6 ">

          {/* Hero title */}
          <h1 className="text-7xl pb-5 font-extrabold ml-[-4px] sm:text-left text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-900">NeuroVest</h1>

          {/* Text Animation */}
          <div className="textAnimation font-medium sm:text-md text-xs sm:text-left text-center h-[120px] max-w-[600px] leading-normal">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'Turn market chaos into calculated gains with AI precision',
                5000,
                'See the future of your investments—one prediction at a time',
                5000,
                'AI-powered insights for smarter, faster trading decisions',
                5000,
                'Ride the waves of the market with data-driven confidence',
                5000,
                'Where cutting-edge technology meets your financial goals',
                5000,
                'Outsmart the market with insights no human can match',
                5000,
                'Invest smarter, not harder—AI has your back',
                5000,
                'Catch trends before they make headlines with AI clarity',
                5000,
                'The edge every trader dreams of, powered by AI',
                5000,
                'Your AI-powered trading assistant, always on the mark',
                5000,
                'Harness the power of data to unlock your trading potential',
                5000,
                'Big data, smarter decisions—AI revolutionized',
                5000,
                'Invest with a sixth sense: the power of NeuroVest',
                5000,
                'The stock market decoded, one prediction at a time',
                5000,
                'AI doesn’t sleep, so your strategy stays ahead',
                5000,
                'Discover the simplicity of complex stock analysis',
                5000,
                'Let AI reveal the hidden patterns of the market',
                5000,
                'Think faster than the market—think AI',
                5000,
                'Precision. Insight. Profit. All in one app',
                5000,
                'Trading confidence starts with smarter predictions',
                5000,
                'Every tick, every trend—AI has the answers',
                5000,
                'Trade like a pro with insights that matter',
                5000,
                'From data to decisions—welcome to the future of trading',
                5000,
                'Decode the market’s secrets with AI on your side',
                5000,
                'Your personal investment genius, now AI-powered',
                5000,
                'The ultimate tool for traders who think ahead',
                5000,
                'Take the guesswork out of trading with pure intelligence',
                5000,
                'AI-powered trading for results-driven investors',
                5000,
                'No noise, no hype—just actionable market predictions',
                5000,
                'Let AI sift through the chaos so you don’t have to',
                5000,
                'Feel the power of AI-driven market clarity',
                5000,
                'Turn information overload into actionable insights',
                5000,
                'The sharpest edge in trading is now AI-driven',
                5000,
                'Market intelligence for the bold and the brilliant',
                5000,
                'Go beyond charts—see what AI sees in the data',
                5000,
                'Your shortcut to smarter, faster investing decisions',
                5000,
                'Trade smarter, profit faster—thank AI later',
                5000,
                'Turn uncertainty into opportunity with NeuroVest AI',
                5000,
                'Unlock the potential of every market move',
                5000,
                'AI doesn’t guess—it calculates. Are you ready?',
                5000,
                'From rookie to pro: AI makes every trader smarter',
                5000,
                'Let AI take the wheel of your investment strategy',
                5000,
                'Supercharge your trading game with actionable AI',
                5000,
                'Opportunities don’t wait—AI spots them instantly',
                5000,
                'Trade like never before—driven by machine intelligence',
                5000,
                'Precision predictions, every time, from the power of AI',
                5000,
                'Crack the code of the market with NeuroVest',
                5000,
                'Stay ahead. Stay sharp. Stay profitable—with AI',
                5000,
                'Let AI turn market volatility into your advantage',
                5000,
                'AI that sees what others miss—your trading revolution starts now',
                5000,
              ]}
              speed={55}
              style={{ fontSize: '2em' }}
              repeat={Infinity}
            />
          </div>

          {/* Auth button */}
          <div className="authBtn">
            <button className="bg-clip transparent bg-gradient-to-r from-blue-400 to-blue-600 hover:to-blue-700 font-bold text-white max-w-fit py-2 px-4 rounded-full shadow-md flex items-center sm:mx-0 mx-auto">
              <span className="w-8 mr-4 bg-gray-50 rounded-full">
                <img src="/images/btns/Auth/google.png" className="w-full" />
              </span>
              Sign in with Google</button>
          </div>

        </div>

        {/* RIGHT AREA */}
        <div className="hidden lg:block lg:w-3/6 auth-right-area m-0 p-0">
          <div className="shadow-xl rounded-3xl w-full h-[500px] float-center mt-5">
            <video autoPlay muted loop className="rounded-3xl">
              <source src="https://videos.pexels.com/video-files/9421909/9421909-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
            <div className="mask"></div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="fixed bottom-5 text-sm font-medium w-full sm:ml-[auto] ml-[-20px]">
          <ul className="flex space-x-4 sm:justify-start justify-center">
            <li className="text-gray-500 hover:text-gray-800">&copy; {new Date().getFullYear()} NeuroVest</li>
            <li><a href="#" className="flex items-center space-x-1 text-gray-500 hover:text-gray-800"><FcAbout /><span>About</span></a></li>
            <li><a href="https://github.com/fifolio/NeuroVest" target="_blank" className="flex items-center space-x-1 text-gray-500 hover:text-gray-800"><FaGithub /><span>Github Repo</span></a></li>
          </ul>
        </div>
      </div>
    </> 
  )
}
