const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
    console.log("API Client initialized with baseUrl:", this.baseUrl); // 👈 DEBUG
  }

  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    console.log("Fetching:", url); // 👈 DEBUG

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
      });

      console.log("Response status:", response.status); // 👈 DEBUG

      if (!response.ok) {
        throw new Error(
          `API Error: ${response.status} - ${response.statusText}`
        );
      }

      return response.json();
    } catch (error) {
      console.error("Fetch failed:", error);
      throw error;
    }
  }
}

export const apiClient = new ApiClient();
