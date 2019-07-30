import {ENDPOINT_FATURAMENTO} from './base'

export function consultarFaturamento(){
    return fetch(ENDPOINT_FATURAMENTO).then(resultado => resultado.json());
}