const { hostname } = window.location;

const Config = {
    BASE_URL: true || process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:5000/api/',
};

export default Config;
