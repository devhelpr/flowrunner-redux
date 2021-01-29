import * as FlowRunner from '@devhelpr/flowrunner';
export declare class ReduxArrayStateType extends FlowRunner.FlowTask {
    execute(node: any, _services: any): boolean;
    getName(): string;
    getFullName(): string;
    getReducer(node: any): (state: never[] | undefined, action: any) => any;
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
