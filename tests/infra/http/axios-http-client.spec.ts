
import axios from "axios"
import { AxiosHttpClient } from "@/infra/http/axios-http-client/axios-http-client"
import { mockAxios } from "@/tests/infra/mock/mock-axios"
import { mockPostRequest } from "@/tests/data/mock/mock-http-post"

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient,
  mockedAxios: jest.Mocked<typeof axios>
}
const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values (URL, verb and body) ', async  () => {
    const { sut, mockedAxios } = makeSut()
    const mockRequest = mockPostRequest()
    await sut.post(mockRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(mockRequest.url, mockRequest.body)
  })
  
  test('Should return the correct statusCode and body',  () => {
    const { sut , mockedAxios} = makeSut()
    const promise =  sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })

})
