import { IS_DEBUG } from "@/constants/client";

export const Debug = ({ data }: { data: unknown; }) => !IS_DEBUG ? null : <pre>{JSON.stringify(data ?? {}, null, 2)}</pre>;