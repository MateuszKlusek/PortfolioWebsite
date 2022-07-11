var axiosURL = "";
process.env.NODE_ENV !== 'production' ? axiosURL = "http://localhost:5003/api" : axiosURL = "https://mateuszklusek.com/api"

export { axiosURL };
