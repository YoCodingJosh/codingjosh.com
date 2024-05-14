import { useLocationStore } from "~/stores/location";

export default defineNuxtRouteMiddleware(async (to, from) => {
  // call the colo-info API to get the data center the request was routed to
  const { data: colo } = await useFetch<ColoInfoResponse>('/api/colo-info');
  console.log("colo-info response", colo.value);

  // set the data center in the Pinia store
  const locationStore = useLocationStore();
  locationStore.setLocation(colo.value);

  // continue the navigation
  return;
});
