import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';

function removeEditableAttributes(element) {
    const clone = element.cloneNode(true);
    const editableElements = clone.querySelectorAll('[contenteditable]');
    editableElements.forEach(el => {
        el.removeAttribute('contenteditable');
        el.style.outline = 'none';
        el.style.padding = '0';
    });
    return clone;
}

function wrapWithHTMLBoilerplate(content, title) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    ${content}
</body>
</html>`;
}

export function downloadTemplate(type) {
    const canvas = document.getElementById('templateCanvas');
    const cleanCanvas = removeEditableAttributes(canvas);
    
    // Reset any scaling before export
    cleanCanvas.style.transform = 'none';
    
    switch(type) {
        case 'email':
        case 'landing':
            downloadHTML(cleanCanvas, type);
            break;
        case 'ad':
            exportToImage(cleanCanvas);
            break;
        case 'presentation':
            exportToPDF(cleanCanvas);
            break;
    }
}

function downloadHTML(canvas, type) {
    const content = canvas.innerHTML;
    const title = type === 'email' ? 'Email Template' : 'Landing Page';
    const fullHTML = wrapWithHTMLBoilerplate(content, title);
    
    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type}-template.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function exportToImage(canvas) {
    const options = {
        scale: 1,
        width: 1800,
        height: 1800,
        backgroundColor: '#ffffff'
    };

    html2canvas(canvas, options).then(renderedCanvas => {
        const link = document.createElement('a');
        link.download = 'template.jpg';
        link.href = renderedCanvas.toDataURL('image/jpeg', 1.0);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

function exportToPDF(canvas) {
    const options = {
        filename: 'template.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
            scale: 2,
            width: 1920,
            height: 1080,
            backgroundColor: '#ffffff'
        },
        jsPDF: {
            unit: 'px',
            format: [1920, 1080],
            orientation: 'landscape'
        }
    };

    html2pdf().set(options).from(canvas).save();
}