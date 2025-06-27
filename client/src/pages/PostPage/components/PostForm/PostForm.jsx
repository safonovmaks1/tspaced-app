import { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { SpecialPanel } from '../SpecialPanel/SpecialPanel';

import { Form } from '@/components';
import { savePostAsync } from '@/store/actions';
import { Button, Container, Icon, Input, Section } from '@/ui';
import { RiSaveLine } from '@remixicon/react';
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
				<Form
					className={s.postForm}
					onSubmit={handleSubmit}
					encType='multipart/form-data'
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
							width='w100'
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
						placeholder='Содержание...'
					/>

					<SpecialPanel
						className={s.postFormSpecialPanel}
						id={id}
						location={location}
						year={year}
						editButton={
							<Button type='submit' width='w100'>
								Сохранить
								<Icon color='white'>
									<RiSaveLine size='1.2rem' />
								</Icon>
							</Button>
						}
					/>
				</Form>
			</Container>
		</Section>
	);
};
