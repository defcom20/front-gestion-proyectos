export class GetTypeStatusUseCase {

  constructor(typeStatusRepository, piniaErrorHandler) {
    this.typeStatusRepository = typeStatusRepository;
    this.errorHandler = piniaErrorHandler;
  }

  async getAllTypeStatus() {
    try {
      return await this.typeStatusRepository.getAllTypeStatus()
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  handleError(error) {
    this.errorHandler.setError(error.message);
  }
}
