import React from 'react'
import { useEffect, useState } from "react";
import { signInApi } from "./loginApi";
import { useHistory } from 'react-router-dom'

function SignIn() {

  const [id, setId] = useState('')
  const history = useHistory();

  // useEffect(() => {
  //   signInApi(user)
  //     .then(() => {
  //       history.push('/signIn')
  //     })
  //     .catch(() => {
  //       console.log('--error--');
  //     })
  // }, []);
  function api() {
    signInApi(user)
      .then(() => {
        history.push('/choose')
      })
      .catch(() => {
        console.log('--error--');
      })
  }


  let user = { id }
  return (
    <div>
      <div>הכנס מספר זהות</div>
      <input onChange={(e) => { setId(e.target.value) }}></input>
      <button onClick={api}>לאישור לחץ כאן</button>
    </div>)
}
export default SignIn;