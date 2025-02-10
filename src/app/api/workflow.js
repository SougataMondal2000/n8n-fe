// pages/api/workflows.js
export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://hireagent.app.n8n.cloud/api/v1/workflows",
      {
        headers: {
          "X-N8N-API-KEY": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5NjFkZGM4YS1hMGRmLTRkNWYtYmNiZC03YWJiNWNkZGUzZGQiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzM5MTY5ODIzfQ.YY7IwUVZh9PRp7hhgQy2h93jlVl-77dk_hBYIiitcV0`,
        },
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching workflows" });
  }
}
