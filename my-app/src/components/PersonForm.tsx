import React, { useEffect, useState } from 'react';

interface Person {
    id: number;
    name: string;
    lastName: string;
    jobTitle: string;
    birthDate: string;
    active: boolean;
}

interface PersonFormProps {
    persons: Person[];
    setPersons: React.Dispatch<React.SetStateAction<Person[]>>;
    selectedPerson: Person | null;
    setSelectedPerson: React.Dispatch<React.SetStateAction<Person | null>>;
}

const PersonForm: React.FC<PersonFormProps> = ({ persons, setPersons, selectedPerson, setSelectedPerson }) => {
    const initialFormState: Person = { id: 0, name: '', lastName: '', jobTitle: '', birthDate: '', active: false };
    const [formValues, setFormValues] = useState<Person>(initialFormState);

    useEffect(() => {
        if (selectedPerson) {
            setFormValues(selectedPerson);
        } else {
            setFormValues(initialFormState);
        }
    }, [selectedPerson]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };


    /**
 * Function to handle form submission
 * @param {React.FormEvent<HTMLFormElement>} event - The form event
 */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formValues.name || !formValues.lastName) return;
        if (selectedPerson) {
            const updatedPersons = persons.map(person => person.id === selectedPerson.id ? formValues : person);
            setPersons(updatedPersons);
            setSelectedPerson(null);
        } else {
            const highestId = Math.max(...persons.map(person => person.id), 0);
            const newPerson: Person = { ...formValues, id: highestId + 1 };
            setPersons([...persons, newPerson]);
        }
        setFormValues(initialFormState);
    };
   /**
   * Form for adding and editing persons
   * @returns {JSX.Element} The form element
   */
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formValues.name} onChange={handleInputChange} placeholder="Name" />
            <input type="text" name="lastName" value={formValues.lastName} onChange={handleInputChange} placeholder="Last Name" />
            <input type="text" name="jobTitle" value={formValues.jobTitle} onChange={handleInputChange} placeholder="Job Title" />
            <input type="text" name="birthDate" value={formValues.birthDate} onChange={handleInputChange} placeholder="Birth Date" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PersonForm;