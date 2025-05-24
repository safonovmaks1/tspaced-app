import { RiInstagramLine, RiTelegramLine, RiWhatsappLine } from '@remixicon/react';
import { Icon } from '../../../../../../components';
import s from './SocialPanel.module.scss';

export const SocialPanel = () => {
	const socials = [
		{
			url: 'https://t.me/helloiamtanya13',
			icon: (
				<Icon size="28" color="color">
					<RiTelegramLine />
				</Icon>
			),
			ariaLabel: 'Telegram',
		},
		{
			url: 'https://wa.me/79818036636?text=Здравствуйте%2C+у+меня+есть+вопрос',
			icon: (
				<Icon size="28" color="color">
					<RiWhatsappLine />
				</Icon>
			),
			ariaLabel: 'Whatsup',
		},
		{
			url: 'https://www.instagram.com/tspaced',
			icon: (
				<Icon size="28" color="color">
					<RiInstagramLine />
				</Icon>
			),
			ariaLabel: 'Instagram',
		},
	];

	return (
		<div className={s.socialPanel}>
			<span className={s.socialPanelFollow}>Контакты</span>

			<div className={s.socialPanelLinks}>
				{socials.map((link, index) => (
					<a
						key={index}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.ariaLabel}
						className={s.socialPanelLink}>
						{link.icon}
					</a>
				))}
			</div>
		</div>
	);
};
