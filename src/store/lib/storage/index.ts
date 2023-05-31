import { SLS } from '@stead/sls';

export const Storage = new SLS({
  encodingType: 'aes',
  encryptionNamespace: 'project',
  encryptionSecret: '5t34d-10'
});
