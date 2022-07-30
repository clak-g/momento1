const peso_controller = {};
//datos de entrada 
//nombres  n_pacientes peso_inicial
//peso_intermedio y peso_final
//datos a calcular
// peso_dif_in perd_peso
// pesoObj

let peso_dif = [];
let peso_perd =[];
let peso_obj = [];
let gano_peso = [];
let perdieron_peso = 0;
let response={};

peso_controller.create = (req,res)=>{
    let array_pacientes= req.body.pacientes

    for(let i=0;i<array_pacientes.lenght;i++){}
    const paciente = array_pacientes[i];

    //calcular peso diferencia
    let peso_inicial = paciente.peso_inicial
    let peso_final = paciente.peso_final
    if(peso_inicial>peso_final){
    let pesodif = peso_inicial-peso_final;
    let obj_paciente={}
    obj_paciente['nombre'] = paciente.nombre;
    obj_paciente['perdio'] = pesodif;
    peso_dif.push(obj_paciente)
    perdieron_peso++
    
        
    
    }else{
       if(peso_inicial<peso_final){
        let pesodif = peso_final-peso_inicial
        obj_paciente['nombre'] = paciente.nombre;
        obj_paciente['gano'] = pesodif;
    }
    }
    
}