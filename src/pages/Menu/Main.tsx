import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const tg = window.Telegram.WebApp
export const Menu = () => {
	useEffect(() => {
		tg.ready()
	},[])

	const onClose = () => {
		tg.close()
	}

  return (
		<>
			<>Меню</>
			<button onClick={onClose}>Закрыть</button>
		</>
	)
}

