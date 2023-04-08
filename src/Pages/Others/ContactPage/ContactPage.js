import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <section className="p-6 bg-red-200 dark:text-gray-100">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-red-300">

			<h1 className="text-5xl font-extrabold dark:text-gray-50">#Let's_Talk</h1>
			<p className="my-6">
				<span className="font-medium dark:text-gray-50">Leave a message.We love to hear from you!</span>
			</p>
			<form novalidate="" action="https://formsubmit.co/e1cf56c3589647066652e2f545ac25c8" method="POST"  className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
				<div>
					<label for="name" className="text-sm sr-only ">Your name</label>
					<input id="name" type="text" placeholder="Your name" className="w-full pl-6 py-2 rounded-md focus:ring focus:border-red-400 border-gray-700 pl-6" />
				</div>
				<div>
					<label for="product" className="text-sm sr-only">Product name</label>
					<input id="product" type="text" placeholder="product name" className="w-full pl-6 py-2 rounded-md focus:ring focus:border-red-400 border-gray-700" />
				</div>
				<div>
					<label for="email" className="text-sm sr-only">Email address</label>
					<input id="email" type="email" placeholder="Email address" className="w-full pl-6 py-2 mb-6 rounded-md focus:ring focus:bored-red-400 border-gray-700" />
				</div>
				<div>
					<label for="message" className="text-sm sr-only">Message</label>
					<textarea id="message" type="text" placeholder="message" className="w-full pl-6 py-6  rounded-md focus:ring focus:bored-red-400 border-gray-700" />
				</div>
				<button type="submit" value="submit" className="w-full py-3 font-semibold rounded hover:bg-red-500 bg-red-400 dark:text-gray-900">Submit</button>
			</form>
		</div>
		<img src="https://img.freepik.com/free-photo/gift-boxes-white-background_1205-2760.jpg" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
	</div>
</section>
        </div>
    );
};

export default ContactPage;