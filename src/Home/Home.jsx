import { lazy } from "react";
import Bio from "../Bio/Bio";
import Event from "../Event/Event";
import Venue from "../Venue/Venue";

import styles from "./Home.module.scss";

const Gallery = lazy(() => import("../Gallery/Gallery"));
const Merch = lazy(() => import("../Merch/Merch"));

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
        <div className={styles.banner}>
          <div>
            Due to popularity the exhibition has been extended until the end of
            January, 2023
          </div>
        </div>
        <header className={styles.header}>
          {name && <h2>{name}, you are invited to</h2>}
          <h1>Now draw the curtain</h1>
          <p>
            Solo Exhibition by <a href="https://untepid.com">Ana Curbelo</a>
            <span>02.11.22 - 30.01.23</span>
          </p>
        </header>
        <div className={styles.event}>
          <span>The Book Club</span>
          <span>EC2A 4RH</span>
          <span>London</span>
          <span style={{ marginTop: "1rem" }}>
            <a
              href="https://www.skyevictoriaprojects.com/store"
              title="Shop the collection"
            >
              Shop the collection
            </a>
          </span>
        </div>
      </div>
      <Event />
      <Gallery />
      <Bio />
      <Merch />
      <Venue />
    </div>
  );
};

export default Home;
