import React from 'react'

export default (props) => {
    //const min = props.min
    //const max = props.max

    const {min, max} = props;

    return Math.floor(Math.random() * (max - min + 1) + min);
}