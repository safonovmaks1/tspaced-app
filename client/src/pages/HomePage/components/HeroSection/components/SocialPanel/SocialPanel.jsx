import { ScrollLink } from '@/components';
import s from './SocialPanel.module.scss';

export const SocialPanel = ({ socials }) => {
	return (
		<div className={s.socialPanel}>
			<ScrollLink to='contact' className={s.socialPanelFollow}>
				Контакты
			</ScrollLink>

			<div className={s.socialPanelLinks}>
				{socials.map((link, id) => (
					<a
						key={id}
						href={link.url}
						target='_blank'
						rel='noopener noreferrer'
						aria-label={link.ariaLabel}
						className={s.socialPanelLink}
					>
						{link.icon}
					</a>
				))}
			</div>
		</div>
	);
};
