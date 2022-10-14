import { useState } from "react"

import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"
import { Icon } from "@mui/material"

function PlayButton() {
	const [play, setPlay] = useState(false)
	const handlePlay = () => {
		if (play === false) {
			setPlay(true)
		} else if (play === true) {
			setPlay(false)
		}
	}
	return (
		<div
			onClick={handlePlay}
			className="w-12 h-12 bg-white flex justify-center items-center rounded-full cursor-pointer"
		>
			<Icon
				as={play ? PauseIcon : PlayArrowIcon}
				className="pointer-events-none"
			/>
		</div>
	)
}

export default PlayButton
