import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {

    const users = [{
            userName: 'HrdSant',
            name: 'Harold Enoc',
            isFollowing: false
        },
        {
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true
        },
        {
            userName: 'nayibbukele',
            name: 'Nayib Bukele',
            isFollowing: true
        },

    ]

    return (
        <section className='App'>
            {
            users.map(({userName, name, isFollowing} ) => (
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName}
                        name={name}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            )
            }

        </section>
 
        
    )
    
}