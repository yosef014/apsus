
import mailList from '../cmps/mail-list.cmp.js'


const MAILDB_KEY = 'MailDb'

export default {
    props:['mailsDb'],
    template: `
    
            <mail-list :mails="mailsForDisplay" @remove="remov"/>
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
            let inboxMails= this.mailsDb.filter(mail => mail.folder =='inbox')
            return inboxMails
        }
        
    }
}