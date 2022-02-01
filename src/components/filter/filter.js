import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './filter.module.scss';

export default function Filter() {

    const dispatch = useDispatch();
    const all = useSelector(state => state.filter.all);
    const notransfer = useSelector(state => state.filter.notransfer);
    const onetransfer = useSelector(state => state.filter.onetransfer);
    const twotransfer = useSelector(state => state.filter.twotransfer);
    const threetransfer= useSelector(state => state.filter.threetransfer);

    if(notransfer && onetransfer && twotransfer && threetransfer && !all) dispatch({type: "ALL"})
    const onCheckboxChange = (event) => {
        switch(event.target.name) {
            case "All": 
                 dispatch({type: "ALL"});
                 break;
            case "Notransfer": 
                 dispatch({type: "NOTRANSFER"})
                 break;
            case "Onetransfer": 
                 dispatch({type: "ONETRANSFER"})
                 break;
            case "Twotransfer": 
                 dispatch({type: "TWOTRANSFER"})
                 break;
            case "Threetransfer": 
                 dispatch({type: "THREETRANSFER"})
                 break;
        default: 
            return event
        }
    }

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