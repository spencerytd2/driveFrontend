import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Canvas from './Canvas';
import { Devider } from './Devider';

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}

const Banner = () => {
	const getOrientation = () => window?.screen?.orientation?.type;

	const [isMobile, setIsMobile] = useState(false);
	const { height, width } = useWindowDimensions();
	const [orientation, setOrientation] = useState('potrait');

	const updateOrientation = (event) => {
		const _orientation = getOrientation();
		if (_orientation) {
			if (_orientation.includes('landscape')) {
				setOrientation('landscape');
			} else {
				setOrientation('potrait');
			}
		} else {
			setOrientation('potrait'); //safari
		}
	};

	useEffect(() => {
		window.addEventListener('orientationchange', updateOrientation);
		return () => {
			window.removeEventListener('orientationchange', updateOrientation);
		};
	}, []);

	useEffect(() => {
		// console.log('orientation ' + orientation + width + '_' + height)
		if (width > height && orientation == 'landscape') {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [orientation]);

	return (
		<>
			<div
				style={{
					position: 'relative',
					padding: '200px 0 100px 0',
					display: 'flex',
					justifyContent: 'center',
					overflow: 'hidden',
				}}
			>
				<Canvas />
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
					<h3 className="text-white text-5xl leading-[60px] mb-10 font-normal">
						OBJECT STORAGE
					</h3>
					<p className="text-lg text-white font-normal pb-8">
						Easy-to-use. Scalable. All-in pricing. That's Ndrive Object
						Storage
					</p>
					<Link
						to="/register"
						className="bg-dark-2 text-white py-[15px] px-[30px] rounded-[8px] font-bold text-base mt-6 hover:bg-[#6179F8] uppercase"
					>
						Open account to create your first bucket
					</Link>
				</div>
				<Devider
					invert={true}
					color={'#E5E9EA'}
				/>
			</div>
		</>
	);
};

export default Banner;
