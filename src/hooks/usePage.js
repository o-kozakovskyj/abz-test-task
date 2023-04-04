import { ref } from 'vue';

const UsePage = () => {
  const page = ref(1);
  const nextPage = () => {
    page.value++;
  }
  return {
    page, nextPage
  }
}
export default UsePage;