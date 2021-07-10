import React from 'react';
import Header from './components/header/Header';
import Stories from './components/Stories/Stories';
import Post from './components/Post/Post';
import Tabbar from './components/Tabbar/Tabbar';


const App = () => {
  
  return (
    <React.Fragment>
      <Header />
      <Stories />
      <Post />
      <Tabbar />
     
    </React.Fragment>
    
  );
};

export default App;
