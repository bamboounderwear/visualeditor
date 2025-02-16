import { templates } from './templates/index.js';
import { initializeTemplateEditor } from './editor.js';
import { downloadTemplate } from './utils/export.js';

let currentCategory = 'email';
let currentTemplate = null;

// Initialize the application
function init() {
    displayTemplates(currentCategory);
    setupEventListeners();
}

// Display templates for the selected category
function displayTemplates(category) {
    const templatesGrid = document.getElementById('templatesGrid');
    const categoryTemplates = templates[category] || [];
    
    templatesGrid.innerHTML = categoryTemplates.map(template => `
        <div class="template-card" data-template-id="${template.id}">
            <div class="template-preview">
                <img src="${template.thumbnail}" alt="${template.name}" style="max-width: 100%;">
            </div>
            <div class="template-info">
                <h3>${template.name}</h3>
                <p>${template.description}</p>
            </div>
        </div>
    `).join('');

    // Show header and templates grid
    document.querySelector('.header').style.display = 'block';
    document.getElementById('templatesGrid').style.display = 'grid';
    document.getElementById('templateEditor').style.display = 'none';
}

// Setup event listeners
function setupEventListeners() {
    // Category buttons
    document.querySelector('.template-categories').addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            currentCategory = e.target.dataset.category;
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            displayTemplates(currentCategory);
        }
    });

    // Template selection
    document.getElementById('templatesGrid').addEventListener('click', async (e) => {
        const templateCard = e.target.closest('.template-card');
        if (templateCard) {
            const templateId = templateCard.dataset.templateId;
            currentTemplate = templates[currentCategory].find(t => t.id === templateId);
            await showEditor(currentTemplate);
        }
    });

    // Back button
    document.getElementById('backButton').addEventListener('click', () => {
        displayTemplates(currentCategory);
    });

    // Download button
    document.getElementById('downloadButton').addEventListener('click', () => {
        if (currentTemplate) {
            downloadTemplate(currentTemplate.type);
        }
    });
}

// Show the template editor
async function showEditor(template) {
    try {
        // Fetch the template HTML
        const response = await fetch(template.templateUrl);
        if (!response.ok) throw new Error('Failed to load template');
        const html = await response.text();
        
        // Extract the content from within the body tag
        const bodyContent = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] || html;
        
        // Hide header and templates grid, show editor
        document.querySelector('.header').style.display = 'none';
        document.getElementById('templatesGrid').style.display = 'none';
        document.getElementById('templateEditor').style.display = 'flex';
        
        const canvas = document.getElementById('templateCanvas');
        canvas.innerHTML = bodyContent;
        canvas.className = `template-canvas ${template.type}-template`;
        
        initializeTemplateEditor(canvas, template.type);
    } catch (error) {
        console.error('Error loading template:', error);
        // Handle error appropriately
    }
}

// Initialize the application
init();