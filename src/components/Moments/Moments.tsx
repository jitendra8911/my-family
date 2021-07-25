import React, {useState} from "react";

interface IProps {
    name: string
}
function Moments(props: IProps) {
    return (
        <p> {props.name}'s moments</p>
    )
}

export default Moments;