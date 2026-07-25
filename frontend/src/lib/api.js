import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "";
export const API = `${BACKEND_URL}/api`;
export const api = axios.create({ baseURL: API });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("sk_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const CONTACT = {
  phone: "+91 93130 82732",
  phoneRaw: "+919313082732",
  whatsapp: "919313082732",
  email: "sklandscaping.in@gmail.com",
  address: "Anand, Gujarat, India",
};

export const waLink = (msg = "Hi SK Landscaping, I'd like to know more about your services.") =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;

export const submitLead = async (formData) => {
  const response = await api.post('/leads', formData);
  return response.data;
};
