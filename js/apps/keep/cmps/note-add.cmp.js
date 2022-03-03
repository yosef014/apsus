export default {
    template: `
        <section class="note-add">
            <div class="input-container">
                <input type="text" :placeholder="inputPlaceholder" v-model="noteTxtData" />
            </div>
            <div class="buttons-container">
                <i class="fa-solid fa-font" @click="changeType('txt')" :class="isActive('txt')" title="Text Note"></i>
                <i class="fa-regular fa-image" @click="changeType('img')" :class="isActive('img')" title="Picture Note"></i>
                <i class="fa-brands fa-youtube" @click="changeType('video')" :class="isActive('video')" title="Youtube Video Note"></i>
                <i class="fa-solid fa-list-check" @click="changeType('todos')" :class="isActive('todos')" title="To-Do List Note"></i>
                <i class="fa-regular fa-circle-check" @click="addNote" title="Add Note"></i>
            </div>
        </section>
    `,
    data() {
        return {
            noteType: 'txt',
            noteTxtData: ''
        }
    },
    methods: {
        changeType(noteType) {
            this.noteType = noteType;
        },
        addNote() { // sould also be done on enter key
            if(!this.noteTxtData) {
                // should emit user msg saying note sould not be empty
                return;
            }
            this.$emit('addNote', {type: `note-${this.noteType}`, data: this.noteTxtData});
            this.noteTxtData = '';
        },
        isActive(value) {
            return {selected: value === this.noteType}
        }
    },
    computed: {
        inputPlaceholder() {
            switch (this.noteType) {
                case 'txt':
                    return 'What\'s on your mind...';
                case 'img':
                    return 'Enter img URL...';
                case 'video':
                    return 'Enter video URL...';
                case 'todos':
                    return 'Enter comma seperated list...';
            }
        }
    }
}
