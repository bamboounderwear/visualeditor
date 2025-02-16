// Template definitions with predefined content
export const templates = {
    email: [
        {
            id: 'email-template-1',
            name: 'Newsletter Template',
            description: 'Clean, professional newsletter layout',
            type: 'email',
            thumbnail: '/templates/thumbnails/email-1.jpg',
            html: `
                <div style="max-width: 600px; margin: 0 auto; font-family: Arial, Helvetica, sans-serif;">
                    <header style="background: #f8f9fa; padding: 20px; text-align: center;">
                        <h1 contenteditable="true">Newsletter Title</h1>
                    </header>
                    <main style="padding: 20px;">
                        <section contenteditable="true">
                            <h2>Main Story</h2>
                            <p>Your content goes here...</p>
                        </section>
                    </main>
                    <footer style="background: #f8f9fa; padding: 20px; text-align: center;">
                        <p contenteditable="true">Contact us: email@example.com</p>
                    </footer>
                </div>
            `
        }
    ],
    ads: [
        {
            id: 'ad-template-1',
            name: 'Product Advertisement',
            description: 'Square format product showcase',
            type: 'ad',
            thumbnail: '/templates/thumbnails/ad-1.jpg',
            html: `
                <div style="width: 1800px; height: 1800px; background: #ffffff; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                    <div contenteditable="true" style="font-size: 72px; font-weight: bold; margin-bottom: 40px;">
                        Product Name
                    </div>
                    <div contenteditable="true" style="font-size: 36px; color: #666; text-align: center; max-width: 80%;">
                        Your compelling product description goes here
                    </div>
                </div>
            `
        }
    ],
    presentations: [
        {
            id: 'presentation-1',
            name: 'Business Presentation',
            description: 'Professional slide deck template',
            type: 'presentation',
            thumbnail: '/templates/thumbnails/presentation-1.jpg',
            html: `
                <div style="width: 1920px; height: 1080px; background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); padding: 60px;">
                    <h1 contenteditable="true" style="font-size: 60px; margin-bottom: 40px;">
                        Presentation Title
                    </h1>
                    <div contenteditable="true" style="font-size: 30px;">
                        Your content here
                    </div>
                </div>
            `
        }
    ],
    landing: [
        {
            id: 'landing-1',
            name: 'Product Landing Page',
            description: 'High-converting landing page template',
            type: 'landing',
            thumbnail: '/templates/thumbnails/landing-1.jpg',
            html: `
                <div style="max-width: 1200px; margin: 0 auto; padding: 40px 20px;">
                    <header style="text-align: center; margin-bottom: 60px;">
                        <h1 contenteditable="true">Your Product Name</h1>
                        <p contenteditable="true" style="font-size: 24px;">The perfect solution for your needs</p>
                    </header>
                    <main>
                        <section contenteditable="true" style="margin-bottom: 40px;">
                            <h2>Features</h2>
                            <ul>
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                            </ul>
                        </section>
                    </main>
                </div>
            `
        }
    ]
};