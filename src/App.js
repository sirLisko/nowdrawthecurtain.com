import "./App.scss";
import bookclub from "./bookclub.png";
import Face from "./Face";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
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
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221003T180000Z%2F20221003T230000Z&details=Solo%20Exhibition%20by%20Ana%20Curbelo&location=The%20Book%20Club%2C%20100-106%20Leonard%20St%2C%20London%20EC2A%204RH%2C%20UK&text=Now%20draw%20the%20curtain"
                title="Save Event in my Calendar"
              >
                03.11 - 7pm till late
              </a>
            </span>
            <span>The Book Club</span>
            <span>EC2A 4RH</span>
          </div>
        </div>
        <div className="footer">
          <div className="logo">
            <img src={bookclub} alt="logo" />
          </div>
          <div>
            Made with ♥ by{" "}
            <a href="https://sirlisko.com">Luca Lischetti (@sirLisko)</a>
          </div>
        </div>
      </div>
      <Face />
    </div>
  );
}

export default App;
