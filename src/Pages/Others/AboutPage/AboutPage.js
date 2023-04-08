import React from 'react';


const AboutPage = () => {
    return (
        <section className="bg-red-200 dark:text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-red-300">
			<img src="https://img.freepik.com/free-photo/gift-boxes-white-background_1205-2760.jpg" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Welcome to ST Giftster.com</h3>
				<span className="text-xs dark:text-gray-400">February 19, 2021</span>
				<p>Our experts spent hu We are committed to becoming the most loved and trusted store for all electronic devices with a focus on gift components by providing a cutting-edge E-commerce platform, agile warehouse systems and state of the art customer care center with wider range of products selection, great shopping experience, rapid delivery, and provide the best warranty support.</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71hWq0Uk-BL.jpg" />
				<div className="p-6 space-y-2 bg-red-300">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Valentine's Day</h3>
					<span className="text-xs dark:text-gray-400">January 21, 2021</span>
					<p>Create a universal wish list to help make gifting easy for your select Valentine.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://www.cheryls.com/blog/wp-content/uploads/2021/06/1-birthday-gift-cheryls-1024x1024.jpg" />
				<div className="p-6 space-y-2 bg-red-300">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Birthday</h3>
					<span className="text-xs dark:text-gray-400">January 22, 2021</span>
					<p>Create a birthday wish list for your special day.Add gift ideas from any site and then share your list with family.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://media.blitsy.com/wp-content/uploads/High-School-Graduation-Gift-in-a-Cup.jpg" />
				<div className="p-6 space-y-2 bg-red-300">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Graduation</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p>Create a gift registry graduation day.Help family and friends find the perfect gift for you.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://www.rd.com/wp-content/uploads/2017/12/diy-christmas-gifts-collage_FT.jpg" />
				<div className="p-6 space-y-2 bg-red-300">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Christmas</h3>
					<span className="text-xs dark:text-gray-400">January 24, 2021</span>
					<p>Create your Christmas wish list with GiftList. Add items from any site and then easily share your list with friend.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://www.bonobology.com/wp-content/uploads/2022/02/pexels-george-dolgikh-giftpunditscom-2072175.jpg" />
				<div className="p-6 space-y-2 bg-red-300">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Anniversary</h3>
					<span className="text-xs dark:text-gray-400">January 25, 2021</span>
					<p>Create a birthday wish list for your special day.Add gift ideas from any site and then share your list with family.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://www.signupgenius.com/cms/images/business/office-holiday-gift-exchange-tips-ideas-1260x630.jpg" />
				<div className="p-6 space-y-2 bg-red-300">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Holidays</h3>
					<span className="text-xs dark:text-gray-400">January 26, 2021</span>
					<p>Create a anniversary wish list for your favorite holiday.Add gift ideas from any site and then share your list with anyone.</p>
				</div>
			</a>
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline hover:bg-red-400 bg-red-300 dark:text-gray-400">Load more posts...</button>
		</div>
	</div>
</section>
    );
};

export default AboutPage;