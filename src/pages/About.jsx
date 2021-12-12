import { useState, useEffect } from "react";

function About(props) {
  const [about, setAbout] = useState(null);
  // create function to make api call
  const getAboutData = async () => {
    const response = await fetch(props.url + "about");

    const data = await response.json();

    setAbout(data);
  };

  useEffect(() => getAboutData(), []);
  const loaded = () => {
    return (
      <div className="about">
        <img src={about.headshot} />
        <div>
          <h2>{about.name}</h2>

          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#c06c85"
            fill-opacity="1"
            d="M0,0L120,48C240,96,480,192,720,197.3C960,203,1200,117,1320,74.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
          <p>
            
            {about.bio}</p>
          
        </div>
        
      </div>
    );
  };

  return about ? loaded() : <h1>loading..</h1>;
}
export default About;
