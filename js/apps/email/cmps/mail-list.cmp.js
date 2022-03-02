

export default {
    props: ['mails'],
    template: `
    <div  v-for="mail in mails" :key="mail.id"
              @click="readStyle(mail.isRead)"
              @mouseover="sayHelow(mail.id)" >
        
        <div class="mail-list"  :class="readStyle(mail.isRead)">   
              <div class="star">
              <img :src="markStarCalss(mail.isFavorite)" alt="favorite marker" srcset="" @click="mail.isFavorite=!mail.isFavorite">
              {{mail.subject}}
             </div>
  
              <div class="delet-btn">
              <img src="../../../../imgs/email/del.png" alt="delete" srcset="" @click="remove(mail.id)" >
              <img :src="readStatusCalss(mail.isRead)" alt="" srcset="" @click="mail.isRead=!mail.isRead">
              <div>
        </div> 
    </div> 

      

      
         
            

    `,
    data() {
        return {
        
        }
    },
    created() {
    console.log(this.mails);
    },

    methods: {
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
        sayHelow(id){
            console.log(id);
        },
       
        remove(id) {
            this.$emit('remove', id);
        },

    },
    computed: {
     
       
        
    }
}