import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaskModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskPayload>;
export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type TaskAvgAggregateOutputType = {
    id: number | null;
    projectId: number | null;
    assigneeId: number | null;
};
export type TaskSumAggregateOutputType = {
    id: number | null;
    projectId: number | null;
    assigneeId: number | null;
};
export type TaskMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    status: $Enums.Status | null;
    priority: $Enums.Priority | null;
    projectId: number | null;
    assigneeId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    dueData: Date | null;
};
export type TaskMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    status: $Enums.Status | null;
    priority: $Enums.Priority | null;
    projectId: number | null;
    assigneeId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    dueData: Date | null;
};
export type TaskCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    status: number;
    priority: number;
    projectId: number;
    assigneeId: number;
    createdAt: number;
    updatedAt: number;
    dueData: number;
    _all: number;
};
export type TaskAvgAggregateInputType = {
    id?: true;
    projectId?: true;
    assigneeId?: true;
};
export type TaskSumAggregateInputType = {
    id?: true;
    projectId?: true;
    assigneeId?: true;
};
export type TaskMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    priority?: true;
    projectId?: true;
    assigneeId?: true;
    createdAt?: true;
    updatedAt?: true;
    dueData?: true;
};
export type TaskMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    priority?: true;
    projectId?: true;
    assigneeId?: true;
    createdAt?: true;
    updatedAt?: true;
    dueData?: true;
};
export type TaskCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    status?: true;
    priority?: true;
    projectId?: true;
    assigneeId?: true;
    createdAt?: true;
    updatedAt?: true;
    dueData?: true;
    _all?: true;
};
export type TaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskCountAggregateInputType;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTask[P]> : Prisma.GetScalarType<T[P], AggregateTask[P]>;
};
export type TaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithAggregationInput | Prisma.TaskOrderByWithAggregationInput[];
    by: Prisma.TaskScalarFieldEnum[] | Prisma.TaskScalarFieldEnum;
    having?: Prisma.TaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type TaskGroupByOutputType = {
    id: number;
    title: string;
    description: string | null;
    status: $Enums.Status;
    priority: $Enums.Priority;
    projectId: number;
    assigneeId: number | null;
    createdAt: Date;
    updatedAt: Date;
    dueData: Date | null;
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]>;
}>>;
export type TaskWhereInput = {
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    id?: Prisma.IntFilter<"Task"> | number;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumStatusFilter<"Task"> | $Enums.Status;
    priority?: Prisma.EnumPriorityFilter<"Task"> | $Enums.Priority;
    projectId?: Prisma.IntFilter<"Task"> | number;
    assigneeId?: Prisma.IntNullableFilter<"Task"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    dueData?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    assignee?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type TaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    dueData?: Prisma.SortOrderInput | Prisma.SortOrder;
    project?: Prisma.ProjectOrderByWithRelationInput;
    assignee?: Prisma.UserOrderByWithRelationInput;
};
export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumStatusFilter<"Task"> | $Enums.Status;
    priority?: Prisma.EnumPriorityFilter<"Task"> | $Enums.Priority;
    projectId?: Prisma.IntFilter<"Task"> | number;
    assigneeId?: Prisma.IntNullableFilter<"Task"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    dueData?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
    project?: Prisma.XOR<Prisma.ProjectScalarRelationFilter, Prisma.ProjectWhereInput>;
    assignee?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id">;
export type TaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    dueData?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.TaskCountOrderByAggregateInput;
    _avg?: Prisma.TaskAvgOrderByAggregateInput;
    _max?: Prisma.TaskMaxOrderByAggregateInput;
    _min?: Prisma.TaskMinOrderByAggregateInput;
    _sum?: Prisma.TaskSumOrderByAggregateInput;
};
export type TaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Task"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    status?: Prisma.EnumStatusWithAggregatesFilter<"Task"> | $Enums.Status;
    priority?: Prisma.EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority;
    projectId?: Prisma.IntWithAggregatesFilter<"Task"> | number;
    assigneeId?: Prisma.IntNullableWithAggregatesFilter<"Task"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
    dueData?: Prisma.DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null;
};
export type TaskCreateInput = {
    title: string;
    description?: string | null;
    status: $Enums.Status;
    priority: $Enums.Priority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dueData?: Date | string | null;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
    assignee?: Prisma.UserCreateNestedOneWithoutAssignedTasksInput;
};
export type TaskUncheckedCreateInput = {
    id?: number;
    title: string;
    description?: string | null;
    status: $Enums.Status;
    priority: $Enums.Priority;
    projectId: number;
    assigneeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dueData?: Date | string | null;
};
export type TaskUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueData?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
    assignee?: Prisma.UserUpdateOneWithoutAssignedTasksNestedInput;
};
export type TaskUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    assigneeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueData?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaskCreateManyInput = {
    id?: number;
    title: string;
    description?: string | null;
    status: $Enums.Status;
    priority: $Enums.Priority;
    projectId: number;
    assigneeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dueData?: Date | string | null;
};
export type TaskUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueData?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaskUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    assigneeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueData?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaskListRelationFilter = {
    every?: Prisma.TaskWhereInput;
    some?: Prisma.TaskWhereInput;
    none?: Prisma.TaskWhereInput;
};
export type TaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    dueData?: Prisma.SortOrder;
};
export type TaskAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
};
export type TaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    dueData?: Prisma.SortOrder;
};
export type TaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    dueData?: Prisma.SortOrder;
};
export type TaskSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    projectId?: Prisma.SortOrder;
    assigneeId?: Prisma.SortOrder;
};
export type TaskCreateNestedManyWithoutAssigneeInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutAssigneeNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput | Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput> | Prisma.TaskCreateWithoutAssigneeInput[] | Prisma.TaskUncheckedCreateWithoutAssigneeInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutAssigneeInput | Prisma.TaskCreateOrConnectWithoutAssigneeInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpsertWithWhereUniqueWithoutAssigneeInput[];
    createMany?: Prisma.TaskCreateManyAssigneeInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput | Prisma.TaskUpdateWithWhereUniqueWithoutAssigneeInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput | Prisma.TaskUpdateManyWithWhereWithoutAssigneeInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput | Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput | Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutProjectInput | Prisma.TaskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput> | Prisma.TaskCreateWithoutProjectInput[] | Prisma.TaskUncheckedCreateWithoutProjectInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutProjectInput | Prisma.TaskCreateOrConnectWithoutProjectInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput | Prisma.TaskUpsertWithWhereUniqueWithoutProjectInput[];
    createMany?: Prisma.TaskCreateManyProjectInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput | Prisma.TaskUpdateWithWhereUniqueWithoutProjectInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutProjectInput | Prisma.TaskUpdateManyWithWhereWithoutProjectInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status;
};
export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type TaskCreateWithoutAssigneeInput = {
    title: string;
    description?: string | null;
    status: $Enums.Status;
    priority: $Enums.Priority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dueData?: Date | string | null;
    project: Prisma.ProjectCreateNestedOneWithoutTasksInput;
};
export type TaskUncheckedCreateWithoutAssigneeInput = {
    id?: number;
    title: string;
    description?: string | null;
    status: $Enums.Status;
    priority: $Enums.Priority;
    projectId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dueData?: Date | string | null;
};
export type TaskCreateOrConnectWithoutAssigneeInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput>;
};
export type TaskCreateManyAssigneeInputEnvelope = {
    data: Prisma.TaskCreateManyAssigneeInput | Prisma.TaskCreateManyAssigneeInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutAssigneeInput, Prisma.TaskUncheckedUpdateWithoutAssigneeInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutAssigneeInput, Prisma.TaskUncheckedCreateWithoutAssigneeInput>;
};
export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutAssigneeInput, Prisma.TaskUncheckedUpdateWithoutAssigneeInput>;
};
export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutAssigneeInput>;
};
export type TaskScalarWhereInput = {
    AND?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    OR?: Prisma.TaskScalarWhereInput[];
    NOT?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    id?: Prisma.IntFilter<"Task"> | number;
    title?: Prisma.StringFilter<"Task"> | string;
    description?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumStatusFilter<"Task"> | $Enums.Status;
    priority?: Prisma.EnumPriorityFilter<"Task"> | $Enums.Priority;
    projectId?: Prisma.IntFilter<"Task"> | number;
    assigneeId?: Prisma.IntNullableFilter<"Task"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    dueData?: Prisma.DateTimeNullableFilter<"Task"> | Date | string | null;
};
export type TaskCreateWithoutProjectInput = {
    title: string;
    description?: string | null;
    status: $Enums.Status;
    priority: $Enums.Priority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dueData?: Date | string | null;
    assignee?: Prisma.UserCreateNestedOneWithoutAssignedTasksInput;
};
export type TaskUncheckedCreateWithoutProjectInput = {
    id?: number;
    title: string;
    description?: string | null;
    status: $Enums.Status;
    priority: $Enums.Priority;
    assigneeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dueData?: Date | string | null;
};
export type TaskCreateOrConnectWithoutProjectInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput>;
};
export type TaskCreateManyProjectInputEnvelope = {
    data: Prisma.TaskCreateManyProjectInput | Prisma.TaskCreateManyProjectInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutProjectInput, Prisma.TaskUncheckedUpdateWithoutProjectInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutProjectInput, Prisma.TaskUncheckedCreateWithoutProjectInput>;
};
export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutProjectInput, Prisma.TaskUncheckedUpdateWithoutProjectInput>;
};
export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutProjectInput>;
};
export type TaskCreateManyAssigneeInput = {
    id?: number;
    title: string;
    description?: string | null;
    status: $Enums.Status;
    priority: $Enums.Priority;
    projectId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dueData?: Date | string | null;
};
export type TaskUpdateWithoutAssigneeInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueData?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    project?: Prisma.ProjectUpdateOneRequiredWithoutTasksNestedInput;
};
export type TaskUncheckedUpdateWithoutAssigneeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueData?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaskUncheckedUpdateManyWithoutAssigneeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    projectId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueData?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaskCreateManyProjectInput = {
    id?: number;
    title: string;
    description?: string | null;
    status: $Enums.Status;
    priority: $Enums.Priority;
    assigneeId?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    dueData?: Date | string | null;
};
export type TaskUpdateWithoutProjectInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueData?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    assignee?: Prisma.UserUpdateOneWithoutAssignedTasksNestedInput;
};
export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    assigneeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueData?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusFieldUpdateOperationsInput | $Enums.Status;
    priority?: Prisma.EnumPriorityFieldUpdateOperationsInput | $Enums.Priority;
    assigneeId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dueData?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type TaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    projectId?: boolean;
    assigneeId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    dueData?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    projectId?: boolean;
    assigneeId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    dueData?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    projectId?: boolean;
    assigneeId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    dueData?: boolean;
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    priority?: boolean;
    projectId?: boolean;
    assigneeId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    dueData?: boolean;
};
export type TaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "projectId" | "assigneeId" | "createdAt" | "updatedAt" | "dueData", ExtArgs["result"]["task"]>;
export type TaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
};
export type TaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
};
export type TaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    project?: boolean | Prisma.ProjectDefaultArgs<ExtArgs>;
    assignee?: boolean | Prisma.Task$assigneeArgs<ExtArgs>;
};
export type $TaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Task";
    objects: {
        project: Prisma.$ProjectPayload<ExtArgs>;
        assignee: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        description: string | null;
        status: $Enums.Status;
        priority: $Enums.Priority;
        projectId: number;
        assigneeId: number | null;
        createdAt: Date;
        updatedAt: Date;
        dueData: Date | null;
    }, ExtArgs["result"]["task"]>;
    composites: {};
};
export type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskPayload, S>;
export type TaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskCountAggregateInputType | true;
};
export interface TaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Task'];
        meta: {
            name: 'Task';
        };
    };
    findUnique<T extends TaskFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskFindManyArgs>(args?: Prisma.SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskCreateArgs>(args: Prisma.SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskDeleteArgs>(args: Prisma.SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskUpdateArgs>(args: Prisma.SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskUpsertArgs>(args: Prisma.SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskCountArgs>(args?: Prisma.Subset<T, TaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskCountAggregateOutputType> : number>;
    aggregate<T extends TaskAggregateArgs>(args: Prisma.Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>;
    groupBy<T extends TaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskFieldRefs;
}
export interface Prisma__TaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    project<T extends Prisma.ProjectDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProjectDefaultArgs<ExtArgs>>): Prisma.Prisma__ProjectClient<runtime.Types.Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    assignee<T extends Prisma.Task$assigneeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Task$assigneeArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskFieldRefs {
    readonly id: Prisma.FieldRef<"Task", 'Int'>;
    readonly title: Prisma.FieldRef<"Task", 'String'>;
    readonly description: Prisma.FieldRef<"Task", 'String'>;
    readonly status: Prisma.FieldRef<"Task", 'Status'>;
    readonly priority: Prisma.FieldRef<"Task", 'Priority'>;
    readonly projectId: Prisma.FieldRef<"Task", 'Int'>;
    readonly assigneeId: Prisma.FieldRef<"Task", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly dueData: Prisma.FieldRef<"Task", 'DateTime'>;
}
export type TaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type TaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
};
export type TaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaskIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type TaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
    include?: Prisma.TaskIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
};
export type TaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type Task$assigneeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type TaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
};
export {};
