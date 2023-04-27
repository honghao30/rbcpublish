import PubGuides from './views/guide';
import RullGuide from './views/guide/page/RullGuide';
import PubList from './views/guide/page/PubList';
import UiGuides from './views/guide/page/UiGuide';
import NoticeView from './views/publish/customer/Notice';

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
  },
  {
    path: "/", 
    component: NoticeView,
  }
];


export default routes;