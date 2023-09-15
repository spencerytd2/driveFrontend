import React from 'react';

import { ReactComponent as Api } from 'icons/svg/api.svg';
import { ReactComponent as Scales } from 'icons/svg/scales.svg';
import { ReactComponent as Storage } from 'icons/svg/storage.svg';
import { ReactComponent as Security } from 'icons/svg/security.svg';
import { Card } from './Card';

const Description = () => {
	return (
		<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-[40px]">
			<div className="flex flex-col gap-[50px] max-w-7xl">
				<Card
					title="WORKS WITH AMAZON S3 API"
					content="NDrive API for Object Storage follows AWS S3 standard,
						which means that you can use the same code to store and
						retrieve data from our Object Storage as from Amazon S3
						or any other object storage out there that has
						S3-compatible API."
					image={<Api />}
				/>
				<Card
					side="right"
					title="SCALES UP AND DOWN LIKE A CHARM"
					content="We know that amount of data you need to store changes over time, so we built features like auto-scaling to make sure that NDrive Object Storage can meet your needs in that regard."
					image={<Scales />}
				/>
				<Card
					title="EASY TO USE WITH GUI AND API"
					content="NDrive Object Storage can be easily managed with both API and graphic interface. There is also CLI to use it directly from the command line."
					image={<Storage />}
				/>
				<Card
					side="right"
					title="SECURITY AND REDUNDANCY"
					content="All your data stored on NDrive Object Storage is encrypted end-to-end. We use 3x replication to make sure you data is protected against physical malfunctions of hardware."
					image={<Security />}
				/>
			</div>
		</div>
	);
};

export default Description;
