import { Component,OnInit } from '@angular/core';
import { TipodocumentoService } from '../tipodocumento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
   tipoDocumento={
    id:0,
  tip_nombre: '',
  tip_prefijo: ''
 }
 id!:string
  constructor(private tipoDocuService:TipodocumentoService,private router:Router, private route: ActivatedRoute,){}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.id = this.route.snapshot.paramMap.get('id') ?? '';
      this.tipoDocumento.id = parseInt(this.id)
     this.getById()
    }
  }

  getById(){
    if(this.id){
    this.tipoDocuService.getByTipoDocumento(parseInt(this.id)).subscribe((res:any)=>{
      console.log(res)
      this.tipoDocumento.tip_nombre = res.data.tip_nombre
      this.tipoDocumento.tip_prefijo = res.data.tip_prefijo
    })
    }
  }

  updateTipoDocument(id:any){
    this.tipoDocuService.updateTipoDocumento(id).subscribe((res:any)=>{
      if(res.success){
        this.router.navigate(['/tipodoc']);
      }
  })
  }

 prefijo(prefijo:string){
 this.tipoDocumento.tip_prefijo =prefijo.substr(0, 3);
  // "eje"
 }

  postTipoDocument(){
    if(!this.id){
      this.tipoDocumento.tip_nombre=this.tipoDocumento.tip_nombre.toUpperCase();
    this.tipoDocumento.tip_prefijo=this.tipoDocumento.tip_prefijo.toUpperCase();
    this.tipoDocuService.postTipoDocumento(this.tipoDocumento).subscribe((res:any)=>{
        if(res.success){
          this.router.navigate(['/tipodoc']);
        }
    })
    }
    if(this.id){
      this.tipoDocumento.tip_nombre=this.tipoDocumento.tip_nombre.toUpperCase();
    this.tipoDocumento.tip_prefijo=this.tipoDocumento.tip_prefijo.toUpperCase();
    this.tipoDocuService.updateTipoDocumento(this.tipoDocumento).subscribe((res:any)=>{
        if(res.success){
          this.router.navigate(['/tipodoc']);
        }
    })
    }
  }

 
}

