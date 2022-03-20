import logo from './logo.svg';
//import onAuthStateChange to keep the logged in user in the browser
import {createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {useState} from 'react';
import {auth} from './firebase-config';
import './App.css';

function App() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user,setUser] = useState({});

  onAuthStateChanged(auth,(currentUser) => {
    setUser(currentUser);
  })


  const register = async() => {

    try{
      const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
      console.log(user);
    }
    catch(error){
      console.log(error.message);
    
    }
    

  }

  const login = async() => {
    try{
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
      console.log(user);
    }
    catch(error){
      console.log(error.message);
    
    }
  }

  const logout = async() => {

    signOut(auth);
      
  }


  return (
    <div className="App">
      
        <h3>Register User</h3>
        <p>Email: <input placeholder='Email' onChange={(event) => {setRegisterEmail(event.target.value)}}></input></p>
        <p>Password: <input type="password" placeholder='Password'onChange={(event) => {setRegisterPassword(event.target.value)}}></input></p>

        <button onClick={register}>Create User</button>

        <div>
          <h3>Login</h3>
          <input placeholder='Email'onChange={(event) => {setLoginEmail(event.target.value)}}></input>
          <input placeholder='Password'onChange={(event) => {setLoginPassword(event.target.value)}}></input>
          <button onClick={login}>Login</button>
        </div>

        <h4>
          User Logged in:
          {user?.email}
        </h4>

        <button onClick={logout}>Sign out</button>
      </div>
  );
}

export default App;
