import { useRouter } from 'next/router';

import requests from '../utils/requests';

export default function Nav() {
	const router = useRouter();
	return (
		<nav className="relative">
			<div className="flex px-10 sm:px-20 space-x-10 sm:space-x-20 text-2xl whitespace-nowrap overflow-x-scroll scrollbar-hide">
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2
						onClick={() => router.push(`/?genre=${key}`)}
						className="last:pr-24 cursor-pointer transition-all transform hover:text-white hover:scale-125 active:text-red-400"
						key={key}
					>
						{title}
					</h2>
				))}
			</div>
			<div className="absolute w-1/12 h-10 top-0 right-0 bg-gradient-to-l from-[#06202A]">
				&nbsp;
			</div>
		</nav>
	);
}
