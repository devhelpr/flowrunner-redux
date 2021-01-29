import { FlowTask } from '@devhelpr/flowrunner';
export declare class ReduxGetTask extends FlowTask {
    execute(node: any, services: any, _callStack: any): Promise<unknown>;
    getName(): string;
    getFullName(): string;
    getDescription(): string;
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
