

const AboutCard = ({ name, title, description, image }) => {
  return (
    <div className="about-me-card">
      <img src={image} alt={name} className="profile-image" />
      <h2 className="name">{name}</h2>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};


export default AboutCard;