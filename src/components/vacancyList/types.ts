export type ResponseVacanciesType = {
  objects: ItemType[]
  total: number
}

export type ItemType = {
  id: number
  profession: string
  firm_name: string
  town: { title: string }
  catalogues: { title: string }[]
  type_of_work: { title: string }
  payment_to: number
  payment_from: number
  currency: string
}

export type RequestVacanciesType = Partial<{
  keyword: string
  payment_from: number
  payment_to: number
  catalogues: number
}>