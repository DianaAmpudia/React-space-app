import AboutCard from "./card/AboutCard";
import './card/AboutCard.css'
// import {LinkedInIcon, GitHubIcon} from '@mui/icons-material/LinkedIn';


const AboutMePage = () => {  
    return (
      <div className="page-container">
      <div className="card-container">
        <AboutCard
          name=" Hi✨ I'm Diana Ampudia"
          title="Web Developer"
          description="I'm Diana, a junior web developer passionate about creating engaging and functional websites. I have experience with HTML, CSS, and JavaScript, and I'm eager to expand my skills in front-end and back-end technologies."
          image="/pfp.jpg"
          
        />
      </div>
      </div>
    );
  };
  
  export default AboutMePage;