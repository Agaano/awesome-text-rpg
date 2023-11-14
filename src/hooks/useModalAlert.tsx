
import React, { useRef, useState } from 'react'
import { ReactDOM } from 'react'
export function useModalConfirm(): [
	() => React.ReactNode,
	(elem: React.ReactNode) => Promise<boolean>,
] {
	const [windows, setWindows] = useState<React.ReactNode[]>([])
	const call = (elem: React.ReactNode) => {
		let index: number;
		setWindows(prev => {
			index = prev.length ?? 0;
			const element = outerElement(elem, index);
			return [...prev, element]
		})
		return new Promise<boolean>(resolve => {
			let yesButtonListenerSettedUp = false;
			const id = setInterval(() => {
				const yesButton = document.getElementById(`yesButton${index}`)
				const noButton = document.getElementById(`noButton${index}`)
				if (!yesButton || !noButton || (yesButtonListenerSettedUp )) return;
				yesButton.onclick = () => {
					resolve(true)
					setWindows(prev => {
						return removeByIndex(prev,index)
					})
					clearInterval(id)
				}
				noButton.onclick =  () => {
					resolve(false)
					setWindows(prev => {
						return removeByIndex(prev, index)
					})
					yesButton.removeEventListener('click',() => {})
					noButton.removeEventListener('click',() => {})
					clearInterval(id)
				}
			}, 100)
		})
	}
	
	const outerElement = (innerElement: React.ReactNode, index: number) => {
		 return	(<>
					<main className='modal'>
						<div className='modal-content'>
							<p className='question'>{innerElement}</p>
							<div className='buttons'>
								<button className='yesButton' id ={`yesButton${index}`}  onClick = {e => {}}>
									Да
								</button>
								<button className='noButton' id = {`noButton${index}`}>
									Нет
								</button>
							</div>
						</div>
					</main>
			</>)
	}
	

	

	const windowsElem = () => (<>{
		windows.length > 0 &&
			windows.map((Window) => (
				<>{Window}</>
			))
	}</>)
	return [windowsElem, call]
}

function removeByIndex(array: Array<any>, index: number) {
	if (index < 0 || index >= array.length) {
		return array
	}

	const newArray = new Array(array.length - 1)
	for (let i = 0; i < index; i++) {
		newArray[i] = array[i]
	}
	for (let i = index + 1; i < array.length; i++) {
		newArray[i - 1] = array[i]
	}

	return newArray
}


export function useModalAlert(): [
	() => React.ReactNode,
	(elem: React.ReactNode | string) => void
] {
	const [opened, setOpened] = useState(false)
	const [element, setElement] = useState<React.ReactNode | string>('')
	const [windows, setWindows] = useState<React.ReactNode[]>([])
	const ref = useRef<HTMLDivElement | null>(null)

	const call = (elemToPaste: React.ReactNode | string) => {
		setWindows(prev => [...prev, elemToPaste])
	}

	const windowsElement = () => {
		return (
			<>{windows.length > 0 &&
					windows.map((window, index) => {
						return (
						<main className='modal' onClick = {(e:any) => {
							if (!ref.current?.contains(e.target)) {
							setWindows(prev => removeByIndex(prev,index))
						}}}>
							<div ref = {ref} className='modal-content'>
								{window}
							</div>
						</main>
					)})
				}</>
		)
	}

	return [windowsElement, call]
}
