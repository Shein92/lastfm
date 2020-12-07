import axios from 'axios'

const settings = {
    // withCredentials: true,
    // headers: {
    //     "API-KEY": "b1e38d8823744279011b12c498825595"
    // }
}

const APIkey = "b1e38d8823744279011b12c498825595";

const instance = axios.create({
    baseURL: 'http://ws.audioscrobbler.com/2.0/',
    ...settings
});

export const API = {
    getPopularSongs() {
        return instance.get(`?method=chart.gettoptracks&api_key=${APIkey}&format=json`)
    },
    getInfoAboutArtist(name: string) {
        return instance.get(`?method=artist.getinfo&artist=${name}&api_key=${APIkey}&format=json`)
    },
    searchTrack(nameOfTrack: string) {
        return instance.get(`?method=track.search&track=${nameOfTrack}&api_key=${APIkey}&format=json`)
    }
}