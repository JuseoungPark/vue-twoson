import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import Header from '@/components/Head'
Vue.component('Header', Header)

import Footer from '@/components/Footer'
Vue.component('Footer', Footer)

import Title from '@/components/Title'
Vue.component('Title', Title)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
