import React, { Component } from 'react'
import NavComp from './NavComp'
import ContentComp from './ContentComp'

class Dashboard extends Component {
    render() {
        return (
            <>
                <NavComp/>
                <ContentComp/>
            </>
        )
    }
}

export default Dashboard
