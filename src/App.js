import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

import AuthContext from './store/auth-context';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //useEffect helps to prevent infinite looop. 
  //if we set isLoggedIn to 1 in the local storage and reload the site this local storage will always be 1 
  //as a result of it we remove 1 from the local storage in the logout function 
  useEffect(() => {
    
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if(storedUserLoggedInInformation === '1')
    {
      setIsLoggedIn(true);
    }

  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  //AuthContect.Provider - we provide this component to all other components and that's why we use (wrap around) it in the main component 
  //AthContect.Consumer - use this component in components which use it. We do it to prevent of propogating parameters from lower level compoent to upper level  
  return (
    <AuthContext.Provider 
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
