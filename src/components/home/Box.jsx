export const Box = ({title, icon}) => {
	return (
		<div className="flex flex-col items-center gap-6 p-10 w-full h-full rounded-[20px] text-xl font-bold bg-white" style={{
         boxShadow: 'rgba(0, 0, 0, 0.16) 0px 5px 10px'
      }}>
         {icon}
			<h2 className="text-dark-3">{title}</h2>
		</div>
	);
};
