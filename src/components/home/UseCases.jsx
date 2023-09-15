import { ReactComponent as Backups } from 'icons/svg/backups.svg';
import { ReactComponent as Media } from 'icons/svg/media.svg';
import { ReactComponent as Storing } from 'icons/svg/storing.svg';
import { Devider } from './Devider';

const UseCases = () => {
	return (
		<>
			<div className="w-full max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
				<div>
					<h1 className="home-title mt-[46px] mb-2 text-dark-2 max-md:text-[28px] text-center">
						OBJECT STORAGE USE CASES
					</h1>

					<div className="flex pt-7 max-md:flex-wrap">
						<div className="flex flex-col items-center gap-6 p-10 w-full h-full text-xl  bg-[#E5E9EA]">
							<Backups className="h-14" />
							<h2 className="text-dark-3 text-xl font-bold text-center">BACKUPS</h2>
							<p className="font-base text-center text-sm">
								Object Storage is perfect for storing backups of your
								entire cloud instances, critical databases or even
								personal files.
							</p>
						</div>
						<div className="flex flex-col items-center gap-6 p-10 w-full h-full text-xl  bg-[#E5E9EA]">
							<Media className="h-14" />
							<h2 className="text-dark-3 text-xl font-bold text-center">
								MEDIA STORAGE
							</h2>
							<p className="font-base text-center text-sm">
								Object Storage is perfect for storing large media files,
								as it allows individual files with up to 5TB each.
								Photos and video or audio files are the most common
								examples.
							</p>
						</div>
						<div className="flex flex-col items-center gap-6 p-10 w-full h-full text-xl  bg-[#E5E9EA]">
							<Storing className="h-14" />
							<h2 className="text-dark-3 text-xl font-bold text-center">
								STORING UNSTRUCTURED DATA
							</h2>
							<p className="font-base text-center text-sm">
								People use Object Storage to store bulky unstructured
								data. Examples include log files, sensor data or files
								used in content delivery networks.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Devider color={'#E5E9EA'} />
		</>
	);
};

export default UseCases;
