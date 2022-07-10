export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER ='ADD_QUESTION_TO_USER'
export const ADD_ANSWER_TO_USER ='ADD_ANSWER_TO_USER'

export function receiveUseers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addQuestionToUser(questionId, authedUser) {
    return {
        type: ADD_QUESTION_TO_USER,
        questionId: questionId, 
        authedUser: authedUser
    }
}

export function addAnswerToUser(authedUser, qid, answer) {
    return {
        type: ADD_ANSWER_TO_USER,
        authedUser: authedUser, 
        qid: qid, 
        answer: answer
    }
}