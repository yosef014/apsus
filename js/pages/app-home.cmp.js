export default {
    template: `
    <div class="home-page-body">
        <section class="app-home">
        <div class="section">
        <h1>what is Appsus?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est culpa soluta veniam ullam molestias expedita ex, odio maiores. Perferendis, velit.</p>
        <div class="home-apps-box">
                   
                <img src="imgs/gmail.svg" @click="this.$router.push('/appMail/inbox')">
               <img src="imgs/keep.svg" @click="this.$router.push('/appKeep')">
               </div>
               </div>
        </section>
        </div>

    `,
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        
    }
}