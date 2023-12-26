import './App.css';
import profilePic from './Images/profile-pic.png';

function App() {
  return (
    <div className="bg-gray-200 flex h-screen">
      <div className="bg-white w-8/12 flex justify-center items-center">
        <div className="w-3/4">
          <h2 className="font-bold font-sans text-4xl">HI THERE!</h2>
          <h1 className="font-serif text-5xl"><b>I'M</b> GERRY VIEN</h1>
          <div className="bg-yellow-500">
            <h4 className="font-sans font-bold text-white text-center">FULL STACK WEB AND SOFTWARE DEVELOPER</h4>
          </div>
          <p className="text-justify">
            I'm Gerry Vien Flores, a dedicated software and web developer passionate about continuous learning in tech. I thrive on challenges, from tech competitions to commissioned projects, seeing them not just as hobbies but integral to my career growth. My proactive approach ensures I stay adept in the ever-evolving tech landscape.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-4">
            MORE ABOUT ME
          </button>
        </div>
      </div>
      
      <img src={profilePic} alt="Profile Picture" className="w-4/12"/>
    </div>
  );
}

export default App;
