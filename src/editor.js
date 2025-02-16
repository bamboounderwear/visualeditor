export function initializeTemplateEditor(canvas, templateType) {
    const editableElements = canvas.querySelectorAll('[contenteditable="true"]');
    
    // Add editing functionality to editable elements
    editableElements.forEach(element => {
        // Prevent formatting paste
        element.addEventListener('paste', (e) => {
            e.preventDefault();
            const text = e.clipboardData.getData('text/plain');
            document.execCommand('insertText', false, text);
        });

        // Prevent drag and drop
        element.addEventListener('dragstart', (e) => e.preventDefault());
        element.addEventListener('drop', (e) => e.preventDefault());
    });

    // Set specific constraints based on template type
    if (templateType === 'email') {
        setupEmailConstraints(canvas);
    } else if (templateType === 'ad') {
        setupAdConstraints(canvas);
    }
}

function setupEmailConstraints(canvas) {
    // Ensure web-safe fonts
    const elements = canvas.querySelectorAll('*');
    elements.forEach(element => {
        element.style.fontFamily = 'Arial, Helvetica, sans-serif';
    });
}

function setupAdConstraints(canvas) {
    // Set fixed dimensions for ad templates
    canvas.style.width = '1800px';
    canvas.style.height = '1800px';
}