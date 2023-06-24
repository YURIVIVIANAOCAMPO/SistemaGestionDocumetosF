import { Component,OnInit } from '@angular/core';
import { TipodocumentoService } from './tipodocumento.service';

@Component({
  selector: 'app-tipodocumento',
  templateUrl: './tipodocumento.component.html',
  styleUrls: ['./tipodocumento.component.scss']
})
export class TipodocumentoComponent implements OnInit {
 infoTable:any;
 constructor(private tipoDocuService:TipodocumentoService){}

  ngOnInit() {
    this.getAllTipoDocu();
  }
  // editDocument(id: number, codigo: any,) {
  //   //return this._router.navigate(['/edit-document', id, codigo]);
  // }

  getAllTipoDocu(){
    this.tipoDocuService.getAllTipoDocumento().subscribe((res:any)=>{
      console.log("Res Tipo Docu",res)
      this.infoTable=res.data;
    })
  }

  DeleteTipoDocumento(id:number){   
    this.tipoDocuService.deleteTipoDocumento(id).subscribe((res:any)=>{       
          this.getAllTipoDocu();        
    })
  }
}
