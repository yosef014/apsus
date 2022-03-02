export default {
    template: `
        <header class="app-header">
            <div class="app-header-container main-layout">
                <div class="logo">
                    <h3>Appsus</h3>
                </div>
                <nav class="nav-bar">
                    <router-link to="/appMail">Emails</router-link>
                    <router-link to="/appKeep">Notes</router-link>
                </nav>
            </div>
        </header>
    `
}