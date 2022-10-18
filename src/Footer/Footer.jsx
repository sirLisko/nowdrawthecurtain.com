import bookclub from "./bookclub.png";
import svp from "./svp.png";

const Footer = ({ hideLogos }) => (
  <div className="footer">
    <div className={hideLogos ? "hidelogo" : ""}>#nowdrawthecurtain</div>
    {!hideLogos && (
      <>
        <div className="logo">
          <img src={bookclub} alt="The Bookclub" />
        </div>
        <div className="logo">
          <img src={svp} alt="Skye Victoria Project" />
        </div>
      </>
    )}
    <div>
      Made with ♥ by{" "}
      <a href="https://sirlisko.com">Luca Lischetti (@sirLisko)</a>
    </div>
  </div>
);

export default Footer;
