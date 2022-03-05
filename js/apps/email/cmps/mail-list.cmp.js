import { eventBus } from '../../../services/eventBus-service.js';


export default {
    props: ['mails'],
    template: `
    <div  v-for="mail in mails" :key="mail.id" @click="readStyle(mail.isRead)" @mouseover="editBar[mail.id]=true" @mouseleave="editBar[mail.id]=false" >
        
        <div class="mail-list"  :class="readStyle(mail.isRead)"  >   
              <div class="star" >
              <img :src="markStarCalss(mail.isFavorite)" alt="favorite marker" srcset="" @click="mail.isFavorite=!mail.isFavorite">
            </div>
            <div class="subject" @click="mail.isRead=!mail.isRead" @click="redEmail(mail)">
              {{mail.subject}}
              </div>
              <div class="delet-btn" v-if="editBar[mail.id]" >
              <img src="imgs/email/keep.png"  @click="sendMailToKeep(mail)">
              <img src="imgs/email/full-screen.png" @click="mail.isRead=!mail.isRead" @click="redEmail(mail)" >
              <img src="imgs/email/del.png" alt="delete" srcset="" @click="remove(mail.id)" >
              <!-- <div class="action-icons">
                <i class="fa-solid" :class="{'fa-envelope' : !mail.isRead, 'fa-envelope-open': mail.isRead }" @click="mail.isRead=!mail.isRead"></i>
                </div> -->
              <img :src="readStatusCalss(mail.isRead)" alt="" srcset="" @click="mail.isRead=!mail.isRead">
            </div>

              <div class="date-show" v-if="!editBar[mail.id]">
              {{emailDate(mail.sentAt)}}
            </div>
        </div> 
    </div> 

         
            

    `,
    data() {
        return {
            editBar: {
            }
        }
    },
    created() {

    },

    methods: {
        sendMailToKeep(mail){
            eventBus.emit('makeNoteFromMail', mail.body)
            this.$router.push('../appKeep')
        },
        museOn(id) {
            this.editBar[id] = id
        },
        redEmail(mail) {
            this.$router.push(this.$route.path + '/' + mail.id)
        },
        markStarCalss(isFavorite) {
            if (isFavorite) return 'imgs/email/starOn.png'
            return 'imgs/email/starOff.png'
        },
        readStatusCalss(isRead) {
            if (isRead) return 'imgs/email/open-mail.png'
            return 'imgs/email/unread-mail.png'
        },
        readStyle(isRead) {
            if (isRead) return 'readed'
            return 'unread'
        },
        sayHelow(id) {
            console.log(id);
        },

        remove(id) {
            this.$emit('remove', id);
        },
        emailDate(sentAt) {
            const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const d = new Date(sentAt);
            let hodesh = month[d.getMonth()];
            var theSentAt = new Date(sentAt);
            var yy = theSentAt.getFullYear();
            theSentAt = hodesh + '/' + yy;
            return theSentAt

        }

    },
    computed: {
        screenSize() {
            return window.innerWidth
        }


    }
}