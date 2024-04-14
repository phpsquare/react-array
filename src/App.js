import React from "react";
import logo from './logo.svg';
import './App.css';

function ArrayList()
{
	const products = [
	
	{title:'p1',desc:'d1'},
	{title:'p2',desc:'d2'},
	{title:'p3',desc:'d3'},
	{title:'p4',desc:'d4',},
	
	];
	
	const listProduct = products.map((item) => {
		return(<p>{item.title} {item.desc}</p>);
	});
	
	return <div>{listProduct}</div>;
		
}

	



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <div><ArrayList /></div>
      </header>
	
    </div>
  );
}

export default App;
