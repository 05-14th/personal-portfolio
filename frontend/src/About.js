import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faImage, faFolder, faContactCard } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function About() {

  const handleClick = () => {
    console.log('Button clicked!');
    // You can add your desired functionality here
  };

  return (
    <Router>
      <div className="bg-gray-200 flex h-screen">
        <div className="bg-white w-1/5 flex justify-center items-center">
          
        </div>
        <div className="w-4/5 background flex justify-end items-center">
          <ul className="m-4 bg-yellow-500 p-2 rounded-md">
            <li>
              <Link to="/" className="text-white"><FontAwesomeIcon icon={faHome} size="lg"/></Link>
            </li>
            <li>
              <Link to='/' className='hover:text-white'><FontAwesomeIcon icon={faUser} size="lg"/></Link>
            </li>
            <li>
              <Link to='/' className='hover:text-white'><FontAwesomeIcon icon={faBriefcase}  size="lg"/></Link>
            </li>
            <li>
              <Link to='/' className='hover:text-white'><FontAwesomeIcon icon={faImage} size="lg"/></Link>
            </li>
            <li>
              <Link to='/' className='hover:text-white'><FontAwesomeIcon icon={faFolder} size="lg"/></Link>
            </li>
            <li>
              <Link to='/' className='hover:text-white'><FontAwesomeIcon icon={faContactCard} size="lg"/></Link>
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
}

export default About;
