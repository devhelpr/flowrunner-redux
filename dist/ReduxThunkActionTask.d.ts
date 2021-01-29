import { FlowTask } from '@devhelpr/flowrunner';
export declare class ReduxThunkActionTask extends FlowTask {
    execute(node: any): boolean;
    getName(): string;
    getFullName(): string;
    getIcon(): string;
    getShape(): string;
    getTaskType(): string;
    getPackageType(): number;
    getCategory(): string;
    getController(): string;
    getAction(_actionName: string, _nodeInstance: any, nodeEmitter: any): (nodeEvent: any, payload: any) => (dispatch: any) => void;
}
