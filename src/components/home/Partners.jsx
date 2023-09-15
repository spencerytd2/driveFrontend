import { ReactComponent as Rclone } from 'icons/svg/rclone.svg';
import { ReactComponent as Cyberduck } from 'icons/svg/cyberduck.svg';
import { ReactComponent as Aws } from 'icons/svg/aws.svg';
import { ReactComponent as Spark } from 'icons/svg/spark.svg';
import { ReactComponent as NextCloud } from 'icons/svg/nextcloud.svg';
import { ReactComponent as Valero } from 'icons/svg/valero.svg';

import { Box } from './Box';

const Partners = () => {
	return (
		<div
			style={{
				minHeight: '70vh',
				height: 'max-content',
				width: '100%',
				position: 'relative',
				transform: 'skewY(-6deg)',
				marginTop: '40px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 1,
			}}
		>
			<div
				className="bg-[#E5E9EA]"
				style={{
					height: '100%',
					width: '100%',
					position: 'absolute',
				}}
			>
				<div
					className=""
					style={{
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}
				>
					<div></div>
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
				</div>
			</div>
			<div
				className="pt-36 md:pt-0"
				style={{
					transform: 'skewY(6deg)',
					display: 'flex',
					flexDirection: 'column',
					gap: '48px',
					height: 'fit-content',
					width: 'fit-content',
					margin: 'auto',
					maxWidth: '1216px',
					// paddingTop: '150px',
					paddingBottom: '150px',
					// border: '2px solid red'
				}}
			>
				<div className="w-full max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
					<div>
						<h1 className="home-title mt-[46px] mb-2 text-dark-2 max-md:text-[28px] text-center">
							OUR OBJECT STORAGE SEAMLESSLY WORKS WITH
						</h1>
						<div className="partners-grid py-8">
							<Box
								title="RCLONE"
								icon={<Rclone />}
							/>
							<Box
								title="CYBERDUCK"
								icon={<Cyberduck />}
							/>
							<Box
								title="AWS CLI"
								icon={<Aws />}
							/>
							<Box
								title="APACHE SPARK"
								icon={<Spark />}
							/>
							<Box
								title="NEXTCLOUD"
								icon={<NextCloud />}
							/>
							<Box
								title="VELERO"
								icon={<Valero />}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partners;
