import React from "react";
import * as dataConfig from '../../data/Metadata';
import Moment from "./Moment";
import {Link} from 'react-router-dom';
interface IProps {
    name: string
}
function Moments(props: IProps) {
    console.log('Moments is called');
    const personName = props.name.toLowerCase();
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
        <Moment imagePath = {imagePath} personName={personName} markDownFilePath={markDownFilePath}/>
        </Link>
    )
    return (
        <div style={{display: "grid", gridTemplateColumns: "10rem 10rem 10rem", gridGap: "1rem"}}>
            {momentsList}
        </div>
    )
}

export default Moments;