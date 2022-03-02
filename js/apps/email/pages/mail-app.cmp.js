
import { emailService } from '../services/email-service.js';
import { storageService } from '../../../services/async-storage-service.js';
import mailList from '../cmps/mail-list.cmp.js'
import mailFilter from '../cmps/mail-filter.cmp.js'


const MAILDB_KEY = 'MailDb'

export default {
    template: `
           <mail-filter @filtered="setFilter"/>
           <br>
           <div class="main-container">
                <div class="aside-container">
                   <router-link to="/appMail/">all</router-link> 
                   <router-link to="/appMail/inbox">Inbox     2</router-link> 
                   <router-link to="/appMail/">Sent</router-link> 
                   <router-link to="/appMail/">Favorite</router-link> 
                   <router-link to="/appMail/">Trash</router-link> 
                   <router-link to="/appMail/">Drafts</router-link> 
                 </div>
                 <div class="mail-container">
                   <router-view :mailsDb="mailsForDisplay" @remove="removeMail"/>

            <!-- <mail-list :mails="mailsForDisplay" @remove="removeMail"/> -->
                </div>
       
          </div>



    `,

     components: {
       mailList,
       mailFilter,
      
    },

    data() {
        return {
            mailsDb: emailService.getEmailsList(),
            isTrShow : false,
            filterBy: null

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
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
       
       
       
      
        

    },
    computed: {
        mailsForDisplay() {
            if (!this.filterBy) return this.mailsDb
            const regex = new RegExp(this.filterBy.subject, 'i');
            return this.mailsDb.filter(mail => regex.test(mail.subject));
        }
        
    }
}