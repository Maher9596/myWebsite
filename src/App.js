import './App.css';

function App() {

  const MouseIn = (e) => {
    e.target.style.color = 'grey'
  }

  const MouseOut = (e) => {
    e.target.style.color="aliceblue";
  }

  return (
    <div className="app">
      <div className="container">
        {/* <img src={pic} width="300px" height="100px" /> */}
        <div className="text">
          <h1 id="name">Hi, I'm <span id="maher">Maher Al Musallami</span></h1>
          <p id="description">I'm a software developer from Oman. Happy to connect</p>
        </div>
        <div className="icons">
          <a href="https://twitter.com/Almsalmi_" onMouseOver={MouseIn} onMouseOut={MouseOut}><p>Twitter</p></a> 
          <a href="https://www.linkedin.com/in/maher-almusallami/" onMouseOver={MouseIn} onMouseOut={MouseOut}><p>Linkedin</p></a>
          <a href="https://github.com/Maher9596" onMouseOver={MouseIn} onMouseOut={MouseOut}><p>Github</p></a>
          <a href="mailto:muhran777@gmail.com" onMouseOver={MouseIn} onMouseOut={MouseOut}><p>Email</p></a>
          <a href="https://dev.to/maher9596" onMouseOver={MouseIn} onMouseOut={MouseOut}><p>Blogs</p></a>
        </div>
      </div>
    </div>
  );
}

export default App;
