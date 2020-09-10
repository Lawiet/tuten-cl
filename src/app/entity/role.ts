export class Role {

  userRole: string;
  description: string;
  fatherUserRole: string;
  domain: string;
  estatus: number;
  defaultNamespace: string;
  id: number;
  _persistence_shouldRefreshFetchGroup: boolean;

  constructor() {
  }

  deepCopy(json: any, entity?: any) {
    if (json instanceof Array) {
      const entities: any[] = [];

      json.forEach((o: this) => {
        entities.push(Object.assign(entity !== undefined ? new entity : this, o));
      });

      return entities;
    } else {
      return Object.assign(this, json);
    }
  }
}
