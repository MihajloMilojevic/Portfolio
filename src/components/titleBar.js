
export default function TitleBar({name, maximaze, minimaze, close}) {
	const buttonProps = {
		className: "title-bar-button"
	}
	const noFunction = () => {}
	return (
		<div className="title-bar">
			<span>{name || "Name"}</span>
			<div className="title-bar-button-group">
				<button {...buttonProps} onClick={minimaze || noFunction}>_</button>
				<button {...buttonProps} onClick={maximaze || noFunction}>/_\</button>
				<button {...buttonProps} onClick={close || noFunction}>X</button>
			</div>	
		</div>
	)
}