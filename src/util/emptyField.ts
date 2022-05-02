import { literal, Struct, union } from "superstruct";

export const emptyField = (model: Struct<any, any>) => union([model, literal("")])