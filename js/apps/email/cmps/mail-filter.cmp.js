

export default {
    template: `
  <section class="book-filter">
                <button>  <img src="../../../../imgs/email/search.png" ></button>
            <input @input="setFilter" type="text" v-model="filterBy.subject" placeholder="Search..." >
            </label>
           
        </section>         
    `,
    data() {
        return {
            filterBy: {
                subject: '',
            }
        
        }
    },
    created() {
    },

    methods: {
        
        setFilter() {
            this.$emit('filtered', this.filterBy);
        },
    },
    computed: {
     
       
        
    }
}