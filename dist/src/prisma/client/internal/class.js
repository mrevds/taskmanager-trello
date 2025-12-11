"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.1.0",
    "engineVersion": "ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba",
    "activeProvider": "postgresql",
    "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/prisma/client\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nenum Role {\n  USER\n  ADMIN\n}\n\nenum ProjectRole {\n  OWNER\n  ADMIN\n  MEMBER\n}\n\nenum Status {\n  TODO\n  INPROGRESS\n  DONE\n}\n\nenum Priority {\n  LOW\n  MEDIUM\n  HIGH\n}\n\nmodel User {\n  id             Int             @id @default(autoincrement())\n  username       String          @unique\n  password       String\n  role           Role            @default(USER)\n  createdAt      DateTime        @default(now())\n  updatedAt      DateTime        @updatedAt\n  ownedProjects  Project[]       @relation(\"ProjectOwner\")\n  projectMembers ProjectMember[]\n  assignedTasks  Task[]          @relation(\"TaskAssignee\")\n}\n\nmodel RevokedToken {\n  id        Int      @id @default(autoincrement())\n  jti       String   @unique\n  revokedAt DateTime @default(now())\n}\n\nmodel Project {\n  id          Int             @id @default(autoincrement())\n  title       String\n  description String?\n  ownerId     Int\n  createdAt   DateTime        @default(now())\n  updatedAt   DateTime        @updatedAt\n  owner       User            @relation(\"ProjectOwner\", fields: [ownerId], references: [id], onDelete: Cascade)\n  tasks       Task[]\n  members     ProjectMember[]\n\n  @@index([ownerId])\n}\n\nmodel Task {\n  id          Int      @id @default(autoincrement())\n  title       String\n  description String?\n  status      Status\n  priority    Priority\n  projectId   Int\n\n  assigneeId Int?\n  createdAt  DateTime  @default(now())\n  updatedAt  DateTime  @updatedAt\n  dueData    DateTime?\n  project    Project   @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  assignee   User?     @relation(\"TaskAssignee\", fields: [assigneeId], references: [id], onDelete: SetNull)\n\n  @@index([projectId])\n  @@index([assigneeId])\n}\n\nmodel ProjectMember {\n  id        Int         @id @default(autoincrement())\n  projectId Int\n  userId    Int\n  role      ProjectRole @default(MEMBER)\n  joinedAt  DateTime    @default(now())\n\n  project Project @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  user    User    @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([projectId, userId])\n  @@index([projectId])\n  @@index([userId])\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"username\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"ownedProjects\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectOwner\"},{\"name\":\"projectMembers\",\"kind\":\"object\",\"type\":\"ProjectMember\",\"relationName\":\"ProjectMemberToUser\"},{\"name\":\"assignedTasks\",\"kind\":\"object\",\"type\":\"Task\",\"relationName\":\"TaskAssignee\"}],\"dbName\":null},\"RevokedToken\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"jti\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"revokedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Project\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"ownerId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"owner\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ProjectOwner\"},{\"name\":\"tasks\",\"kind\":\"object\",\"type\":\"Task\",\"relationName\":\"ProjectToTask\"},{\"name\":\"members\",\"kind\":\"object\",\"type\":\"ProjectMember\",\"relationName\":\"ProjectToProjectMember\"}],\"dbName\":null},\"Task\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"Status\"},{\"name\":\"priority\",\"kind\":\"enum\",\"type\":\"Priority\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"assigneeId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"dueData\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToTask\"},{\"name\":\"assignee\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"TaskAssignee\"}],\"dbName\":null},\"ProjectMember\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"ProjectRole\"},{\"name\":\"joinedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToProjectMember\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ProjectMemberToUser\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    }
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map