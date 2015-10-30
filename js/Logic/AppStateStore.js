class AppStateStore {

    constructor(opts) {
        let store = {};
        this.createNewSubstore = function(name, substore) {
            store[name] = _.clone(substore, true);
            return store[name];
        };
        this.getSubstore = function(name) {
            return store[name];
        };
    }



}
