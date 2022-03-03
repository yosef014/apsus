
import mailList from '../cmps/mail-list.cmp.js'

export default {
    props: ['mailsDb'],
    template: `
     
  <mail-list :mails="mailsForDisplay" @remove="removeMail"/>    `,
    data() {
        return {
            mailsDb :this.mailsDb
        
        }
    },
    components: {
        mailList,

       
     },
    created() {
    },

    methods: {
        redEmail(mail){
            this.$router.push(this.$route.path + '/' + mail.id)
        },
        markStarCalss(isFavorite){
            if (isFavorite)   return '../../../../imgs/email/starOn.png'
            return '../../../../imgs/email/starOff.png'
        },
        readStatusCalss(isRead){
            if (isRead)   return '../../../../imgs/email/open-mail.png'
            return '../../../../imgs/email/unread-mail.png'
        },
        readStyle(isRead) {
            if (isRead) return 'readed'
            return 'unread'
        },
             
        remove(id) {
            this.$emit('remove', id);
        },

    },
    computed: {
        mailsForDisplay() {
            // if (!this.filterBy) return this.mailsDb
            // const regex = new RegExp(this.filterBy.subject, 'i');
            return this.mailsDb.filter(mail => mail.folder =='sent');
        }
       
        
    }
}