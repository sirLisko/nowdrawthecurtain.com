import bookclub from "./bookclub.png";
import svp from "./svp.png";

import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.footer}>
    <div>#nowdrawthecurtain</div>
    <div>
      <img src={bookclub} alt="The Bookclub" />
    </div>
    <div>
      <img src={svp} alt="Skye Victoria Project" />
    </div>
    <div>
      Made with ♥ by{" "}
      <a href="https://sirlisko.com">Luca Lischetti (@sirLisko)</a>
    </div>
  </div>
);

export default Footer;
