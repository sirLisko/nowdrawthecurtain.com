import styles from "./Event.module.scss";

const Event = () => (
  <div className={styles.box}>
    <div className={styles.container}>
      <div className={styles.blurp}>
        <p>
          <b>Now draw the curtain</b> is an exhibition by Ana Curbelo, the
          award-winning illustrator, that brings together a body of work
          developed over the last four years.
        </p>
        <p>
          Over three rooms, the exhibition traces an evolution that has affected
          both her palette and the mood her work evokes. The humorous militant
          feminism of her early illustrations, characterised by punchy colours
          and rotund anatomies, has gradually given way to greater introspection
          and a mostly monochromatic execution. The subtle gestural elegance of
          her most recent work, in black and white, reflects a thoughtful
          contemplation of emotional intimacy, which serves as a satisfying
          counterpoint to her more socially committed earlier work.
        </p>
      </div>
    </div>
  </div>
);

export default Event;
