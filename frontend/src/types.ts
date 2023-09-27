export type Room =
{
    id: number,
    title: string,
    namespaceID: number,
    isPrivate: boolean,
    history: string[]
}

export type Namespace = 
{
  id: number,
  name: string,
  image: string,
  endpoint: string,
  rooms: Room[]
}