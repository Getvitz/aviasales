import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './filter.module.scss';
import { 
    getAll, 
    getNotransfer, 
    getOneTransfer, 
    getTwoTransfer, 
    getThreeTransfer } from "../../redux/selectors/selectors";
import {
    FILTER_ALL,
    FILTER_NOTRANSFER,
    FILTER_ONETRANSFER,
    FILTER_TWOTRANSFER,
    FILTER_THREETRANSFER
  } from '../../redux/actions/actionTypes'

export default function Filter() {

    const filterSelectors = {
        All: {type: FILTER_ALL},
        Notransfer: {type: FILTER_NOTRANSFER},
        Onetransfer: {type: FILTER_ONETRANSFER},
        Twotransfer: {type: FILTER_TWOTRANSFER},
        Threetransfer: {type: FILTER_THREETRANSFER},
    }

    const dispatch = useDispatch();

    const all = useSelector(getAll);
    const notransfer = useSelector(getNotransfer);
    const onetransfer = useSelector(getOneTransfer);
    const twotransfer = useSelector(getTwoTransfer);
    const threetransfer= useSelector(getThreeTransfer);

    const triggerAllSelector = notransfer && onetransfer && twotransfer && threetransfer && !all;

    if(triggerAllSelector) dispatch({type: FILTER_ALL})
    
    const onCheckboxChange = (event) => dispatch(filterSelectors[event.target.name])
    
    return (
        <ul className={styles.filter}>
            <li className={styles.header}>КОЛИЧЕСТВО ПЕРЕСАДОК</li>
            <li className={styles.filter_item}>
                <input className={styles.checkbox} type="checkbox" id="all" name="All" onChange={(event) => onCheckboxChange(event)} checked={all}/>
                <label className={styles.label} htmlFor="all">Все</label>
            </li>
            <li className={styles.filter_item}>
                <input className={styles.checkbox} type="checkbox" id="notransfer" name="Notransfer" onChange={(event) => onCheckboxChange(event)} checked={notransfer} />
                <label className={styles.label} htmlFor="notransfer">Без пересадок</label>
            </li>
            <li className={styles.filter_item}>
                <input className={styles.checkbox} type="checkbox" id="onetransfer" name="Onetransfer" onChange={(event) => onCheckboxChange(event)} checked={onetransfer}/>
                <label className={styles.label} htmlFor="onetransfer">1 пересадка</label>
            </li>
            <li className={styles.filter_item}>
                <input className={styles.checkbox} type="checkbox" id="twotransfer" name="Twotransfer" onChange={(event) => onCheckboxChange(event)} checked={twotransfer}/>
                <label className={styles.label} htmlFor="twotransfer">2 пересадки</label>
            </li>
            <li className={styles.filter_item}>
                <input className={styles.checkbox} type="checkbox" id="threetransfer" name="Threetransfer" onChange={(event) => onCheckboxChange(event)} checked={threetransfer}/>
                <label className={styles.label} htmlFor="threetransfer">3 пересадки</label>
            </li>
         
        </ul>
    )
}