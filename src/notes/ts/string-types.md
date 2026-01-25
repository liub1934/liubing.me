---
layout: NoteLayout
order: 20
---

# 字符串操作类型

## Uppercase

将字符串中的所有字母转换为大写。

```typescript
type UppercaseStr = Uppercase<'hello'>

// 输出
type UppercaseStr = 'HELLO'
```

## Lowercase

将字符串中的所有字母转换为小写。

```typescript
type LowercaseStr = Lowercase<'HELLO'>

// 输出
type LowercaseStr = 'hello'
```

## Capitalize

将字符串中的第一个字母转换为大写。

```typescript
type CapitalizeStr = Capitalize<'hello'>

// 输出
type CapitalizeStr = 'Hello'
```

## Uncapitalize

将字符串中的第一个字母转换为小写。

```typescript
type UncapitalizeStr = Uncapitalize<'HELLO'>

// 输出
type UncapitalizeStr = 'hELLO'
```
