import { BaseRepository } from '../../../Shared/repositories/BaseRepository';
import { TypeStatus } from "../../Domain/Entities/TypeStatus";

export class TypeStatusRepository extends BaseRepository {

  constructor() {
    super('urlBase');
  }

  async getAllTypeStatus() {
    try {
      const { data } = await this.httpAdapter.fetch(`${this.url}/type-state`, {
        method: 'GET'
      });
      //return data;
      return data.map(project => new TypeStatus(project.id, project.name));
    } catch (error) {
      throw new Error("Error al obtener todos los proyectos");
    }
  }

}
