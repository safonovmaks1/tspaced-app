import { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SpecialPanel } from '../SpecialPanel/SpecialPanel';

import { RiSaveLine } from '@remixicon/react';
import { savePostAsync } from '../../../../store/actions';
import { Button, Container, Icon, Input, Section } from '../../../../ui';
import s from './PostForm.module.scss';

export const PostForm = ({ post: { id, imageUrl, title, content, location, year } }) => {
	const [titleValue, setTitleValue] = useState(title);
	const [locationValue, setLocationValue] = useState(location);
	const [contentValue, setContentValue] = useState(content);
	const [yearValue, setYearValue] = useState(year);
	const [previewUrl, setPreviewUrl] = useState(imageUrl);
	const fileInputRef = useRef(null);

	useLayoutEffect(() => {
		setTitleValue(title);
		setLocationValue(location);
		setContentValue(content);
		setYearValue(year);
	}, [imageUrl, location, title, content, year]);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewUrl(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('title', titleValue);
		formData.append('content', contentValue);
		formData.append('location', locationValue);
		formData.append('year', yearValue);

		if (fileInputRef.current.files[0]) {
			formData.append('image', fileInputRef.current.files[0]);
		}

		dispatch(savePostAsync(id, formData)).then(({ id }) => navigate(`/post/${id}`));
	};

	const onTitleChange = ({ target }) => setTitleValue(target.value);
	const onLocationChange = ({ target }) => setLocationValue(target.value);
	const onYearChange = ({ target }) => setYearValue(target.value);
	const onContentChange = ({ target }) => setContentValue(target.value);

	return (
		<Section>
			<Container>
				<form
					className={s.postForm}
					onSubmit={handleSubmit}
					enctype='multipart/form-data'
				>
					<div className={s.imageUploadContainer}>
						{previewUrl && (
							<img src={previewUrl} alt='Preview' className={s.imagePreview} />
						)}
						<input
							type='file'
							ref={fileInputRef}
							accept='image/*'
							onChange={handleFileChange}
							className={s.fileInput}
						/>
						<Button
							type='button'
							onClick={() => fileInputRef.current.click()}
							className={s.uploadButton}
						>
							{previewUrl ? 'Change Image' : 'Select Image'}
						</Button>
					</div>

					<Input value={titleValue} placeholder='Заголовок...' onChange={onTitleChange} />

					<Input
						value={locationValue}
						placeholder='Локация...'
						onChange={onLocationChange}
					/>
					<Input value={yearValue} placeholder='Год работы...' onChange={onYearChange} />

					<textarea
						value={contentValue}
						onChange={onContentChange}
						className={s.postFormTextContent}
						placeholder='Содержание...'
					/>

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
				</form>
			</Container>
		</Section>
	);
};
