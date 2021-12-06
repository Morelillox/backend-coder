const fs = require('fs')

class Contenedor{
    constructor(url){
        this.url = url
    }
    static counter = 0
    async getAll(){
        const url = this.url
        
            let data
            try{
                let res = await fs.promises.readFile(url, "utf-8")
                res = JSON.parse(res) || null
                return res
            }
            catch(error){
                console.log("No se pudo encontrar el archivo.")
            }
            
        
        
    }
    save(object){
        const url = this.url
        
        let id = Contenedor.counter
        this.getAll()
            .then(async (res)=>{
                try{
                    let data = res || []
                    while(data.some(el=> el.id == id)){
                        Contenedor.couter += 1
                        id += 1
                        
                    }
                    object.id = id 
                    data.push(object)
                    await fs.promises.writeFile(url, JSON.stringify(data) )
                    console.log(`Guardado con el id #${id}`)
                    return id
                    
                }
                catch(error){
                    console.log("No se pudo guardar.", error)
                }
            })

    }
    getById(id){
        this.getAll()
        .then(el=>{
            let search = el.find(el=> el.id ==id)
            console.log(search)
            if(search){
                console.log(search)
                
            }else{
                console.log("no se encontró ninguna coincidencia")
            
            }
            return search
        })
        .catch(error =>{
            console.warning("No se pudo resolver la consulta.")
        })
    }
    deleteById(id){
        const url = this.url
        this.getAll()
        .then(async el=>{
            let aux = el.filter(el=> el.id !=id)
            await fs.promises.writeFile(url, JSON.stringify(aux) )
                    console.log(`Se borro el elemento con id #${id}`)
        })
        .catch(error=>{
            console.log("No se pudo eliminar el objeto.",error)
        })
    }
    async deleteAll(){
        const url = this.url
        try{
            await fs.promises.writeFile(url, JSON.stringify([]))
            console.log("Los objetos se borraron satisfactoriamente")
        }
        catch(error){
            console.log("No se pudo borrar los elementos",error)
        }
        
            
    }
}


let prueba = new Contenedor("./productos.txt")

prueba.save({title:"hola",price:120,thumbnail:""})
prueba.getAll().then(res=>{console.log(res)})
prueba.getById(1)
prueba.deleteById(1)
//prueba.deleteAll()
