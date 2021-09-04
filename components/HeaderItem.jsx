export default function HeaderItem({ Icon, title }) {
	return (
		<div className="group flex flex-col items-center w-12 sm:w-20 cursor-pointer hover:text-white transition-all">
			<Icon className="h-8 m-2 group-hover:animate-pulse" />
			<p className="tracking-wider group-hover:opacity-100 group-hover:translate-y-0 opacity-0  transition-all transform translate-y-2">
				{title}
			</p>
		</div>
	);
}
