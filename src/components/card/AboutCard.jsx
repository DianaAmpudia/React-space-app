const AboutCard = ({ name, title, description, image, socialMediaLinks }) => {
  return (
    <div className="about-me-card">
      <img src={image} alt={name} className="profile-image" />
      <h2 className="name">{name}</h2>
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <div className="social-media-container">
        {socialMediaLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            className="social-media-link"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
