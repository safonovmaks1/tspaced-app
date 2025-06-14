import { RiArrowRightLine } from '@remixicon/react';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoaderText, SlicedText } from '../../components';
import { Container, Icon, ImageContainer, Section, Title } from '../../ui';
import b from '../../ui/Button/Button.module.scss';
import { request } from '../../utils';
import s from './PortfolioPage.module.scss';

export const PortfolioPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		request(`/posts`).then(({ data: { posts } }) => {
			setPosts(posts);
			setIsLoading(false);
		});
	}, []);

	return (
		<Section>
			<Container>
				<Title>Портфолио</Title>

				{isLoading ? (
					<LoaderText text="Загрузка данных..." />
				) : (
					<div className={s.portfolioList}>
						{posts.map(({ id, imageUrl, title, content, location, year }) => (
							<article key={id} className={s.portfolioContent}>
								<ImageContainer>
									<img
										className={s.portfolioImage}
										src={imageUrl}
										alt={title}
									/>
								</ImageContainer>
								<div className={s.portfolioData}>
									<h3 className={s.portfolioTitle}>{title}</h3>

									<SlicedText width={4} className={s.portfolioText}>
										{content}
									</SlicedText>

									<div className={s.portfolioInfo}>
										<span>{location}</span>
										<span>{year}</span>
									</div>

									<Link
										to={`/post/${id}`}
										className={cn(b.button, s.portfolioButton)}>
										Смотреть проект
										<Icon color="white">
											<RiArrowRightLine size="1.5rem" />
										</Icon>
									</Link>
								</div>
							</article>
						))}
					</div>
				)}
			</Container>
		</Section>
	);
};
