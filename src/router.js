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
import joinStep03 from './views/publish/join/joinStep03';

Vue.use(VueRouter);

const route = [
  {
    path: '*',
    component: () => import ('@/views/NotFoundPage.vue'),
  },  
  {
    path: "/PubGuides", 
    component: PubGuides,
    meta: {
      layout: "GuideLayout",
      tittle: 'RCS Biz Center 가이드'
    }
  },
  {
    path: "/RullGuide", 
    component: RullGuide,
    meta: {
      layout: "GuideLayout",
      tittle: 'RCS Biz Center 가이드'
    }
  },    
  {
    path: "/PubList", 
    component: PubList,
    meta: {
      layout: "GuideLayout",
      tittle: 'RCS Biz Center 가이드'
    }
  },
  {
    path: "/UiGuides", 
    component: UiGuides,
    meta: {
      layout: "GuideLayout",
      tittle: 'RCS Biz Center 가이드'
    }
  },
  {
    path: "/LoginPage", 
    component: LoginPage,
    meta: {      
      tittle: '로그인'
    }    
  }, 
  {
    path: "/IdFind", 
    component: IdFind,
    meta: {      
      tittle: '아이디 찾기'
    }    
  },
  {
    path: "/pwFind", 
    component: pwFind,
    meta: {      
      tittle: '비밀번호 찾기'
    }    
  },
  {
    path: "/joinStep02", 
    component: joinStep02,
    meta: {      
      tittle: '회원가입'
    }    
  }, 
  {
    path: "/joinStep03", 
    component: joinStep03,
    meta: {      
      tittle: '회원가입'
    }    
  },    
  {
    path: "/", 
    component: NoticeView,
    meta: {      
      tittle: '공지사항'
    }    
  }
];

// Vue 라우터 인스턴스 생성
const router = new VueRouter({
  mode: 'history',
  routes: route
});

export default router;