import { FlowTask } from '@devhelpr/flowrunner';
export declare class ReduxSetKeyActionTask extends FlowTask {
    execute(node: any, services: any): boolean;
    getDescription(): string;
    getName(): string;
    getFullName(): string;
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
