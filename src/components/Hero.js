import HeroImg from "../assets/hero.png";
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineGithub} from "react-icons/ai";
function Hero(){
const config={
    subtitle:"I am a Full Stack Developer",
    social:{
        github:'https://github.com/shalu2606',
        instagram:'https://www.instagram.com/.shalinivijay.?igsh=MTI3Mzc4YXBkMWFsYw==&utm_source=ig_contact_invite',
        linkedin:'https://www.linkedin.com/in/shalinivijay26?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
}


return <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center" id="home">
    <div className=" md:w-1/2 flex flex-col">
<h1 className=" text-white text-6xl font-hero-font animate-fadein">Hi, <br/> I'm<span className="text-black"> Shalini V</span>
<p className="text-2xl pb-2 animate-fadein">{config.subtitle}</p>
</h1>

<div className="flex py-10">
    <a href={config.social.github}className="pr-5 hover:text-white"> <AiOutlineGithub size={40}/></a>
    <a  href={config.social.instagram}className="pr-5 hover:text-white"><AiOutlineInstagram size={40}/></a>
    <a  href={config.social.linkedin}className="pr-5 hover:text-white"><AiOutlineLinkedin size={40}/></a>
    </div>
    </div>
<img  className=" md:w-1/3 "src={HeroImg}/>

</section>
}
export default Hero