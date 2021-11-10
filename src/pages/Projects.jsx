import { useState, useEffect } from "react";
function Project(props) {
  const [projects, setProjects] = useState(null);

  const getProjectData = async () => {
    const response = await fetch(props.url + "projects");
    const data = await response.json();
    setProjects(data);
  };

  const imgStyle = {
    width: "150px",
  };
  useEffect(() => getProjectData(), []);
  const loaded = () => {
    return projects.map((project, index) => (
      <div className="project" key={index}>
        <img src={project.image} />
        <h1>{project.name}</h1>
        <div className="btn">
          <a href={project.git}>
            <button>GitHub</button>
          </a>
          <a href={project.live}>
            <button>live site</button>
          </a>
        </div>
      </div>
    ));
  };

  return projects ? (
    <div className="allProjects"> {loaded()}</div>
  ) : (
    <h1>loading...</h1>
  );
}
export default Project;
