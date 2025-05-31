export const validateInputTel = () => {
	const phoneInputs = document.querySelectorAll('input[type="tel"]');

	const getInputNumbersValue = (input) => input.value.replace(/\D/g, '');

	const onPhonePaste = (e) => {
		const input = e.target;
		const pasted = e.clipboardData || window.clipboardData;

		if (!pasted) return;

		const pastedText = pasted.getData('Text');

		if (/\D/g.test(pastedText)) {
			e.preventDefault();
			input.value = getInputNumbersValue(input);
		}
	};

	const formatPhoneNumber = (inputNumbersValue) => {
		let formattedValue = '';

		if (['7', '8', '9'].includes(inputNumbersValue[0])) {
			const firstSymbols = inputNumbersValue[0] === '8' ? '8' : '+7';
			formattedValue = firstSymbols + ' ';

			if (inputNumbersValue.length > 1) {
				formattedValue += '(' + inputNumbersValue.substring(1, 4);
			}
			if (inputNumbersValue.length >= 5) {
				formattedValue += ') ' + inputNumbersValue.substring(4, 7);
			}
			if (inputNumbersValue.length >= 8) {
				formattedValue += '-' + inputNumbersValue.substring(7, 9);
			}
			if (inputNumbersValue.length >= 10) {
				formattedValue += '-' + inputNumbersValue.substring(9, 11);
			}
		} else {
			formattedValue = '+' + inputNumbersValue.substring(0, 16);
		}

		return formattedValue;
	};

	const onPhoneInput = (e) => {
		const input = e.target;
		const inputNumbersValue = getInputNumbersValue(input);
		const selectionStart = input.selectionStart;

		const isCursorAtEnd = input.value.length === selectionStart;

		if (!inputNumbersValue) {
			input.value = '';
			return;
		}

		if (!isCursorAtEnd && e.data && /\D/g.test(e.data)) {
			input.value = inputNumbersValue;
			return;
		}

		input.value = formatPhoneNumber(inputNumbersValue);

		if (!isCursorAtEnd) {
			input.setSelectionRange(selectionStart, selectionStart);
		}
	};

	const onPhoneKeyDown = (e) => {
		if (e.key === 'Backspace') {
			const inputValue = getInputNumbersValue(e.target);

			if (
				inputValue.length === 1 ||
				(inputValue.length === 2 && inputValue.startsWith('7'))
			) {
				e.target.value = '';
			}
		}
	};

	phoneInputs.forEach((phoneInput) => {
		phoneInput.addEventListener('keydown', onPhoneKeyDown);
		phoneInput.addEventListener('input', onPhoneInput);
		phoneInput.addEventListener('paste', onPhonePaste);
	});
};
