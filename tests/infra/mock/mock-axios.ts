import axios from "axios"
import { HttpPostParams } from "@/data/protocols/http"

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue({
    data: 'any_data',
    status: 'any_code'
  })
  return mockedAxios
}

