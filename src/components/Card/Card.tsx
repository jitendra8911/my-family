import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Card.css';

interface IProps {
  imageFile: any;
  imageAlt: string;
  markdown: string;
}

function Card(props: IProps) {
  return (
    <div className="card">
      {props.imageFile && <img src={props.imageFile} alt={props.imageAlt} />}
      {/* eslint-disable-next-line react/no-children-prop */}
      <ReactMarkdown children={props.markdown} />
    </div>
  );
}

export default Card;
