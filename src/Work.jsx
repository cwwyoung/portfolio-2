import stridecast from "./assets/stridecast.png";
import monster from "./assets/monsterrandomizer.png";
import organic from "./assets/organic.png";
import dreamer from "./assets/dreamer.png";
import billsplit from "./assets/billsplit.png";

function Work() {
  return (
    <>
      <div className="work">
        <div className="workImg">
          <img src={stridecast} />
        </div>
        <div className="workText">
          <h3>StrideCast</h3>
          <h4>Pairing peripatetics with perfect podcasts</h4>
          <p>
            A collaborative and fully functional React app created at the behest
            of "clients" in a mock agency setting. Users input a desired length
            (per the brief, to match the time of their walk) and preferred
            genre, then the app returns podcast episodes that match. Users can
            also register for an account, log-in, save playlists, shuffle their
            selections, and listen to the full audio of the episode in the app
            itself. This project is ongoing, and next steps include a React
            Native conversion, Spotify integration, and enhanced library
            functionality.
          </p>
          <ul className="workLinks">
            <li>
              <a href="https://stridecast.netlify.app/">live site</a>
            </li>
            <li>
              <a href="https://github.com/podcast-planner-project-4">GitHub</a>
            </li>
          </ul>
          <ul className="workSkills">
            <li>React</li>
            <li>RESTful APIs</li>
            <li>JavaScript</li>
            <li>SASS</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
      <div className="break">
        <hr />
      </div>
      <div className="work">
        <div className="workImg">
          <img src={monster} />
        </div>
        <div className="workText">
          <h3>Monster Randomizer</h3>
          <h4>Dragons for your dungeons</h4>
          <p>
            Using Axios to call an API, this React app returns a randomly
            selected monster based on the user-selected Challenge Rating number.
            Results are returned with 6 discrete stats, and where available, a
            description and image are returned as well.
          </p>
          <ul className="workLinks">
            <li>
              <a href="https://exquisite-pudding-4750e9.netlify.app/">
                live site
              </a>
            </li>
            <li>
              <a href="https://github.com/cwwyoung/calvin-young-project-3">
                GitHub
              </a>
            </li>
          </ul>
          <ul className="workSkills">
            <li>React</li>
            <li>RESTful APIs</li>
            <li>JavaScript</li>
            <li>SASS</li>
          </ul>
        </div>
      </div>
      <div className="break">
        <hr />
      </div>
      <div className="work">
        <div className="workImg">
          <img src={billsplit} />
        </div>
        <div className="workText">
          <h3>Bill Splitter</h3>
          <h4>The Friendship Preserver, Probably </h4>
          <p>
            This is an exercise from Jonas Schmedtmann's (excellent!) React
            course that I worked on after finishing bootcamp. It allows users to
            add "friends" (complete with dynamically generated avatars) and
            split a bill into money owed or owing. The app keeps track of
            expenses when switching between friends and has soft "reminders" in
            the friends list that can be viewed in detail by opening your
            history with that friend. Extensive use of props, state, children,
            and all the intricate things that really underscored to me all that
            makes React uniquely useful.
          </p>
          <ul className="workLinks">
            <li>
              <a href="https://spontaneous-gelato-ba83e7.netlify.app/">
                live site
              </a>
            </li>
            <li>
              <a href="https://github.com/cwwyoung/bill-split">GitHub</a>
            </li>
          </ul>
          <ul className="workSkills">
            <li>React</li>
            <li>API</li>
            <li>JavaScript</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
      <div className="break">
        <hr />
      </div>
      <div className="work">
        <div className="workImg">
          <img src={dreamer} />
        </div>
        <div className="workText">
          <h3>The Resisting Dreamer</h3>
          <h4>Pedantic practice app </h4>
          <p>
            OK this is one just for me. I wanted to create an app that will
            replace my least favourite metaphor--"fever dream"--with the much
            simpler, cleaner, and more accurate phrase, "weird thing." It works!
            I made this to amuse myself, mostly.
          </p>
          <ul className="workLinks">
            <li>
              <a href="https://funny-croquembouche-cd376b.netlify.app/">
                live site
              </a>
            </li>
            <li>
              <a href="https://github.com/cwwyoung/dreamer">GitHub</a>
            </li>
          </ul>
          <ul className="workSkills">
            <li>React</li>
            <li>JavaScript</li>
            <li>SASS</li>
          </ul>
        </div>
      </div>
      <div className="break">
        <hr />
      </div>
      <div className="work">
        <div className="workImg">
          <img src={organic} />
        </div>
        <div className="workText">
          <h3>E-commerce Mockup</h3>
          <h4>Intensely overpriced tomatoes made beautifully searchable</h4>
          <p>
            A collaborative programming exercise adding JavaScript functionality
            to a PSD conversion of an e-commerce site. My task was creating a
            dynamic search function that accesses mock data in Firebase,
            returning results with both partial and complete name or price
            searches.
          </p>
          <ul className="workLinks">
            <li>
              <a href="https://github.com/AwesomeProject2/organic-revised/blob/main/search.js">
                GitHub (my branch)
              </a>
            </li>
          </ul>
          <ul className="workSkills">
            <li>JavaScript</li>
            <li>SASS</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
      <div className="break">
        <hr />
      </div>
    </>
  );
}

export default Work;
