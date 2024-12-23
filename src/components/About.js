import AboutImg from "../assets/about.png";
import htmlimg from "../assets/html.png";
import cssimg from "../assets/css-3.png";
import jsimg from "../assets/js.png";
import nodeimg from "../assets/nodejs.png";
import reactimg from "../assets/structure.png";
import mongoimg from "../assets/mongodb.png";

function About() {
  const skills = [
    {
      name: "HTML",
     image:htmlimg,
      description: "Markup language for creating web pages.",
    },
    {
      name: "CSS",
      image:cssimg,
      description: "Style sheet language for designing web pages.",
    },
    {
      name: "JavaScript",
      image:jsimg,
      description: "Programming language for web development.",
    },
    {
      name: "Node.js",
      image:nodeimg,
      description: "JavaScript runtime environment for backend development.",
    },
    {
      name: "React.js",
      image:reactimg,
      description: "Library for building user interfaces.",
    },
    {
      name: "MongoDB",
      image:mongoimg,
      description: "NoSQL database for modern applications.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row bg-secondary " id="about">
      {/* About Image Section */}
      <div className="py-5 md:w-1/2 px-5">
        <img src={AboutImg} alt="About me" />
      </div>

      {/* About Content Section */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-white border-b-4 w-[170px] border-primary mb-5 font-bold">
            About Me
          </h1>
          <p className="text-white pb-5">
            Hi, I’m Shalinivijay, a passionate and dedicated full-stack MERN
            developer with a strong foundation in creating dynamic and
            responsive web applications.
          </p>
          <p className="text-white pb-5">
            On the front-end, I excel at crafting visually appealing and
            user-friendly interfaces. My goal is to deliver innovative and
            efficient web solutions that provide exceptional user experiences.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <h2 className="text-3xl text-white font-bold mb-4 border-b-4 w-[170px] border-primary">My Skills</h2>
          <div className="flex flex-wrap gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-5 flex flex-col items-center w-40"
              >
                <img
                  src={skill.image}
                 
                  alt={`${skill.name} logo`}
                  className="w-16 h-16 mb-3"
                />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {skill.name}
                </h3>
                <p className="text-black text-center text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
