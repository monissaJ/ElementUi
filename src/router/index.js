import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import("../components/Layout.vue")
  },
  {
    path: '/container',
    name: 'Container',
    component: () => import("../components/Container.vue")
  },
  {
    path: '/iconlink',
    name: 'IconLink',
    component: () => import("../components/IconLink.vue")
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import("../components/Button.vue")
  },
  {
    path: '/radiocheckbox',
    name: 'RadioCheckbox',
    component: () => import("../components/RadioCheckbox.vue")
  },
  {
    path: '/input',
    name: 'input',
    component: () => import("../components/Input.vue")
  },
  {
    path: '/select',
    name: 'select',
    component: () => import("../components/Select.vue")
  },
  {
    path: '/cascader',
    name: 'cascader',
    component: () => import("../components/Cascader.vue")
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import("../components/Switch.vue")
  },
  {
    path: '/slider',
    name: 'slider',
    component: () => import("../components/Slider.vue")
  },
  {
    path: '/timepicker',
    name: 'timepicker',
    component: () => import("../components/TimePicker.vue")
  },
  {
    path: '/datepicker',
    name: 'datepicker',
    component: () => import("../components/DatePicker.vue")
  }
]

export default new Router({
  routes,
  mode:'history'
})
