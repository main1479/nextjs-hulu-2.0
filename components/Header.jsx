import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';

import HeaderItem from './HeaderItem';
export default function Header() {
	return (
		<header className="flex justify-between flex-col sm:flex-row items-center m-5">
			<div className="flex align-middle flex-grow justify-evenly max-w-2xl">
				<HeaderItem Icon={HomeIcon} title="HOME" />
				<HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
				<HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
				<HeaderItem Icon={CollectionIcon} title="COLLECTIONS" />
				<HeaderItem Icon={SearchIcon} title="SEARCH" />
				<HeaderItem Icon={UserIcon} title="ACCOUNT" />
			</div>
			<Image
				className="object-contain"
				width="200"
				height="100"
				src="/images/hulu-white.png"
				alt="logo"
			/>
		</header>
	);
}
