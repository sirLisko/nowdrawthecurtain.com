import styles from "./Venue.module.scss";
import Footer from "../Footer/Footer";

const Venue = () => (
  <div className={styles.box}>
    <div className={styles.container}>
      <h3>The Venue</h3>
      <iframe
        title="map"
        width="100%"
        height="350"
        frameBorder="0"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GMAP_API}&q=Book+Club,London+UK`}
      ></iframe>
    </div>
    <Footer />
  </div>
);

export default Venue;
