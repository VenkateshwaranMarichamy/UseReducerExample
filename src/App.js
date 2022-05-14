import { useReducer } from "react";
import "./styles.css";

function loginReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldname]: action.payload
      };
    }
    case "login": {
      return {
        ...state,
        error: "",
        isLoading: true
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false
      };
    }
    case "error": {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        userName: "",
        password: ""
      };
    }
    case "logout": {
      return {
        ...state,
        isLoggedIn: false
      };
    }
    default:
      return state;
  }
}

const initialState = {
  userName: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false
};
export default function App() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { userName, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e) {
      e.preventDefault();
      dispatch({type: 'login'});
      try {
        await function login(userName, password) {
          return new promise ( (reject, resolve) => {
              setTimeout (() => {
                if(userName === 'venkat' && password === 'admin'){
                    resolve();
              }else{
                reject();
              }
              },1000);
         });
        }
        dispatch({type : 'success'});
      }catch(error){
        dispatch({ type: 'error'});
      }
      };


  return (
    <div className="App">
      <div>
        {isLoggedIn ? (
          <>
            <h1>Welcome !</h1>
            <button>Log Out</button>
          </>
        ) : (
          <form onSubmit={onSubmit}>
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
