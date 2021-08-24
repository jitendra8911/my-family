import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as dataConfig from '../../data/Metadata';
import './Moments.css';
import Preview from '../Preview/Preview';

interface IProps {
  name: string;
}
function Moments(props: IProps) {
  const location = useLocation();
  // @ts-ignore
  const personName = location.state ? location.state.personName : props.name.toLowerCase();
  const moments: string[] = dataConfig.moments[`${personName}Moments`];
  const markDownFilePaths = moments.map((moment) => `${dataConfig.momentsDataPath}/${personName}/${moment}.md`);
  const imagePath = `${dataConfig.momentsImagesPath}/image_coming_soon.png`;
  const momentsList = markDownFilePaths.map((markDownFilePath, i) => (
    <Link
      to={{
        pathname: `/moments/${personName}/${moments[i]}`,
        state: {
          imagePath,
          personName,
          markDownFilePath,
        },
      }}
    >
      <Preview imagePath={imagePath} personName={personName} markDownFilePath={markDownFilePath} />
    </Link>
  ));
  return <div className="moments-grid">{momentsList}</div>;
}

export default Moments;
