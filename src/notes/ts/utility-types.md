---
layout: NoteLayout
order: 10
---

# 常用操作类型

- `Partial<T>`：将类型 T 的所有属性设置为可选。
- `Required<T>`：将类型 T 的所有属性设置为必填。
- `Readonly<T>`：将类型 T 的所有属性设置为只读。
- `Pick<T, K>`：从类型 T 中选择属性 K 来创建新类型。
- `Omit<T, K>`：从类型 T 中排除属性 K 来创建新类型。
- `Exclude<T, U>`：从联合类型 T 中排除可以赋值给 U 的部分。
- `Extract<T, U>`：从联合类型 T 中提取可以赋值给 U 的部分。
- `NonNullable<T>`：从类型 T 中排除 null 和 undefined。
- `Record<K, T>`：创建一个对象类型，其属性键为类型 K，属性值为类型 T。
- `Parameters<T>`：获取函数类型 T 的参数类型。
- `ReturnType<T>`：获取函数类型 T 的返回类型。
- `InstanceType<T>`：获取构造函数类型 T 的实例类型。
- `NoInfer<T>`：阻止对所包含类型的推断。除了阻止推断之外，`NoInfer<Type>` 与 Type 相同。

## Partial

将传入的类型的所有属性设置成可选。

```typescript
interface TestData {
  name: string
  sex: string
}

type PartialTestData = Partial<TestData>

// 输出
type PartialTestData = {
  name?: string
  sex?: string
}
```

## Required

将传入的类型的所有属性设置成必填。

```typescript
interface TestData {
  name?: string
  sex?: string
}

type RequiredTestData = Required<TestData>

// 输出
type RequiredTestData = {
  name: string
  sex: string
}
```

## Readonly

将传入的类型的所有属性设置成只读，如果尝试修改属性值，TS则会报错：无法为“属性名”赋值，因为它是只读属性。

```typescript
interface TestData {
  name: string
  sex: string
}

type ReadonlyTestData = Readonly<TestData>

// 输出
type ReadonlyTestData = {
  readonly name: string
  readonly sex: string
}
```

## Pick

从类型 T 中选择属性 K 来创建新类型。

```typescript
interface TestData {
  name: string
  sex: string
}

type PickTestData = Pick<TestData, 'name'>

// 输出
type PickTestData = {
  name: string
}
```

比如有个文章详情的接口，在编辑的时候，只需要更新文章的标题和内容，其他属性保持不变，这个时候我们就可以使用 Pick 来创建新类型用于编辑操作。

```typescript
interface ArticleDetail {
  id: number
  title: string
  content: string
  author: string
  createTime: Date
  updateTime: Date
}

type ArticleEdit = Pick<ArticleDetail, 'title' | 'content'>

// 输出
type ArticleEdit = {
  title: string
  content: string
}
```

## Omit

和 Pick 相反，Omit 从类型 T 中排除属性 K 来创建新类型。

```typescript
interface TestData {
  name: string
  sex: string
}

type OmitTestData = Omit<TestData, 'name'>

// 输出
type OmitTestData = {
  sex: string
}
```

对于有些内容的数据，可编辑的字段可能非常多，这个时候 Pick 方法可能就不太适用了，我们就可以使用 Omit 来排除不可编辑的部分字段来创建新类型。

## Exclude

从联合类型 T 中排除可以赋值给 U 的部分。

```typescript
type Fruit = 'apple' | 'orange' | 'banana'

type ExcludeFruit = Exclude<Fruit, 'apple'>

// 输出
type ExcludeFruit = 'orange' | 'banana'
```

```typescript
type DataType = string | number | boolean

type ExcludeDataType = Exclude<DataType, number | boolean>

// 输出
type ExcludeDataType = string
```

## Extract

和 Exclude 的作用相反，从联合类型 T 中提取可以赋值给 U 的部分。

```typescript
type Fruit = 'apple' | 'orange' | 'banana'

type ExtractFruit = Extract<Fruit, 'apple' | 'orange'>

// 输出
type ExtractFruit = 'apple' | 'orange'
```

```typescript
type DataType = string | number | boolean

type ExtractDataType = Extract<DataType, number | boolean>

// 输出
type ExtractDataType = number | boolean
```

## NonNullable

从类型 T 中排除 null 和 undefined。

```typescript
type DataType = string | number | boolean | null | undefined

type NonNullableDataType = NonNullable<DataType>

// 输出
type NonNullableDataType = string | number | boolean
```

## Record

创建一个对象类型，其属性键为类型 K，属性值为类型 T。

```typescript
type Fruit = 'apple' | 'orange' | 'banana'

type RecordFruit = Record<Fruit, string>

// 输出
type RecordFruit = {
  apple: string
  orange: string
  banana: string
}
```

## Parameters

获取函数类型 T 的参数类型。

```typescript
export function testFunction(name: string, age: number) {
  console.log('test function', name, age)
}

export type TestFunctionParams = Parameters<typeof testFunction>

// 输出
type TestFunctionParams = [name: string, age: number]
```

## ReturnType

获取函数类型 T 的返回类型。

```typescript
export function testFunction(name: string, age: number) {
  return `name: ${name}, age: ${age}`
}

export type TestFunctionReturnType = ReturnType<typeof testFunction>

// 输出
type TestFunctionReturnType = string
```

## InstanceType

获取构造函数类型 T 的实例类型。

```typescript
class TestClass {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

export type TestClassInstance = InstanceType<typeof TestClass>

// 输出
type TestClassInstance = {
  name: string
  age: number
}
```

## NoInfer

阻止对所包含类型的推断。除了阻止推断之外，`NoInfer<Type>` 与 Type 相同。

```typescript
function createStreetLight<C extends string>(
  colors: C[],
  defaultColor?: NoInfer<C>
) {
  // ...
}
createStreetLight(['red', 'yellow', 'green'], 'red') // OK
createStreetLight(['red', 'yellow', 'green'], 'blue') // Error
```
