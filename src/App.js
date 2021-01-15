import React from 'react';
import logo from './logo.svg';
import { Desktop, Mobile } from './Responsive';
import './App.css';

function App() {
  return (
	<React.Fragment>
		<Desktop>
			<div>
				is desktop
			</div>
		</Desktop>
		<Mobile>
			<div>
				is mobile
			</div>
		</Mobile>
	</React.Fragment>
  );
}

export default App;
