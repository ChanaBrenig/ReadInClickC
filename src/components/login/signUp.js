import React, { useState, useEffect } from 'react'
//import { signUpApi } from './loginApi'
import { signUpApi } from './loginApi'
import { useHistory } from 'react-router-dom'
import { TextField } from '@material-ui/core';
import './signUp.css'

function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userId, setUserId] = useState('')
    const [status, setStatus] = useState('')

    const history = useHistory();

    const api = () => {
        signUpApi({ user })
            .then(() => {
                history.push('/choose')
            })
            .catch(() => {
                console.log('--error--');
            })
    }
    let user = { firstName, lastName, userId }

    return (<div className="generalDivSignUp">

        <br />
        <div >הכנס שם פרטי</div>

        <input onChange={(e) => { setFirstName(e.target.value) }} />
        <br />

        <div>הכנס שם משפחה</div>

        <input onChange={(e) => { setLastName(e.target.value) }}></input>
        <br />

        <div>הכנס מספר זהות</div>

        <input onChange={(e) => { setUserId(e.target.value) }}></input>
        {/* <div>הכנס סטטוס</div>
        
        <input onChange={(e) => { setStatus(e.target.value) }}></input> */}
        <br />
        <br />
        <br />

        <button onClick={api}>לשמירת הנתונים</button>

    </div>)
}

export default SignUp;