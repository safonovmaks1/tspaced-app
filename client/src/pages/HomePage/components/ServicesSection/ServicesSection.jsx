import { RiFileEditLine } from '@remixicon/react';
import { useEffect, useState } from 'react';
import { LoaderText } from '../../../../components';
import { Container, Icon, Section, Title } from '../../../../ui';
import { request } from '../../../../utils';
import s from './ServiceSection.module.scss';
import { IconDraft } from './components/IconDraft/IconDraft';
import { IconPlan } from './components/IconPlan/IconPlan';
import { IconProject } from './components/IconProject/IconProject';

export const ServicesSection = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [services, setServices] = useState([]);

	useEffect(() => {
		request(`/services`).then(({ data: { services } }) => {
			setServices(services);
			setIsLoading(false);
		});
	}, []);

	return (
		<Section className={s.services}>
			<Container>
				<Title>Мои услуги</Title>

				<div className={s.servicesContainer}>
					<div className={s.servicesContent}>
						<IconDraft size="120px" className={s.servicesContentImages} />

						<h3 className={s.servicesContentTitle}>
							ПЛАНИРОВОЧНОЕ РЕШЕНИЕ <br />
							(чертежи)
						</h3>

						{isLoading ? (
							<LoaderText text="Загрузка данных..." />
						) : (
							<ul className={s.servicesContentList}>
								{services
									.map(({ id, text }) => (
										<li key={id}>
											<Icon size="16" color="white">
												<RiFileEditLine />
											</Icon>
											<span className={s.servicesContentListDescr}>
												{text}
											</span>
										</li>
									))
									.slice(0, 5)}
							</ul>
						)}
					</div>

					<div className={s.servicesContent}>
						<IconPlan size="120px" className={s.servicesContentImages} />
						<h3 className={s.servicesContentTitle}>
							ЭСКИЗНЫЙ ПРОЕКТ <br />
							(чертежи)
						</h3>

						{isLoading ? (
							<LoaderText text="Загрузка данных..." />
						) : (
							<ul className={s.servicesContentList}>
								{services
									.map(({ id, text }) => (
										<li key={id}>
											<Icon size="16" color="white">
												<RiFileEditLine />
											</Icon>
											<span className={s.servicesContentListDescr}>
												{text}
											</span>
										</li>
									))
									.slice(0, 14)}
							</ul>
						)}
					</div>

					<div className={s.servicesContent}>
						<IconProject size="120px" className={s.servicesContentImages} />
						<h3 className={s.servicesContentTitle}>
							ПОЛНЫЙ ПРОЕКТ <br />
							(чертежи + визуализация + авторский надзор)
						</h3>

						{isLoading ? (
							<LoaderText text="Загрузка данных..." />
						) : (
							<ul className={s.servicesContentList}>
								{services.map(({ id, text }) => (
									<li key={id}>
										<Icon size="16" color="white">
											<RiFileEditLine />
										</Icon>
										<span className={s.servicesContentListDescr}>
											{text}
										</span>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</Container>
		</Section>
	);
};
