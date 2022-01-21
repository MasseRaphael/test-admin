import Cookies from "./helpers/Cookies";

export default {
    
    login: ({ username, password}) => {
        const identifier = username
        const request = new Request('https://api.gill-cote-bistro.fr/auth/local', {
            method: "POST",
            body: JSON.stringify({ identifier, password }),
            headers: new Headers({ "Content-type": "application/json" }),
        });
        return fetch(request)
            .then((response) => {
                if (response.status > 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
        })
        .then((response) =>{
            Cookies.setCookie("token", response.jwt, 1);
            Cookies.setCookie("role", response.user.role.name, 1);
        });
    },

    logout: () => {
        Cookies.deleteCookie("token");
        Cookies.deleteCookie("role");
        return Promise.resolver();
    },

    checkAuth: () => {
        return Cookies.getCookie("token") ? Promise.resolve() : Promise.reject();
    },

    checkError: ({ status }) => {
        if(status === 401 || status === 403) {
            Cookies.deleteCookie("token");
            Cookies.deleteCookie("role");
            return Promise.reject();
        }
    },

    getParmission:  () => {
        const role = Cookies.getCookie('role');
        return role ? Promise.resolve(role) : Promise.reject();
    }
};