import PubGuides from './views/guide';
import RullGuide from './views/guide/page/RullGuide';
import PubList from './views/guide/page/PubList';

import tableCmp from './views/guide/ui_temp/tableCmp.vue';
import TypoGraphy from './views/guide/ui_temp/TypoGraphy.vue';

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
    path: "/tableCmp", 
    component: tableCmp
  },
  {
    path: "/Typography", 
    component: TypoGraphy
  }

];


export default routes;