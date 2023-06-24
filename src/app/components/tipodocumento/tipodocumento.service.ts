import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {
  constructor(private httpClient: HttpClient) { }

  getAllTipoDocumento(){
    return this.httpClient.get("http://127.0.0.1:8000/api/tipodoc/list");
  }

  postTipoDocumento(tipoDocu:any){
    return this.httpClient.post("http://127.0.0.1:8000/api/tipodoc/add",tipoDocu);
  }
  deleteTipoDocumento(id:number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/tipodoc/delete/'+ id);
  }
  updateTipoDocumento(tipoDocu:any){
    return this.httpClient.put('http://127.0.0.1:8000/api/tipodoc/update/'+tipoDocu.id, tipoDocu);
  }
  getByTipoDocumento(id:number){
    return this.httpClient.get('http://127.0.0.1:8000/api/tipodoc/list/'+id);
  }
}
