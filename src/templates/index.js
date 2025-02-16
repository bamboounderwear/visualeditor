export const templates = {
    email: [
        {
            id: 'email-template-1',
            name: 'Newsletter Template',
            description: 'Clean, professional newsletter layout',
            type: 'email',
            thumbnail: '/templates/thumbnails/email-1.jpg',
            html: `
                <div class="email-container" style="width: 600px; margin: 0 auto; font-family: Arial, Helvetica, sans-serif; background: #ffffff; border: 1px solid #e0e0e0;">
                    <div class="hero-banner" style="position: relative; height: 200px; background-size: cover; background-position: center; background-image: url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=600&q=80'); margin-bottom: 20px;">
                        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.4);"></div>
                        <div style="position: relative; padding: 40px 20px; text-align: center;">
                            <div contenteditable="true" style="color: white; font-size: 32px; font-weight: bold; margin-bottom: 10px;">Welcome to Our Newsletter</div>
                            <div contenteditable="true" style="color: white; font-size: 18px;">Stay updated with our latest news</div>
                        </div>
                        <div style="position: absolute; bottom: 10px; right: 10px;">
                            <input type="text" placeholder="Enter image URL" style="padding: 5px; border: 1px solid #ddd; border-radius: 4px; width: 200px;" 
                                onchange="this.parentElement.parentElement.style.backgroundImage = 'url(' + this.value + ')'">
                        </div>
                    </div>
                    
                    <main style="padding: 40px 20px; background: #ffffff;">
                        <div contenteditable="true" style="margin-bottom: 30px;">
                            <h2 style="color: #2c3e50; font-size: 20px; margin-bottom: 15px;">Main Story</h2>
                            <p style="color: #666; line-height: 1.6; margin: 0;">Your content goes here. Write a compelling story that engages your readers.</p>
                        </div>
                        
                        <div contenteditable="true" style="margin-bottom: 30px;">
                            <h3 style="color: #2c3e50; font-size: 18px; margin-bottom: 15px;">Secondary Story</h3>
                            <p style="color: #666; line-height: 1.6; margin: 0;">Additional content for your newsletter. Keep it concise and interesting.</p>
                        </div>
                    </main>
                    
                    <footer style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
                        <div contenteditable="true" style="margin: 0; color: #666;">
                            <p style="margin: 0 0 10px 0;">Contact us: email@example.com</p>
                            <p style="margin: 0; font-size: 12px;">© 2025 Your Company. All rights reserved.</p>
                        </div>
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
                <div style="width: 1800px; height: 1800px; background-image: url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1800&q=80'); background-size: cover; background-position: center; position: relative;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,255,255,0.85); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; box-sizing: border-box;">
                        <div contenteditable="true" style="font-size: 72px; font-weight: bold; margin-bottom: 40px; text-align: center; color: #2c3e50;">
                            Product Name
                        </div>
                        <div contenteditable="true" style="font-size: 36px; color: #666; text-align: center; max-width: 80%;">
                            Your compelling product description goes here
                        </div>
                    </div>
                    <div style="position: absolute; bottom: 20px; right: 20px; background: rgba(255,255,255,0.9); padding: 10px; border-radius: 4px;">
                        <input type="text" placeholder="Enter background image URL" style="padding: 8px; border: 1px solid #ddd; border-radius: 4px; width: 300px;" 
                            onchange="this.parentElement.parentElement.style.backgroundImage = 'url(' + this.value + ')'">
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
                <div style="width: 1920px; height: 1080px; background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); padding: 60px; box-sizing: border-box;">
                    <h1 contenteditable="true" style="font-size: 60px; margin-bottom: 40px; color: #2c3e50;">
                        Presentation Title
                    </h1>
                    <div contenteditable="true" style="font-size: 30px; color: #666; line-height: 1.6;">
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
                <div style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: Arial, sans-serif;">
                    <header style="text-align: center; margin-bottom: 60px;">
                        <h1 contenteditable="true" style="font-size: 48px; color: #2c3e50; margin-bottom: 20px;">Your Product Name</h1>
                        <p contenteditable="true" style="font-size: 24px; color: #666;">The perfect solution for your needs</p>
                    </header>
                    <main>
                        <section contenteditable="true" style="margin-bottom: 40px;">
                            <h2 style="font-size: 36px; color: #2c3e50; margin-bottom: 20px;">Features</h2>
                            <ul style="font-size: 18px; color: #666; line-height: 1.6;">
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