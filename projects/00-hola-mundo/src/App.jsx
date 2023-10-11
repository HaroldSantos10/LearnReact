import React from 'react'
import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <React.Fragment>
                <TwitterFollowCard userName="HrdSant" name="Harold Enoc Santos Morillo" />
                <TwitterFollowCard userName="midudev" name="Miguel Angel Duran" />           
            </React.Fragment>

        </section>

        
    )
    
}