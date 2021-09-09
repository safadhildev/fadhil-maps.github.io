import axios from "axios";
const AUTOCOMPLETE_URL = process.env.REACT_APP_API_AUTOCOMPLETE_URL;
const GEOCODE_URL = process.env.REACT_APP_API_GEOCODE_URL;
const PLACE_URL = process.env.REACT_APP_API_PLACE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default class DataService {
  static async getPlaces(search) {
    try {
      return axios.get(`${AUTOCOMPLETE_URL}?key=${API_KEY}`, {
        params: {
          input: search,
        },
      });
    } catch (e) {
      return console.log("get places error", e);
    }
  }

  static async getPlacesByPosition({ lat, lng }) {
    try {
      return axios.get(`${this.DOMAIN}`, {
        params: {
          location: `${lat}${lng}`,
        },
      });
    } catch (e) {
      return console.log("get places error", e);
    }
  }

  static async getPlaceLocation(id) {
    console.log({ id });
    try {
      return axios.get(`${GEOCODE_URL}?key=${API_KEY}`, {
        params: {
          place_id: id,
        },
      });
    } catch (err) {
      return console.log("get place by location :: ", err);
    }
  }
}
