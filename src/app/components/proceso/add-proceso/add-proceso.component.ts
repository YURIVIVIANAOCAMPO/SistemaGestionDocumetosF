import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProcesoService } from '../proceso.service';


@Component({
  selector: 'app-add-proceso',
  templateUrl: './add-proceso.component.html',
  styleUrls: ['./add-proceso.component.scss']
})
export class AddProcesoComponent {
  proceso={
  id:0,
  pro_nombre: '',
  pro_prefijo: ''
 }
 id!:string
  constructor(private tipoDocuService:ProcesoService, private router:Router, private route: ActivatedRoute,){}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.id = this.route.snapshot.paramMap.get('id') ?? '';
      this.proceso.id = parseInt(this.id)
      this.getById()
    }
  }


 prefijo(prefijo:string){
 this.proceso.pro_prefijo =prefijo.substr(0, 3);
  // "eje"
 }

  getById(){
    if(this.id){
    this.tipoDocuService.getByProceso(parseInt(this.id)).subscribe((res:any)=>{
      this.proceso.pro_nombre = res.data.pro_nombre
      this.proceso.pro_prefijo = res.data.pro_prefijo
    })
    }
  }

  
  postProceso(){
    if(!this.id){
    this.proceso.pro_nombre=this.proceso.pro_nombre.toUpperCase();
    this.proceso.pro_prefijo=this.proceso.pro_prefijo.toUpperCase();
    this.tipoDocuService.postProceso(this.proceso).subscribe((res:any)=>{
      console.log('hola',res)
        if(res.id){
          this.router.navigate(['/proceso']);
        }
    })
    }
    if(this.id){
    this.proceso.pro_nombre=this.proceso.pro_nombre.toUpperCase();
    this.proceso.pro_prefijo=this.proceso.pro_prefijo.toUpperCase();
    this.tipoDocuService.updateProceso(this.proceso).subscribe((res:any)=>{
      console.log('hola',res)
        if(res.id){
          this.router.navigate(['/proceso']);
        }
    })
    }
  }
}
