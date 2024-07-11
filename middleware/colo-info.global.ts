import { useLocationStore } from "~/stores/location";

export default defineNuxtRouteMiddleware(async (to, from) => {
  // call the colo-info API to get the data center the request was routed to
  const colo = await $fetch<ColoInfoResponse>('/api/colo-info');

  // set the data center in the Pinia store
  const locationStore = useLocationStore();
  locationStore.setLocation(colo);

  // continue the navigation
  return;
});
