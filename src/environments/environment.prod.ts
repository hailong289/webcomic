export const environment = {
  production: true,
  bashUrl: 'http://comicany.herokuapp.com',


  get domainUrl() {
      return this.bashUrl
  },

  get apiAdminURL() {
      return this.domainUrl + '/api/admin'
  },

  get axiosConfig() {
      return {
          headers: { 'Content-Type': 'multipart/form-data' },
          baseURL: this.apiAdminURL,
      }
  },

  get headersJson() {
      return {
          headers: { 'Content-Type': 'application/json' },
          baseURL: this.apiAdminURL,
      }
  },
};
