import { BaseRepository } from '../../../Shared/repositories/BaseRepository';
import { ProyectEntities } from "../../Domain/Entities/ProjectEntities";

export class ProjectRepository extends BaseRepository {

  constructor() {
    super('urlBase');
  }

  async getAllProjects() {
    try {
      const { data } = await this.httpAdapter.fetch(`${this.url}/proyect`, {
        method: 'GET'
      });
      //return data;
      return data.map(project => new ProyectEntities(project.id, project.name, project.description, project.type_state_id));
    } catch (error) {
      throw new Error("Error al obtener todos los proyectos");
    }
  }

  transformDataRegister(dataRegister) {
    return {
      description: dataRegister.descripcion,
      name: dataRegister.nombre,
      type_state_id: dataRegister.tipoEstado.id,
    };
  }

  async createProject(dataRegister) {
    const transformedData = this.transformDataRegister(dataRegister);
    try {
      const { data } = await this.httpAdapter.fetch(`${this.url}/proyect`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transformedData)
      });
      return data;
    } catch (error) {
      throw new Error("Error al crear el proyecto");
    }
  }

}
