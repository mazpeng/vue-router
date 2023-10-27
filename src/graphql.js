// Import library Axios
import axios from "axios";

// Fungsi untuk melakukan login dan mendapatkan token
async function loginAndGetToken() {
  try {
    // Kirim permintaan GraphQL untuk login
    const response = await axios.post(
      "https://oriensstaging.oriens.my.id/graphql",
      {
        query: `
        mutation {
          login(email: "hutao@gmail.com", password: "hutaodayo1X") {
            token
          }
        }
      `,
      }
    );

    // Dapatkan token dari respons
    const token = response.data.data.login.token;

    return token;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Tangani error sesuai kebutuhan Anda
  }
}

{
  /* <script>
import axios from "axios";

export default {
  data() {
    return {
      jobs: null,
    };
  },
  mounted() {
    const url = "https://oriensstaging.oriens.my.id/graphql";
    const headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwicGhvbmUiOiI2MjgyMjYyODg4ODE4IiwiaWF0IjoxNjk4MzAyOTk2LCJleHAiOjE2OTgzODkzOTZ9.CRl7NVx_DIbPyewAlalyD8bXXD9CZOeao-WEa_dzEx8",
    };
    const query = `
      {
        jobs(job_type_id: 494, workspace_id: 3) {
          count
          jobs {
            id
            name
            description
            strip_description
          }
        }
      }
    `;

    axios
      .post(url, { query }, { headers })
      .then((response) => {
        this.jobs = response.data.data.jobs;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
};
</script> */
}
