
import {utilService} from '../../../services/util-service.js'
export const emailService = {
    getEmailsList,
    sortBy,
  
}
const MAILDB_KEY = 'MailDb'

function sortBy(emails, sort) {
    if (sort === 'date' || sort === '') return emails.sort((a, b) => (a.sentAt > b.sentAt) ? -1 : 1);
    else if (sort === 'name') return emails.sort((a, b) => a.from.localeCompare(b.from));
}

function getEmailsList(){
    let emailDB = utilService.loadFromStorage(MAILDB_KEY) 
    if (emailDB && emailDB.length) return emailDB
    
    emailDB = [
        {
            folder: 'inbox', subject: 'Welcome to Appsus!',
            from: 'Appsus', to: 'me',
            body: `Hello, we hope you are enjoying our App so far!
    The idea behind APPSUS is one of productivity- ever find yourself switching between the same two appsover, and over, and over again?
    As the need for enhanced productivity grew, the team at APPSUS decided to bring together our favoritethings- functionality, a seamless user experience and a striking design.
    
    APPSUS was built by Almog Lemberg and Gali Nickel as a part of the Coding Academy fullstack bootcamp.
    You can read more about us in our 'About' page.`,
            isRead: false, sentAt: Date.now(),isFavorite: true,
            id: '15511339305941234174'
        },
        {
            folder: 'inbox', subject: 'LinkedIn Job Alerts',
            from: 'David', to: 'me',
            body: `I hope this mail finds you well.
            After a speedy scan of your website, I am simply composing this email to let you know that your customers are facing problems finding your business website in Google's natural listings because your keywords are not in the Top-10. So, why are you not trying our low-cost marketing services to overcome this situation?

                        Our Offerings are:           
            
            1. On-Page Optimization  
            2. Video Creation & Marketing            
            3. Press Release Marketing            
            4. Blog Creation & Promotions            
            5. Online Reputation Management            
            6. Keyword Research, Analysis & Optimization            
            7. Web Content Development            
            8. Local Business Listings & Optimization            
            9. Newsletter Marketing            
            10. Content Marketing
            11. Social Media Marketing
            If you are really concerned about your business and want to produce fresh leads from the web by using our low cost marketing strategy then don't spare a moment to mail me back. In return I’ll be happy to offer you a no-cost Analysis Report of your website.
            Eagerly waiting for your response.   
            Thanks and regards,`,
            isRead: false, sentAt: 1614362114000,isFavorite: true,
            id: '15511339305941234dx74'
        },

        {
            folder: 'inbox', subject: 'Discover next-generation slideshows‏', from: 'Canva', to: 'me',
            body: `Fromthe boardroom to the classroom to your living room, our Slideshow Videos are the perfect way 
    to introduce your team, say happy birthday to a classmate, or show family and friends your favorite holiday snaps. Simply pick a template, add animation, text effects, video clips, music, and more to have your audience glued to the screen from start to finish.`,
            isRead: false, sentAt: 1614362113000,isFavorite: true, id: '1614273355adfd'
        },
    
        {
            folder: 'inbox', subject: 'How are you?',
            from: 'Gali', to: 'me',
            body: `Hey Almog! i'm just checking up how the sprint work is going for you
    let me know if you want to have a zoom meeting and catch up :)`,
            isRead: true, sentAt: 1614193632740,isFavorite: true,
            id: '15511339305941234567'
        },
        
        {
            folder: 'inbox', subject: `[New collection] International Women’s Day 2021‏
        `, from: 'Depositpics', to: 'me', body: `International Women’s Day is coming up soon! Explore our 2021 collection celebrating a special day around the world with inspiring visuals and some of the newest files from the Depositphotos library.
            Kind regards, The Depositphotos Team.
        `, isRead: true, sentAt: 1612790413000,isFavorite: true, id: '1614172813000er'
        },
        {
            folder: 'inbox', subject: 'Almog, thanks for being a valued member', from: 'LinkedIn', to: 'me',
            body: `
            Hi Almog,
    Thanks for being part of the LinkedIn community - we're so glad you're here. As a thank you, we'd like to offer you one free month of LinkedIn Premium.
    
    Here's how Premium can help:
    
    *Who's viewed your profile
    Turn your profile views from the last 90 days into new opportunities.
    
    *More InMail messages
    Expand your network and easily connect with hiring managers.
    
    *LinkedIn Learning
    Access 16,000+ expert-led courses to sharpen your skills.
    
    *Interview preparation
    Get prepared to put your best face forward in your next interview.
        
        Sincerely,
            Liza and the LinkedIn Premium Team`,
            isRead: true, sentAt: 1611780545000,isFavorite: false, id: '1611780545000aa'
        },
        {
            folder: 'sent', subject: 're: How are you?',
            from: 'me', to: 'Gali',
            body: `Hey, I'm doing good actually! I saw your recent update and really loved it.
                Sure i'd love to, let's have a zoom meeting in 30 minutes?
                You can send me the link here when you're ready!
            
                -------------------------------------------------------------
                Hey Almog! i'm just checking up how the sprint work is going for you
                let me know if you want to have a zoom meeting and catch up :)`,
            isRead: true, sentAt: 1614193632840,isFavorite: false,
            id: '15511339305941234598'
        },
        {
            folder: 'inbox',
            subject: 'Spreading the love with Zeplin ❤',
            from: 'Zeplin', to: 'me',
            body: `This month, we’ve been reflecting on and sharing stories about how teams use Zeplin with theirother essential tools in the design-to-development process. 
    Work is better when done together — that’s the whole reason why we prioritize deep integrations withboth designers’ and developers’ tool stacks.
    
    We’ve rounded up a few stories about how teams use Zeplin with design tools like Adobe XD and Figma plussome fun ways we’ve made use of our new integration with Zapier.
    We kicked off a new webinar series last month: Zeplin + Figma: Better Together!
    Up first was Katherine Lee, principal UX visual designer and manager at Autodesk, who shared howleveraging Zeplin and Figma together became a critical part of her team’s workflow.
    In case you missed it, we recently released our integration with Zapier. But, before we could roll outthis new feature to our users, we wanted to test it for ourselves. That’s why we hosted an all-remoteZeplin + Zapier Hackathon! To get your workflow muscles warmed up, we wanted to share the winning “Zaps”from our internal hackathon. Enjoy!
    
    Once you’ve caught up on the first episode of our Zeplin + Figma: Better Together series, head over toour second conversation with the ArcTouch product team. We chatted with product designers BárbaraFontenelle and Ricardo Machado and product manager Danielle Diehl to learn more about their workflowDigital Experience specialist Lanna Solci joined Electrolux, a global Swedish maker of home appliances,to help refine their processes for building digital experiences integrated with physical appliances. Shespoke with our crew on how her team has adopted a workflow encompassing Zeplin, Overflow and Adobe XD.
    ​​See you next month!
            ​​The Zeplin Crew        
            `,
            isRead: true, sentAt: 1611515895000,isFavorite: true,
            id: '15511339308001234444'
        },
        {
            folder: 'inbox',
            subject: '7-Day Free Trial + 50% off courses',
            from: 'Udacity', to: 'me',
            body: `Master the job-ready skills employers want for 50% off.
    But first, try us out for free for 7‍ da‍ys!
    
    Hi Almog,
    We’re offering half off all of our Nanodegree programs and a 7‍-da‍y free trial for new students. WithUdacity, you can increase your earning potential in as little as 3‍ mo‍nths as a part-time student.
    Our programs are created in collaboration with top companies like AWS, BMW, Google, IBM and Microsoft,meaning that you’ll be learning the latest in-demand skills designed for workplace application.
    Enroll no‍w to take advantage of our new student deals! Use coupon code SAVE50 at checkout.
    `,
            isRead: true, sentAt: 1609277825000,isFavorite: false,
            id: '15511339308001234567'
        },
        {
            folder: 'inbox', subject: 'Your purchase from Etsy has been shipped!',
            from: 'Etsy', to: 'me', body: `Here it comes! Your order has been shipped.
    Delivery times are estimated. If you're experiencing difficulty with this order, please contact theseller. 
    message from the seller: "IMPORTANT NOTE: Because of the current world situation, please be aware itwill most likely take more time to arrive to you! (Sometimes even two months!) Please be patient, once Isend the order it´s completely out of my hand. am not responsible for delays or any restrictions youmight have in your country.
        
    Your order was shipped due to the shipping option you chose - untracked, by the postal service. If you´re satisfied with the products, don´t forget to leave a review."        
    `,
            isRead: true, sentAt: 1597519698000,isFavorite: true,
            id: '15511339307001234567'
        },
        {
            folder: 'inbox', subject: 'Have you logged to Facebook recently?',
            from: 'Facebook', to: 'me',
            body: `We noticed a login to your account from a new device. Was this you?
    New login:
    Location- Israel
    Device- Chrome on Windows
    *Location is approximate based on the login's IP address.
    
    If this was you:
    You can ignore this message. There's no need to take any action.
    
    If this wasn’t you:
    Complete these steps now to protect your account.
    Change your password. You'll be logged out of all your active Twitter sessions except the one you'reusing at this time.
    Review the apps that have access to your account and revoke access to any unfamiliar apps.`,
            isRead: true, sentAt: 1551133930500,isFavorite: false,
            id: '115511339305001234567'
        },
        {
            folder: 'sent',
            subject: 'Hey, check out the new update‏',
            from: 'me', to: 'Gali',
            body: `Hey Gali, I pushed a new commit to git, can you check it out?
    let me know what you think about the CSS changes I made on the header and in the email details.
    Thank you!`,
            isRead: true, sentAt: 1614372914000,isFavorite: false,
            id: '15511339308031234567'
        }
    ]
    utilService.saveToStorage(MAILDB_KEY, emailDB)
    return emailDB;
}