import React from "react";
import "../assets/style.css"
const CreateRoom = (props) => {
    const create = async (e) => {
        e.preventDefault();

        const resp = await fetch("http://localhost:8000/create");
        const { room_id } = await resp.json();

		props.history.push(`/room/${room_id}`)
    };

    return (
        <div class="TestButton">
            <button onClick={create}>Create Room</button>
        </div>
    );
};

export default CreateRoom;
