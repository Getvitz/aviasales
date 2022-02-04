import React from "react";
import cn from "classnames";
import {useSelector, useDispatch } from "react-redux";
import './sort.scss';



export default function Sort() {

    const dispatch = useDispatch()
    const cheapest = useSelector(state => state.sort.cheapest)
    const fastest = useSelector(state => state.sort.fastest)
    const optimal = useSelector(state => state.sort.optimal)

    const showCheapest = () => {
        dispatch({type: "SHOW_CHEAPEST"})
    }

    const showFastest = () => {
        dispatch({type: "SHOW_FASTEST"})
    }

    const showOptimal = () => {
        dispatch({type: "SHOW_OPTIMAL"})
    }


    return (
        <div className={cn('tabs')}>
            <button type="button" className={cn('tab', {'selected': cheapest})} onClick={() => showCheapest()}>САМЫЙ ДЕШЕВЫЙ</button>
            <button type="button" className={cn('tab', {'selected': fastest})} onClick={() => showFastest()}>САМЫЙ БЫСТРЫЙ</button>
            <button type="button" className={cn('tab', {'selected': optimal})} onClick={() => showOptimal()}>ОПТИМАЛЬНЫЙ</button>
        </div>
    )
}