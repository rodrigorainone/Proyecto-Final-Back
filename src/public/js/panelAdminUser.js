document.addEventListener('DOMContentLoaded', () => {
    const getBotonsChangeRole = document.querySelectorAll('.changeRol');
    const getBotonesEliminar = document.querySelectorAll('.eliminar')
    const getBotonEliminarTemporal = document.querySelector('.eliminarTemporal')

    getBotonEliminarTemporal.addEventListener('click', async (e) =>{
        e.preventDefault();  
        const response = await fetch(`/api/users/`, {
            method: 'DELETE',
            body:'',
            headers: {
            'Content-Type': 'application/json',
        },
        });
        const responseData = await response.json();
        console.log(responseData);
        if (responseData.status=="success"){
            Swal.fire('Se borraron usuarios inactivos ')
        }
    })

  

    getBotonsChangeRole.forEach((element)=>{
        element.addEventListener('click', async (e) =>{
            e.preventDefault();  
            const idRoleValue = e.target.getAttribute('idRole');
            console.log(idRoleValue);
            e.preventDefault();
            const response = await fetch(`/api/users/premium/${idRoleValue}`, {
                method: 'PUT',
                body:'',
                headers: {
                'Content-Type': 'application/json',
            },
            });
            const responseData = await response.json();
            console.log(responseData);
            Swal.fire('Se modifico el role del usuario ')
                setTimeout(function() {
                    window.location.reload();
                 }, 2000);
        })
    })

    getBotonesEliminar.forEach((element)=>{
        element.addEventListener('click',async (e) =>{
         e.preventDefault(); 
         const idEliminar = e.target.getAttribute('idEliminar');  
         console.log(idEliminar)
         const response = await fetch(`/api/users/${idEliminar}`, {
            method: 'DELETE',
            body:'',
            headers: {
            'Content-Type': 'application/json',
        },
        });
        const responseData = await response.json();
        console.log(responseData);
        Swal.fire('Se borro el user del usuario ')
            setTimeout(function() {
                window.location.reload();
             }, 2000);

        })
    })

    
  
    
  });