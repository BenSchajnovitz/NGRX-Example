import { createAction, props } from "@ngrx/store";

export const StateExampleActions = {
    incrementStoredData: createAction('[State Example] increment stored data'),
    setAnotherStoredData: createAction('[State Example] set another stored data', props<{ newText: string }>()),
}
