
import { utilService } from '../../../services/util-service.js';
import { emailService } from '../services/email-service.js';
import { storageService } from '../../../services/async-storage-service.js';
const MAILDB_KEY = 'MailDb'

export default {
    template: `
      <div class="table-mail-container">
        <table>

        <tr>
            <th style="width:90px">choose</th>
            <th>star</th>
            <th>from</th>
            <th>tiitle</th>
            <th>date</th>
          </tr>
          <tr v-for="mail in mailsDb" :key="mail.id" :class="readStyle(mail.isRead)" @click="readStyle(mail.isRead)" >
            <th><button @click="remove(mail.id)">del</button> <button @click="readed(mail)">readed</button></th>
            <th>{{mail.from}}</th>
            <th>>{{mail.subject}}</th>
            <th>tiitle</th>
            <th>date</th>
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
            if (isRead) return ''
            return 'unread'
        },

    },
    computed: {
        
    }
}