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
    } else if (templateType === 'landing') {
        setupLandingConstraints(canvas);
    }

    // Set up auto-scaling for all templates
    setupAutoScaling(canvas, templateType);
    window.addEventListener('resize', () => setupAutoScaling(canvas, templateType));
}

function setupEmailConstraints(canvas) {
    // Ensure web-safe fonts
    const elements = canvas.querySelectorAll('*');
    elements.forEach(element => {
        if (getComputedStyle(element).fontFamily !== 'Arial, Helvetica, sans-serif') {
            element.style.fontFamily = 'Arial, Helvetica, sans-serif';
        }
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

function setupLandingConstraints(canvas) {
    // Set fixed width for landing page templates
    canvas.style.width = '1200px';
}

function setupAutoScaling(canvas, templateType) {
    const workspace = document.querySelector('.editor-workspace');
    if (!workspace) return;

    const padding = 80; // 40px padding on each side
    const workspaceWidth = workspace.clientWidth - padding;
    const workspaceHeight = workspace.clientHeight - padding;
    
    let templateWidth = parseInt(canvas.style.width) || canvas.clientWidth;
    let templateHeight;
    
    switch(templateType) {
        case 'ad':
            templateHeight = 1800;
            break;
        case 'presentation':
            templateHeight = 1080;
            break;
        case 'email':
            templateHeight = canvas.scrollHeight;
            break;
        case 'landing':
            templateHeight = canvas.scrollHeight;
            break;
        default:
            templateHeight = canvas.clientHeight;
    }
    
    const scaleX = workspaceWidth / templateWidth;
    const scaleY = workspaceHeight / templateHeight;
    
    // Calculate the appropriate scale based on template type
    let scale;
    if (templateType === 'email') {
        scale = Math.min(scaleX, 0.8); // Cap email template scale at 0.8
    } else if (templateType === 'landing') {
        scale = Math.min(scaleX, 0.5); // Cap landing page scale at 0.5
    } else {
        scale = Math.min(scaleX, scaleY, 1); // Never scale up
    }
    
    // Ensure minimum scale for visibility
    scale = Math.max(scale, 0.1);
    
    canvas.style.setProperty('--scale-factor', scale);
}