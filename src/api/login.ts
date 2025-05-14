import { User } from "@/interfaces/user";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/lib/axios";
import { Token } from "@/interfaces/token";

interface ApiResponse {
    user: User;
    token: Token;
    message: string;
}

export const useLogin = (token: string) => {
    return useQuery({
        queryKey: ["login", token],
        queryFn: async () => {
            const response = await axiosInstance.post<ApiResponse>(`/trenalyze/login`, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            return response.data;
        },
        refetchOnWindowFocus: false,
        retry: false,
    });
};