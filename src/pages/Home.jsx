function Home(props) {
  return (
    <div className="home">
      <img
        src="https://i.pinimg.com/564x/48/65/cc/4865cc875b04e5fcedaa18707f2f63cb.jpg"
        alt=""
      />
      <h3 className="about">Hello!</h3>
      <div className="line"></div>

      <section className="introduction">
        <p>
          Hi, I'm Faith. I'm a software engineer based in Chicago. I'm
          passionate about technology and growing my skill.
        </p>
      </section>
      <section className="tech">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#c06c85"
            fill-opacity="1"
            d="M0,0L120,48C240,96,480,192,720,197.3C960,203,1200,117,1320,74.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <div>
          <h2>Technologies</h2>
          <div className="line"></div>
          <ul>
            <li>
              <i class="fab fa-js-square"></i>
              <h4>HTML/CSS(SASS)/ JavaScript</h4>
            </li>

            <li>
              <i class="fab fa-react"></i>
              <h4>React</h4>
            </li>
            <li>
              <i class="fab fa-node"></i>
              <h4>NodeJS</h4>
            </li>
            <li>
              <i class="fab fa-envira"></i>
              <h4>MongoDB</h4>
            </li>
            <li>
              <i class="fas fa-database"></i>
              <h4>SQL</h4>
            </li>
            <li>
              <i class="fab fa-etsy"></i>
              <h4>Express</h4>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
Home;
export default Home;
