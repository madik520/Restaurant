import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BTN_ARR = [
    {
        id: "All",
        text: "All",
    },
    {
        id: "Breakfast",
        text: "Breakfast",
    },
    {
        id: "Lunch",
        text: "Lunch",
    },
    {
        id: "Dinner",
        text: "Dinner",
    },
    {
        id: "Desart",
        text: "Desart",
    },
    {
        id: "KidsMenu",
        text: "Kids Menu",
    },
]

const BtnFilter = ({ onClick, active }) => {
    return(
        <>
        { BTN_ARR.map(({ id, text }, i) => {
            return <button data-index={i} className={`btn-default ${i === active ? 'active': ""}`} onClick={onClick} key={id} id={id}>{text}</button>
        }) }
        </>
    )
};

BtnFilter.propTypes = {
    onClick: PropTypes.func,
    active: PropTypes.number,
}
BtnFilter.defaultProps = {
    onClick: () => {},
    active: 0
}

export default BtnFilter;