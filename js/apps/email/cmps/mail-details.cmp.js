import { emailService } from '../services/email-service.js';


export default {
    template: `
    <div class="details-container">
    <router-link to="/appMail/inbox"><span class="to-back">↩</span></router-link> 
    <span class="details-title">{{currEmail.subject}}</span>
    <br>
    <section class="details-from">from:{{currEmail.from}}</section>
    <section class="details-from">to:{{currEmail.to}}</section>
    <br>


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