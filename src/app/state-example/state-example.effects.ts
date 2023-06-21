import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, tap } from "rxjs";
import { StateExampleActions } from "./state-example.actions";

@Injectable()
export class StateExampleEffects {
    constructor(private action$: Actions) {}

    /*loadStoredData$ = createEffect(() =>
        this.action$.pipe(
            ofType(StateExampleActions.incrementStoredData),
            tap(()=>{console.log("incrementStoredData occured")})
        ))*/
}
