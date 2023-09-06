// Vue 3
import { ref, onMounted, computed, watch, reactive } from 'vue'

import { useVuelidate } from '@vuelidate/core';
import { registerProjectValidation } from '../validations/registerProjectValidation';

/* Composition Api Vue */
import { useProyectManagementStore } from '../../../../stores/projectManagementStore'
import { useTypeStatus } from '../../../../stores/typeStatusStore'
/* Manejador de Errores */
import { PiniaErrorHandler } from '../../../Shared/errors/PiniaErrorHandler';
/* Rpository */
import { ProjectRepository } from '../../Infrastructure/api/ProjectRepository'
import { TypeStatusRepository } from '../../Infrastructure/api/TypeStatusRepository'
/* Use Case */
import { GetProjectUseCase } from '../../Application/UseCase/proyect/GetProjectUseCase'
import { CreateProjectUseCase } from '../../Application/UseCase/proyect/CreateProjectUseCase'
import { GetTypeStatusUseCase } from '../../Application/UseCase/typeStatus/GetTypeStatusUseCase'


export function projectComposable() {

  /* Gestor Pinia */
  const proyectManagement = useProyectManagementStore();
  const typeStatus = useTypeStatus();
  /* Manejador de Errores */
  const piniaErrorHandler = new PiniaErrorHandler();
  /* Rpository */
  const projectRepository = new ProjectRepository();
  const typeStatusRepository = new TypeStatusRepository();
  /* Use Case */
  const getProjectUseCase = new GetProjectUseCase(projectRepository, piniaErrorHandler);
  const createProjectUseCase = new CreateProjectUseCase(projectRepository, piniaErrorHandler);
  const getTypeStatusUseCase = new GetTypeStatusUseCase(typeStatusRepository, piniaErrorHandler);

  const openModal = ref(false)

  const formData = reactive({
    nombre: "",
    tipoEstado: "",
    descripcion: "",
  })

  const vv = useVuelidate(registerProjectValidation, formData);

  const listProyect = computed(() => proyectManagement.listProyect);
  const listTypeStatus = computed(() => typeStatus.ListTypeStatus);

  async function getAllProjects() {
    const allProyect = await getProjectUseCase.getAllProjects()
    proyectManagement.setProyectList(allProyect);
  }

  function handleRegister() {
    console.log(formData)
    vv.value.$touch();
    if (vv.value.$invalid) {
      return;
    } else {
      alert("listo para enviar")
    }

    // try {
    //   const proyect = await createProjectUseCase.createProject(dataRegister);
    //   proyectManagement.addProject(proyect)
    //   openModal.value = false
    // } catch (error) {
    //   console.error('Error al crear el proyecto:', error);
    // }
  }

  async function getAllTypeStatus() {
    try {
      const proyect = await getTypeStatusUseCase.getAllTypeStatus();
      typeStatus.setTypeStatus(proyect)
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
    }
  }

  watch(openModal, (newValue, oldValue) => {
    if (newValue) {
      getAllTypeStatus()
    }
  })

  getAllProjects()

  // onMounted(async () => {
  //   await getAllProjects()
  // })

  // const handleSubmit = async () => {
  //   dataAuxiliar.loading = true
  //     vv.value.$touch();
  //     if (vv.value.$invalid) {
  //         return;
  //     }
  //     await login(formData);
  //     dataAuxiliar.loading = false
  // }

  return { createProjectUseCase, listProyect, listTypeStatus, handleRegister, openModal, vv, proyectManagement }

}
