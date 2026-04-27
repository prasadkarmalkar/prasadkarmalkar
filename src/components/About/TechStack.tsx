import React from 'react';
import { FaCss3, FaDocker, FaFigma, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaPhp, FaWordpress } from "react-icons/fa6";
import { SiExpress, SiGraphql, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiReact, SiRedis, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const categories = [
	{
		title: 'Frontend',
		icons: [
			{ icon: FaHtml5, name: 'HTML5' },
			{ icon: FaCss3, name: 'CSS3' },
			{ icon: FaJs, name: 'JavaScript' },
			{ icon: SiTypescript, name: 'TypeScript' },
			{ icon: SiReact, name: 'React' },
			{ icon: SiNextdotjs, name: 'Next.js' },
			{ icon: SiTailwindcss, name: 'Tailwind' },
		],
		span: 'sm:col-span-2',
	},
	{
		title: 'Backend',
		icons: [
			{ icon: FaNodeJs, name: 'Node.js' },
			{ icon: SiExpress, name: 'Express' },
			{ icon: FaPhp, name: 'PHP' },
		],
		span: 'sm:col-span-1',
	},
	{
		title: 'Data',
		icons: [
			{ icon: SiMysql, name: 'MySQL' },
			{ icon: SiMongodb, name: 'MongoDB' },
			{ icon: SiRedis, name: 'Redis' },
		],
		span: 'sm:col-span-1',
	},
	{
		title: 'Tools',
		icons: [
			{ icon: FaGitAlt, name: 'Git' },
			{ icon: FaDocker, name: 'Docker' },
			{ icon: VscVscode, name: 'VS Code' },
			{ icon: SiPostman, name: 'Postman' },
			{ icon: FaFigma, name: 'Figma' },
		],
		span: 'sm:col-span-1',
	},
	{
		title: 'CMS & APIs',
		icons: [
			{ icon: FaWordpress, name: 'WordPress' },
			{ icon: SiGraphql, name: 'GraphQL' },
		],
		span: 'sm:col-span-1',
	},
];

function TechStack() {
	return (
		<section className='py-24 sm:py-32 max-w-5xl mx-auto'>
			<div className='mb-16'>
				<p className='text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600 mb-4'>Skills</p>
				<h2 className='text-3xl sm:text-4xl font-bold tracking-tight'>
					Technologies I{' '}
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400'>work with</span>
				</h2>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				{categories.map((cat) => (
					<div key={cat.title} className={`${cat.span} gradient-border rounded-2xl p-6`}>
						<h3 className='text-[11px] font-medium uppercase tracking-[0.2em] text-gray-600 mb-5'>
							{cat.title}
						</h3>
						<div className='flex flex-wrap gap-4'>
							{cat.icons.map(({ icon: Icon, name }) => (
								<div
									key={name}
									className='group flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300'
									title={name}
								>
									<Icon className='text-xl text-gray-500 group-hover:text-white transition-colors duration-300' />
									<span className='text-[13px] text-gray-500 group-hover:text-gray-300 transition-colors duration-300'>{name}</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default TechStack;
