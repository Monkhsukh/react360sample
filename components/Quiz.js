import React from 'react';
import { View, Text, StyleSheet, VrButton } from 'react-360';

import GameOver from './GameOver'

export default class Quiz extends React.Component {

    state = {
        number: 0,
        pts: 0,
    }

    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProp) {
        if (prevProp.quiz != this.props.quiz) {
            this.setState({number: 0,  pts: 0})
        }
    }

    pickAnswer = item => {
        const {quiz} = this.props

        const currentQuiz = quiz[this.state.number]

        let pt = 0;
        if (currentQuiz.answer === item) { pt = 1}
        this.setState({number: this.state.number + 1, pts: this.state.pts + pt})
    }

    render () {
        const {quiz, onSuccess, onFailed} = this.props

        const currentQuiz = quiz[this.state.number]

        return (
            <View>
                {
                    currentQuiz && (
                        <View>
                            <Text style={styles.question}>{currentQuiz.question}</Text>
                            {currentQuiz.options.map((item, index) => (
                                <VrButton key={index} onClick={() => this.pickAnswer(item)}>
                                    <Text  style={styles.anwser}>{item}</Text>
                                </VrButton>
                            ))}
                        </View>
                    )
                }
                {
                    this.state.number === quiz.length && <GameOver length={quiz.length} pts={this.state.pts} onSuccess={onSuccess} onFailed={onFailed}/>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    question: {
        fontSize: 50,
        fontWeight: '400',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
        color: '#feff44'
    },
    anwser: {
        fontSize: 50,
        fontWeight: '400',
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
    }
});