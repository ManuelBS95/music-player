import PlayButton from "./components/PlayButton.js"

function App() {
	return (
		<div className="h-screen w-full bg-[#E9ECF2] flex justify-center items-center font-sans">
			<div className="h-5/6 w-[300px] bg-[#171C26] rounded-3xl overflow-hidden px-5 py-5">
				<div className="flex justify-center mt-3 mb-6">
					<span className="text-xs font-bold text-white">Now playing</span>
				</div>
				<div className="flex justify-center items-center mb-6">
					<div className="h-56 w-56 bg-white rounded-3xl"></div>
				</div>
				<div className="flex flex-col items-center mb-6">
					<span className="text-white font-bold text-2xl">Unstable</span>
					<span className="text-[#787F8B] text-sm mt-2">Mr.Kitty</span>
				</div>
				<div className="flex flex-col items-center mb-6">
					<div className="relative h-1 w-full bg-[#484E5B] rounded-md mb-3">
						<div className="absolute h-1 bg-white w-2 rounded-md cursor-pointer"></div>
					</div>
					<div className="w-full flex justify-between text-xs text-white">
						<div>0:00</div>
						<div>2:42</div>
					</div>
				</div>
				<div className="w-full flex justify-center">
					<PlayButton />
				</div>
			</div>
		</div>
	)
}

export default App
