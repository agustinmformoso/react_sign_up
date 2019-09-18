import React, { useReducer, useState, useContext, useEffect } from 'react';
import './styles.css';
import Input from '../Input';
import Checkbox from '../Checkbox';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ButtonCustom from '../ButtonCustom';
import Form from 'react-bootstrap/Form'
import { UserListContext } from '../../Store/UserListContext';

import CircleLeft from '../../Resources/Icons/chevron-circle-left-solid.svg';

const initialState = {
    user: '',
    name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
}


//    # Funciona pero no resetea campos

const reducer = (state, { field, value }) => {
    return {
        ...state,
        [field]: value
    }
}


// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'update':
//             return {
//                 ...state, name: action.name, last_name: action.last_name, email: action.email, password: action.password
//             }
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }

const SignUp = () => {
    const [user, setUser] = useContext(UserListContext)
    const [terms, setTerms] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)

    const onChange = (e) => {
        dispatch({ field: e.target.name, value: e.target.value })
    }

    const handleSubmit = (e) => {   
        if (terms) {
            if (password === confirm_password) {
                setUser(prevUser => [...prevUser, { name: name, last_name: last_name, email: email, password: password }])

            } else {
                alert("Las contraseñas no coinciden")
            }
        } else {
            alert("Debe aceptar los términos y condiciones de uso")
        }
    }

    const handleTerms = () => {
        setTerms(!terms)
    }

    const showUsers = () => {
        console.log(user)
    }

    const { name, last_name, email, password, confirm_password } = state

    /*
        # Manejo de inputs mediante useState:
        > Falta mejorar validación de password.
    
    
    const [name, setName] = useState('')
    const [last_name, setLast_Name] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPassword] = useState('')
    const [terms, setTerms] = useState(false)

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updateLast_Name = (e) => {
        setLast_Name(e.target.value)
    } 

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)        
    }

    const updateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const addUser = (e) => {
        e.preventDefault();
        if ( password === confirm_password ) {
             
        } else {
            alert("contraseñas incorrectas")
        } 
        if ( !terms ) {
            alert("debe aceptar los terminos y condiciones de uso")
        }
    }
    */

    return (
        <Col md={5} className="mt-5 mb-5">
            <Row>
                <Col md={12}>
                    <i className="fas fa-chevron-circle-left fa-2x"></i>
                </Col>
                <Col md={12}>
                    <h2 className="sign_up_title mb-3">Registro de usuario nuevo</h2>
                </Col>
            </Row>
            <Form>
                <Row>
                    <Col md={6} xs={6}>
                        <Input type="text" label="Nombre" name="name" value={name} onChange={onChange} />
                    </Col>
                    <Col md={6} xs={6}>
                        <Input type="text" label="Apellidos" name="last_name" value={last_name} onChange={onChange} />
                    </Col>
                </Row>
                <Input type="email" label="Email *" name="email" value={email} onChange={onChange} />
                <Input type="password" label="Contraseña *" form_msg="> Incluir número y una letra mayúscula" name="password" value={password} onChange={onChange} />
                <Input type="password" label="Confirmar contraseña *" form_msg="> Repetir contraseña" name="confirm_password" value={confirm_password} onChange={onChange} />
                <Checkbox name="terms" value={terms} onClick={handleTerms} type="checkbox" label={["He leído los ", <a href="#" className="checkbox">términos y condiciones de uso</a>]} />
                <ButtonCustom variant="success" block={true} btn_text="Registrarse" submit={handleSubmit} />
                <ButtonCustom variant="primary" block={true} btn_text="ConsoleLog" submit={showUsers} />

            </Form>
        </Col>
    )
}

export default SignUp;