import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
//import './About.css';
import Card from "../Card/Card";
import useDataFetcher from "../../custom-hooks/useDataFetcher";
import * as dataConfig from '../../data/Metadata';
import {useLocation} from "react-router-dom";
interface IProps {
    name: string
}
function About(props: IProps) {
    console.log('inside About');
    const location = useLocation();
    // @ts-ignore
    const personName = location.state ? location.state.personName: props.name;
    console.log('personName is ', personName);
    const markDownFilePath = `${dataConfig.aboutDataPath}/${personName}/${personName}.md`;
    const imagePath = `${dataConfig.aboutImagesPath}/${personName}.JPG`;
    const [md, imageFile] = useDataFetcher(imagePath, markDownFilePath);
    console.log('useDataFetcher is called');

    return (
        <Card imageFile={imageFile} imageAlt={personName} markdown={md}/>
    )
}

export default About;