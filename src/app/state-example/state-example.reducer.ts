import { createReducer, on } from "@ngrx/store";
import { StateExampleActions } from "./state-example.actions";

export interface StateExampleState {
    storedData: number;
    anotherStoredData: string;
}

const initialState: StateExampleState = {
    storedData: 1,
    anotherStoredData: "lalala",
}

export const StateExampleReducer = createReducer(
    initialState,
    on(StateExampleActions.incrementStoredData, (state) => ({
        ...state,
        storedData: state.storedData+1,
    })),
    on(StateExampleActions.setAnotherStoredData, (state, { newText }) => ({
        ...state,
        anotherStoredData: newText,
    })),
)
