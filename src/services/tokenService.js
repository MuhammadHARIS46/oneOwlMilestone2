
// const TokenService = () => {

//     const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjlhNTE5MDc0NmU5M2JhZTI0OWIyYWE3YzJhYTRlMzA2M2UzNDFlYzciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoic3VwZXJhZG1pbiIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9vd3QtY2xvdWQtZGV2IiwiYXVkIjoib3d0LWNsb3VkLWRldiIsImF1dGhfdGltZSI6MTY5NjUyNDQ2NSwidXNlcl9pZCI6Ikp1U3o5TDB5czZadWZPdzd1NllpckpZcE5iaTIiLCJzdWIiOiJKdVN6OUwweXM2WnVmT3c3dTZZaXJKWXBOYmkyIiwiaWF0IjoxNjk2NTI0NDY1LCJleHAiOjE2OTY1MjgwNjUsImVtYWlsIjoiYWRtaW5AZGV2LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkBkZXYuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.R9R8vgeoP2aYIOCoPVoVWBzFCbWuqP9_esR1SUv2rNyxcJ8x4oBAHXTi_fArXnahL3lH1VL0oFKwTE3_WrCveE6dzgbDe9utPQbuBToCxul-kwMPz3Yyi8tQCJxklOU5zWwvPczaq6iBWNjHGswzSLx_5m99x5AF8NTQQsUvXzeSMgIa_EmGkytOqbS5aRxBEeGQK8WcNvJ1WeSw_zfdye79i9AMQVKVEjVGU6qA3FQi6qVFrIz_zFJgTtlh3hOTH9CbDfVV0bb-y2PAo3DyDC4500p8wnUShFNkFzwNIrb4Y8lYhzrh73kqkR9gW1vR1uMLDqQIJxiFV1P4ayL9OA';



//     return {token}
// }

// export default TokenService;





const getTokenFromLocalStorage = () => {
    const token = localStorage.getItem('token'); 
    // let newToken = token?.slice(1, -1);
    return token || null;
};

const setTokenInLocalStorage = (token) => {
    localStorage.setItem('token', token); // Replace with your own storage method
};

const TokenService = () => {
    let token = getTokenFromLocalStorage();

    const updateToken = (newToken) => {
        token = newToken;
        setTokenInLocalStorage(newToken);
    };

    return { token, updateToken };
};

export default TokenService;
