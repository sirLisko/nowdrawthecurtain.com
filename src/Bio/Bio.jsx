import ana from "./ana.jpg";
import anaHover from "./ana-hover.jpg";

import styles from "./Bio.module.scss";

const Bio = () => (
  <div id="about" className={styles.container}>
    <h3>About the artist</h3>
    <div className={styles.bio}>
      <div className={styles.image}>
        <img className={styles.hover} src={ana} alt="Ana Curbelo" />
        <img
          className={styles.normal}
          src={anaHover}
          alt="Ana Curbelo Doodle"
        />
      </div>
      <div className={styles.blurp}>
        <p>
          Born in London, Curbelo grew up in the Canary Islands. In 2010 she
          left to study graphic communication at Loughborough University. She
          now works from her studio in Stoke Newington, London.
        </p>
        <p>
          Curbelo has worked as an illustrator internationally with clients such
          as Microsoft, BBC, and Vice, creating characters with a very distinct
          personal style. Her best known work is her illustrations for The
          Tampon Book, which helped change German law and won several awards,
          including a White Pencil in Impact at D&AD, and a Grand Prix at Cannes
          Lions, attracting worldwide press interest.
        </p>
      </div>
    </div>
  </div>
);

export default Bio;
