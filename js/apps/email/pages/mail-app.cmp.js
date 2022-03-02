
import { utilService } from '../../../services/util-service.js';
import { emailService } from '../services/email-service.js';
import { storageService } from '../../../services/async-storage-service.js';
const MAILDB_KEY = 'MailDb'

export default {
    template: `
      <div class="table-mail-container">
        <table>

        <tr>
            <th>star</th>
            <th>tiitle</th>
            <th>options</th>
           
          </tr>
            <!-- the tr line -->
          <tr v-for="mail in mailsDb" :key="mail.id" :class="readStyle(mail.isRead)"
           @click="readStyle(mail.isRead)"
            @mouseover="sayHelow(mail.id)" >

                <!-- star marker row -->
            <th><img :src="markStarCalss(mail.isFavorite)" alt="favorite marker" srcset="" @click="mail.isFavorite=!mail.isFavorite"></th> 

            <!-- mail subject -->
            <th>{{mail.subject}}</th>

              <!-- delete and readed btns -->
            <th>
             <img src="../../../../imgs/email/del.png" alt="delete" srcset="" @click="remove(mail.id)" >
             <img :src="readStatusCalss(mail.isRead)" alt="" srcset="" @click="mail.isRead=!mail.isRead">
            </th> 
        
           
          </tr>

        </table>
</div>
    `,
    data() {
        return {
            mailsDb: emailService.getEmailsList()
        }
    },
    methods: {
        remove(id){
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
        readStyle(isRead) {
            if (isRead) return 'readed'
            return 'unread'
        },
        markStarCalss(isFavorite){
            if (isFavorite)   return '../../../../imgs/email/starOn.png'
            return '../../../../imgs/email/starOff.png'
        },
        readStatusCalss(isRead){
            if (isRead)   return '../../../../imgs/email/open-mail.png'
            return '../../../../imgs/email/unread-mail.png'
        },
        sayHelow(id){
            console.log(id);
        }

    },
    computed: {
        
    }
}