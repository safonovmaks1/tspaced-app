import { RiInstagramLine, RiTelegramLine, RiWhatsappLine } from '@remixicon/react';
import { Icon } from '../ui';

export const socialLinks = [
	{
		id: 'telegram',
		url: 'https://t.me/helloiamtanya13',
		icon: (
			<Icon color="color">
				<RiTelegramLine size={28} />
			</Icon>
		),
		ariaLabel: 'Telegram',
	},
	{
		id: 'whatsapp',
		url: 'https://wa.me/79818036636?text=Здравствуйте!+У+меня+есть+вопрос',
		icon: (
			<Icon color="color">
				<RiWhatsappLine size={28} />
			</Icon>
		),
		ariaLabel: 'WhatsApp',
	},
	{
		id: 'instagram',
		url: 'https://www.instagram.com/tspaced',
		icon: (
			<Icon color="color">
				<RiInstagramLine size={28} />
			</Icon>
		),
		ariaLabel: 'Instagram',
	},
];
