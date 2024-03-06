// This is a type that will show all the properties of an object, no matter how nested they are
export type Prettify<T> = {
  [P in keyof T]: T[P]
} & {}
