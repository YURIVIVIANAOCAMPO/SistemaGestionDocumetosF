import { Component } from '@angular/core';
import { ProcesoService } from './proceso.service';

@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.scss']
})
export class ProcesoComponent {
  infoTable:any =  [{
    pro_nombre: "Proceso2",
    pro_prefijo: "1002",
    created_at: "2023/02/24",
    updated_at: null
}];
  constructor(private ProcesoService:ProcesoService){}
 
   ngOnInit() {
     this.getAllProceso();
   }
   // editDocument(id: number, codigo: any,) {
   //   //return this._router.navigate(['/edit-document', id, codigo]);
   // }
 
   getAllProceso(){
     this.ProcesoService.getAllProceso().subscribe((res:any)=>{
       console.log("Res Tipo Docu",res)
       this.infoTable=res;
     })
   }
 
   DeleteProceso(id:number){   
     this.ProcesoService.deletProceso(id).subscribe((res:any)=>{       
           this.getAllProceso();        
     })
   }
}
