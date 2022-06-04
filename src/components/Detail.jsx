import React from "react";
import {Text } from '@chakra-ui/react';
import { Input,InputLeftElement,InputGroup } from '@chakra-ui/react';
import { CalendarIcon, LockIcon, InfoIcon }from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react'
import styles from './card.module.css';
const Detail=({handleChange,submit})=>{
    
    return (
        <>
        <div className={styles.container}>
            <h3>Payment Details</h3>
            <form onSubmit={submit} className={styles.form}>
                <div>
                    <Text mb='1px'fontSize='xs'>CARDHOLDER NAME</Text>
                    <InputGroup>
                    <InputLeftElement pointerEvents='none'
                    children={<InfoIcon color='#f6425b' />} />
                    <Input variant='flushed' name='name' onChange={handleChange}/>
                    </InputGroup>
                </div>
                <div>
                    <Text mb='1px' fontSize='xs'>CARD NUMBER</Text>
                    <InputGroup>
                    <InputLeftElement pointerEvents='none'
                    children={<CalendarIcon color='#f6425b' />} />
                    <Input placeholder='' variant='flushed' name='number' onChange={handleChange} />
                    </InputGroup>
                </div>
                <div className={styles.row}>
                <div>
                    <Text mb='1px' fontSize='xs'>EXPIRY MONTH</Text>
                    <InputGroup>
                    <InputLeftElement pointerEvents='none'
                    children={<CalendarIcon color='#f6425b' />} />
                    <Input type='number' variant='flushed' name='emonth' onChange={handleChange}/>
                    </InputGroup>
                </div>
                <div>
                    <Text mb='1px' fontSize='xs'>EXPIRY YEAR</Text>
                    <InputGroup>
                    <InputLeftElement pointerEvents='none'
                    children={<CalendarIcon color='#f6425b' />} />
                    <Input type='number' variant='flushed' name='eyear' onChange={handleChange}/>
                    </InputGroup>
                </div>
                <div>
                    <Text mb='1px' fontSize='xs'>CVV</Text>
                    <InputGroup>
                    <InputLeftElement pointerEvents='none'
                    children={<LockIcon color='#f6425b' />} />
                    <Input type='number' variant='flushed' name='cvv' onChange={handleChange} />
                    </InputGroup>
                </div>
                </div>
                <div className={styles.center}>Payment Amount:<span style={{color:'#f6425b',fontWeight:'bold'}}>12 300</span></div>
                <div className={styles.center}>
                    <Button type='submit' colorScheme='red' size='lg' width='30%'>PAY</Button>
                </div>
            </form>
        </div>
        </>
    );
};
export default Detail;