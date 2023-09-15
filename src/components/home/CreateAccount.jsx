import { useNavigate } from 'react-router-dom/dist';
import { Devider } from './Devider';

const CreateAccount = () => {
   const navigate = useNavigate()
	return (
		<>
			<div className="bg-dark-2 w-full p-[50px]">
				<div className="flex flex-col items-center">
					<h1 className="home-title mt-[46px] mb-2 text-white max-md:text-[28px] text-center">
						START STORING YOUR DATA WITH NDrive TODAY
					</h1>
					<button onClick={()=>navigate('/register')} className="gradient text-white py-[15px] px-[30px] rounded-[8px] font-bold text-base mt-6">
						Create an account
					</button>
				</div>
			</div>
			<Devider color={'#0C2444'} />
		</>
	);
};

export default CreateAccount;
