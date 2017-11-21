import Vue from 'vue'
import Router from 'vue-router'
import myReprs from '@/components/MyReprs'
import reprDetail from '@/components/ReprDetail'
import signUp from '@/components/SignUp'
import promiseDetail from '@/components/PromiseDetail'
import intro from '@/components/Intro'
import findReprs from '@/components/FindReprs'
import chooseInterest from '@/components/ChooseInterest'
// import favoritePromises from '@/components/FavoritePromises'
import personalizedPromises from '@/components/PersonalizedPromises'
import flippedTagger from '@/components/Addons/FlippedTagger'
import logIn from '@/components/LogIn'
import showBudgets from '@/components/Addons/ShowBudgets'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      component: intro
    },
    {
      path: '/flippedTagger/',
      name: 'flippedTagger',
      component: flippedTagger
    },
    {
      path: '/signup',
      name: 'signup',
      component: signUp
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: logIn
    },
    {
      path: '/myReprs',
      name: 'myReprs',
      component: myReprs
    },
    {
      path: '/reprDetail/:city/:district',
      name: 'reprDetail',
      component: reprDetail
    },
    {
      path: '/promiseDetail/:city/:district/:key',
      name: 'promiseDetail',
      component: promiseDetail
    },
    {
      path: '/findReprs',
      name: 'findReprs',
      component: findReprs
    },
    {
      path: '/chooseInterest',
      name: 'chooseInterest',
      component: chooseInterest
    },
    // {
    //   path: '/favoritePromises',
    //   name: 'favoritePromises',
    //   component: favoritePromises
    // },
    {
      path: '/personalizedPromises',
      name: 'personalizedPromises',
      component: personalizedPromises
    },
    {
      path: '/showBudgets',
      name: 'showBudgets',
      component: showBudgets
    }

  ]
})
