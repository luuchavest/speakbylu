const $form = document.querySelector('.formulario');

$form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const $btn = $form.querySelector('button');
    const originalText = $btn.textContent;

    // Feedback visual
    $btn.textContent = "Enviando...";
    $btn.disabled = true;

    // Usamos la URL directa para evitar errores de referencia
    const action = "https://formsubmit.co/ajax/luuchavest@gmail.com";
    const formData = new FormData($form);

    try {
        const response = await fetch(action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('¡Listo Lu! El mensaje se envió correctamente. ✨');
            $form.reset();
        } else {
            alert('Error en el servidor. Reintentá en un momento.');
        }
    } catch (error) {
        alert('Error de conexión. Chequeá tu internet.');
        console.log(error);
    } finally {
        $btn.textContent = originalText;
        $btn.disabled = false;
    }
});