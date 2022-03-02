
import { emailService } from '../services/email-service.js';
import { storageService } from '../../../services/async-storage-service.js';
import mailList from '../cmps/mail-list.cmp.js'

const MAILDB_KEY = 'MailDb'

export default {
    template: `
      <div class="table-mail-container">
        <table>    
          <mail-list :mails="mailsDb" @remove="removeMail"/>

</table>
        
</div>
    `,

     components: {
       mailList,
    },

    data() {
        return {
            mailsDb: emailService.getEmailsList(),
            isTrShow : false
        }
    },
    methods: {
        removeMail(id){
            storageService.remove(MAILDB_KEY, id)
            .then(() => {
                const idx = this.mailsDb.findIndex((mail) => mail.id === id);
                this.mailsDb.splice(idx, 1);
            })
        },
        readed(mail){
            mail.isRead = !mail.isRead
            storageService.put(MAILDB_KEY,mail)
        },
       
       
      
        

    },
    computed: {
        
    }
}