import {useState} from 'react';

export default function Player({initialName, symbol, isActive}) {   

    const [playername, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {        
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {        
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playername}</span>;
    let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playername} onChange={handleChange}/>;
        btnCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    )
}
