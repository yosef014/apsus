
import mailList from '../cmps/mail-list.cmp.js'
import { emailService } from '../services/email-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const MAILDB_KEY = 'MailDb'

export default {
    props:['mailsDb'],
    template: `
            <mail-list :mails="mailsDb" @remove="remov"/>
    `,

     components: {
       mailList,
      
    },

    data() {
        return {

        }
    },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
     
       
       
       
      
        

    },
    computed: {
        mailsForDisplay() {
            if (!this.filterBy) return this.mailsDb
            const regex = new RegExp(this.filterBy.subject, 'i');
            console.log(this.mailsDb.filter(mail => regex.test(mail.subject)));
            return this.mailsDb.filter(mail => regex.test(mail.subject));
        }
        
    }
}