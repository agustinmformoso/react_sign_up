import React from 'react';
import './styles.css';
import Form from 'react-bootstrap/Form';

const Input = ({ label, type, placeholder, form_msg, control_id, name, value, onChange }) => {
    return (
        <Form.Group controlId={control_id}>
            <Form.Label>{label}</Form.Label>
            <Form.Control onChange={onChange} name={name} value={value} type={type} placeholder={placeholder} />
            <Form.Text className="text-muted">{form_msg}</Form.Text>
        </Form.Group>
    )
}

export default Input;