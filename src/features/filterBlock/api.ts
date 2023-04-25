import { instance } from "../../api/api"

export const cataloguesAPI = {
  catalogues() {
    return instance.get("https://startup-summer-2023-proxy.onrender.com/2.0/catalogues")
      .then(res => res.data.map((el: any) => ({ key: el.key, title_rus: el.title_rus })))
  }
}