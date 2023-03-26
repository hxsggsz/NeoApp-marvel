import { api } from "../api/api";
import { renderHook, waitFor } from "@testing-library/react";
import { useGetAllComics } from "./useGetAllComics";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();
export const wrapper = (props: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {props.children}
  </QueryClientProvider>
)

describe('useUser hook', () => {
  it('should get the user', async () => {

    const apiGetSpy = jest.spyOn(api, 'get').mockResolvedValue({ data: "" });

    const { result } = renderHook(() => useGetAllComics(1), { wrapper });
    // await waitFor(() => expect(result.current.data).toBe(mockNewUser));
    // await waitFor(() => expect(apiGetSpy).toBeCalledWith('/GetUser/1'));
  });
});