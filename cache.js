// ======================================
// AUTOPAY Cache Manager
// ======================================

const Cache = {

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    get(key, fallback = null) {

        try {

            const value = localStorage.getItem(key);

            return value ? JSON.parse(value) : fallback;

        } catch {

            return fallback;

        }

    },

    remove(key) {
        localStorage.removeItem(key);
    },

    clearMerchant() {

        localStorage.removeItem("merchant");
        localStorage.removeItem("merchantUid");
        localStorage.removeItem("merchantTransactions");
        localStorage.removeItem("merchantAccounts");
        localStorage.removeItem("merchantLinks");
        localStorage.removeItem("merchantApiKeys");
        localStorage.removeItem("merchantNotifications");
        localStorage.removeItem("dashboardStats");

    }

};

export default Cache;
