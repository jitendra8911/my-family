import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import './About.css';
import Card from "../Card/Card";
import useDataFetcher from "../../custom-hooks/useDataFetcher";
import * as dataConfig from '../../data/Metadata';
interface IProps {
    name: string
}
function About(props: IProps) {
    const personName = props.name.toLowerCase();
    const markDownFilePath = `${dataConfig.aboutDataPath}/${personName}/${personName}.md`;
    const imagePath = `${dataConfig.aboutImagesPath}/${personName}.JPG`;
    const [md, imageFile] = useDataFetcher(imagePath, markDownFilePath);
    console.log('useDataFetcher is called');

    return (
        <Card imageFile={imageFile} imageAlt={personName} markdown={md}/>
    )
}

export default About;