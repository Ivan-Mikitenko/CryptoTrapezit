// TODO: расширение window, для typeScript (подключить)
// был добавлен так не существует @types для совместного исопльзования с TS
declare global {
	interface Window {
		Telegram: {
			WebApp: {
				// Добавь сюда свойства и методы, используемые тобой
				ready: () => void;
				onClose: (callback: () => void) => void;
				// И так далее для всех используемых тобой API
			};
		};
	}
}

export {};
