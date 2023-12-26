import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faImage, faFolder, faContactCard } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {

  const handleClick = () => {
    console.log('Button clicked!');
    // You can add your desired functionality here
  };

  return (
    <Router>
      <div className="bg-gray-200 flex h-screen">
        <div className="bg-white w-3/5 flex justify-center items-center">
          <div className="w-3/4 max-h-full overflow-y-auto">
            <h2 className="font-bold font-sans text-4xl">HI THERE!</h2>
            <h1 className="font-serif text-5xl"><b>I'M</b> GERRY VIEN</h1>
            <div className="bg-yellow-500">
              <h4 className="font-sans font-bold text-white text-center">FULL STACK WEB AND SOFTWARE DEVELOPER</h4>
            </div>
            <p className="text-justify">
              I'm Gerry Vien Flores, a dedicated software and web developer passionate about continuous learning in tech. I thrive on challenges, from tech competitions to commissioned projects, seeing them not just as hobbies but integral to my career growth. My proactive approach ensures I stay adept in the ever-evolving tech landscape.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleClick}>
              MORE ABOUT ME
            </button>
          </div>
        </div>
        <div className="w-2/5 background flex justify-end items-center">
          <ul className="m-4 bg-yellow-500 p-2 rounded-md">
            <li>
              <Link to="/" className="text-white"><FontAwesomeIcon icon={faHome} size="lg"/></Link>
            </li>
            <li>
              <Link to='/' className='hover:text-white'><FontAwesomeIcon icon={faUser} size="lg"/></Link>
            </li>
            <li><a><FontAwesomeIcon icon={faBriefcase}  size="lg"/></a></li>
            <li><a><FontAwesomeIcon icon={faImage} size="lg"/></a></li>
            <li><a><FontAwesomeIcon icon={faFolder} size="lg"/></a></li>
            <li><a><FontAwesomeIcon icon={faContactCard} size="lg"/></a></li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default App;
