import React from 'react'
import { useEffect } from "react";

function Redirect(props) {
    console.log(props.loc);
    useEffect(() => {
        window.location.replace(props.loc);
      }, []);
    
    console.log(props.loc);

    return (
        <div>
        </div>
    )
}

export default Redirect
