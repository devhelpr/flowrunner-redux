import { FlowTask } from '@devhelpr/flowrunner';
export declare class ReduxPropertyStateType extends FlowTask {
    execute(node: any, _services: any, _callStack: any): boolean;
    getName(): string;
    getFullName(): string;
    getReducer(node: any): (state: string | undefined, action: any) => any;
    getIcon(): string;
    getShape(): string;
    getTaskType(): string;
    getPackageType(): number;
    getCategory(): string;
    getController(): string;
    getConfigMetaData(): {
        name: string;
        defaultValue: string;
        valueType: string;
        required: boolean;
    }[];
}
