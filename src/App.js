import React, { useState, useEffect, useContext } from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Riderect } from 'react-router-dom';
import Login from "./cmpnnt/Login";
import PrivateRoute from './cmpnnt/PrivateRoute';
import Homeu from './pages/Homeu';

import AddJourneyPages from './pages/AddJourneyPages';
import DetailJourney from './pages/DetailJourney';
import ProfilePages from './pages/ProfilePages';
import BookmarkPage from './pages/BookmarkPage';
import { UserContext } from './context/UserContext';
import axios from 'axios';



function App() {
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState();
  const [upload, setUpload] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState();


  useEffect(() => {
    axios({
      url: " https://journeyid.herokuapp.com/api/v1/userByEmail",
      params: { email: localStorage.getItem("email") }

    }).then(res => {
      setUser(res.data.data);

    }).catch(err => console.log(err));
  }, [email || upload || localStorage.getItem('token')]);



  return (
    <div>
      <Router>
        <UserContext.Provider value={{ user, setEmail, upload, setUpload, setUser, setIsLoggedIn, isLoggedIn }}>

          <Route exact path="/" component={Home} />


          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/add-journey" component={AddJourneyPages} />
          <PrivateRoute exact path="/profile" component={ProfilePages} />
          <PrivateRoute exact path="/bookmark" component={BookmarkPage} />
          <Route exact path="/detail/:id" component={DetailJourney} />
        </UserContext.Provider>

      </Router>

    </div>
  );
}

export default App;
