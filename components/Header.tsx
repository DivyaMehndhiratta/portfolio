
export const Header = ({ socialConnections, profile, assets }: any) => {
    return (
        <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                    <img style={{objectFit: 'cover', height: 150}} src="/assets/images/profileImage/profilepic1.jpeg" alt="abc" className="img-fluid rounded-circle" />
                    <h1 className="text-light">{profile.firstName}</h1>
                    <div className="social-links mt-3 text-center">
                        {socialConnections.map((socialConnection: any, index: number) => {
                            const { url, title, icon } = socialConnection.fields;
                            return (
                                <a key={index} href={url} title={title} target="_blank" rel="noopener noreferrer">
                                    <i className={icon}></i>
                                </a>
                            );
                        })}
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                        <li><a href="#hero" className="nav-link scrollto"><i className="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-user"></i> <span>Skills</span></a></li>
                        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                        <li><a href="#testimonials" className="nav-link scrollto"><i className="bx bx-award"></i> <span>Testimonials</span></a></li>
                        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
