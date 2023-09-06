import { required, helpers, minLength, maxLength } from '@vuelidate/validators';

export const registerProjectValidation = {
  nombre: {
    required: helpers.withMessage('Nombre es requerido', required),
    minLength: helpers.withMessage('Nombre debe tener al menos 3 caracteres', minLength(3)),
    maxLength: helpers.withMessage('La longitud máxima permitida es de 15 caracteres', maxLength(15))
  },
  tipoEstado: {
    required: helpers.withMessage('TipoEstado es requerido', required)
    // minLength: helpers.withMessage('Usuario debe tener al menos 4 caracteres', minLength(4)),
    // maxLength: helpers.withMessage('La longitud máxima permitida es de 15 caracteres', maxLength(15))
  },
  descripcion: {
    required: helpers.withMessage('Descripcion es requerido', required),
    minLength: helpers.withMessage('Descripcion debe tener al menos 4 caracteres', minLength(4)),
    // maxLength: helpers.withMessage('La longitud máxima permitida es de 15 caracteres', maxLength(15))
  }
};
