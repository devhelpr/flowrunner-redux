import { FlowTask } from '@devhelpr/flowrunner';
export declare class ReduxHashmapStateType extends FlowTask {
    execute(node: any, _services: any): boolean;
    getName(): string;
    getFullName(): string;
    getReducer(node: any): (state: {} | undefined, action: any) => {};
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
