import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined"
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined"
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"

function App() {
	const html = document.getElementsByTagName("html")
	const handleChangeTheme = (e) => {
		html[0].className = e.target.value
	}
	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="flex flex-col w-[900px] h-[600px] bg-slate-50 dark:bg-slate-900 rounded-md shadow-xl">
				<div className="flex flex-row h-[500px]">
					<div
						id="sidebar"
						className="flex flex-col justify-between h-[500px] w-56 px-3"
					>
						<div className="w-full text-xs dark:text-slate-100">
							<div className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer my-1">
								<HomeOutlinedIcon
									fontSize="small"
									className="ml-2 pointer-events-none"
								/>
								<div className="h-8 leading-8 ml-3">Home</div>
							</div>
							<div className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer my-1">
								<LibraryMusicOutlinedIcon
									fontSize="small"
									className="ml-2 pointer-events-none"
								/>
								<div className="h-8 leading-8 ml-3">Music Library</div>
							</div>
							<div className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer my-1">
								<VideoLibraryOutlinedIcon
									fontSize="small"
									className="ml-2 pointer-events-none"
								/>
								<div className="h-8 leading-8 ml-3">Video Library</div>
							</div>
						</div>
						<div className="w-full text-xs dark:text-slate-100">
							<div className="flex items-center hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer my-1">
								<SettingsOutlinedIcon
									fontSize="small"
									className="ml-2 pointer-events-none"
								/>
								<div className="h-8 leading-8 ml-3">Settings</div>
							</div>
						</div>
					</div>
					<div
						id="dashboard"
						className="w-[676px] h-[500px] px-7 bg-slate-100 dark:bg-slate-800"
					>
						<div id="home" className="hidden"></div>
						<div
							id="settings"
							className="block text-slate-900 dark:text-slate-50"
						>
							<div className="text-2xl font-bold mt-10">Settings</div>
							<div>
								<div className="text-sm font-bold mt-2">Libraries</div>
								<div>
									<div className="flex justify-between bg-slate-200 dark:bg-slate-700 py-2 my-1">
										<div className="flex items-center">
											<FolderOutlinedIcon fontSize="small" className="ml-3" />
											<div className="text-xs ml-3">
												Music library locations
											</div>
										</div>
										<div className="flex cursor-pointer">
											<div className="flex items-center">
												<CreateNewFolderOutlinedIcon fontSize="small" />
												<div className="text-xs mx-1">Add folder</div>
											</div>
											<KeyboardArrowDownOutlinedIcon
												fontSize="small"
												className="mx-2"
											/>
										</div>
									</div>
									<div className="flex justify-between bg-slate-200 dark:bg-slate-700 py-2 my-1">
										<div className="flex items-center">
											<FolderOutlinedIcon fontSize="small" className="ml-3" />
											<div className="text-xs ml-3">
												Video library locations
											</div>
										</div>
										<div className="flex cursor-pointer">
											<div className="flex items-center">
												<CreateNewFolderOutlinedIcon fontSize="small" />
												<div className="text-xs mx-1">Add folder</div>
											</div>
											<KeyboardArrowDownOutlinedIcon
												fontSize="small"
												className="mx-2"
											/>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="text-sm font-bold mt-2">Personalisation</div>
								<div>
									<div>
										<input
											type="radio"
											value="light"
											name="theme"
											id="light"
											defaultChecked
											onClick={handleChangeTheme}
										/>
										<label
											htmlFor="light"
											className="ml-2 text-xs text-slate-800 dark:text-slate-50"
										>
											Light
										</label>
									</div>
									<div>
										<input
											type="radio"
											value="dark"
											name="theme"
											id="dark"
											onClick={handleChangeTheme}
										/>
										<label
											htmlFor="dark"
											className="ml-2 text-xs text-slate-800 dark:text-slate-50"
										>
											Dark
										</label>
									</div>
								</div>
							</div>
						</div>
						<div id="music" className="hidden"></div>
						<div id="video" className="hidden"></div>
					</div>
				</div>
				<div className="h-[100px] w-[900px]  bg-slate-100 dark:bg-slate-800"></div>
			</div>
		</div>
	)
}

export default App
