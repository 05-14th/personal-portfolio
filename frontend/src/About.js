import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faImage, faFolder, faContactCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function calculateAge(dateOfBirth){
  const currentDate = new Date();
  const dob = new Date(dateOfBirth);
  let ageDiff = currentDate - dob;
  const ageDate = new Date(ageDiff);
  const calculatedAge = Math.abs(ageDate.getUTCFullYear()-1970);
  return String(calculatedAge);
}

function About() {
  const birthdate = '2004-03-24';
  const age = calculateAge(birthdate);
  return (
      <div className="bg-gray-200 flex h-screen">
        <div className="bg-white background w-5/12">
          
        </div>
        <div className="w-6/12">
          <h1 className="border border-solid border-black text-center font-sans font-bold">ABOUT ME</h1>
          <h3>I'm <b>Gerry Vien Flores,</b> Full-Stack Developer</h3>
          <p>
            I am {age} years old and I am a Bachelor of Science in Information Technology student at Camarines Norte State College. When developing
            a project, I usually do both the frontend and the backend side of the software or website. In terms of working, I am a freelancer that 
            accepts commissioned projects in order to gain additional experience while learning through the curriculum and to earn some money as well.
          </p>
        </div> 
        <div className="w-1/12 flex justify-end items-center">
          <ul className="m-4 bg-yellow-500 p-2 rounded-md">
            <li>
              <Link to="/" className="hover:text-white"><FontAwesomeIcon icon={faHome} size="lg"/></Link>
            </li>
            <li>
              <Link to='/' className='text-white'><FontAwesomeIcon icon={faUser} size="lg"/></Link>
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
  );
}

export default About;
