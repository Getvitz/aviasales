import React, { useEffect} from "react";
import {v4 as uuid} from 'uuid';
import { connect } from "react-redux";
import propTypes from 'prop-types'
import styles from './ticketslist.module.scss';
import Ticket from "../ticket";
import * as actions from '../../apiClient'

// eslint-disable-next-line
function Ticketslist ({getSearchId, searchId, getTicketsData, stop, ticketsData, visibleCount, showMore}) {

  useEffect(() => {
    if(!searchId) getSearchId()
    if(searchId && !stop) getTicketsData(searchId)},
     [getSearchId, getTicketsData, searchId, stop])

     console.log(ticketsData)
     const tickets = ticketsData
     // eslint-disable-next-line
      .map((ticket) => (<Ticket key={uuid()} {...ticket} />))
      // .filter((t) => t !== null)
      // .slice(0, 5));
      // const visible = 5;

      // const showMore = () => {
      //   visible += 5
      //   console.log(visible)
      // }

      const slicedTickets = tickets.slice(0, visibleCount)
      console.log(slicedTickets)


    return (
        <div className={styles.ticketslist}>
            {slicedTickets}
            <button type="button" className={styles.button} onClick={showMore}>
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
            </button>
        </div>
    )
  }
// eslint-disable-next-line
const mapStateToProps = ({ ticketsData, searchId, stop, error, visibleCount }) => ({
  ticketsData,
  searchId,
  stop,
  error,
  visibleCount
});

Ticketslist.propTypes = {
    getSearchId: propTypes.func.isRequired,
    getTicketsData: propTypes.func.isRequired,
}

export default connect(mapStateToProps, actions)(Ticketslist)