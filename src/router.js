import PubGuides from './views/guide';
import RullGuide from './views/guide/page/RullGuide';
import PubList from './views/guide/page/PubList';
import UiGuides from './views/guide/page/UiGuide';


const routes = [
  {
    path: "/PubGuides", 
    component: PubGuides,
    meta: {
      layout: "GuideLayout"
    }
  },
  {
    path: "/RullGuide", 
    component: RullGuide,
    meta: {
      layout: "GuideLayout"
    }
  },    
  {
    path: "/PubList", 
    component: PubList,
    meta: {
      layout: "GuideLayout"
    }
  },
  {
    path: "/UiGuides", 
    component: UiGuides,
    meta: {
      layout: "GuideLayout"
    }
  } 
];


export default routes;