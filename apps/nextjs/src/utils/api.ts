import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "snapparoo//api";

export const api = createTRPCReact<AppRouter>();

export { type RouterInputs, type RouterOutputs } from "snapparoo//api";
