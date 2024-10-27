"use client"
import { usePathname } from 'next/navigation';

function Header() {
	const router = usePathname();
	console.log(router);
	return (
		<header>
			<nav className='py-7 px-3'>
				<ul className={`sm:static flex-col items-center flex justify-center sm:flex-row sm:gap-5`}>
					{
						[{name:'HOME', url: '/'}, {name:'ABOUT ME', url:'/about'}, {name:'PROJECTS',url:'/projects'}, {name:'BLOGS', url:'/blogs'}, {name:'CONTACT ME', url:'/contact'}].map(menuname => 
						<li className={`${router === menuname.url ? 'after:scale-x-100' : ''} relative after:block after:content-[''] after:absolute after:bottom-0 after:h-0.5 after:scale-x-0 after:hover:scale-x-100 after:w-full after:bg-gradient-to-r after:from-pink-500 after:to-violet-600 after:transition after:origin-left`}>
							<a href={menuname.url}>{menuname.name}</a>
						</li>)
					}
				</ul>
			</nav>
		</header>
	)
}

export default Header