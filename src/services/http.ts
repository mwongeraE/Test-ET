import { Storage } from '@/store/lib';
import { SteadClient } from '@stead/request';

const host = 'https://cors-anywhere.herokuapp.com/https://europe-west1-app-brrng.cloudfunctions.net';

export const client = new SteadClient({
  host,
  tokenKey: '$tkn',
  storage: {
    get: async (key: string) => 'stub',
    set: async (key: string, value: any) => Storage.set(key, value),
    delete: async (key: string) => Storage.remove(key)
  }
});

export const $get = client.$get.bind(client);
export const $put = client.$put.bind(client);
export const $post = client.$post.bind(client);
export const $patch = client.$patch.bind(client);
export const $delete = client.$delete.bind(client);
