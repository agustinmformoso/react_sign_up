import React from 'react';
import './styles.css';
import Form from 'react-bootstrap/Form';

const Checkbox = ({ label, type, control_id, name, onClick, value }) => {
    return (
        <Form.Group controlId={control_id}>
            <Form.Check name={name} value={value} onClick={onClick} type={type} label={label} />
        </Form.Group>
    )
}

export default Checkbox;