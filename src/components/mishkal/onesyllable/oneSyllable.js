import React, { useState, useEffect } from 'react'
import ShoWord from '../shoWord'
import './oneSyllable.css'

const OneSyllable = () => {
    const [nikud, setNikud] = useState('kamatz');
    useEffect(() => {
        getWordApi(nikud)
            // .then(response => response.json())
            .then(data => <ShoWord data={data} />
            )
            .catch(error => { console.error(error) })
    }, [nikud])
    console.log({ nikud });

    return (
        <div className="generalOneSyllable">
            <button className="btnOneSyllable" onClick={() => setNikud('kamatz')}>kamatz</button>
            <button className="btnOneSyllable" onClick={() => setNikud('chirik')}>chirik</button>
            <button className="btnOneSyllable" onClick={() => setNikud('cholam')}>cholam</button>
            <button className="btnOneSyllable" onClick={() => setNikud('segol')}>segol</button>
            <button className="btnOneSyllable" onClick={() => setNikud('shuruk')}>shuruk</button>
        </div>
    )
}
export const getWordApi = (nikud) => {
    return fetch(`http://localhost:3001/get` + nikud, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        // body: JSON.stringify(nikud),
    })
        .then(response => {
            console.log('success!!!!!');

            // if (response.ok) {
            //     response.json()
            //         .then(() => {
            //             console.log(nikud)
            //         })
            // } else {
            //     response.json()
            //         .then(() => error1 => { alert(JSON.stringify(error1.errors)) }).catch(error => { console.log(error); });
            // }
        })
}


export default OneSyllable;