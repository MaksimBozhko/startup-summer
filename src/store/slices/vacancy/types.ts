export type ResponseVacanciesType = {
  objects: ItemType[]
  total: number
}

export type ItemType = {
  id: number
  profession: string
  town: string
  catalogues: { title: string }[]
  type_of_work: string
  payment_to: number
  payment_from: number
  currency: string
  firm_activity: string
  vacancyRichText: string
  isSelected: boolean
}

export type RequestVacanciesType = Partial<{
  keyword: string
  payment_from: number
  payment_to: number
  catalogues: number
  count: number
  page: number
}>

export type ResponseVacancyType = {
  id: number
  profession: string
  town: {title: string}
  catalogues: { title: string }[]
  type_of_work: {title: string}
  payment_to: number
  payment_from: number
  currency: string
  firm_activity: string
  vacancyRichText: string
}