import axios from "axios";

export const instance = axios.create({
  headers: {
    "x-secret-key": "GEU4nvd3rej*jeh.eqp"
  }
});

export const authAPI = {
  login() {
    return instance.get("https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password", {
      params: {
        login: "sergei.stralenia@gmail.com",
        password: "paralect123",
        client_id: 2231,
        client_secret: "v3.r.137440105.399b9c5f19384345afe0ad0339e619e71c66af1d.800f8642a38256679e908c370c44267f705c2909",
        hr: 0
      }
    });
  },
};

export const vacancyAPI = {
  vacancy(arg: string) {
    return instance.get("https://startup-summer-2023-proxy.onrender.com/2.0/vacancies", {
      headers: {
        "X-Api-App-Id": "v3.r.137440105.399b9c5f19384345afe0ad0339e619e71c66af1d.800f8642a38256679e908c370c44267f705c2909"
      },
      params: {

      }
    });
  },
};

export const cataloguesAPI = {
  catalogues() {
    return instance.get("https://startup-summer-2023-proxy.onrender.com/2.0/catalogues", {
      params: {
        login: "sergei.stralenia@gmail.com",
        password: "paralect123",
        client_id: 2231,
        client_secret: "v3.r.137440105.399b9c5f19384345afe0ad0339e619e71c66af1d.800f8642a38256679e908c370c44267f705c2909",
        hr: 0
      }
    });
  },
};