import { ButtonM } from '@components/Button/button.style.ts';

type TypeButton = {
	onClick: () => void;
	text: string;
};

export const Button = ({ onClick, text }: TypeButton) => {
	return <ButtonM onClick={onClick}>{text}</ButtonM>;
};
