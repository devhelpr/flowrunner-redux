export interface IFrontendFlowRunner {
    debug: boolean;
    reduxMiddleware: any;
    initialStoreState: any;
}
declare function flowAction(actionName: string, payload: any): void;
declare let startFlow: any;
declare const getFlowEventRunner: any;
export { startFlow, flowAction, getFlowEventRunner };
