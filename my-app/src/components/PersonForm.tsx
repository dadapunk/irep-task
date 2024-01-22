import React from 'react';

type PersonFormProps = {
    formValues: any;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const PersonForm: React.FC<PersonFormProps> = ({ formValues, handleInputChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
          
            <input type="text" name="name" value={formValues.name} onChange={handleInputChange} />
            <input type="text" name="lastName" value={formValues.lastName} onChange={handleInputChange} />
            <input type="text" name="jobTitle" value={formValues.jobTitle} onChange={handleInputChange} />
            <input type="text" name="birthDate" value={formValues.birthDate} onChange={handleInputChange} />
            <input type="checkbox" name="active" checked={formValues.active} onChange={handleInputChange} />

            <button type="submit">Add Person</button>
        </form>
    );
};

export default PersonForm;