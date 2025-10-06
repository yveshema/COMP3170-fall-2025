import { useState } from 'react';
import { nanoid } from 'nanoid';

function TopPlayers() {
    const [players, setPlayers] = useState([]);

    function addPlayer(player) {
        setPlayers([...players, player]);
    }

    function deletePlayer(id) {
        setPlayers(players.filter(player => player.id !== id));
    }

    return (
        <div className="players">
            <h2>Top Ballon d'Or Winners</h2>

            {players.map((player) => (
                <div key={player.id} className="player">
                    <p>Player: {player.name}</p>
                    <p>Awards: {player.awards}</p>
                    <button onClick={() => deletePlayer(player.id)}>Remove</button>
                </div>
            ))}
            <Form add={addPlayer}  />
        </div>
    );
}

const initialPlayer = {
    name: '',
    awards: ''
};

function Form({ add }) {

    function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target); // e.target === form

        add({
            name: data.get("name"),
            awards: data.get("awards"),
            id: nanoid()
        });

        e.target.reset();

    }

    return (
        <form onSubmit={handleSubmit}>
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