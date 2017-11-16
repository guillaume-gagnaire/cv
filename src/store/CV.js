export default {
    state: {
        show: false,
        left: {
            badge: false,
            title: '',
            legend: ''
        },
        actions: [],
        more: [],
        right: {
            badge: false,
            title: '',
            legend: ''
        }
    },
    reset () {
        this.state.show = false;

        this.state.left.badge = false;
        this.state.left.title = '';
        this.state.left.legend = '';

        this.state.actions.splice(0, this.state.actions.length);
        this.state.more.splice(0, this.state.more.length);

        this.state.right.badge = false;
        this.state.right.title = '';
        this.state.right.legend = '';
    },
    show () {
        this.state.show = true
    },
    hide () {
        this.state.show = false
    },
    toggle () {
        this.state.show = !this.state.show
    },
    setLeftContent (badge, title, legend) {
        this.state.left.badge = badge;
        this.state.left.title = title;
        this.state.left.legend = legend;
    },
    setRightContent (badge, title, legend) {
        this.state.right.badge = badge;
        this.state.right.title = title;
        this.state.right.legend = legend;
    },
    addAction (icon, name, callback) {
        this.state.actions.push({
            icon: icon,
            name: name,
            callback: callback
        })
    },
    addMore (icon, name, callback) {
        this.state.more.push({
            icon: icon,
            name: name,
            callback: callback
        })
    }
};