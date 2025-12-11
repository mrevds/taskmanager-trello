export declare const Role: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const ProjectRole: {
    readonly OWNER: "OWNER";
    readonly ADMIN: "ADMIN";
    readonly MEMBER: "MEMBER";
};
export type ProjectRole = (typeof ProjectRole)[keyof typeof ProjectRole];
export declare const Status: {
    readonly TODO: "TODO";
    readonly INPROGRESS: "INPROGRESS";
    readonly DONE: "DONE";
};
export type Status = (typeof Status)[keyof typeof Status];
export declare const Priority: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
};
export type Priority = (typeof Priority)[keyof typeof Priority];
