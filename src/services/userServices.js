const userServices = {
    getUsers: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        return users;
    },
    getUser: async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await response.json();

        return user;
    }
}

export default userServices;