import * as React from "react";
import './Hello.css';

interface Props {
    name: string,
    enthusiasmLevel?: number
}

interface State {
    currentEnthusiasmLevel: number
}

class StatefulHello extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {currentEnthusiasmLevel: props.enthusiasmLevel || 1};
    }

    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasmLevel + 1);

    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasmLevel - 1);

    updateEnthusiasm = (enthusiasmLevel: number) => {
        this.setState({currentEnthusiasmLevel: enthusiasmLevel});
    }

    render() {
        const { name } = this.props;

        if (this.state.currentEnthusiasmLevel <= 0 ) {
            throw new Error("you can be little more enthusiastic!");
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(this.state.currentEnthusiasmLevel)}
                </div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
            </div>
        );
    }
}

export default StatefulHello;

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}