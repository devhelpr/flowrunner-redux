import { FlowTask } from '@devhelpr/flowrunner';
export declare class ReduxActionTask extends FlowTask {
    execute(node: any, services: any): boolean;
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
