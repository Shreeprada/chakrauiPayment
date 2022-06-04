import React,{useState} from 'react';
import styles from './card.module.css';
import {Box,Text} from '@chakra-ui/react';
import chip from "../chip.png";
import dots from "../menu.png";
const Card=({data})=>{

    return (
        <div>
            <Box width='380px' height='230px' borderWidth='1px' borderRadius='15px' border='1px solid red' bgColor='#f6425b' color='white'>
               <div className={styles.right}>VISA</div>
                <div className={styles.chip}><img src={chip} className={styles.image}/></div>
                <div className={styles.card}>{data.number}</div>
                <div className={styles.row3}>
                    <div className={styles.col}>
                        <div>CARD HOLDER</div>
                        <div>{data.name}</div>
                    </div>
                    <div className={styles.col}>
                        <div>EXPIRES</div>
                        <div>{data.emonth}/{data.eyear}</div>
                    </div>
                    <div className={styles.col}>
                        <div>CVV</div>
                        <div>{data.cvv}</div>
                    </div>
                </div>
                <div style={{display:'flex'}}>
                    <div>
                <div className={styles.dot1}>
                    <img src={dots} className={styles.dot}/>
                </div>
                <div className={styles.dot1}>
                    <img src={dots} className={styles.dot}/>
                </div>
                </div>
                <div>
                <div className={styles.dot2}>
                    <img src={dots} className={styles.dot}/>
                </div>
                <div className={styles.dot2}>
                    <img src={dots} className={styles.dot}/>
                </div>
                </div>
                <div>
                <div className={styles.dot3}>
                    <img src={dots} className={styles.dot}/>
                </div>
                <div className={styles.dot3}>
                    <img src={dots} className={styles.dot}/>
                </div>
                </div>
                </div>
                <div style={{display:'flex'}}>
                    <div>
                <div className={styles.dot4}>
                    <img src={dots} className={styles.dot}/>
                </div>
                <div className={styles.dot4}>
                    <img src={dots} className={styles.dot}/>
                </div>
                </div>
                <div>
                <div className={styles.dot5}>
                    <img src={dots} className={styles.dot}/>
                </div>
                <div className={styles.dot5}>
                    <img src={dots} className={styles.dot}/>
                </div>
                </div>
                <div>
                <div className={styles.dot6}>
                    <img src={dots} className={styles.dot}/>
                </div>
                <div className={styles.dot6}>
                    <img src={dots} className={styles.dot}/>
                </div>
                </div>
                </div>
           </Box>
        </div>
    );
};
export default Card;