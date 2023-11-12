import { useRef, useState } from 'react'
export function useModalConfirm(): [
	() => React.ReactNode,
	(elem: React.ReactNode) => Promise<boolean>
] {
	const [opened, setOpened] = useState(false)
	const [element, setElement] = useState<React.ReactNode | null>(null)
	const yesButtonRef = useRef<HTMLButtonElement | null>(null)
	const noButtonRef = useRef<HTMLButtonElement | null>(null)
	const call = (elem: React.ReactNode) => {
		setElement(elem)
		setOpened(true)
		return new Promise<boolean>(resolve => {
			setTimeout(() => {
				yesButtonRef.current?.addEventListener('click', () => {
					setOpened(false)
					resolve(true)
				})
				noButtonRef.current?.addEventListener('click', () => {
					setOpened(false)
					resolve(false)
				})
			}, 500)
		})
	}

	const elem = () => (
		<main className='modal'>
			<div className='modal-content'>
				<p className='question'>{element}</p>
				<div className='buttons'>
					<button className='yesButton' ref={yesButtonRef}>
						Да
					</button>
					<button className='noButton' ref={noButtonRef}>
						Нет
					</button>
				</div>
			</div>
		</main>
	)

	if (opened) return [elem, call]
	return [() => <></>, call]
}

export function useModalAlert(): [
	() => React.ReactNode,
	(text: string) => void
] {
	const [opened, setOpened] = useState(false)
	const [text, setText] = useState('')
	const ToogleModal = (text: string) => {
		setOpened(true)
		setText(text)
	}

	const elem = () => {
		const contentRef = useRef<HTMLDivElement | null>(null)
		const handleClickOutside = (e: any) => {
			if (!contentRef.current?.contains(e.target)) {
				setOpened(false)
			}
		}
		return (
			<main className='modal' onClick={handleClickOutside}>
				<div ref={contentRef} className='modal-content'>
					{text}
				</div>
			</main>
		)
	}

	if (opened) return [elem, ToogleModal]

	return [
		() => {
			return <></>
		},
		ToogleModal,
	]
}
