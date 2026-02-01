console.log("¡Script cargado correctamente!");

const $form = document.querySelector('.formsubmit');

$form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log("Formulario capturado, iniciando envío...");

    const $btn = $form.querySelector('button');
    const originalText = $btn.textContent;

    $btn.textContent = "Enviando...";
    $btn.disabled = true;

    const formData = new FormData($form);

    try {
        const response = await fetch("https://formsubmit.co/ajax/luuchavest@gmail.com", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        const json = await response.json();
        console.log("Respuesta de FormSubmit:", json);

        if (response.ok) {
            alert('¡Listo Lu! Mensaje enviado. ✨');
            $form.reset();
        } else {
            alert('Error al enviar: ' + json.message);
        }
    } catch (error) {
        console.error("Error detectado:", error);
        alert('Hubo un error de conexión o de código.');
    } finally {
        $btn.textContent = originalText;
        $btn.disabled = false;
    }
});