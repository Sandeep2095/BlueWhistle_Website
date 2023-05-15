import React from 'react';

const CreateNew = () => {
	const [inputFields, setInputFields] = useState([{ value: '' }]);

	const handleAddClick = () => {
		setInputFields([...inputFields, { value: '' }]);
	};

	const handleChange = (index, event) => {
		const values = [...inputFields];
		values[index].value = event.target.value;
		setInputFields(values);
	};
	return (
		<div>
			<button onClick={handleAddClick}>Add Description</button>
			{inputFields.map((inputField, index) => (
				<div key={index}>
					<input
						type='text'
						value={inputField.value}
						onChange={(event) => handleChange(index, event)}
					/>
				</div>
			))}
		</div>
	);
};

export default CreateNew;
