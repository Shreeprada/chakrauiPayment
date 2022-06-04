import React,{useState} from "react";
import {Text } from '@chakra-ui/react';
import { Input,InputLeftElement,InputGroup } from '@chakra-ui/react';
import { CalendarIcon, LockIcon, InfoIcon }from '@chakra-ui/icons';
import {Button} from '@chakra-ui/react';
import styles from './card.module.css';
const Detail=()=>{
    const [data,setData]=useState({
        name:"",
        number:0,
        emonth:0,
        eyear:0,
        cvv:0,
    });
    const handleChange=(e)=>{
        const {name,value} =e.target;
        setData({...data,[name]:value});
    }
    const submit=(e)=>{
        e.preventDefault();
        console.log(data);
    }
    return (
        <>
        <div>
            <h3>Payment Details</h3>
            <form onSubmit={submit}>
                <div>
                    <Text mb='8px' fontSize='xs'>CARDHOLDER NAME</Text>
                    <InputGroup>
                    <InputLeftElement pointerEvents='none'
                    children={<InfoIcon color='red' />} />
                    <Input variant='flushed' name='name'onChange={handleChange}/>
                    </InputGroup>
                </div>
                <div>
                    <Text mb='8px' fontSize='xs'>CARD NUMBER</Text>
                    <InputGroup>
                    <InputLeftElement pointerEvents='none'
                    children={<CalendarIcon color='red' />} />
                    <Input placeholder='' variant='flushed' name='number' onChange={handleChange} />
                    </InputGroup>
                </div>
                <div className={styles.row}>
                <div>
                    <Text mb='8px' fontSize='xs'>EXPIRY MONTH</Text>
                    <InputGroup>
                    <InputLeftElement pointerEvents='none'
                    children={<CalendarIcon color='red' />} />
                    <Input type='number' variant='flushed' name='emonth' onChange={handleChange}/>
                    </InputGroup>
                </div>
                <div>
                    <Text mb='8px' fontSize='xs'>EXPIRY YEAR</Text>
                    <InputGroup>
                    <InputLeftElement pointerEvents='none'
                    children={<CalendarIcon color='red' />} />
                    <Input type='number' variant='flushed' name='eyear' onChange={handleChange}/>
                    </InputGroup>
                </div>
                <div>
                    <Text mb='8px' fontSize='xs'>CVV</Text>
                    <InputGroup>
                    <InputLeftElement pointerEvents='none'
                    children={<LockIcon color='red' />} />
                    <Input type='number' variant='flushed' name='cvv' onChange={handleChange} />
                    </InputGroup>
                </div>
                </div>
                <div>
                    <Button type='submit' colorScheme='red'>PAY</Button>
                </div>
            </form>
        </div>
        </>
    );
};
export default Detail;