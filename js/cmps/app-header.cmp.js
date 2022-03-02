export default {
    template: `
        <header class="app-header">
            <div class="app-header-container main-layout">
                <div class="logo">
                    <h3>Books</h3>
                </div>
                <nav class="nav-bar">
                    <!-- <router-link to="/">Home</router-link> -->
                    <router-link to="/mailApp">Emails</router-link>
                    <router-link to="/keepApp">Notes</router-link>
                    <!-- <router-link to="/about">About</router-link> -->
                </nav>
            </div>
        </header>
    `
}