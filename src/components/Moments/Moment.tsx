import React from "react";
import Card from "../Card/Card";
import useDataFetcher from "../../custom-hooks/useDataFetcher";
import {useLocation, useRouteMatch} from 'react-router-dom';

interface IProps {
    imagePath: string,
    personName: string
    markDownFilePath: string,
}
function Moment(props: IProps) {
    console.log('Moment is called props: ', props);
    let { path, url } = useRouteMatch();
    console.log(`path: ${path} url: ${url}`);
    const location = useLocation();
    console.log('location ', location);
    // @ts-ignore
    const {imagePath, markDownFilePath} = location.state || {};
    const [md, imageFile] = useDataFetcher(props.imagePath || imagePath, props.markDownFilePath || markDownFilePath);
    return (
        <Card imageFile={imageFile} imageAlt={props.personName} markdown={md}/>
    )
}

export default Moment;