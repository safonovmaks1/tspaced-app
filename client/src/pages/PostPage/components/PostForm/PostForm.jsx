import { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SpecialPanel } from '../SpecialPanel/SpecialPanel';

import { RiSaveLine } from '@remixicon/react';
import { savePostAsync } from '../../../../store/actions';
import { Button, Container, Icon, Input, Section } from '../../../../ui';
import s from './PostForm.module.scss';

export const PostForm = ({ post: { id, imageUrl, title, content, location, year } }) => {
	const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
	const [titleValue, setTitleValue] = useState(title);
	const [locationValue, setLocationValue] = useState(location);
	const [contentValue, setContentValue] = useState(content);
	const [yearValue, setYearValue] = useState(year);

	useLayoutEffect(() => {
		setImageUrlValue(imageUrl);
		setTitleValue(title);
		setLocationValue(location);
		setContentValue(content);
		setYearValue(year);
	}, [imageUrl, location, title, content, year]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(
			savePostAsync(id, {
				imageUrl: imageUrlValue,
				title: titleValue,
				location: locationValue,
				content: contentValue,
				year: yearValue,
			}),
		).then(({ id }) => navigate(`/post/${id}`));
	};

	const onImageChange = ({ target }) => setImageUrlValue(target.value);
	const onTitleChange = ({ target }) => setTitleValue(target.value);
	const onLocationChange = ({ target }) => setLocationValue(target.value);
	const onYearChange = ({ target }) => setYearValue(target.value);
	const onContentChange = ({ target }) => setContentValue(target.value);

	return (
		<Section>
			<Container>
				<form className={s.postForm} onSubmit={handleSubmit}>
					<SpecialPanel
						className={s.postFormSpecialPanel}
						id={id}
						location={location}
						year={year}
						editButton={
							<Button type='submit' className={s.postFormEditButton}>
								Сохранить
								<Icon color='white'>
									<RiSaveLine size='1.2rem' />
								</Icon>
							</Button>
						}
					/>

					<Input
						value={imageUrlValue}
						placeholder='Изображение...'
						onChange={onImageChange}
					/>
					<Input
						value={titleValue}
						placeholder='Заголовок...'
						onChange={onTitleChange}
					/>

					<Input
						value={locationValue}
						placeholder='Локация...'
						onChange={onLocationChange}
					/>
					<Input
						value={yearValue}
						placeholder='Год работы...'
						onChange={onYearChange}
					/>

					<textarea
						value={contentValue}
						onChange={onContentChange}
						className={s.postFormTextContent}
						placeholder='Содержание...'
					/>
				</form>
			</Container>
		</Section>
	);
};
