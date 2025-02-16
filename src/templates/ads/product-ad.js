export const productAdTemplate = {
    id: 'ad-template-1',
    name: 'Product Advertisement',
    description: 'Square format product showcase',
    type: 'ad',
    thumbnail: '/templates/thumbnails/ad-1.jpg',
    html: `
        <div style="width: 1800px; height: 1800px; background: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; box-sizing: border-box;">
            <div contenteditable="true" style="font-size: 72px; font-weight: bold; margin-bottom: 40px; text-align: center; color: #2c3e50;">
                Product Name
            </div>
            <div contenteditable="true" style="font-size: 36px; color: #666; text-align: center; max-width: 80%;">
                Your compelling product description goes here
            </div>
        </div>
    `
};