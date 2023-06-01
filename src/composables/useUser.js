import { ref } from "vue";
import { auth } from "@/firebase/config";

const user = ref(auth.currentUser);

auth.onAuthStateChanged(function (_user) {
  if (_user) {
    user.value = _user;
  }
});
function getUser() {
  return { user };
}

export function useUser() {
  return { getUser };
}
