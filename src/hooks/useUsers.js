import axios from 'axios';
import { onMounted, ref, watch } from 'vue';

const useUsers = (count, page) => {
  const users = ref([]);
  const totalPages = ref(0);
  const isLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, {
        params: {
          count: count,
          _page: page.value
        }
      });
      totalPages.value = Math.ceil(100 / count);
      users.value = [...users.value, ...response.data.users]
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }
  onMounted(fetching)
  watch(page, fetching)
  return {
    users, isLoading, totalPages
  }
}
export default useUsers;