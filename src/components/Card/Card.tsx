import React from "react";
import ReactMarkdown from "react-markdown";

interface IProps {
    imageFile: any,
    imageAlt: string
    markdown: string,
}

function Card(props: IProps) {
    return (
        <div>
            <div> {props.imageFile && <img src={props.imageFile} alt={props.imageAlt}/>} </div>
            <ReactMarkdown children={props.markdown}/>
        </div>
    )
}

export default Card;