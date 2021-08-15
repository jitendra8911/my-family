import React from "react";
import * as dataConfig from '../../data/Metadata';
import Moment from "./Moment";
import './Moments.css'
import {Link, useLocation} from 'react-router-dom';
import Preview from "../Preview/Preview";
interface IProps {
    name: string
}
function Moments(props: IProps) {
    console.log('Moments is called');
    const location = useLocation();
    // @ts-ignore
    const personName = location.state ? location.state.personName : props.name.toLowerCase();
    const moments: string[] = dataConfig.moments[`${personName}Moments`];
    const markDownFilePaths = moments.map(moment => `${dataConfig.momentsDataPath}/${personName}/${moment}.md`);
    const imagePath = `${dataConfig.momentsImagesPath}/image_coming_soon.png`;
    const momentsList = markDownFilePaths.map((markDownFilePath, i) =>
        <Link to={{pathname: `/moments/${personName}/${moments[i]}`, state: {
            imagePath,
                personName,
                markDownFilePath
        }
        }} >
        <Preview imagePath = {imagePath} personName={personName} markDownFilePath={markDownFilePath}/>
        </Link>
    )
    return (
        <div className="grid-container">
            {momentsList}
        </div>
    )
}

export default Moments;