import { Component } from "react";

export class ClockClass extends Component {
    constructor(props) {
        super(props);

        this.state = { //вывод локального времени
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() { //чтоб обновлялась сама страница каждую секунду
        this.timerID = setInterval(() => 
            this.tick(), 1000
        )
    }

    componentWillUnmount() { //чтоб остановить таймер
        clearInterval(this.timerID)
    }

    tick() { // чтоб изменялось время
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }


    render() {
        return (
            <div>
                <p className="Time">{this.state.time}</p>
            </div>
        )
    }
}