import About from '@/components/home/about';
import Find from '@/components/home/find';
import Footer from '@/components/home/footer';
import Hero from '@/components/home/hero';
import Properties from '@/components/home/properties';

export default function Page() {
	return (
		<main>
			<Hero />
			<About />
			<Properties />
			<Find />
			<Footer/>
		</main>
	);
}
