import {ENDPOINT_CONSULTAS} from './base'

export function consultarConsultas(){
    return fetch(ENDPOINT_CONSULTAS).then(resultado => resultado.json());
}