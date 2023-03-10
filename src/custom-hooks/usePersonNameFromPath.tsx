import { useLocation } from 'react-router-dom';

function usePersonNameFromPath() {
  const location = useLocation();
  const personNameRegex = /(?<=\/)\w+$/g;

  const matchedPersonNameFromRegex = location.pathname.match(personNameRegex) || [];

  return matchedPersonNameFromRegex[0];
}

export default usePersonNameFromPath;
