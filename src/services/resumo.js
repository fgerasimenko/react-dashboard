import {ENDPOINT_RESUMO} from './base'

export function consultarResumo(){
    return fetch(ENDPOINT_RESUMO).then(resultado => resultado.json());
}