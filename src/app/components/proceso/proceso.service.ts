import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {
  constructor(private httpClient: HttpClient) { }

  getAllProceso(){
    return this.httpClient.get("http://127.0.0.1:8000/api/proceso/list");
  }

  postProceso(procesou:any){
    return this.httpClient.post("http://127.0.0.1:8000/api/proceso/add",procesou);
  }
  deletProceso(id:number){
    return this.httpClient.delete('http://127.0.0.1:8000/api/proceso/delete/'+ id);
  }
  updateProceso(procesou:any){
    return this.httpClient.put('http://127.0.0.1:8000/api/proceso/update/'+procesou.id, procesou);
  }
  getByProceso(id:number){
    return this.httpClient.get('http://127.0.0.1:8000/api/proceso/list/'+id);
  }
}
