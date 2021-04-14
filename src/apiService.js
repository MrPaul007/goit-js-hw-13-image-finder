const ref = {
    API_KEY: '20735432-c0677fc566250abe2f2f1af55',
    URL: `https://pixabay.com/api/`,
  
    page: 0,
    search: '',
  
    fetchApi(name) {
      return fetch(
        `${this.URL}/?image_type=photo&orientation=horizontal&q=${name}&page=${this.page}&per_page=12&key=${this.API_KEY}`,
      ).then(res => res.json());
    },
  };
  
  export default ref;