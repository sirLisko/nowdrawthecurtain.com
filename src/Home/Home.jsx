import Footer from "../Footer/Footer";
import Bio from "../Bio/Bio";
import Event from "../Event/Event";
import Venue from "../Venue/Venue";

function Home() {
  const invite = window.location.search.split("?x=")?.[1];
  return (
    <div>
      <div className="App">
        <header className="App-header">
          {invite && (
            <h2>
              <b>{atob(invite)}</b> <span>you are invited to</span>
            </h2>
          )}
          <h1>Now draw the curtain</h1>
          <p>
            Solo Exhibition by <a href="https://untepid.com">Ana Curbelo</a>
            <span>03.11.22 - 10.12.22</span>
          </p>
        </header>
        <div className="event">
          <div>
            <span>Launch night</span>
            <span>
              <a
                href="https://www.eventbrite.co.uk/e/svp-presents-ana-curbelo-exhibition-opening-party-at-the-book-club-tickets-444025300627"
                title="Get your spot"
              >
                03.11 - 7pm till late
              </a>
            </span>
            <span>The Book Club</span>
            <span>EC2A 4RH</span>
          </div>
        </div>
        <Footer />
      </div>
      <Event />
      <Bio />
      <Venue />
    </div>
  );
}

export default Home;
