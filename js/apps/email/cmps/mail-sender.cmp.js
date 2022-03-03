

export default {
    props: ['isSenderOpen'],
    template: `
   <div class="send-mail-container" :class="openSender()">
                <div class="send-mail-header">         
                    <div class="send-mail-titel">
                        New Message 
                        
                    </div>
                    <div class="close-mail" @click="closeSender()">
                    ✖
                    </div>
                    </div>
                <div class="send-mail-inputs">
                <div class="send-mail-input1">
               <span>  To</span>
            <input  type="text"  placeholder="" >   
            </div>
            <div class="send-mail-input2">
               <span>  Subject</span>
            <input  type="text"  placeholder="" >   
            </div>
          <div class="send-textarea"><textarea rows="14"> </textarea></div>
          <div class="send-footer"> 
          <button @click="closeSender()">send</button>
          <img src="imgs/email/del.png" alt="delete" srcset=""  @click="closeSender()" >
        </div>
        </div>
        
    </div>
  
            

    `,
    data() {
        return {

        }
    },
    created() {
    },

    methods: {
        openSender() {
            // this.isSenderOpen =!this.isSenderOpen
            if (!this.isSenderOpen) return ''
            else return 'open'
        },
        closeSender() {
            this.$emit('closeSender');

        }


    },
    computed: {



    }
}