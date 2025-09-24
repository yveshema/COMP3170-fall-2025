import './App.css'

function random(n) {
  return Math.floor(Math.random() * n);
}

function App() {

  function handleClick(event) {
    // alert("You clicked me!");
    // console.log(event);
    // event.target.style.background = 'orange';
    // event.target.style.color = '#fff';
    // event.target.classList.toggle('orange-btn');
    const dialog = document.querySelector("#my-dialog");
    dialog.show();
  }

  function handleAllClicks(e) {
    const color = random(255);
    e.currentTarget.style.background = `rgb(${color}, ${color}, ${color})`;
  }

  function handleLinkClick(e) {
    e.preventDefault();
    console.log(e.target.href);
    e.stopPropagation();
  }

  return (
    <div className="app" onClick={handleAllClicks}>
      <h1>Event Handling in React</h1>

      <button onClick={handleClick}>Click me!</button>
      <dialog id="my-dialog" closedby="any">
        <div>
          <h1>Modal Dialog</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio maxime autem magnam alias hic quia dignissimos id perspiciatis! Autem inventore in enim molestiae aspernatur? Ipsam quos expedita omnis sint repudiandae?</p>
        </div>
        <button onClick={() => {
          const dialog = document.querySelector("#my-dialog");
          dialog.close();
        }}>Close</button>
      </dialog>

      <br />

      <a href="https://bcit.ca" target="_blank" onClick={handleLinkClick}>Visit the BCIT website for more information</a>

      <div className="container">
        <Tile label="tile 1" />
        <Tile label="tile 2" />
        <Tile label="tile 3" />
        <Tile label="tile 4" />
        <Tile label="tile 5" />
        <Tile label="tile 6" />
      </div>
    </div>
  );
}

function Tile({ label }) {
  const red = random(255);
  const green = random(255);
  const blue = random(255);

  const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  function remove(e) {
    if (e.target === e.currentTarget) {
      // This is only true on the span element
      return;
    }

    if (e.target.tagName !== "SPAN") {
      return;
    }

    e.currentTarget.remove();
  }

  return (
    <div style={{ backgroundColor: backgroundColor }} className="tile" onClick={remove}>
      <p>{label}</p>
      <span>x</span>
    </div>
  );
}

export default App;
