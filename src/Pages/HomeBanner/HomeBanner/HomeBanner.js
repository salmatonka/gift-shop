import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
	return (

		<section className="bg-red-100 dark:text-gray-100">
			<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
				<h1 data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="2000" className="text-4xl font-bold leading-none sm:text-5xl">Gifting
					<span className="dark:text-violet-400"> made easy</span>
				</h1>
				<p className="px-8 mt-8 mb-12 text-lg">ST Giftster.com is the easiest way to exchange gifts with friends and family for birthdays, holidays, and more!</p>
				<div className="flex flex-wrap justify-center">
					<Link to='/product'><button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-red-300 hover:bg-red-400 dark:text-gray-900">Book Now</button></Link>
					<Link to='/about'><button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 hover:bg-red-400 border-gray-700">Learn more</button></Link>
				</div>
			</div>
		</section>
	);
};

export default HomeBanner;