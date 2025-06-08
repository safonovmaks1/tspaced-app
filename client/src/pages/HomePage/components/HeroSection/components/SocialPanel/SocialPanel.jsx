import { Link } from 'react-router-dom';
import s from './SocialPanel.module.scss';

export const SocialPanel = ({ socials }) => {
	return (
		<div className={s.socialPanel}>
			<span className={s.socialPanelFollow}>Контакты</span>

			<div className={s.socialPanelLinks}>
				{socials.map((link, id) => (
					<Link
						key={id}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.ariaLabel}
						className={s.socialPanelLink}>
						{link.icon}
					</Link>
				))}
			</div>
		</div>
	);
};
