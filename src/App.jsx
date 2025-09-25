import './App.css';

function random(n) {
  return Math.floor(Math.random() * n);  
}

function App() {

  function handleClick(event) {
    // alert("You clicked me!");
    // console.dir(event);
    // event.target.style.backgroundColor = "tomato";
    // event.target.style.color = "white";
    // event.target.classList.toggle("btn-bg");
    const dialog = document.querySelector("#my-dialog");
    dialog.showModal();
  }

  function handleAllClicks(e) {
    const red = random(255);
    const green = random(255);
    const blue = random(255);

    e.currentTarget.style.border = `5px dashed rgb(${red}, ${green}, ${blue})`;
  }

  function handleLinkClick(e) {
    e.preventDefault();
    // alert(e.target.href);
    e.stopPropagation();
  }

  return (
    <div className="app" onClick={handleAllClicks}>
      <h1>Event Handling in React</h1>

      <button onClick={handleClick} className="btn-bg">Click me!</button>

      <dialog id="my-dialog">
        <h2>My Dialog</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iusto labore reprehenderit voluptates explicabo sed nesciunt earum aut. Architecto magni sequi, neque ex dolorum nemo ea aliquam doloremque nam natus?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, tenetur, minima necessitatibus sequi rem doloribus ipsa ut aspernatur distinctio earum soluta deleniti excepturi animi harum blanditiis? Accusamus est tenetur cumque.</p>
        <button onClick={() => document.querySelector("#my-dialog").close()}>Close</button>
      </dialog>

      <br />

      <a href="https://bcit.ca" target="_blank" onClick={handleLinkClick}>Visit BCIT website for more information</a>

      <div className="container">
        <Tile label="tile 1" />
        <Tile label="tile 2" />
        <Tile label="tile 3" />
        <Tile label="tile 4" />
        <Tile label="tile 5" />
        <Tile label="tile 6" />
        <Tile label="tile 7" />
        <Tile label="tile 8" />
      </div>
    </div>
  );
}

function Tile({ label }) {
  const red = random(255);
  const blue = random(255);
  const green = random(255);

  const background = `rgb(${red}, ${green}, ${blue})`;

  function remove(e) {
    if (e.target === e.currentTarget) {
      return;
    }

    if (e.target.tagName !== "SPAN") {
      return;
    }

    e.currentTarget.remove();
  }

  return (
    <div className="tile" style={{ background }} onClick={remove}>
      <p>{label}</p>
      <span>x</span>
    </div>
  );
}

export default App;
