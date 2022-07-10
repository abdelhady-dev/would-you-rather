import React from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class NewQuestion extends React.Component {
    
    state = {
        op1: '',
        op2: '',
        toHome: false
    }

    changeHandle1(e) {
        this.setState(() =>({
            op1: e.target.value
        }))
    }

    changeHandle2(e) {
        this.setState(() =>({
            op2: e.target.value
        }))
    }

    handleSubmit(e) {
        e.preventDefault()
        const { dispatch } = this.props
        const { op1, op2 } = this.state
        
        dispatch(handleAddQuestion(op1, op2))

        this.setState(() =>({
            op1: '',
            op2: '',
            toHome: true
        }))
    }

    render() {

        const { op1, op2, toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }

        return(
            
            <div>   
                <div className='newQuestion center'>
                    <div className='center'>
                        <h3>Add Poll</h3>
                        <form onSubmit={e => this.handleSubmit(e)}>
                            <input 
                                value={op1}
                                onChange={e => this.changeHandle1(e)}
                                type='text' name='firstOption' placeholder='Your First Option..' />
                            <h4>Or</h4>
                            <input
                                value={op2} 
                                onChange={e => this.changeHandle2(e)}
                                type='text' name='sOption' placeholder='Your Second Option..' />

                            <button 
                                disabled={op1 === '' || op2 === ''}
                                type='submit'>Add Question</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(NewQuestion)