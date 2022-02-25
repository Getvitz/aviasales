import React, { useEffect, useState} from "react";
import {v4 as uuid} from 'uuid';
import { connect, useDispatch } from "react-redux";
import propTypes from 'prop-types'
import { Progress } from 'antd';
import 'antd/dist/antd.min.css';
import styles from './ticketslist.module.scss';
import Ticket from "../ticket";
import { getSearchId, getTicketsData } from '../../apiClient/index';
import { stopFetching, receiveError, getTicketsDataSuccess } from "../../redux/actions/actions";
import * as actions from '../../redux/actions/actions';

function Ticketslist ({ searchId, getSearchIdSuccess, stop, ticketsData, visibleCount, showMore, error, sort, filter }) {

  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

    const sortTickets = (ticketsData) => {
      const newArr = [...ticketsData];
      if (sort.cheapest) {
        return newArr.sort((el, el2) => el.price - el2.price);
      } 
      if (sort.fastest) {
        return newArr.sort((el, el2) => (el.segments[0].duration  + el.segments[1].duration) - (el2.segments[0].duration + el2.segments[1].duration));
      };
      if (sort.optimal) {
        return newArr.sort((el, el2) => {
          const first = el.segments[0].duration + el.segments[1].duration + el.price;
          const second = el2.segments[0].duration + el2.segments[1].duration + el2.price;
          return first - second;
        })
      }
      return newArr;
      }

      const filterTickets = (ticketsData) => {
        const newArr = [];
        if(filter.all) {
          return ticketsData;
        }
        if(filter.notransfer) {
          newArr.push(...ticketsData.filter(ticket => ticket.segments.every(segment => !segment.stops.length)))
        }
        if(filter.onetransfer) {
          newArr.push(...ticketsData.filter(ticket => ticket.segments.every(segment => segment.stops.length === 1)))
        }
        if(filter.twotransfer) {
          newArr.push(...ticketsData.filter(ticket => ticket.segments.every(segment => segment.stops.length === 2)))
        }
        if(filter.threetransfer) {
          newArr.push(...ticketsData.filter(ticket => ticket.segments.every(segment => segment.stops.length === 3)))
        }
        return newArr;  
      };

      const tickets = sortTickets(filterTickets(ticketsData))
      .map((ticket) => (<Ticket key={uuid()} {...ticket} />))
      .slice(0, visibleCount)
  
     const showMoreBtn = tickets.length ? (
        <button type="button" className={styles.button} onClick={showMore}>
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
            </button>
        ) : <div className={styles.noticketsmsg}>Рейсов, подходящих под заданные фильтры, не найдено</div>;
    
        const fetchingProgress = tickets.length ? <Progress className={styles.progressline} percent={progress} status='active' /> : null


    useEffect(() => {
      if(!searchId) {
        getSearchId()
        .then((body) => {
          dispatch(getSearchIdSuccess(body.searchId))})
      }
      if(searchId && !stop) {
        getTicketsData(searchId)
        .then(({ tickets, stop }) => {
          if (stop) dispatch(stopFetching());
          else dispatch(getTicketsDataSuccess(tickets, stop));
        })
        .catch(() => dispatch(receiveError()));
    };
      setProgress(
          !stop ? Math.floor((ticketsData.length / 10000) * 100) : 100
        );
      },
     [ticketsData, getSearchIdSuccess, dispatch, searchId, stop, error, filter, ticketsData.length])

     
    return (
      <>
        <div className={styles.ticketslist}>
            {fetchingProgress}
            {tickets}
        </div>
        {showMoreBtn}
      </>
    )
  }

const mapStateToProps = ( state ) => ({
  ticketsData: state.tickets.ticketsData,
  searchId: state.tickets.searchId,
  stop: state.tickets.stop,
  error: state.tickets.error,
  visibleCount: state.tickets.visibleCount,
  sort: state.sort,
  filter: state.filter
});

Ticketslist.defaultProps = {
  ticketsData: [],
  searchId: '',
  stop: false,
  visibleCount: 5,
  error: 0,
}

Ticketslist.propTypes = {
    // getSearchId: propTypes.func.isRequired,
    getSearchIdSuccess: propTypes.func.isRequired,
    // getTicketsData: propTypes.func.isRequired,
    searchId: propTypes.string,
    stop: propTypes.bool,
    ticketsData: propTypes.instanceOf(Array),
    visibleCount: propTypes.number,
    showMore: propTypes.func.isRequired,
    error: propTypes.number,
    sort: propTypes.instanceOf(Object).isRequired,
    filter: propTypes.instanceOf(Object).isRequired
}

export default connect(mapStateToProps, actions)(Ticketslist)