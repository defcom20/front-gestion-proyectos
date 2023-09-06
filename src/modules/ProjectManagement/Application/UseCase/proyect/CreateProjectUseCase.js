export class CreateProjectUseCase {

  constructor(projectRepository, piniaErrorHandler) {
    this.projectRepository = projectRepository;
    this.errorHandler = piniaErrorHandler;
  }

  async createProject(dataRegister) {
    try {
      return await this.projectRepository.createProject(dataRegister);
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  handleError(error) {
    this.errorHandler.setError(error.message);
  }
}
