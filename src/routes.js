import red from './components/red'
import yellow from './components/yellow'
import green from './components/green'

export const routes = [
    {
        path: '',
        redirect: { name: 'red' }
    },
    {
        path: '/red',
        component: red,
        name: 'red'
    },
    {
        path: '/yellow',
        component: yellow,
        name: 'yellow'
    },
    {
        path: '/green',
        component: green,
        name: 'green'
    },

]