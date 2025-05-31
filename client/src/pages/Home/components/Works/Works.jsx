import { useEffect, useState } from 'react';
import { Container, LoaderText, Section, Title } from '../../../../shared';
import { request } from '../../../../utils/request';
import s from './Work.module.scss';

export const Works = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [works, setWorks] = useState([]);

	useEffect(() => {
		request(`/works`).then(({ data: { works } }) => {
			setWorks(works);
			setIsLoading(false);
		});
	}, []);
	return (
		<Section>
			<Container>
				<Title>Этапы работы</Title>

				{isLoading ? (
					<LoaderText text="Загрузка данных..." />
				) : (
					<div className={s.workSections}>
						{works.map((work, i) => {
							const isLeft = i % 2 === 0;
							const isLast = i === works.length - 1;

							return (
								<div key={work.id} className={s.workData}>
									<div>
										{isLeft && (
											<>
												<h3 className={s.workTitle}>
													{work.title}
												</h3>
												{work.works && (
													<div className={s.workSubtitle}>
														{work.works.map((text, i) => (
															<p key={i}>{text}</p>
														))}
													</div>
												)}
											</>
										)}
									</div>

									<div>
										<span className={s.workRounder}></span>
										{!isLast && <span className={s.workLine}></span>}
									</div>

									<div>
										{!isLeft && (
											<>
												<h3 className={s.workTitle}>
													{work.title}
												</h3>
												{work.works && (
													<div className={s.workSubtitle}>
														{work.works.map((text, i) => (
															<p key={i}>{text}</p>
														))}
													</div>
												)}
											</>
										)}
									</div>
								</div>
							);
						})}
					</div>
				)}
			</Container>
		</Section>
	);
};
