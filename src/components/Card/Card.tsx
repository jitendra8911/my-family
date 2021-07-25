import React, {useEffect, useState} from "react";
import About from "../About/About";
import Moments from "../Moments/Moments";
import './Card.css';

interface IProps {
    name: string
}
function Card(props: IProps) {
    const [view, setView] = useState('about');
    useEffect(() => {
        document.title = view === 'about' ? `${view} ${props.name}` : `${props.name}'s ${view}`;
    })


    return (
        <div className="card">
            <ul className="nav">
                <li><a href="#"  onClick={() => setView('about')}>About</a></li>
                <li><a href="#" onClick={() => setView('moments')}> Moments</a></li>
            </ul>
            {view === 'about' && <About name={props.name}/>}
            {view === 'moments' && <Moments name={props.name}/>}
        </div>
    );
}

export default Card;

