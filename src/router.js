import Vue from 'vue';
import VueRouter from 'vue-router';

import PubGuides from './views/guide';
import RullGuide from './views/guide/page/RullGuide';
import PubList from './views/guide/page/PubList';
import UiGuides from './views/guide/page/UiGuide';
import NoticeView from './views/publish/customer/Notice';
import LoginPage from './views/publish/join/LoginPage';
import IdFind from './views/publish/join/IdFind';
import pwFind from './views/publish/join/pwFind';
import joinStep02 from './views/publish/join/joinStep02';

Vue.use(VueRouter);

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
    path: "/LoginPage", 
    component: LoginPage
  }, 
  {
    path: "/IdFind", 
    component: IdFind
  },
  {
    path: "/pwFind", 
    component: pwFind
  },
  {
    path: "/joinStep02", 
    component: joinStep02
  },     
  {
    path: "/", 
    component: NoticeView,
  }
];


export default routes;