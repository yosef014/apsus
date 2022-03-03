

export default {
    template: `
  <section class="book-filter">
                <button>  <img src="../../../../imgs/email/search.png" ></button>
            <input @input="setFilter" type="text" v-model="filterBy.subject" placeholder="Search..." >
            </label>
            
        </section>         
        <select id="all" @change="setFilter()" v-model="filterBy.byRead">
            <option value="" >Read/Unread</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
</select>

    `,
    data() {
        return {
            filterBy: {
                subject: '',
                byRead: '',
            }
        
        }
    },
    created() {
    },

    methods: {
        sayhai(){
            console.log("hiiiii",this.filterBy );
        },
        
        setFilter() {
            this.$emit('filtered', this.filterBy);
        },
    },
    computed: {
     
       
        
    }
}