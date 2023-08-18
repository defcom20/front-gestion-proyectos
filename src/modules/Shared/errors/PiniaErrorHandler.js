import { useProyectManagement } from '../../../stores/proyectManagement'
import { ErrorHandler } from './ErrorHandler';

export class PiniaErrorHandler extends ErrorHandler {
  setError(error) {
    const proyectManagement = useProyectManagement();
    proyectManagement.setError(error);
  }
}
