import './App.css';
import { TiSocialTwitter, TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";
import { HiOutlineMail } from 'react-icons/hi'
import { FaDev } from 'react-icons/fa'

function App() {

  const MouseIn = (e) => {
    e.target.style.color = 'grey'
  }

  const MouseOut = (e) => {
    e.target.style.color="antiquewhite"
  }

  return (
      <div className="container">
        <div className="top">
          <h1 id="name">Hi, I'm <span id="maher">Maher Al Musallami</span></h1>
          <p id="description">I'm a software developer from Oman. Happy to connect</p>
        </div>
        <div className="bottom">
         <p><a href="https://twitter.com/Almsalmi_" onMouseOver={MouseIn} onMouseOut={MouseOut}>Twitter</a></p>
         <p><a href="https://www.linkedin.com/in/maher-almusallami/" onMouseOver={MouseIn} onMouseOut={MouseOut}>Linkedin</a></p>
         <p><a href="https://github.com/Maher9596" onMouseOver={MouseIn} onMouseOut={MouseOut}>Github</a></p>
         <p><a href="mailto:muhran777@gmail.com" onMouseOver={MouseIn} onMouseOut={MouseOut}>Email</a></p>
         <p><a href="https://dev.to/maher9596" onMouseOver={MouseIn} onMouseOut={MouseOut}>Blogs</a></p>
        </div>
      </div>
  );
}

export default App;
