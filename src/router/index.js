import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';

//经费执行管理
import Expend11 from '@/views/Expend/Expend-1-1';
import Expend124 from '@/views/Expend/Expend-1-2-4';
import Expend131 from '@/views/Expend/Expend-1-3-1';
import Expend151 from '@/views/Expend/Expend-1-5-1';
import Expend16 from '@/views/Expend/Expend-1-6';

//财务综合管理
import Finance111 from '@/views/Finance/Finance-1-1-1';
import Finance18 from '@/views/Finance/Finance-1-8';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/expend-1-1',
            name: 'Expend11',
            component: Expend11
        },
        {
            path: '/expend-1-2-4',
            name: 'Expend124',
            component: Expend124
        },
        {
            path: '/expend-1-3-1',
            name: 'Expend131',
            component: Expend131
        },
        {
            path: '/expend-1-5-1',
            name: 'Expend151',
            component: Expend151
        },
        {
            path: '/expend-1-6',
            name: 'Expend16',
            component: Expend16
        },
        {
            path: '/Finance-1-1-1',
            name: 'Finance111',
            component: Finance111
        },
        {
            path: '/Finance-1-8',
            name: 'Finance18',
            component: Finance18
        }
    ]
});
