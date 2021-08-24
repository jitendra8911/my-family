import React from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
import Card from '../Card/Card';
import useDataFetcher from '../../custom-hooks/useDataFetcher';
import { MORE } from '../../constants/global';

interface IProps {
  imagePath: string;
  personName: string;
  markDownFilePath: string;
}
function Moment(props: IProps) {
  const location = useLocation();
  // @ts-ignore
  const { imagePath, markDownFilePath } = location.state || {};
  const [md, imageFile] = useDataFetcher(props.imagePath || imagePath, props.markDownFilePath || markDownFilePath);
  const markdown = md.replace(MORE, '');
  return <Card imageFile={imageFile} imageAlt={props.personName} markdown={markdown} />;
}

export default Moment;
