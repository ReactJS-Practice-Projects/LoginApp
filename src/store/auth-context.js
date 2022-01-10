import React, {useState, useEffect} from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {}
});

//all logic was moved from the App file to AuthContextProvider file. 
//The AuthContextProvider was moved to the root App component 
//so that all this logic is applied to all components 
export const AuthContextProvider = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if(storedUserLoggedInInformation === '1')
    {
      setIsLoggedIn(true);
    }

  }, []);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  return (<AuthContext.Provider 
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {props.children}
      </AuthContext.Provider>
  );
}


export default AuthContext;

