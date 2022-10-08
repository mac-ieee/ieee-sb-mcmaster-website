import { Select, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const PastEventsPage = () => {

    const [yearSelected, setYearSelected] = React.useState(new Date().getFullYear())

    const handleChange = e => {
        setYearSelected(e.target.value);
    };

    return (
        <Stack direction="row" alignItems="center">
            <Text whiteSpace="nowrap">Filter by Year:</Text>
            <Select
                bg="white"
                w={{ base: '100%', md: '150px' }}
                value={yearSelected}
                onChange={handleChange}
            >
                {[2022, 2021, 2020].map(year => {
                    return <option key={year} value={year}>{year}</option>;
                })}
            </Select>
        </Stack>
    )
}

export default PastEventsPage