export default {
    template: `
        <header>
             <div class="logo"> Appsus</div>
             <div class="nav-bar">
                 <img src="../../imgs/apps.svg" @click="menuSwich()">
                </div>
                
            </header>
            <div class="nav-bar-box" :class="menuClass()">
            <img src="../../imgs/gmail.svg" @click="this.$router.push('/appMail/inbox')"@click="menuSwich()">
            <img src="../../imgs/keep.svg" @click="this.$router.push('/appKeep')"@click="menuSwich()">
                </div>
            `,
    data() {
        return {
            isMenuOpen: false,

        }
    },

    methods: {
        menuSwich() {
            this.isMenuOpen = !this.isMenuOpen
        },

        menuClass() {
            if (!this.isMenuOpen) return ''
            else return 'nav-bar-box-open'
        }
    },

}
