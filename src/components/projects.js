import GreendenImg from "../assets/p-1.png";
import BulkImg from "../assets/p-3.png";
import Studentform from "../assets/p-4.png";

function Projects() {
    const config = {
        projects: [
            {
                image: GreendenImg,
                description: 'A Plant Website built with HTML&Tailwind CSS..',
                link: 'https://shalu2606.github.io/Greenden-Tailwind/'
            },
            {
                image: BulkImg,
                description: 'A Email sending app built with Reactjs & MongoDB...',
                link: 'https://bulkmail-app2.vercel.app/'
            },
            {
                image: Studentform,
                description:'A student form built with Javascript & React',
                link: 'https://shalu2606.github.io/Student-Form/'
            },
        ]
    }


    return  <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id="projects">
        <div className="w-full">
            <div className="flex  flex-col px-10 py-5">
                <h1 className="text-4xl text-white border-b-4  border-[#2b2d77] mb-5 w-[140px] font-bold ">Projects</h1>
                <p>These are some of my best projects.I have built these with HTML,CSS,Javascript,React and MongoDB..</p>
            </div>
        </div>
        <div className="w-full">
            <div className="flex  flex-col md:flex-row px-10 gap-5">
                {config.projects.map((project)=> (
                    <a href={project.link}>
                    <div className="relative">
                    <img className="h-[200px] w-[500px]" src={project.image} />
                    <div className="project-desc">
                        <p className="text-center py-5"> {project.description}</p>
                        <div className="flex justify-center">
                        <a className="btn" target='_blank'href={project.link}>View Project</a>
                    </div>
                    </div>
                    
                    </div>
                    </a>
                ) )}
                
               
      


            </div>
        </div>


    </section>
    
}
export default Projects