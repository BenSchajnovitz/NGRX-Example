import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StateExampleState } from "./state-example.reducer";

export class StateExampleSelectors {
    static readonly exampleState = createFeatureSelector<any>('stateExample');

    static readonly selectState = createSelector(
        StateExampleSelectors.exampleState,
        (example) => example
    );

    static readonly getStoredData = createSelector(
        StateExampleSelectors.selectState,
        (state: StateExampleState) => {
            return state.storedData;
        }
    );

    static readonly getAnotherStoredData = createSelector(
        StateExampleSelectors.selectState,
        (state: StateExampleState) => {
            return state.anotherStoredData;
        }
    );
}
