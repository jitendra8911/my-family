import { useLocation } from 'react-router-dom';

function usePersonNameFromPath() {
  const location = useLocation();
  const personNameRegex = /((moments|about)\/)\w+/g;

  const matchedPersonNameResults = location.pathname.match(personNameRegex) ?? [];
  const matchedExpression = matchedPersonNameResults[0];

  return matchedExpression && matchedExpression.split('/')[1];
}

export default usePersonNameFromPath;
