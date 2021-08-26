import About from './components/About/About';
import Moment from './components/Moments/Moment';
import Moments from './components/Moments/Moments';
import Home from './Home';
import { PATH_PREFIX } from './constants/global';

const routes = [
  {
    path: '/about/:personId',
    component: About,
  },

  {
    path: '/moments/:personId/:momentId',
    component: Moment,
  },
  {
    path: '/moments/:personId',
    component: Moments,
  },
  {
    path: '/',
    component: Home,
  },
];

export default routes.map((route) => {
  const updatedRoute = {
    ...route,
    path: `/${PATH_PREFIX}${route.path}`,
  };

  return updatedRoute;
});
