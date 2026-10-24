
import { useState } from "react";

function WatchTogether() {
  const [roomCode, setRoomCode] = useState("");
  const [message, setMessage] = useState("");

  function createRoom() {
    const code = "SX-" + Math.random().toString(36).substring(2, 6).toUpperCase();

    localStorage.setItem("streamx-room-code", code);
    setRoomCode(code);
    setMessage("Your room has been created!");
  }

  function joinRoom() {
    const code = roomCode.trim().toUpperCase();

    if (!code) {
      setMessage("Please enter a room code.");
      return;
    }

    setMessage("Room code entered: " + code);
  }

  async function copyRoomCode() {
    try {
      await navigator.clipboard.writeText(roomCode);
      setMessage("Room code copied!");
    } catch {
      setMessage("Please copy this code manually: " + roomCode);
    }
  }

  return (
    <section className="watch-together">
      <h2>Watch Together</h2>
      <p>Enjoy movies and shows together with your friends.</p>

      <div className="room-buttons">
        <button type="button" onClick={createRoom}>
          Create Room
        </button>

        <button
          type="button"
          onClick={() => {
            setRoomCode("");
            setMessage("Enter a room code to join.");
          }}
        >
          Join Room
        </button>
      </div>

      {message && <p className="room-message">{message}</p>}

      {roomCode && (
        <div className="room-code-box">
          <p>Your room code</p>
          <strong>{roomCode}</strong>

          <button type="button" onClick={copyRoomCode}>
            Copy Code
          </button>
        </div>
      )}

      {message === "Enter a room code to join." && (
        <div className="join-room-box">
          <input
            type="text"
            placeholder="Enter room code"
            value={roomCode}
            onChange={(event) => setRoomCode(event.target.value)}
          />

          <button type="button" onClick={joinRoom}>
            Join
          </button>
        </div>
      )}
    </section>
  );
}

export default WatchTogether;
