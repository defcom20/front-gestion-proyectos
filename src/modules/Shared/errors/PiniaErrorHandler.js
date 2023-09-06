import { useProyectManagementStore } from '../../../stores/projectManagementStore'
import { ErrorHandler } from './ErrorHandler';

export class PiniaErrorHandler extends ErrorHandler {
  setError(error) {
    const proyectManagement = useProyectManagementStore();
    proyectManagement.setError(error);
  }
}
