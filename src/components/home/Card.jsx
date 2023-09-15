import FibeLeft from 'icons/svg/fybe-left.svg';
import FibeRight from 'icons/svg/fybe-right.svg';

export const Card = ({ title, content, image, side = 'left' }) => {
	return (
		<div
			className={`flex gap-10 py-[50px] max-md:flex-col ${
				side === 'right' && 'flex-row-reverse'
			}`}
		>
			<div
				className={`text-dark-3 flex-col flex ${
					side === 'right' && 'items-end'
				}`}
			>
				<div>
					<img src={side === 'right' ? FibeRight : FibeLeft} />
				</div>
				<h1 className="home-title max-sm:text-[25px]" style={{margin:'38px 0'}}>{title}</h1>
				<p className="text-lg text-justify">{content}</p>
			</div>
			<div className="home-icon right-side self-center">{image}</div>
		</div>
	);
};
