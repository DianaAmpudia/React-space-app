import AboutCard from "./card/AboutCard";
import './card/AboutCard.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const AboutMePage = () => {  

  const socialMediaLinks= [
    { url: 'https://www.linkedin.com/in/dianaampudia/', icon: <LinkedInIcon /> },
    { url: 'https://github.com/DianaAmpudia', icon: <GitHubIcon /> },
  ];
    return (
      <div className="page-container">
      <div className="card-container">
        <AboutCard
          name=" Hi✨ I'm Diana Ampudia"
          title="Web Developer"
          description="I'm a junior web developer passionate about creating engaging and functional websites. I have experience with HTML, CSS, and JavaScript, and I'm eager to expand my skills in front-end and back-end technologies."
          image="/pfp.jpg"
          socialMediaLinks={socialMediaLinks}
        />
      </div>
      </div>
    );
  };
  
  export default AboutMePage;