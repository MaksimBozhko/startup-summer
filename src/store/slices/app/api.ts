import { instance } from "../../../api/api"

export const authAPI = {
  me() {
    return instance.get("oauth2/password", {
      params: {
        login: "sergei.stralenia@gmail.com",
        password: "paralect123",
        client_id: 2356,
        client_secret: "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
        hr: 0
      }
    })
  },
  refresh(refresh_token: string) {
    return instance.get("oauth2/refresh_token/", {
      params: {
        refresh_token,
        client_id: 2356,
        client_secret: "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      }
    })
  },
}