import styles from "./Venue.module.scss";
import Footer from "../Footer/Footer";

const Venue = () => (
  <div id="venue" className={styles.box}>
    <div className={styles.container}>
      <h3>The Venue</h3>
      <div className={styles.times}>
        <span>Weds: 5pm - 12am</span>
        <span>Thurs: 5pm - 2am</span>
        <span>Fridays: 4pm - 3am</span>
        <span>Saturdays: 12pm - 3am</span>
      </div>
      <iframe
        title="map"
        width="100%"
        height="350"
        frameBorder="0"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GMAP_API}&q=Book+Club,London+UK`}
      />
    </div>
    <Footer />
  </div>
);

export default Venue;
