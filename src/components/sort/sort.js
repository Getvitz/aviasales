import React from "react";
import cn from "classnames";
import {useSelector, useDispatch } from "react-redux";
import './sort.scss';
import {
    getCheapest,
    getFastest,
    getOptimal } from '../../redux/selectors/selectors'
import {
    SHOW_CHEAPEST,
    SHOW_OPTIMAL,
    SHOW_FASTEST } from '../../redux/actions/actionTypes'

export default function Sort() {

    const sortSelectors = {
        cheapest: {type: SHOW_CHEAPEST},
        fastest: {type: SHOW_FASTEST},
        optimal: {type: SHOW_OPTIMAL},
    }

    const dispatch = useDispatch()

    const cheapest = useSelector(getCheapest);
    const fastest = useSelector(getFastest);
    const optimal = useSelector(getOptimal);

    const showSorted = (event) => {
        dispatch(sortSelectors[event.target.name])
    }

    return (
        <div className={cn('tabs')}>
            <button type="button" name="cheapest" className={cn('tab', {'selected': cheapest})} onClick={(event) => showSorted(event)}>САМЫЙ ДЕШЕВЫЙ</button>
            <button type="button" name="fastest" className={cn('tab', {'selected': fastest})} onClick={(event) => showSorted(event)}>САМЫЙ БЫСТРЫЙ</button>
            <button type="button" name="optimal" className={cn('tab', {'selected': optimal})} onClick={(event) => showSorted(event)}>ОПТИМАЛЬНЫЙ</button>
        </div>
    )
}