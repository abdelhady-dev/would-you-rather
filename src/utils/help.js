export function dateFormat (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString('en-US');
}
export function questionSet(questionAuther, question, currentUser) {
    const { id, timestamp, optionOne, optionTwo } = question
    const { name, avatarURL } = questionAuther
    const answered = Object.keys(currentUser.answers)
    const result = currentUser.answers[id]
    const votes = {
        one: optionOne.votes.length,
        two: optionTwo.votes.length
    }

    const sum = votes.one + votes.two

    const percentage = {
        one: Math.round((votes.one / sum) * 100),
        two: Math.round((votes.two / sum) * 100)
    }

    return {
        id,
        name,
        avatarURL,
        timestamp,
        votes,
        percentage,
        result,
        optionOne: optionOne.text,
        optionTwo: optionTwo.text,
        hasAnswered: answered.includes(id),
    }
}