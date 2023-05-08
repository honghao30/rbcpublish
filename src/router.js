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
import JoinStep01 from './views/publish/join/JoinStep01';
//import JoinStep02 from './views/publish/join/JoinStep02';
//import JoinStep03 from './views/publish/join/JoinStep03';
import JoinStep04 from './views/publish/join/JoinStep04';
import AgencyJoinStep01 from './views/publish/join/AgencyJoinStep01';
import AgencyJoinStep04 from './views/publish/join/AgencyJoinStep04';
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
    path: "/joinStep01", 
    component: JoinStep01,
    meta: {      
      tittle: '약관동의'
    }    
  }, 
  // {
  //   path: "/joinStep02", 
  //   component: JoinStep02,
  //   meta: {      
  //     tittle: '회원가입'
  //   }    
  // }, 
  // {
  //   path: "/joinStep03", 
  //   component: JoinStep03,
  //   meta: {      
  //     tittle: '회원가입'
  //   }    
  // }, 
  {
    path: "/joinStep04", 
    component: JoinStep04,
    meta: {      
      tittle: '회원가입'
    }    
  },  
  {
    path: "/agencyjoinStep01", 
    component: AgencyJoinStep01,
    meta: {      
      tittle: '약관동의'
    }    
  }, 
  {
    path: "/agencyjoinStep04", 
    component: AgencyJoinStep04,
    meta: {      
      tittle: '회원가입'
    }    
  },    
  {
    path: "/notice", 
    component: NoticeView,
    meta: {      
      tittle: '공지사항'
    }    
  },
];

// Vue 라우터 인스턴스 생성
const router = new VueRouter({
  mode: 'history',
  routes: route
});

export default router;