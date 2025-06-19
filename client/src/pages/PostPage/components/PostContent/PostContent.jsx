import { RiFileEditLine } from '@remixicon/react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Icon, ImageContainer, Section, Title } from '../../../../ui';
import { SpecialPanel } from '../SpecialPanel/SpecialPanel';
import s from './PostContent.module.scss';

export const PostContent = ({
	post: { id, imageUrl, title, content, location, year },
}) => {
	const navigate = useNavigate();
	return (
		<Section>
			<Container>
				<article className={s.postContent}>
					<ImageContainer className={s.postContentImage}>
						<img src={imageUrl} alt={title} />
					</ImageContainer>

					<Title>{title}</Title>

					<div className={s.postContentHeader}>
						<div className={s.postContentInfo}>
							<span className={s.postContentText}>{location} </span>
							<span className={s.postContentText}>{year}</span>
						</div>

						<SpecialPanel
							id={id}
							editButton={
								<Button
									className={s.postContentEditButton}
									onClick={() => navigate(`/post/${id}/edit`)}
								>
									Редактировать
									<Icon color='white'>
										<RiFileEditLine size='1.2rem' />
									</Icon>
								</Button>
							}
						/>
					</div>

					<div className={s.postContentText}>{content}</div>
				</article>
			</Container>
		</Section>
	);
};
