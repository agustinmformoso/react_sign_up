import React from 'react';
import './styles.css';
import Button from 'react-bootstrap/Button'

const ButtonCustom = ({ variant, size, block, btn_text, submit }) => {
    return (
        <Button variant={variant} size={size} block={block} onClick={submit}>{btn_text}</Button>
    )
}

export default ButtonCustom;