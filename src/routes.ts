import About from './components/About/About';
import Moment from './components/Moments/Moment';
import Moments from './components/Moments/Moments';
import Home from './Home';

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

export default routes;
