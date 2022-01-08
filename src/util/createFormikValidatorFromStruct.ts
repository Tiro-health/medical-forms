import { Struct } from "superstruct";
import _ from "lodash"

export function createFormikValidatorFromStruct(struct:Struct<any,any>) {
    return function(values:any) {
      let errors;
      const [result] = struct.validate(values);
      if (!!result) {
        errors = Object.values(result.failures()).reduce((errors, error)=>_.set(errors, error.path, error.message), {});
      }
      return errors;
    };
  }