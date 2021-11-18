import React from 'react'
import Navigation from "../components/Navigation"
import Main from "../components/Main"
import Carousels from '../components/Carousels'
import '../App.css'



export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Main />
                <Carousels />
            </div>
        )
    }
    
}

