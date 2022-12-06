import { FC, useEffect, useState } from 'react';
import { Modal } from '@mantine/core';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getOneItemApi, getPrescriptionApi } from './landing.service';
interface PrescriptionModalProps {
    opened: boolean;
    onClose: () => void;
    // prescription: any;
    // medicine: any;
    // date?: string;
    // rxNumber: string;
    // handleFetch: boolean;
    name: any;
    dob: any;
    rxNumber: any;
    meds: any;
}

// add a prescirption modal
const PrescriptionModal: FC<PrescriptionModalProps> = ({
    // date,
    // rxNumber,
    // handleFetch,
    name,
    dob,
    rxNumber,
    meds,
    opened = false,
    onClose
}) => {
    const navigate = useNavigate();

    // const {data:prescription, isSuccess} = useQuery(
    //     ['prescription', rxNumber],
    //     async () => {
    //         const result: any = await getPrescriptionApi(rxNumber, date);
    //         return result;
    // },
    // {enabled: handleFetch});

    // const mQuery = useQuery(
    //     ['medicine', prescription?.data.key],
    //     () => {
    //         const list: any = [];
    //         prescription.data.medicines.forEach(
    //             async (e:any) => {
    //                 const result: any = await getOneItemApi(e.key);
    //                 list.push(result.data.name+ ' ×'+e.quantity);
    //         })
    //         return list;
    //     },
    //     {enabled: isSuccess})

    useEffect(() => {
        console.log(meds);
    });

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            centered={true}
            size={600}
            transition="fade"
            transitionDuration={300}
            transitionTimingFunction="ease"
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <h1 style={{}}>Prescription Verified!</h1>
                <Box
                    sx={{
                        width: '70%',
                        fontSize: '24px',
                        lineHeight: '1.5'
                    }}
                >
                    <p>
                        Name:<b>{name}</b>
                    </p>
                    <p>
                        Date of birth: <b>{dob}</b>
                    </p>
                    <p>
                        Rx number: <b>{rxNumber}</b>
                    </p>
                    {/* <p>
                        Physician: <b>Dr. Andrew Lee</b>
                    </p> */}
                    <p>Medications: </p>
                    <span>
                        {meds?.forEach((item: string) => (
                            <p>
                                <b>{item}</b>
                            </p>
                        ))}
                    </span>
                </Box>
                <Button
                    variant="contained"
                    onClick={() => navigate('/shop')}
                    sx={{
                        my: '30px',
                        height: '50px',
                        width: '200px'
                    }}
                >
                    Confirm
                </Button>
            </Box>
        </Modal>
    );
};

export default PrescriptionModal;
