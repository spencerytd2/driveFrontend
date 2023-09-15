import { BoxAccordion } from './BoxAccordion';

const Questions = () => {
	return (
		<div className="gradient-box w-full py-[80px] relative px-[40px] mb-[-200px]">
			<div className="flex flex-col items-center">
				<h1 className="home-title mt-[46px] mb-8 text-white max-md:text-[28px] text-center">
					FREQUENTLY ASKED QUESTIONS
				</h1>
				<div className="w-full flex flex-col items-center max-w-7xl z-20">
					<h3 className="text-lg text-white mb-[34px]">NDrive Object Storage</h3>

					<div className="w-full pb-[50px] flex flex-col items-center gap-[40px]">
						<BoxAccordion title={'Is NDrive Object Storage S3-compatible?'}>
							<p className="font-normal">
								Yes, NDrive Object Storage offers full compatibility with AWS
								S3 API.
							</p>
						</BoxAccordion>
						<BoxAccordion title={'How am I billed for Object Storage?'}>
							<p className="font-normal">
								You will be billed for one time and use life time Unlimited storage.
							</p>
						</BoxAccordion>
						<BoxAccordion
							title={
								'How mach will I pay for transferring my data in and out?'
							}
						>
							<p className="font-normal">
								Unlimited incoming and outgoing data transfer is free of
								charge with NDrive Object Storage.
							</p>
						</BoxAccordion>
						<BoxAccordion
							title={
								'Are my files stored on Object Storage accessible on the Internet'
							}
						>
							<p className="font-normal">
								By default, all files stored on Object Storage are
								private. You can enable a link for sharing for any given
								file.
							</p>
						</BoxAccordion>
						<BoxAccordion
							title={'How can I get my additional questions answered?'}
						>
							<p className="font-normal">
								If you have some more questions before you order, you
								can reach our team  at sales@ndrive.com.
							</p>
						</BoxAccordion>
					</div>
				</div>
			</div>
			<div
				className="gradient-box"
				style={{
					height: '231px',
					width: '100%',
					position: 'absolute',
					transform: 'skew(0deg, -4deg)',
					bottom: '-70px',
					zIndex: 1,
					left: 0,
				}}
			>
				<div
					style={{
						// border: '2px solid blue',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'end',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<div>
							<div
								className="h-10 w-48 bg mr-auto -mb-3 ml-28"
								style={{ background: '#80e9ff' }}
							></div>
							<div
								className="h-10 w-96 bg mr-auto"
								style={{ background: '#7a73ff' }}
							></div>
						</div>

						<div
							style={{ width: 'fit-content' }}
							className="overflow-hidden invisible md:visible"
						>
							<div
								className="h-10 w-96 bg ml-auto"
								style={{ background: '#80e9ff' }}
							></div>
							<div
								className="h-10 w-48 bg ml-auto -mt-3 mr-28"
								style={{ background: '#7a73ff' }}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Questions;
