import { FlowTask } from '@devhelpr/flowrunner';
export declare class StoreObserverTask extends FlowTask {
    execute(node: any, services: any): any;
    isAttachedToExternalObservable(): boolean;
    isAttachedToStoreChanges(): boolean;
    getDescription(): string;
    getName(): string;
    getFullName(): string;
    getIcon(): string;
    getShape(): string;
    getDefaultColor(): string;
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
