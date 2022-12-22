import styles from "./Merch.module.scss";

import tote from "./NDTC-MAXI-TOTE-BAG-black-white- screen-print-recycled-cotton.png";
import tBack from "./NDTC-TSHIRT-black-oversized-unisex-Back.png";
import tFront from "./NDTC-TSHIRT-black-oversized-unisex-Front.png";

const Merch = () => (
  <div id="merch" className={styles.container}>
    <h3>Merch</h3>
    <div className={styles.merch}>
      <div>
        <a
          className={styles.image}
          href="https://untepid.com/products/now-draw-the-curtain-t-shirt-black-oversized-heavy-t-shirt"
        >
          <img
            className={styles.hover}
            src={tFront}
            alt="NDTC TSHIRT black oversized unisex Back"
          />
          <img
            className={styles.normal}
            src={tBack}
            alt="NDTC TSHIRT black oversized unisex Front"
          />
        </a>

        <div>
          <a href="https://untepid.com/products/now-draw-the-curtain-t-shirt-black-oversized-heavy-t-shirt">
            <button>NDTC TSHIRT</button>
          </a>
        </div>
      </div>
      <div>
        <a
          className={styles.image}
          href="https://untepid.com/products/now-draw-the-curtain-maxi-tote-bag"
        >
          <img src={tote} alt="NDTC-MAXI-TOTE" />
        </a>
        <a href="https://untepid.com/products/now-draw-the-curtain-maxi-tote-bag">
          <button>NDTC MAXI TOTE</button>
        </a>
      </div>
    </div>
  </div>
);

export default Merch;
