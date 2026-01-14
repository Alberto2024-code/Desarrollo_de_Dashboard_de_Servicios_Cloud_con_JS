const baseDeDatosCloud= [
    {
        nombre:"Amazon EC2",
        tipo:"laas",
        estado:"Activo",
        costo:35.00

    },
    {
        nombre:"Google Drive Enterprise",
        tipo:"SaaS",
        estado:"Activo",
        costo:12.50  
    },
    {
        nombre:"Heroku App Server",
        tipo:"PaaS",
        estado:"inactivo",
        costo:0.00
    },
    {
        nombre:"Azure Virtual Machines",
        tipo:"laas",
        estado:"Activo",
        costo:40.00
    }
]
const cargarServicios=()=>
{
    const contenedor= document.getElementById("contenedor")
    contenedor.innerHTML=""

      baseDeDatosCloud.forEach((servicios) => {
        
        if (servicios.estado == "Activo") {

            contenedor.innerHTML += 
                "<div class='card'>" +
                    "<h2 class='activo'>" + servicios.estado + "</h2>" +
                "</div>"

        } else {

            contenedor.innerHTML += 
                "<div class='card'>" +
                    "<h2 class='inactivo'>" + servicios.estado + "</h2>" +
                "</div>"

        }
    })

}