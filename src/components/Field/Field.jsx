import React, { useState } from 'react';

import Figure from '../Figure/Figure';
import bemCssModules from 'bem-css-modules'
import { default as fieldStyles } from './Field.module.scss'

const style = bemCssModules(fieldStyles)

const Field = ({ id }) => {

    const [show, setShow] = useState(false)

    const fillField = (id) => {
        setShow(true)
    }
    const shouldBePointer = {
        cursor: !show ? 'pointer' : null
    }
    return (
        <div
            className={style()}
            onClick={fillField}
            style={shouldBePointer}
        >
            {show && <Figure type='circle' />}
        </div>
    );
}

export default Field;