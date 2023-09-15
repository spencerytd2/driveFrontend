import { ReactNode, useState } from 'react';
import { ReactComponent as Open } from 'icons/svg/open.svg';
import { ReactComponent as Close } from 'icons/svg/close.svg';

export const BoxAccordion = ({ title, children }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="w-full max-w-7xl bg-white rounded-[20px] text-[#181E3E] shadow-md">
			<div
				className="flex gap-1 py-[15px] px-[40px] justify-between items-center text-lg cursor-pointer"
				onClick={() => setIsActive((prev) => !prev)}
			>
				<p className="font-medium">{title}</p>
				<div>
					<button className="gradient w-[44px] h-[44px] rounded-[8px] flex items-center justify-center">
						{isActive ? (
							<Close className="w-[20px] h-[9px]" />
						) : (
							<Open className="w-[20px] h-[9px]" />
						)}
					</button>
				</div>
			</div>

			{isActive && (
				<div className="scale-in-ver-top px-[40px] pb-[15px]">
					<div className="border-t-[1px] border-gray-300 pt-[15px]">
						{children}
					</div>
				</div>
			)}
		</div>
	);
};
