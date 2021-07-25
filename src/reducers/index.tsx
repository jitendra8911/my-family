import {StoreState} from "../types";
import {EnthusiasmAction} from "../actions";
import {DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM} from "../constants";

export function enthusiasm(state:StoreState, action: EnthusiasmAction): StoreState {
    switch (action.type) {
        case DECREMENT_ENTHUSIASM: return {
            ...state, enthusiasmLevel: state.enthusiasmLevel - 1
        }
        case INCREMENT_ENTHUSIASM: return {
            ...state, enthusiasmLevel: state.enthusiasmLevel + 1
        }
    }

    return state;
}