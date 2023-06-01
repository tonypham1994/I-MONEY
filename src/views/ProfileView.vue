<template>
  <!-- start info -->
  <div class="row">
    <div class="container mx-auto p8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            class="w-full h-auto object-cover"
            src="https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png"
            alt="avata"
          />
        </div>

        <div v-if="user" class="font-bold text-2xl text-blue-600">
          {{ user.displayName }}
          <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- start menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="flex flex-col">
        <div>
          <h3 class="font-bold text-xl text-blue-600">General</h3>
        </div>
        <div>
          <ul>
            <li
              class="last:text-red-500"
              v-for="profileOption in profileOptions"
              :key="profileOption.name"
            >
              <router-link
                :to="profileOption.route"
                class="flex items-center py-3 justify-between"
              >
                <div class="flex">
                  <i class="text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico-arrow-right"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PROFILE_OPTIONS } from "@/constants";
import { useUser } from "@/composables/useUser";
import { reactive } from "vue";
export default {
  setup() {
    const profileOptions = reactive(PROFILE_OPTIONS);
    const { getUser } = useUser();
    const { user } = getUser();

    console.log(user.displayName);
    return { profileOptions, user };
  },
};
</script>
