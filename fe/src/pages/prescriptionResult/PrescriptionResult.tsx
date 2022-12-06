import { FC, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getOneItemApi, getPrescriptionApi } from './prescriptionResult.service';
import { Container, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { isNull } from '../utils/is';

const PrescriptionResult = () => {
    const [rxNumber, setRxNumber] = useState('');
    const [dob, setDob] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setRxNumber(localStorage.getItem('rxNumber') || '');
        setDob(localStorage.getItem('dob') || '');
        console.log(dob, rxNumber);
    });

    const { data: prescription, isSuccess } = useQuery(
        ['prescription', rxNumber],
        async () => {
            const result: any = await getPrescriptionApi(rxNumber, dob);
            console.log('pQuery', result);
            return result;
        },
        { enabled: rxNumber !== '' && dob !== '' }
    );

    const { data: meds, isSuccess: isReady } = useQuery(
        ['medicine', prescription.data?.key],
        () => {
            const list: any = [];
            prescription.data?.medicines.forEach(async (e: any) => {
                const result: any = await getOneItemApi(e.key);
                list.push(result.data?.name + ' ×' + e.quantity);
            });
            console.log('mQuery', list);
            return list;
        },
        { enabled: isSuccess }
    );

    if (isReady) {
        return (
            <Container>
                <h1>Prescription Verified!</h1>
                <Box
                    sx={{
                        fontSize: '24px',
                        lineHeight: '1.5'
                    }}
                >
                    <p>
                        <b>Name: </b> {prescription?.data?.patientName}
                    </p>
                    <p>
                        Date of birth: <b>{prescription?.data?.patientDateOfBirth}</b>
                    </p>
                    <p>
                        Rx number: <b>{prescription?.data?.prescriptionNumber}</b>
                    </p>
                    <p>Medications: </p>
                    <span>
                        {meds.forEach((item: string) => (
                            <p>
                                <b>{item}</b>
                            </p>
                        ))}
                    </span>
                </Box>
                <Link onClick={() => navigate('./home')}>Back to home</Link>
                <Link>Continue to shop</Link>
            </Container>
        );
    } else {
        return (
            <Container>
                <h1>Prescription Not Found</h1>
                <Link onClick={() => navigate('./home')}>Back to home</Link>
                <Link>Continue to shop</Link>
            </Container>
        );
    }
};

export default PrescriptionResult;
