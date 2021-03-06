import './App.scss';
import logo from './assets/videos/Loading.gif'
import Home from './pages/Home/Home';
import React, {useState, useEffect} from 'react';

function App() {
const [isLoading, setIsLoading ] = useState(true);
useEffect(() => {
	
	setTimeout(() => {
		
		setIsLoading(false);
	
	},3500);
})
	
  return (
   <div className="App">

	  {isLoading && (
	  
	  
	<div style={{justifyContent:'center', alignItems:'center' , display:'flex' , height: '100vh'}} align="center" className="center">
	  <img style={{width:'250px' , height:'250px'}} src={logo}/>
	
	  </div>
	  )}
	  
	  
	  {!isLoading && <Home />

	 // {isLoading==true?
  //<preLoading />:
// <Home />
 
	  }
</div>
  );
}
// <div className="App">
	//	<Home />
  // </div>
export default App;
