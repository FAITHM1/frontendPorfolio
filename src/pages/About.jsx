import { useState, useEffect } from "react";

function About(props) {
  const [about, setAbout] = useState(null);
  // create function to make api call
  const getAboutData = async () => {
    const response = await fetch(props.url + "about");

    const data = await response.json();

    console.log(data);
    setAbout(data);
  };

  useEffect(() => getAboutData(), []);
  const loaded = () => {
    return (
      <div className="about">
        <img src={about.headshot} />
        <div>
          <h2>{about.name}</h2>

          <h3>{about.email}</h3>
        </div>
        <p>{about.bio}</p>
      </div>
    );
  };

  return about ? loaded() : <h1>loading..</h1>;
}
export default About;
