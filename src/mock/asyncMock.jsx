const productos = [
    {
        id:"01",
        name:"Teclado",
        description:"Teclado con luces led, y cable",
        stock: 20,
        price:20000,
        category:"mas vendidos",
        img:"https://i.postimg.cc/v14RmCNB/2.png"

    },
     {
        id:"02",
        name:"Mouse",
        description:"Mouse con rgb y cable",
        stock: 15,
        price:13000,
        category:"nuevos",
        img:"https://i.postimg.cc/qMkSG3DH/10.png"

    },
     {
        id:"03",
        name:"Auriculares",
        description:"Auriculares con cable y rgb",
        stock: 10,
        price:10000,
        category:"mas vendidos",
        img:"https://i.postimg.cc/njj4sLHf/6.png"

    },
     {
        id:"04",
        name:"Teclado Inalambrico",
        description:"Teclado inalambrico con bateria y rgb",
        stock: 20,
        price:25000,
        category:"ofertas",
        img:"https://i.postimg.cc/1g8xzbjz/Chat-GPT-Image-5-feb-2026-15-35-57.png"

    }
]
let error = false
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if (error){
                reject ("Hubo un error, intente de nuevo mas tarde.")
            }else {
                resolve (productos)
            }

        }, 3000)
    })
}
export const getItem =(id) =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject("Hubo un error intente de nuevo mas tarde")
            }else {
                let prod = productos.find((prod)=> prod.id=== id) 
                resolve (prod)
            }
        },3000)
    })
}