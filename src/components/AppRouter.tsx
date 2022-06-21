import React from 'react'
import {Route, Routes, useNavigate } from "react-router-dom";
import HomePage from './HomePage';
import { privatRouts } from './routs';
import { useEffect } from 'react';
type Props = {
    login:boolean
}

const AppRouter = (props: Props) => {
    const login = props.login
    const navigate = useNavigate()
    useEffect(() => {
        login?(console.log(login)):(navigate("/home"))
    }, [login])
    

    return(
        <Routes>
            <Route path="/">
                <Route index element={<HomePage/>}/>
                {privatRouts.map(({path,Component}, key)=>
                    <Route path={path} key={key} element={<Component/>}/>
                )}  
            </Route>  
        </Routes>
    )
}

export default AppRouter