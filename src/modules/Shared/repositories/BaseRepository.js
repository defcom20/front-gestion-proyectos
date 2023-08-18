import { HTTPAdapter } from '../adapters/HTTPAdapter';
import { apiConfig } from '../config/api';

export class BaseRepository {
  constructor(moduleName) {
    this.httpAdapter = new HTTPAdapter();
    this.url = apiConfig[moduleName];
  }
}
