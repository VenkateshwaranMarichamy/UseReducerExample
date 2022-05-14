import "./styles.css";

export default function App() {
  const isLoggedIn = false;
  const userName = "",
    password = "";

  return (
    <div className="App">
      <div>
        {isLoggedIn ? (
          <>
            <h1>Welcome !</h1>
            <button>Log Out</button>
          </>
        ) : (
          <form>
            <p>Please Login!</p>
            <input type="text" placeholder="username" value={userName}></input>
            <input
              type="password"
              placeholder="password"
              value={password}
            ></input>
            <button type="submit">submit</button>
          </form>
        )}
      </div>
    </div>
  );
}
