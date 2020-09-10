import {Role} from './role';

export class User {
  serviceData: string;
  userAvailability: string;
  sessionTokenBck: string;
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
  passwordHash: string;
  sessionTokenWeb: string;
  phoneNumber: string;
  agreedToTermsOfUse: boolean;
  whereKnownUs: string;
  lastLogin: string;
  sessionTokenCli: string;
  sessionTokenPro: string;
  funds: number;
  tokenFacebook: string;
  tokenGoogle: string;
  tokensIonic: string;
  photoPath: string;
  photoExt: string;
  userRole: Role;
  sync: number;
  usedCodeList: string;
  referrer: string;
  rut: string;
  domain: string;
  typeProfessional: string;
  tutenSubRole: string;
  userId: number;
  appVersion: string;
  estatus: number;
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
