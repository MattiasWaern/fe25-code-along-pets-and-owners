import Start from './pages/Start';
import AboutUs from './pages/AboutUs';

export default [
  {
    path: '/',
    element: <Start />,
    label: 'Start'
  },
  {
    path: '/about-us',
    element: <AboutUs />,
    label: 'About us'
  }
];