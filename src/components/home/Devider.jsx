export const Devider = ({ color, invert }) => {
	return (
		<>
			{invert ? (
				<>
					<div class="custom-shape-divider-bottom-1694509361">
						<svg
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
						>
							<path
								d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
								class="shape-fill"
								style={{
									fill: color,
								}}
							></path>
						</svg>
					</div>
				</>
			) : (
				<div className="w-full relative">
					<div className="custom-shape-divider-top-1694501223">
						<svg
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 1200 120"
							preserveAspectRatio="none"
						>
							<path
								d="M1200 0L0 0 598.97 114.72 1200 0z"
								className="shape-fill"
								style={{
									fill: color,
								}}
							></path>
						</svg>
					</div>
				</div>
			)}
		</>
	);
};
