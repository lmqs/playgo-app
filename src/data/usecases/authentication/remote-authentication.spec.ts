import { HttpPostClient } from "@/data/protocols/http/http-post-client"
import { RemoteAuthentication } from "./remote-authentication"
import { HttpPostClientSpy } from "@/data/test/mock-http-client"
import { mockAuthentication } from "@/data/domain/test/mock-authentication"

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy:HttpPostClientSpy
}
const makeSut = (url: string = 'any_url') : SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut, httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Should call HttpPostClient with correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.body).toEqual(mockAuthentication())
  })
})