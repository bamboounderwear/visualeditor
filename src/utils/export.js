export function downloadTemplate(type) {
    const canvas = document.getElementById('templateCanvas');
    
    switch(type) {
        case 'email':
        case 'landing':
            downloadHTML(canvas);
            break;
        case 'ad':
            exportToImage(canvas);
            break;
        case 'presentation':
            exportToPDF(canvas);
            break;
    }
}

function downloadHTML(canvas) {
    const html = canvas.innerHTML;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'template.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function exportToImage(canvas) {
    html2canvas(canvas).then(canvas => {
        const link = document.createElement('a');
        link.download = 'template.jpg';
        link.href = canvas.toDataURL('image/jpeg', 1.0);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

function exportToPDF(canvas) {
    html2pdf()
        .from(canvas)
        .save('template.pdf');
}