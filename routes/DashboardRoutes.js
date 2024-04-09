import { v4 as uuid } from 'uuid';


export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/'
	},
	{
		id: uuid(),
		title: 'Profile',
		link: '/pages/profile',
		icon: 'lock'
	},
	{
		id: uuid(),
		title: 'Users',
		link: '/pages/billing',
		icon: 'user'

	},	
	{
		id: uuid(),
		title: 'Setting',
		link: '/pages/settings',
		icon:'settings	'
	},	
	{
		id: uuid(),
		title: 'Post',
		link: '/pages/pricing',
		icon: 'activity	'
	},			
	{
		id: uuid(),
		title: 'LAYOUTS & PAGES',
		grouptitle: true
	},
	{
		id: uuid(),
		title: 'Pages',
		icon: 'layers',
		children: [
			{ id: uuid(), link: '/pages/profile', name: 'Profile' },
			{ id: uuid(), link: '/pages/settings', name: 'Settings'},
			{ id: uuid(), link: '/pages/billing', name: 'Users' },
			{ id: uuid(), link: '/pages/pricing', name: 'Posts'},
		]
	},	
	
	{
		id: uuid(),
		title: 'Authentication',
		icon: 'lock',
		children: [
			{ id: uuid(), link: '/authentication/sign-in', name: 'Sign In' },
			{ id: uuid(), link: '/authentication/sign-up', name: 'Sign Up' },
			{ id: uuid(), link: '/authentication/forget-password', name: 'Forget Password'}			
		]
	},
	{
		id: uuid(),
		title: 'Post',
		icon: 'layout',
		link: '/layouts/layout-vertical'
	},	
	{
		id: uuid(),
		title: 'UI COMPONENTS',
		grouptitle: true
	},	
	
	
	
	
	
	
];

export default DashboardMenu;
