import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as dataConfig from '../../data/Metadata';
import './Moments.css';
import Preview from '../Preview/Preview';
import { PATH_PREFIX } from '../../constants/global';

interface IProps {
  name: string;
}
function Moments(props: IProps) {
  const location = useLocation();
  // @ts-ignore
  const personName = location.state ? location.state.personName : props.name.toLowerCase();
  const moments: string[] = dataConfig.moments[`${personName}Moments`];
  const filePaths = moments.map((moment) => {
    const momentImage = dataConfig.moments[`${personName}MomentsImagesPaths`][moment];
    return {
      markDownFilePath: `${dataConfig.momentsDataPath}/${personName}/${moment}.md`,
      imageFilePath: momentImage
        ? `${dataConfig.imagesPath}/${personName}/${momentImage}`
        : `${dataConfig.imagesPath}/${dataConfig.defaultImage}`,
    };
  });
  const momentsList = filePaths.map((filePath, i) => (
    <Link
      to={{
        pathname: `/${PATH_PREFIX}/moments/${personName}/${moments[i]}`,
        state: {
          imagePath: filePath.imageFilePath,
          personName,
          markDownFilePath: filePath.markDownFilePath,
        },
      }}
    >
      <Preview
        imagePath={filePath.imageFilePath}
        personName={personName}
        markDownFilePath={filePath.markDownFilePath}
      />
    </Link>
  ));
  return <div className="moments-grid">{momentsList}</div>;
}

export default Moments;
