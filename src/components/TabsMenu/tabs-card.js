import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ items }) => {
    return(
        <ul className="col-md-12 card-list">
            { items.map(({ id, img, title, price, isFiltered }) => {
                return <li className="col-lg-6 col-md-10 col-cm-12" id={isFiltered} key={id} >
                    <img className="card-img" src={img} alt="img" />
                    <div className="card-content">
                        <div className="card-title">
                           <h3>{title}</h3>
                           <span>{price}</span>
                        </div>
                        <p>Internet tend to repeat predefined chunks
                           as necessary, making this internet.
                        </p>
                    </div>
                </li>
            }) }
        </ul>
    )
};

Card.propTypes = {
    items: PropTypes.array,
}
Card.defaultProps = {
    items: []
}

export default Card;