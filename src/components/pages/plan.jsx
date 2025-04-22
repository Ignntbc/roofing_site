import React from "react"


export default class Plan extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            age: 29
        }
    }


    render() {
        return (
            <>
                <span>Добро пожаловать { this.props.testProp }. Вам { this.state.age } лет</span>
                <button onClick={() => this.setState({age: this.state.age + 1})}> Изменить возраст</button>
            </>
        )
    }
}