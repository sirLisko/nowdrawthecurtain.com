import Bio from "../Bio/Bio";
import Event from "../Event/Event";
import Venue from "../Venue/Venue";

import styles from "./Home.module.scss";

const Home = () => {
  const invite =
    window.location.search.split("?invite=")?.[1] ||
    window.location.search.split("?x=")?.[1];
  let name;
  try {
    name = atob(invite);
  } catch {}
  return (
    <div>
      <div className={styles.splash}>
        <header className={styles.header}>
          {name && <h2>{name}, you are invited to</h2>}
          <h1>Now draw the curtain</h1>
          <p>
            Solo Exhibition by <a href="https://untepid.com">Ana Curbelo</a>
            <span>02.11.22 - 10.12.22</span>
          </p>
        </header>
        <div className={styles.event}>
          <span>Launch night</span>
          <span>
            <a
              href="https://www.eventbrite.co.uk/e/svp-presents-ana-curbelo-exhibition-opening-party-at-the-book-club-tickets-444025300627"
              title="Get your spot"
            >
              02.11 - 7pm till late
            </a>
          </span>
          <span>The Book Club</span>
          <span>EC2A 4RH</span>
          <span style={{ marginTop: "1rem" }}>
            <a
              href="https://www.eventbrite.co.uk/e/svp-presents-ana-curbelo-exhibition-opening-party-at-the-book-club-tickets-444025300627"
              title="Get your spot"
            >
              RSVP here
            </a>
          </span>
        </div>
      </div>
      <Event />
      <Bio />
      <Venue />
    </div>
  );
};

export default Home;
