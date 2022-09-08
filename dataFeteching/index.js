import React, { useEffect } from 'react'


function DataFetching (){


    useEffect(()  => {

        fetch('https://api.github.com/users/%3Cusername%3E/repos')
        .then(response  => response.json ())
        .then(json => console.log(json))
    } , []);

    return


    
}

export default DataFetching