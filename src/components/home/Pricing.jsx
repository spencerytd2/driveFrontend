import React from 'react';
import { ReactComponent as Check } from 'icons/svg/check.svg';
import { Link } from 'react-router-dom';

const Pricing = () => {
	return (
		<div className="bg-[#E5E9EA]">
			<div className="w-full text-center pt-[30px] pb-[80px]">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h3 className="home-title mb-[60px] text-dark-2 max-sm:text-[28px]">
						SIMPLE ALL-IN PRICING FOR YOUR BEST EXPERIENCE
					</h3>

					<div className="gradient-box rounded-[1em] pt-4 pb-2 flex flex-col text-dark-2 shadow-md">
						<div className="flex flex-col gap-5 bg-white py-6 rounded-t-[1em]">
							<h2 className="text-2xl font-bold mt-5 uppercase">
							$29.00 one time payment for Life time use
							</h2>
							<p className="font-bold">
								Start with a single bucket and scale, adding or removing
								buckets as needed.
							</p>
						</div>
						<div className="pt-[48px]">
							<div className="flex w-full justify-center gap-[30px] max-md:flex-col max-md:p-[30px]">
								<div className="flex items-center gap-[1em]">
									<Check />
									<div className="flex items-start flex-col text-white ">
										<p className="text-[27px] font-bold">Unlimited</p>
										<p className="text-[18px]">Storage</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<Check />
									<div className="flex items-start flex-col text-white ">
										<p className="text-[27px] font-bold">Unlimited</p>
										<p className="text-[18px]">Inbound Transfer</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<Check />
									<div className="flex items-start flex-col text-white ">
										<p className="text-[27px] font-bold">Unlimited</p>
										<p className="text-[18px]">Outbound Transfer</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<Check />
									<div className="flex items-start flex-col text-white ">
										<p className="text-[27px] font-bold">No</p>
										<p className="text-[18px]">Hidden Fees</p>
									</div>
								</div>
							</div>
							{/* <button  className="bg-dark-2 text-white py-[15px] px-[30px] rounded-[8px] font-bold text-base mt-6 hover:bg-[#6179F8]">
								SELECT
							</button> */}
							<div>
								<a href="/register">
								<button  className="bg-dark-2 text-white py-[15px] px-[30px] rounded-[8px] font-bold text-base mt-6 hover:bg-[#6179F8]">
								SELECT
							</button>
								</a>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
