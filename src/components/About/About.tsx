import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../Card/Card';
import useDataFetcher from '../../custom-hooks/useDataFetcher';
import * as dataConfig from '../../data/Metadata';
import usePersonNameFromPath from '../../custom-hooks/usePersonNameFromPath';

interface IProps {
  name: string;
}
function About(props: IProps) {
  const location = useLocation();
  const personNameFromPath = usePersonNameFromPath();
  // @ts-ignore
  const personName = personNameFromPath || (location.state ? location.state.personName : props.name);
  const markDownFilePath = `${dataConfig.aboutDataPath}/${personName}/${personName}.md`;
  const imagePath = `${dataConfig.aboutImagesPath}/${personName}.JPG`;
  const [md, imageFile] = useDataFetcher(imagePath, markDownFilePath);

  return <Card imageFile={imageFile} imageAlt={personName} markdown={md} />;
}

export default About;
