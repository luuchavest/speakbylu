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
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        const json = await response.json();

        if (response.ok) {
            alert('¡Listo Lu! Recibí tus datos perfectamente. ✨');
            $form.reset();
        } else {
            
            alert(`Error: ${json.message || 'No se pudo enviar'}`);
        }
    } catch (error) {
        alert('Error de red. ¿Estás conectada a internet o la URL es correcta?');
        console.log(error);
    } finally {
        $btn.textContent = originalText;
        $btn.disabled = false;
    }
});