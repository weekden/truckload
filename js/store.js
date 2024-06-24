// Создаем временное хранилище
const createStore = (() => {
    let instance;

    function createInstance() {
        const data = {};
        // Добавить
        function set(key, value) {
            data[key] = value;
        }
        // Добавить объект
        function setAll(obj) {
            Object.keys(obj).forEach((key) => {
                data[key] = obj[key];
            });
        }
        // Получить
        function get(key) {
            return data[key];
        }
        // Получить объект
        function getAll() {
            return { ...data };
        }
       
        // Удалить
        function remove(key) {
            delete data[key];
        }

        return {
            set,
            get,
            getAll,
            setAll,
            remove,
        };
    }

    return () => {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
    };
})();

const store = createStore();
