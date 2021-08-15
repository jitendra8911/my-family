import React from "react";
import useDataFetcher from "../../custom-hooks/useDataFetcher";
import Card from "../Card/Card";
import {MORE} from '../../constants/global';
interface IProps {
    imagePath: string,
    personName: string
    markDownFilePath: string,
}

function Preview(props: IProps) {
    const [md, imageFile] = useDataFetcher(props.imagePath, props.markDownFilePath);
    const moreIndex = md.indexOf(MORE);
    const markdown = moreIndex !== -1 ? md.substring(0, moreIndex): md;
    return (
        <Card imageFile={imageFile} imageAlt={props.personName} markdown={markdown}/>
    )
}

export default Preview