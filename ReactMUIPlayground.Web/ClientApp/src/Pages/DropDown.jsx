import { useState } from 'react';
import { TextField, Autocomplete, Typography } from '@mui/material';
import { faker } from '@faker-js/faker';

const people = Array.from(Array(100)).map((_, idx) => ({
    id: idx,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: faker.number.int({ min: 1, max: 100 })
}));

const peopleWithLabels = people.map(p => {
    return {
        ...p,
        label: `${p.firstName} ${p.lastName}`
    }
});


export default function DropDown() {

    const [selectedPerson, setSelectedPerson] = useState();

    return (
        <>
            {selectedPerson && <Typography variant='h4'>
                <pre>
                    {JSON.stringify(selectedPerson, null, 2)}
                </pre>
            </Typography>
            }
            <Autocomplete
                value={selectedPerson}
                onChange={(e, person) => setSelectedPerson(person)}
                disablePortal
                id="combo-box-demo"
                options={peopleWithLabels}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Person" />}
            />

        </>
    );
}