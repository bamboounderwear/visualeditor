import html2canvas from 'html2canvas';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';

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
    const cleanCanvas = removeEditableAttributes(canvas.cloneNode(true));
    
    // Create a temporary container for the clean canvas
    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.left = '-9999px';
    tempContainer.style.top = '-9999px';
    document.body.appendChild(tempContainer);
    
    // Reset any scaling and append the clean canvas
    cleanCanvas.style.transform = 'none';
    cleanCanvas.style.margin = '0';
    tempContainer.appendChild(cleanCanvas);
    
    const exportPromise = new Promise((resolve, reject) => {
        switch(type) {
            case 'email':
            case 'landing':
                downloadHTML(cleanCanvas, type);
                resolve();
                break;
            case 'ad':
                exportToImage(cleanCanvas)
                    .then(resolve)
                    .catch(reject);
                break;
            case 'presentation':
                exportToPDF(cleanCanvas)
                    .then(resolve)
                    .catch(reject);
                break;
        }
    });

    exportPromise.finally(() => {
        document.body.removeChild(tempContainer);
    });
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

async function exportToImage(canvas) {
    const options = {
        scale: 1,
        width: 1800,
        height: 1800,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        removeContainer: true,
        foreignObjectRendering: false
    };

    try {
        const renderedCanvas = await html2canvas(canvas, options);
        const link = document.createElement('a');
        link.download = 'template.jpg';
        link.href = renderedCanvas.toDataURL('image/jpeg', 1.0);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error exporting image:', error);
    }
}

async function exportToPDF(canvas) {
    const options = {
        filename: 'template.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false,
            width: 1920,
            height: 1080
        },
        jsPDF: {
            unit: 'px',
            format: [1920, 1080],
            orientation: 'landscape',
            compress: true
        }
    };

    try {
        await html2pdf().set(options).from(canvas).save();
    } catch (error) {
        console.error('Error exporting PDF:', error);
    }
}