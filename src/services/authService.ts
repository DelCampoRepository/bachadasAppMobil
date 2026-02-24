const API_URL = "http://185.100.15.18:51583/api";


export const loginUsuario = async (usuario: string, contraseña: string) => {
    try {
          
            const response = await fetch(`${API_URL}/Usuario/login`, {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ usuario, contraseña })
            });

                const data = await response.json();
                 console.log("Respuesta del servidor:", JSON.stringify(data.data,null,2));
          
            if (!response.ok) {
               throw new Error(data.mensaje || 'Error en la autenticación');
            }
            
            return data;
    } catch (error: any) {
        throw error;
    }
};