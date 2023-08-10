import React, {useRef} from "react";

import {connect} from "react-redux";

function AppRedux(props){
    console.log(props)
    const inputValue = useRef(null)
    function searchList(){
        let elem = inputValue.current.value
        props.getLibrary(elem)
    }

    function clearList(){
        inputValue.current.value = ''
        props.setLibrary()
    }

    return(
        <>
            <input type="type" ref={inputValue}/>
            <button onClick={searchList}>Search</button>
            <button onClick={clearList}>Clear</button>
            <ul>
                {
                    props.state.map(item => <li key={item}>{item}</li> )
                }
            </ul>
        </>
    )
}

export default connect(
    state => ({state}),
    dispatch => ({
        getLibrary: (elem) => {
            dispatch({ type: "GET_LIBRARY", payload: elem})
        },
        setLibrary: () => {
            dispatch({ type: "SET_INITIAL" })
        }
    })
)(AppRedux);