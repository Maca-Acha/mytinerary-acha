import React from 'react'
import '../App.css'
import Navigation from "../components/Navigation"
import Main from "../components/Main"
import Carousels from '../components/Carousels'
import Footer from '../components/Footer'



export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <Main />
                <Carousels />
                <Footer />
            </div>
        )
    }
    
}

