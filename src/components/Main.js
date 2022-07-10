import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './home/Home'
import LeaderBoard from './leaderboard/LeaderBoard'
import NewQuestion from './NewQuestion'
import Question from './question/Question'
import Nav from './Nav'
class Main extends React.Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Nav />
                    <Route path='/' exact component={Home} />
                    <Route path='/leaderboard' exact component={LeaderBoard} />
                    <Route path='/add' exact component={NewQuestion} />
                    <Route path='/question/:id' exact component={Question} />
                </React.Fragment>
            </Router>
        )
    }
}


export default Main