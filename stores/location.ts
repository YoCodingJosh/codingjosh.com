import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useLocationStore = defineStore('locationStore', () => {
  /**
   * The location of the user.
   */
  const location = ref<ColoInfoResponse | null>(null);

  /**
   * Whether the user is in Kansas City.
   */
  const isKansasCity = computed(() => location.value?.colo === 'MCI');

  /**
   * Set the location of the user.
   *
   * @param newLocation - The new location of the user.
   */
  function setLocation(newLocation: ColoInfoResponse | null) {
    location.value = newLocation;
  }

  const footerString = computed(() => {
    const beginning = "Built with ❤️ ";

    if (isKansasCity.value) {
      return beginning + "and served fresh from Kansas City 🍖";
    }

    return beginning + `in Kansas City and served fresh from ${location.value?.city}`;
  });

  return {
    location,
    isKansasCity,
    setLocation,
    footerString,
  };
})
