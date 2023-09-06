export class GetProjectUseCase {

  constructor(typeStatusRepository, piniaErrorHandler) {
    this.typeStatusRepository = typeStatusRepository;
    this.errorHandler = piniaErrorHandler;
  }

  async getAllProjects() {
    try {
      return await this.typeStatusRepository.getAllProjects();
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  handleError(error) {
    this.errorHandler.setError(error.message);
  }
}
