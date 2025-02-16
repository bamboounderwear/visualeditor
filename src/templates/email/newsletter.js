export const newsletterTemplate = {
    id: 'email-template-1',
    name: 'Newsletter Template',
    description: 'Clean, professional newsletter layout',
    type: 'email',
    thumbnail: '/templates/thumbnails/email-1.jpg',
    html: `
        <div class="email-container" style="width: 600px; margin: 0 auto; font-family: Arial, Helvetica, sans-serif; background: #ffffff; border: 1px solid #e0e0e0;">
            <header style="background: #f8f9fa; padding: 20px; text-align: center; border-bottom: 1px solid #e0e0e0;">
                <div contenteditable="true" style="margin: 0; font-size: 24px; color: #333; font-weight: bold;">Newsletter Title</div>
            </header>
            
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
};