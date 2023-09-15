import React from 'react';
import Banner from 'components/home/Banner';
import GlobalScale from 'components/home/GlobalScale';
import Pricing from 'components/home/Pricing';
import Description from 'components/home/Description';
import Partners from 'components/home/Partners';
import UseCases from 'components/home/UseCases';
import CreateAccount from 'components/home/CreateAccount';
import Questions from 'components/home/Questions';
import CompanyPrices from 'components/home/CompanyPrices';

const Home = () => {
	return (
		<div className="w-full">
			<Banner />
			<div className="bg-[#E5E9EA]">
				<Pricing />
				<Description />
				<CompanyPrices />
				<Partners />
				<GlobalScale />
				<UseCases />
			</div>
			<CreateAccount />
			<Questions />
		</div>
	);
};

export default Home;
