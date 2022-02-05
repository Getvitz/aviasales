import React from "react";
import propTypes from 'prop-types'
import { format, parseISO } from 'date-fns';
import styles from './ticket.module.scss';


export default function Ticket({price, carrier, segments}) {
    const logo = `https://pics.avs.io/99/36/'${carrier}.png`;

    const flightInfo = segments.map((segment, i) => {
        const key = i;
        const {origin, destination, duration, stops, date} = segment;

        const stopList = stops.length > 1 ? stops.join(', ') : stops.length === 0 ? 'ПРЯМОЙ' : stops;
        
        const stopListTitle = stops.length === 1 ? 'Пересадка' : stops.length > 1 ?'Пересадки' :  'Без пересадок';
    
        return (
          <div key={key} className={styles.ticket_info}>
            <div>
              <div className={styles.ticket_info_main}>{`${origin} - ${destination}`}</div>
              <div className={styles.ticket_info_details}>{`${format(parseISO(date.slice(0, -5)), 'HH:mm')} - ${format(new Date(date).getTime() + duration * 60 * 1000, 'HH:mm')}`}</div>
            </div>
            <div>
              <div className={styles.ticket_info_main}>В пути</div>
              <div className={styles.ticket_info_details}>{format(duration * 60 * 1000, 'HHч mmм')}</div>
            </div>
            <div>
              <div className={styles.ticket_info_main}>{stops.length > 0 ? stops.length : null} {stopListTitle}</div>
              <div className={styles.ticket_info_details}>{stopList}</div>
            </div>
          </div>
        )
      })
    return (
        <div className={styles.ticket}>
            <header className={styles.header}>
                <div className={styles.price}>{price} ₽</div>
                <img className={styles.logo} alt="aviacompany-logo" src={logo} />
            </header>
        {flightInfo}
        </div>
    )
}

Ticket.defaultProps = {
  carrier: '',
  segments: [],
  price: 0
};

Ticket.propTypes = {
  carrier: propTypes.string,
  segments: propTypes.instanceOf(Array), 
  price: propTypes.number
}