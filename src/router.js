import PubGuides from './views/guide';
import RullGuide from './views/guide/page/RullGuide';
import PubList from './views/guide/page/PubList';

const routes = [
  {
    path: "/PubGuides", 
    component: PubGuides
  },
  {
    path: "/RullGuide", 
    component: RullGuide
  },    
  {
    path: "/PubList", 
    component: PubList
  }

];


export default routes;