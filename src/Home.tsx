import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FAMILY from "./constants/family";
import Tile from "./components/Tile/Tile";
import Moment from "./components/Moments/Moment";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Moments from "./components/Moments/Moments";



function Home() {
    const [selectedFamilyMember, setFamilyMember] = useState('Amma');
  return (
    <div className="App">
      <header className="home-container">
          <ul className="nav">
              {FAMILY.map((familyMember) => <li><a href="javascript:void(0)" onClick={() => setFamilyMember(familyMember)}>{familyMember}</a></li>)}
          </ul>
          <div className="card">
              <Tile name={selectedFamilyMember}/>
          </div>
      </header>
    </div>
  );
}



export default Home;
