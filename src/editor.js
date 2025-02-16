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
    } else if (templateType === 'presentation') {
        setupPresentationConstraints(canvas);
    }

    // Set up auto-scaling for large templates
    if (templateType === 'ad' || templateType === 'presentation') {
        setupAutoScaling(canvas);
        window.addEventListener('resize', () => setupAutoScaling(canvas));
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

function setupPresentationConstraints(canvas) {
    // Set fixed dimensions for presentation templates
    canvas.style.width = '1920px';
    canvas.style.height = '1080px';
}

function setupAutoScaling(canvas) {
    const workspace = document.querySelector('.editor-workspace');
    const workspaceWidth = workspace.clientWidth - 40; // Account for padding
    const workspaceHeight = workspace.clientHeight - 40;
    
    const templateWidth = parseInt(canvas.style.width);
    const templateHeight = parseInt(canvas.style.height);
    
    const scaleX = workspaceWidth / templateWidth;
    const scaleY = workspaceHeight / templateHeight;
    const scale = Math.min(scaleX, scaleY, 1); // Never scale up
    
    canvas.style.setProperty('--scale-factor', scale);
}