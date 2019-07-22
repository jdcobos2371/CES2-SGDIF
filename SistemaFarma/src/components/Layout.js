    
import React from 'react'

import Top from './topBar';


const Layout = (props) =>{
    return (
        <React.Fragment>
           <Top/>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;