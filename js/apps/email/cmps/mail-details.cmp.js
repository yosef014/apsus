import { emailService } from '../services/email-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const MAILDB_KEY = 'MailDb'


export default {
    template: `


  <div class="details-container">
    <router-link to="/appMail/inbox"><span class="to-back">↩</span></router-link>
    <span class="details-title">{{currEmail.subject}}</span>
    <br>
    <section class="details-from">from:{{currEmail.from}}</section>
    <section class="details-from">to:{{currEmail.to}}</section>
    <br>
move

    <p>{{currEmail.body}}</p>
    <br>
    <div class="details-options">
    <img src="imgs/email/keep.png">
    <img src="imgs/email/del.png" @click="removeMail(currEmail.id)">
    </div>

</div>
    

            

    `,
      data() {
        return {
            mailsDb: emailService.getEmailsList(),
            currEmail:null

        }
    },
    methods: {
        removeMail(id) {
            storageService.remove(MAILDB_KEY, id)
                .then(() => {
                    const idx = this.mailsDb.findIndex((mail) => mail.id === id);
                    this.mailsDb.splice(idx, 1);
                    this.$router.push('/appMail/inbox')

                })
        },

    },
       created() {
        const id = this.$route.params.mailId;
        this.currEmail= this.mailsDb.find((mail)=> mail.id=== id)
        
        
    },
   
}