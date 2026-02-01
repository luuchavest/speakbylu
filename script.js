
const $form = document.querySelector('.formulario');

$form.addEventListener('submit', async (event) => {
    event.preventDefault(); 
    const $btn = $form.querySelector('button');
    const originalText = $btn.textContent;

    
    $btn.textContent = "Enviando...";
    $btn.disabled = true;

   
    const formData = new FormData($form);

    try {
        const response = await fetch($form.action, {
            method: $form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('¡Listo! Lu recibió tu mensaje y te contactará pronto. 🚀');
            $form.reset(); 
        } else {
            alert('Algo falló en el envío. Por favor, intentá de nuevo.');
        }
    } catch (error) {
        alert('Error de conexión. Chequeá tu internet.');
    } finally {
        
        $btn.textContent = originalText;
        $btn.disabled = false;
    }
});