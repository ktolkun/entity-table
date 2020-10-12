import {EntityColumnType} from "./entity-column-type.model";

export class EntityColumnConfig {
  property: string;
  title: string;
  type: EntityColumnType;
  values: Array<string>;
}
