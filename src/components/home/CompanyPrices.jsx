import { ReactComponent as Fybe } from 'icons/svg/fybe.svg';
import { ReactComponent as Vultr } from 'icons/svg/vultr.svg';
import { ReactComponent as Linode } from 'icons/svg/linode.svg';
import { ReactComponent as DigitalOcean } from 'icons/svg/digitalocean.svg';
import { ReactComponent as Aws } from 'icons/svg/aws.svg';

const CompanyPrices = () => {
	return (
		<div className="bg-dark-2 relative z-20">
			<div className="w-full text-center pt-[30px] pb-[80px]">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h3 className="home-title mb-[60px] text-white max-sm:text-[28px]">
						CLOUD STORAGE PRICE THAT WILL SURPRISE YOU
					</h3>

					<div className="company-prices">
						<div className="flex text-white h-full items-end min-h-[400px]">
							<div className="flex flex-col items-center gap-[15px] mx-6">
								<div className="flex flex-col items-center rounded-2xl">
									<p className="font-bold mb-[15px] text-xl">
										$29.00
										<br />
										<span className="text-base">
											/ one time payment
										</span>
									</p>
									<div className="h-[44px] w-[60px] bg-[#6179F8] rounded-[20px]"></div>
								</div>
								<p>Unlimited Storage, Unlimited of Transfer</p>
								<h3 className="font-bold text-lg">Ndrive</h3>
									<img
										
										src={require('../../icons/image-cut.png')}
										alt="img"
										className=' h-[120px] mt-[-38px]'
									/>
								
							</div>
							<div className="flex flex-col items-center gap-[15px] mx-6">
								<div className="flex flex-col items-center rounded-2xl">
									<p className="font-bold mb-[15px] text-xl">
										$80.00 <span className="text-base">/ month</span>
									</p>
									<div className="h-[60px] w-[60px] bg-white rounded-[20px]"></div>
								</div>
								<p>10 TB of Storage, 4 TB of Transfer</p>
								<h3 className="font-bold text-lg">Vultr</h3>
								<div>
									<Vultr className="h-[85px]" />
								</div>
							</div>
							<div className="flex flex-col items-center gap-[15px] mx-6">
								<div className="flex flex-col items-center rounded-2xl">
									<p className="font-bold mb-[15px] text-xl">
										$200.00 <span className="text-base">/ month</span>
									</p>
									<div className="h-[152px] w-[60px] bg-white rounded-[20px]"></div>
								</div>
								<p>10 TB of Storage, 4 TB of Transfer</p>
								<h3 className="font-bold text-lg">Linode</h3>
								<div>
									<Linode className="h-[85px]" />
								</div>
							</div>
							<div className="flex flex-col items-center gap-[15px] mx-6">
								<div className="flex flex-col items-center rounded-2xl">
									<p className="font-bold mb-[15px] text-xl">
										$240.00 <span className="text-base">/ month</span>
									</p>
									<div className="h-[184px] w-[60px] bg-white rounded-[20px]"></div>
								</div>
								<p>10 TB of Storage, 4 TB of Transfer</p>
								<h3 className="font-bold text-lg">DigitalOcean</h3>
								<div>
									<DigitalOcean className="h-[85px]" />
								</div>
							</div>
							<div className="flex flex-col items-center gap-[15px] mx-6">
								<div className="flex flex-col items-center rounded-2xl">
									<p className="font-bold mb-[15px] text-xl">
										$420.00 <span className="text-base">/ month</span>
									</p>
									<div className="h-[320px] w-[60px] bg-white rounded-[20px]"></div>
								</div>
								<p>10 TB of Storage, 4 TB of Transfer</p>
								<h3 className="font-bold text-lg">AWS S3</h3>
								<div>
									<Aws className="h-[85px]" />
								</div>
							</div>
						</div>
						<p className="mt-8 text-sm text-white">
							All list prices as seen on providers' websites in April
							2023. Currency conversion done using exchange rates as of
							April 2023. Tax not included. All logos and trademarks are
							the property of their respective owners.
						</p>
					</div>
					<div className="company-prices-mobile">
						<div className="flex flex-col gap-[50px] text-white">
							<div className="flex flex-col gap-[15px] mx-6 items-start">
								<div className="flex gap-3 w-full items-center">
									<div>
										{/* <Fybe className="h-[63px]" /> */}
										<img
										
										src={require('../../icons/image-cut.png')}
										alt="img"
										className="h-[100px] mt-[-30px]"
									/>
									</div>
									<div className="h-[40px] w-full max-w-[17px] ml-[30px] bg-[#6179F8] rounded-[8px]"></div>
									<div className="w-full flex justify-end">
										<p className="font-normal text-xl w-full max-w-[200px]">
											$29.00
											<br />
											<span className="text-xs">
												/one time payment
											</span>
										</p>
									</div>
								</div>
								<p className="text-xs">
									Unlimited Storage, Unlimited of Transfer
								</p>
							</div>
							<div className="flex flex-col gap-[15px] mx-6 items-start">
								<div className="flex gap-3 w-full items-center">
									<div>
										<Vultr className="h-[63px]" />
									</div>
									<div className="h-[40px] w-full max-w-[24px] ml-[30px] bg-white rounded-[8px]"></div>
									<div className="w-full flex justify-end">
										<p className="font-normal text-xl w-full max-w-[200px]">
											$80.00
											<br />
											<span className="text-xs">/ month</span>
										</p>
									</div>
								</div>
								<p className="text-xs">
									10 TB of Storage, 4 TB of Transfer
								</p>
							</div>
							<div className="flex flex-col gap-[15px] mx-6 items-start">
								<div className="flex gap-3 w-full items-center">
									<div>
										<Linode className="h-[63px]" />
									</div>
									<div className="h-[40px] w-full max-w-[60px] ml-[30px] bg-white rounded-[8px]"></div>
									<div className="w-full flex justify-end">
										<p className="font-normal text-xl w-full max-w-[200px]">
											$200.00
											<br />
											<span className="text-xs">/ month</span>
										</p>
									</div>
								</div>
								<p className="text-xs">
									10 TB of Storage, 4 TB of Transfer
								</p>
							</div>
							<div className="flex flex-col gap-[15px] mx-6 items-start">
								<div className="flex gap-3 w-full items-center">
									<div>
										<DigitalOcean className="h-[63px]" />
									</div>
									<div className="h-[40px] w-full max-w-[73px] ml-[30px] bg-white rounded-[8px]"></div>
									<div className="w-full flex justify-end">
										<p className="font-normal text-xl w-full max-w-[200px]">
											$240.00
											<br />
											<span className="text-xs">/ month</span>
										</p>
									</div>
								</div>
								<p className="text-xs">
									10 TB of Storage, 4 TB of Transfer
								</p>
							</div>
							<div className="flex flex-col gap-[15px] mx-6 items-start">
								<div className="flex gap-3 w-full items-center">
									<div>
										<Aws className="h-[63px]" />
									</div>
									<div className="h-[40px] w-full max-w-[128px] ml-[30px] bg-white rounded-[8px]"></div>
									<div className="w-full flex justify-end">
										<p className="font-normal text-xl w-full max-w-[200px]">
											$420.00
											<br />
											<span className="text-xs">/ month</span>
										</p>
									</div>
								</div>
								<p className="text-xs">
									10 TB of Storage, 4 TB of Transfer
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CompanyPrices;
