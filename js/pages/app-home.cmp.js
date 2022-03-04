export default {
    template: `
        <section class="app-home">



        <div class="section">
        <h1>what is Apsus?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est culpa soluta veniam ullam molestias expedita ex, odio maiores. Perferendis, velit.</p>
        <div class="home-apps-box">
                   
                <img src="imgs/gmail.svg" @click="this.$router.push('/appMail/inbox')">
               <img src="imgs/keep.svg" @click="this.$router.push('/appKeep')">
               </div>

        <div class="video-container">
            <div class="color-overlay"></div>
            <video autoplay loop muted>
                <source src="imgs/video.mp4" type="video/mp4">
            </video>
        </div>

    </div>
    <div style="height:400px;width:100%">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quod soluta natus. Magni tempora animi illo ea accusamus ex deserunt odio facere deleniti molestiae qui eaque in illum praesentium sunt iste accusantium nobis repellat aspernatur alias, architecto consectetur voluptate dolore! Saepe, enim rem nam dolorem tempore blanditiis perspiciatis repellat architecto.</p>
    </div>


            <!-- <div class="home-main-container">

            <div class="vide-bg">
            <video autoplay loop muted>
                <source src="imgs/video.mp4" type="video/mp4">
            </video>
            </div> 
            
            <div class="home-apps-box">
                    <h1>what is Apsus?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est culpa soluta veniam ullam molestias expedita ex, odio maiores. Perferendis, velit.</p>
                <img src="imgs/gmail.svg" @click="this.$router.push('/appMail/inbox')">
               <img src="imgs/keep.svg" @click="this.$router.push('/appKeep')">
               </div>

            </div> -->
        </section>
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