import axios from 'axios'

import { IFormContent, ILoginResponse } from '@/types'

const apiUrl = import.meta.env.VITE_ANIME_LIST_API

export const login = async (form: IFormContent): Promise<ILoginResponse> => {
  const data: ILoginResponse = await axios.post(`${apiUrl}/login`, form)

  return data
}

export const signup = async (form: IFormContent): Promise<unknown> => {
  const data = await axios.post(`${apiUrl}/signup`, form)

  return data
}
