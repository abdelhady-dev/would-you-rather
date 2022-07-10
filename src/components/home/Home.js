import React from 'react'
import { connect } from 'react-redux'
import QuestionsContainer from './QuestionsContainer'
class Home extends React.Component {
    
    render() {
        return (
            <div>
                <QuestionsContainer />
            </div>
        )
    }
}


export default connect()(Home)