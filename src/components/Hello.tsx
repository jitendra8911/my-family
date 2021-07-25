import * as React from "react";
import {StoreState} from "../types";
import {Dispatch} from 'redux';
import * as actions from "../actions";
import {connect} from "react-redux";

export interface Props {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function mapStateToProps({languageName, enthusiasmLevel}: StoreState): Props {
    return {
        name: languageName,
        enthusiasmLevel
    }
}

function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}


function Hello({name, enthusiasmLevel = 1, onDecrement, onIncrement}: Props) {
    if (enthusiasmLevel <= 0 ) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);

// helpers

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}