import { UserDataTypes, UserListTypes } from "../../Types";
import axiosInstance from "../../Axios";

export class UserServices {
  static async fetchUserList(
    per_page: number,
    page: number
  ): Promise<{ data: UserListTypes[]; total_pages: number }> {
    const response = await axiosInstance.get("/users", {
      params: { per_page, page },
    });

    return {
      data: response.data.data,
      total_pages: response.data.total_pages,
    };
  }

  static async updateUser(id: number, userData: UserDataTypes) {
    const response = await axiosInstance.put(`/users/${id}`, userData);
    return response.data;
  }

  static async createUser(userData: UserDataTypes) {
    const response = await axiosInstance.post(`/users`, userData);
    return response.data;
  }

  static async deleteUser(id: number) {
    const response = await axiosInstance.delete(`/users/${id}`);
  }
}
