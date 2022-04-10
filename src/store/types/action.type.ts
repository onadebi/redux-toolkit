
export interface ActionType {
    type: CounterTypeEnum;
    payload: number;
}

export enum CounterTypeEnum{
    Increment ='Increment',
    Decrement ='Decrement'
}

