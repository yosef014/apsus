

export default {
    template: `
  <section class="book-filter">
            <label>
           search:
            <input @input="setFilter" type="text" v-model="filterBy.subject" placeholder="Search...">
            </label>
            <label>
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