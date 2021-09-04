import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home(props) {
	return (
		<div>
			<Head>
				<title>Hulu 2.0</title>
				<meta name="description" content="Hulu 2.0 built with Next.js and Tailwind.css" />
				<link rel="icon" href="/favicon.ico.png" />
			</Head>

			{/* HEADER  */}
			<Header />

			{/* NAVBAR */}
			<Nav />

			{/* RESULTS */}
			<Results results={props.results} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;
	const response = await fetch(
		`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
	);
	const { results } = await response.json();
	return {
		props: {
			results,
		},
	};
}
