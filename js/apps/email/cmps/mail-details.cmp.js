import { emailService } from '../services/email-service.js';


export default {
    template: `
    <div class="details-container">
    <router-link to="/appMail/inbox"><span>↩</span></router-link> 
title:{{currEmail.subject}}
from:{{currEmail.from}}
to: {{currEmail.to}}
<p>{{currEmail.body}}</p>

    </div>

            

    `,
      data() {
        return {
            mailsDb: emailService.getEmailsList(),
            currEmail:null

        }
    },
       created() {
        const id = this.$route.params.mailId;
        this.currEmail= this.mailsDb.find((mail)=> mail.id=== id)
        
        
    },
   
}