import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FAMILY from "./constants/family";
import Card from "./components/Card/Card";

function Home() {
    const [selectedFamilyMember, setFamilyMember] = useState('Amma');
  return (
    <div className="App">
      <header className="home-container">
          <ul className="nav">
              {FAMILY.map((familyMember) => <li><a href="javascript:void(0)" onClick={() => setFamilyMember(familyMember)}>{familyMember}</a></li>)}
          </ul>
          <div className="card">
              <Card name={selectedFamilyMember}/>
          </div>
      </header>
    </div>
  );
}

export default Home;
