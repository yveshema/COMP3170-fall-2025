import { useState } from 'react';
import { nanoid } from 'nanoid';

function TopPlayers() {
    const [players, setPlayers] = useState([]);

    // this function is used inside the form
    // to add new players
    function addPlayer(player) {
        // const newList = [...players, player];
        // setPlayers(newList);
        setPlayers([...players, player]);
    }

    function deletePlayer(id) {
        // const newList = [];

        // for (let player of players) {
        //     if (player.id === id) continue; // skip it
        //     newList.push(player);
        // }

        const newList = players.filter(player => player.id !== id);

        setPlayers(newList);
    }


    return (
        <div>
            <h2>Top Ballon d'Or Winners</h2>

            {players.map((player) => (
                <div key={player.id} className="player">
                    <p>Player name: {player.name}</p>
                    <p>Awards: {player.awards}</p>
                    <button onClick={() => deletePlayer(player.id)}>Delete</button>
                </div>
            ))}

            <Form addPlayer={addPlayer} />

        </div>
    );
}


function Form({ addPlayer }) {

    function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);  // e.target === form

        const player = {
            name: data.get("name"),
            awards: data.get("awards"),
            id: nanoid(),
        }

        console.log(player);

        addPlayer(player);

        e.target.reset();

    }

    return (
        <form onSubmit={handleSubmit}> {/**on submit, execute the handleSubmit handler */}
            <p>
                <label>Player's name:</label>
                <input name="name" type="text" required />
                    
            </p>
            <p>
                <label>Awards:</label>
                <input name="awards" type="number" required />
                    
            </p>
            <button>Save</button>
        </form>
    );
}

export default TopPlayers;