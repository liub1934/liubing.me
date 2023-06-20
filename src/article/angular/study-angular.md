---
date: 2022-12-19
category:
  - Angular
layout: ArticleLayout
containerClass: article-container
---

# Angular 基础知识记录及和 Vue 的一些区别

以 Vue 使用者的角度记录下 Angular 的基础知识。

<!-- more -->

## 创建一个应用

### 安装 Angular CLI

可以参考官方文档[环境搭建](https://angular.cn/guide/setup-local)环节，使用终端输入以下命令安装 Angular CLI 脚手架。

```sh
npm install -g @angular/cli
```

::: warning
在 Windows 客户端计算机上，默认禁用 PowerShell 脚本的执行。要允许执行 npm 全局二进制文件所需的 PowerShell 脚本，你必须设置以下内容执行策略。

```sh
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

:::

安装完成后输入`ng version`会提示是否启用自动完成，启用后在按 TAB 后会出现提示，直接按提示回车默认安装即可。

![image](https://image.liubing.me/2022/12/19/0d52bd12bc5f5.png)

### 创建项目

运行 CLI 提供的命令 `ng new` 来创建一个全新的项目，`my-angular-app`为项目名称，可以自己定义。

```sh
ng new my-angular-app
```

### 运行应用

进入到项目目录，运行`ng serve`运行项目，其中`--open`会自动打开浏览器，也可以使用缩写`-o`

```sh
cd my-angular-app
ng serve --open
# ng serve -o
```

此时会看下如下的页面说明就运行成功了。

![image](https://image.liubing.me/2022/12/19/cd802f28eee0b.png)

## 模版语法

我们先将`app.component.html`清空，输入以下代码：

```html
<h1 [title]="title">{{ title }}</h1>
```

然后看下`app.component.ts`中的代码：

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-angular-app'
}
```

你会发现模版语法和 Vue 一样，都是双大括号加变量形式`{{ 变量名 }}`，不同的是在`Angular`中变量绑定用的是双括号的形式`[title]="变量名"`，`app.component.ts`中的`title`就是变量名。

## 计算属性

使用的是`ES6`语法`class`提供的`getter`来实现的。

![image](https://image.liubing.me/2022/12/19/10fc54166f8b5.png)

::: code-tabs

@tab app.component.ts

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-angular-app'
  count = 1
  get doubleCount() {
    return this.count * 2
  }
}
```

@tab app.component.html

```html
<h1 [title]="title">{{ title }}</h1>
<div>Count: {{ count }}</div>
<div>Double Count: {{ doubleCount }}</div>
```

:::

## Class Style 绑定

会发现和`Vue`中`Class` `Style` 绑定类似，由`:class` `:style`变成了`[ngClass]` `[ngStyle]`

### Class 绑定

- string - 会把列在字符串中的 CSS 类（空格分隔）添加进来，

- Array - 会把数组中的各个元素作为 CSS 类添加进来，

- Object - 每个 key 都是要处理的 CSS 类，当表达式求值为真的时候则添加，为假则移除。

::: code-tabs

@tab app.component.html

```html
<h1 [title]="title" [ngClass]="'title-1 title-2'">{{ title }}</h1>
<div [ngClass]="['count-1', 'count-2']">Count: {{ count }}</div>
<div [ngClass]="countClassObj">Double Count: {{ doubleCount }}</div>
```

@tab app.component.ts

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-angular-app'
  count = 1
  get doubleCount() {
    return this.count * 2
  }
  countClassObj = {
    'count-1': true,
    'count-2': false
  }
}
```

:::

### Style 绑定

::: code-tabs

@tab app.component.html

```html
<h1 [title]="title" [ngStyle]="{ color: '#ccc' }">{{ title }}</h1>
<div [ngStyle]="countStyleObj">Count: {{ count }}</div>
<div [style.color]="'#ccc'">Double Count: {{ doubleCount }}</div>
```

@tab app.component.ts

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-angular-app'
  count = 1
  get doubleCount() {
    return this.count * 2
  }
  countStyleObj = {
    color: '#ccc',
    'font-size': '14px'
  }
}
```

:::

## 列表渲染

和`Vue`类似，`v-for in` 换成了`*ngFor of`，指定`Key`通过`trackBy`方法，该方法接受 2 个参数：`index`和`item`

::: code-tabs

@tab Angular

```html
<ul>
  <li *ngFor="let user of users; trackBy: trackById">
    {{ user.name }} 年龄：{{ user.age }}
  </li>
</ul>
```

```ts
import { Component } from '@angular/core'

interface User {
  id: number
  name: string
  age: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  users: User[] = [
    {
      id: 1,
      name: '张三',
      age: 30
    },
    {
      id: 2,
      name: '李四',
      age: 35
    },
    {
      id: 3,
      name: '老王',
      age: 40
    }
  ]
  trackById(index: number, user: User) {
    return user.id
  }
}
```

@tab Vue

```html
<ul>
  <li v-for="user in users" :key="user.id">
    {{ user.name }} 年龄：{{ user.age }}
  </li>
</ul>
```

:::

页面输出预览：

![image](https://image.liubing.me/2022/12/20/b8a79f786155d.png)

除此之外之外 `ngForOf` 还支持一些额外的局部变量使用：

- `index`: `number`：可迭代对象中当前条目的索引。

- `count`: `number`：可迭代对象的长度。

- `first`: `boolean`：如果当前条目是可迭代对象中的第一个条目则为 `true`。

- `last`: `boolean`：如果当前条目是可迭代对象中的最后一个条目则为 `true`。

- `even`: `boolean`：如果当前条目在可迭代对象中的索引号为偶数则为 `true`。

- `odd`: `boolean`：如果当前条目在可迭代对象中的索引号为奇数则为 `true`。

```html
<ul>
  <li
    *ngFor="
      let user of users;
      index as i;
      count as usersLength;
      first as isFirst;
      last as isLast;
      even as isEven;
      odd as isOdd
    "
  >
    <span>{{ user.name }} 年龄：{{ user.age }} </span>
    <span>索引：{{ i }} 长度：{{ usersLength }}</span>
    <span>是否是第一个：{{ isFirst }} 是否是最后一个：{{ isLast }}</span>
    <span>是否是偶数：{{ isEven }} 是否是奇数：{{ isOdd }}</span>
  </li>
</ul>
```

输出预览：

![image](https://image.liubing.me/2022/12/20/cb111be77001e.png)

### 对象使用 ngForOf

循环对象和循环数组类似，在循环对象的时候需要指定`keyvalue`的管道

::: code-tabs
@tab Angular

```html
<ul>
  <li *ngFor="let item of userObject | keyvalue; index as i">
    Key: {{ item.key }} Value: {{ item.value }} Index: {{ i }}
  </li>
</ul>
```

@tab Vue

```html
<ul>
  <li v-for="(value, key, index) in object">
    Key: {{ key }} Value: {{ value }} Index: {{ index }}
  </li>
</ul>
```

:::

输出预览：

![image](https://image.liubing.me/2022/12/20/5a862fe018a57.png)

## 条件渲染

### 使用 if

::: code-tabs
@tab Angular

```html
<div *ngIf="type === 'A'">You Can See A</div>
```

@tab Vue

```html
<div v-if="type === 'A'">You Can See A</div>
```

:::

### 使用 else

::: code-tabs
@tab Angular

在`else`后面指定`elseBlock`，通过`elseBlock`展示不满足`if`条件的内容，其中`elseBlock`可以按实际需要命名。

```html
<div *ngIf="type === 'A'; else elseBlock">You Can See A</div>
<ng-template #elseBlock>
  <div>Not A</div>
</ng-template>
```

除此之外还支持`then` 和 `else`的写法

```html
<div *ngIf="type === 'A'; then thenBlock; else elseBlock"></div>
<ng-template #thenBlock>You Can See A</ng-template>
<ng-template #elseBlock>Not A</ng-template>
```

@tab Vue

```html
<div v-if="type === 'A'">You Can See A</div>
<div v-else>Not A</div>
```

:::

## 事件处理

在`Vue`中你可以使用`v-on:click="methodName"` 或 `@click="handler"`来绑定事件，`Angular`中写法类似：`(事件名称)`，如点击事件`(click)`

![image](https://image.liubing.me/2022/12/20/65dbc198781ef.jpg)

::: code-tabs

@tab app.component.html

```html
<h1 [title]="title">{{ title }}</h1>
<div>Count: {{ count }}<button (click)="onClick()">Count + 1</button></div>
<div>Double Count: {{ doubleCount }}</div>
```

@tab app.component.ts

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-angular-app'
  count = 1
  get doubleCount() {
    return this.count * 2
  }
  onClick() {
    this.count++
  }
}
```

:::

## 表单输入绑定

### 文本输入

`Vue`中使用`v-model`，`Angular`中使用`[(ngModel)]`，如下形式，和 Vue 的语法很像：

```html
<input [(ngModel)]="name" />
<p>Value: {{ name }}</p>
<button (click)="setValue()">Set value</button>
```

保存后你会发现代码报错，难道写的有问题？

```
Can't bind to 'ngModel' since it isn't a known property of 'input'.
```

然而并不是，为了能够对表单输入使用双向数据绑定，此时还需要将`FormsModule`在 `Angular` 模块中导入。

::: code-tabs
@tab app.module.ts

```ts
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    // ...其他模块
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

:::

### 复选框

```html
<input type="checkbox" id="checkbox" [(ngModel)]="checked" />
<label for="checkbox">{{ checked }}</label>
```

### 单选框

```html
<div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" [(ngModel)]="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" [(ngModel)]="picked" />
<label for="two">Two</label>
```

### 下拉选择

```html
<div>Selected: {{ selected }}</div>

<select [(ngModel)]="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

## Form 表单基础

`Angular` 中提供了两种不同的方法来通过表单处理用户输入：`响应式表单`和`模板驱动表单`。 两者都从视图中捕获用户输入事件、验证用户输入、创建表单模型、修改数据模型，并提供跟踪这些更改的途径。  
使用之前需要将`ReactiveFormsModule`在 `Angular` 模块中导入。

::: code-tabs
@tab app.module.ts

```ts
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    // ...其他模块
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

:::

### 模板驱动表单

在模板驱动表单中，表单模型是隐式的，而不是显式的。通过 `NgModel` 为指定的表单元素创建并管理一个 `FormControl` 实例。  
下方代码与下面`响应式表单`中内容功能相同。

::: code-tabs
@tab app.component.html

```html
Favorite Color: <input type="text" [(ngModel)]="favoriteColor" />
<div>
  <button (click)="getFavoriteColor()">获取Favorite Color</button>
  <button (click)="setFavoriteColor()">设置Favorite Color</button>
</div>
```

@tab app.component.ts

```ts
import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  favoriteColor = ''
  getFavoriteColor() {
    console.log(this.favoriteColor)
  }
  setFavoriteColor() {
    this.favoriteColor = 'liubing.me'
  }
}
```

:::

### 响应式表单

对于响应式表单，你可以直接在组件类中定义表单模型。`[formControl]` 指令会通过内部值访问器来把显式创建的 `FormControl` 实例与视图中的特定表单元素联系起来。  
想简单点，你可以把 `[formControl]` 理解成 `Ant Vue` 或者 `Element UI` 表单中的`prop`。  
可以调用 `formControl` 提供的 `getRawValue` 和 `setValue`方法来获取输入的值或者设置一个新值。还有其他方法请参考[文档说明](https://angular.cn/api/forms/FormControl#instance-methods)查看。

::: code-tabs
@tab app.component.html

```html
Favorite Color: <input type="text" [formControl]="favoriteColorControl" />
<div>
  <button (click)="getFavoriteColor()">获取Favorite Color</button>
  <button (click)="setFavoriteColor()">设置Favorite Color</button>
</div>
```

@tab app.component.ts

```ts
import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  favoriteColorControl = new FormControl('')
  getFavoriteColor() {
    console.log(this.favoriteColorControl.getRawValue())
  }
  setFavoriteColor() {
    this.favoriteColorControl.setValue('liubing.me')
  }
}
```

:::

## Form 表单详解

### 模板驱动表单详解

先创建一个最简单的 Form 表单结构，里面有用户名、密码、重复密码、注册按钮。  
所有输入框的值都是通过`[(ngModel)]`绑定，点击`注册`后会触发表单的`Submit`事件调用`onSubmit()`方法，输出打印`formData`中的内容。

::: code-tabs
@tab app.component.html

```html
<form (ngSubmit)="onSubmit()">
  <div>
    <label for="username">用户名：</label>
    <input name="username" type="text" [(ngModel)]="formData.username" />
  </div>
  <div>
    <label for="password">密码：</label>
    <input
      #password="ngModel"
      name="password"
      type="password"
      [(ngModel)]="formData.password"
    />
  </div>
  <div>
    <label for="password">确认密码：</label>
    <input
      type="password"
      name="rePassword"
      [(ngModel)]="formData.rePassword"
    />
  </div>
  <button type="submit">注册</button>
</form>
```

@tab app.component.ts

```ts
import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  formData = {
    username: '',
    password: '',
    rePassword: ''
  }
  onSubmit() {
    console.log(this.formData)
  }
}
```

:::

#### 模板驱动表单校验规则

表单结构写好后还需要增加一些校验条件，给用户名新增一个必填项的规则。需要在`input`上新增一个`required`属性，在`form`上指定模版变量`#submitForm`，其引用指向`ngForm`，`ngForm`会创建一个顶级的 `FormGroup` 实例，并把它绑定到一个表单，以跟踪表单的聚合值及其验证状态。如果不指向`ngForm`，`#submitForm`引用的值将是 [HTMLFormElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLFormElement)，也就是 `<form>` 元素本身。

同理`#username`指向`ngModel`，`ngModel`会创建一个 `FormControl` 实例，并把它绑定到一个具体的表单控件元素上，通过`username`可以访问`FormControl` 实例，如
`username.invalid`获取用户名是否有验证错误，`username.errors?.['required']`访问`errors`里面是否有`required`必填项校验错误，如果有的话就显示`请输入用户名`的错误信息。  
由于验证规则不止一条，错误信息也不止一条，所以需要通过组合判断`invalid` `dirty` `touched`来判断是否有错误信息，里面根据具体的错误类型输出相应的错误信息。

其中`invalid` `dirty` `touched` 是检查控件的状态，要了解完整的控件属性，可以参阅[AbstractControl](https://angular.cn/api/forms/AbstractControl)和[AbstractControlDirective](https://angular.cn/api/forms/AbstractControlDirective)说明。

```html
<form #submitForm="ngForm" (ngSubmit)="onSubmit(submitForm)">
  <div>
    <label for="username">用户名：</label>
    <input
      #username="ngModel"
      type="text"
      [(ngModel)]="formData.username"
      name="username"
      required
    />
    <div *ngIf="username.invalid && (username.dirty || username.touched)">
      <span *ngIf="username.errors?.['required']">请输入用户名</span>
    </div>
  </div>
</form>
```

由于`onSubmit`方法有传递`submitForm`，我们需要在`onSubmit`去处理相关逻辑，`submitForm`相关属性和方法可以参考 API [NgForm](https://angular.cn/api/forms/NgForm)。

```ts
import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  formData = {
    username: '',
    password: '',
    rePassword: ''
  }
  onSubmit(submitForm: NgForm) {
    const { valid } = submitForm
    if (valid) {
      // 验证通过处理逻辑
    } else {
      // 验证不通过处理逻辑
    }
  }
}
```

除了`required`外，在模板驱动表单中还支持[原生 HTML 表单验证器属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Constraint_validation)`，如pattern` `min` `max` 等。

#### 模板驱动表单自定义验证器

自定义验证器需要给模版添加一个指令，该指令包含了 `validator` 校验函数。  
`Angular` 在验证过程中会识别出该指令的作用，因为该指令把自己注册成了 `NG_VALIDATORS` 提供者，如下例所示。`NG_VALIDATORS` 是一个带有可扩展验证器集合的预定义提供者。

```ts
providers: [
  {
    provide: NG_VALIDATORS,
    useExisting: ForbiddenValidatorDirective,
    multi: true
  }
]
```

这里添加一个校验用户名的自定义校验规则，假设输入的用户名需要是邮箱格式，我们可以通过`Angular`提供的 CLI 命令`ng generate directive [name]`（缩写法：`ng g d [name]`）快速创建一个指令，这里输入`ng g d checkEmail --skip-tests`，`--skip-tests`跳过测试文件的创建，此时会 CLI 会生成`app.check-email.directive.ts`的指令文件，并在`app.module.ts`文件中的`declarations`中自动引入该指令。

在该指令中`appCheckEmail`为该指令的名称，`useExisting`为该指令的类名，然后需要在指令的`providers`中注册上面提到过的 `NG_VALIDATORS` 提供者， 最后提供`validate`验证的方法。

::: code-tabs
@tab app.check-email.directive.ts

```ts
import { Directive } from '@angular/core'
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms'
import { checkEmail } from './app.validator'

@Directive({
  selector: '[appCheckEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckEmailDirective,
      multi: true
    }
  ]
})
export class CheckEmailDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return null
  }
}
```

:::
为了重复使用和方便管理，我们可以新建一个`app.validator.ts`文件，提供一个 `ValidatorFn`类型的方法： `checkEmailValidator`，该方法返回一个`ValidationErrors`类型的错误信息或者`null`，通过传入的`control`提供的`getRawValue`方法可以获取到设置该指令表单项的值，如果校验通过直接返回`null`，检验未通过可以返回一个错误对象`{ email: true }`，`email`为错误信息的`key`值，会在`errors`中返回，后面可以在模版中使用显示错误信息，如下所示：

```html
<span *ngIf="username.errors?.['email']">请输入正确的邮箱</span>
```

```ts
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export const checkEmailValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.getRawValue()
    const reg = /^([\w]+)@([\w]+)\.([a-zA-Z]{2,4})$/
    if (email && !reg.test(email)) {
      // 校验不通过返回email类型错误
      return { email: true }
    }
    return null
  }
}
```

接下来在`validate`中调用该方法：

::: code-tabs
@tab app.check-email.directive.ts

```ts
import { Directive } from '@angular/core'
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms'
import { checkEmailValidator } from './app.validator'

@Directive({
  selector: '[appCheckEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckEmailDirective,
      multi: true
    }
  ]
})
export class CheckEmailDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return checkEmailValidator()(control)
  }
}
```

:::

最后在表单项 `username` 元素上加上`appCheckEmail`的指令即可生效：

```html
<form #submitForm="ngForm" (ngSubmit)="onSubmit(submitForm)">
  <div>
    <label for="username">用户名：</label>
    <input
      #username="ngModel"
      type="text"
      [(ngModel)]="formData.username"
      name="username"
      required
      appCheckEmail
    />
    <div *ngIf="username.invalid && (username.dirty || username.touched)">
      <span *ngIf="username.errors?.['required']">请输入用户名</span>
      <span *ngIf="username.errors?.['email']">请输入正确的邮箱</span>
    </div>
  </div>
</form>
```

照葫芦画瓢把`密码`和`确认密码`加上必填项的校验：

```html
<form #submitForm="ngForm" (ngSubmit)="onSubmit(submitForm)">
  <div>
    <label for="username">用户名：</label>
    <input
      #username="ngModel"
      type="text"
      [(ngModel)]="formData.username"
      name="username"
      required
      appCheckEmail
    />
    <div *ngIf="username.invalid && (username.dirty || username.touched)">
      <span *ngIf="username.errors?.['required']">请输入用户名</span>
      <span *ngIf="username.errors?.['email']">请输入正确的邮箱</span>
    </div>
  </div>
  <div>
    <label for="password">密码：</label>
    <input
      #password="ngModel"
      name="password"
      type="password"
      required
      [(ngModel)]="formData.password"
    />
    <div *ngIf="password.invalid && (password.dirty || password.touched)">
      <span *ngIf="password.errors?.['required']">请输入密码</span>
    </div>
  </div>
  <div>
    <label for="password">确认密码：</label>
    <input
      #rePassword="ngModel"
      type="password"
      name="rePassword"
      required
      [(ngModel)]="formData.rePassword"
    />
    <div *ngIf="rePassword.invalid && (rePassword.dirty || rePassword.touched)">
      <span *ngIf="rePassword.errors?.['required']">请输入确认密码</span>
    </div>
  </div>
  <button type="submit">注册</button>
</form>
```

#### 模板驱动表单跨字段交叉验证器

跨字段交叉验证器是一种自定义验证器，可以对表单中不同字段的值进行比较，并针对它们的组合进行接受或拒绝。比较常见的例子就是比较二次密码是否输入一致。  
既然也是自定义验证器按上面的方式使用命令`ng g d checkPassword --skip-tests`来新建一个新的指令，此时会自动生成`app.check-password.directive.ts`指令文件，在`app.validator.ts`中添加`checkPasswordValidator`的方法，通过`control.get`方法来获取表单的中的需要的字段：

```ts
export const checkPasswordValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')
    const rePassword = control.get('rePassword')
    if (
      password?.value &&
      rePassword?.value &&
      password?.value !== rePassword?.value
    ) {
      // 如果密码不相同返回passwordError错误
      return { passwordError: true }
    }
    return null
  }
}
```

将`app.check-password.directive.ts`文件补全：

::: code-tabs
@tab app.check-password.directive.ts

```ts
import { Directive } from '@angular/core'
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms'
import { checkPasswordValidator } from './app.validator'

@Directive({
  selector: '[appCheckPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckPasswordDirective,
      multi: true
    }
  ]
})
export class CheckPasswordDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return checkPasswordValidator()(control)
  }
}
```

:::

最后在`form`上加上该指令，不同的是上面`appCheckEmail`的指令是加上`username`的输入框上面的，而用于交叉验证的指令需要加在`form`上面，而对应的错误信息也是在`submitForm`中获取，如下的`两次密码输入不一致`的错误信息是从表单`submitForm`中`errors`里面取相关错误：`*ngIf="submitForm.errors?.['passwordError']"`

```html
<form #submitForm="ngForm" appCheckPassword (ngSubmit)="onSubmit(submitForm)">
  <div>
    <label for="username">用户名：</label>
    <input
      #username="ngModel"
      type="text"
      [(ngModel)]="formData.username"
      name="username"
      required
      appCheckEmail
    />
    <div *ngIf="username.invalid && (username.dirty || username.touched)">
      <span *ngIf="username.errors?.['required']">请输入用户名</span>
      <span *ngIf="username.errors?.['email']">请输入正确的邮箱</span>
    </div>
  </div>
  <div>
    <label for="password">密码：</label>
    <input
      #password="ngModel"
      name="password"
      type="password"
      required
      [(ngModel)]="formData.password"
    />
    <div *ngIf="password.invalid && (password.dirty || password.touched)">
      <span *ngIf="password.errors?.['required']">请输入密码</span>
    </div>
  </div>
  <div>
    <label for="password">确认密码：</label>
    <input
      #rePassword="ngModel"
      type="password"
      name="rePassword"
      required
      [(ngModel)]="formData.rePassword"
    />
    <div
      *ngIf="(rePassword.invalid && (rePassword.dirty || rePassword.touched)) || submitForm.errors?.['passwordError']"
    >
      <span *ngIf="rePassword.errors?.['required']">请输入确认密码</span>
      <span *ngIf="submitForm.errors?.['passwordError']">
        两次密码输入不一致
      </span>
    </div>
  </div>
  <button type="submit">注册</button>
</form>
```

#### 模板驱动表单异步验证器

最后就是异步验证器了，某些表单可能还需要进行接口异步校验，如用户创建的时候校验用户名是否已存在，同理使用命令使用命令`ng g d checkUsername --skip-tests`来新建一个新的指令。同样在`app.validator.ts`中提供一个`checkUsernameValidator`的方法，`repeat`为错误信息`key`值，与同步验证不同的是`checkUsernameValidator`的类型需要是`AsyncValidatorFn`，需要返回一个`Promise`或可观察对象`Observable`。

```ts
export const checkUsernameValidator = (): AsyncValidatorFn => {
  return (control: AbstractControl): Promise<ValidationErrors | null> => {
    return new Promise((resolve) => {
      // setTimeout模拟接口请求
      setTimeout(() => {
        const username = control.getRawValue()
        // 用户名为test@qq.com的时候模拟提示已存在该用户
        if (username && username === 'test@qq.com') {
          return resolve({ repeat: true })
        }
        return resolve(null)
      }, 500)
    })
  }
}
```

将指令文件`app.check-username.directive.ts`补充完整，此时异步验证器需要注册的是`NG_ASYNC_VALIDATORS`，`CheckUsernameDirective`实现的也不是`Validator`接口而是`AsyncValidator`接口，`validate`需要返回一个`Promise`或可观察对象`Observable`。

```ts
import { Directive } from '@angular/core'
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors
} from '@angular/forms'
import { checkUsernameValidator } from './app.validator'

@Directive({
  selector: '[appCheckUsername]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: CheckUsernameDirective,
      multi: true
    }
  ]
})
export class CheckUsernameDirective implements AsyncValidator {
  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    return Promise.resolve(checkUsernameValidator()(control))
  }
}
```

对应在页面的错误信息展示根据`username.errors`中的`repeat`来判断。

```html
<span *ngIf="username.errors?.['required']">请输入用户名</span>
<span *ngIf="username.errors?.['email']">请输入正确的邮箱</span>
<span *ngIf="username.errors?.['repeat']">用户名已存在</span>
```

#### 模板驱动表单完整代码

::: code-tabs
@tab app.component.html

```html
<form #submitForm="ngForm" appCheckPassword (ngSubmit)="onSubmit(submitForm)">
  <div>
    <label for="username">用户名：</label>
    <input
      #username="ngModel"
      type="text"
      [(ngModel)]="formData.username"
      name="username"
      required
      appCheckEmail
      appCheckUsername
    />
    <div *ngIf="isShowErrors(username, submitForm)">
      <span *ngIf="username.errors?.['required']">请输入用户名</span>
      <span *ngIf="username.errors?.['email']">请输入正确的邮箱</span>
      <span *ngIf="username.errors?.['repeat']">用户名已存在</span>
    </div>
  </div>
  <div>
    <label for="password">密码：</label>
    <input
      #password="ngModel"
      name="password"
      type="password"
      required
      [(ngModel)]="formData.password"
    />
    <div *ngIf="isShowErrors(password, submitForm)">
      <span *ngIf="password.errors?.['required']">请输入密码</span>
    </div>
  </div>
  <div>
    <label for="password">确认密码：</label>
    <input
      #rePassword="ngModel"
      type="password"
      name="rePassword"
      required
      [(ngModel)]="formData.rePassword"
    />
    <div
      *ngIf="isShowErrors(rePassword, submitForm) || submitForm.errors?.['passwordError']"
    >
      <span *ngIf="rePassword.errors?.['required']">请输入确认密码</span>
      <span *ngIf="submitForm.errors?.['passwordError']">
        两次密码输入不一致
      </span>
    </div>
  </div>
  <button type="submit" [disabled]="submitForm.invalid">注册</button>
</form>
```

@tab app.component.ts

```ts
import { Component } from '@angular/core'
import { NgForm, NgModel } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  formData = {
    username: '',
    password: '',
    rePassword: ''
  }
  onSubmit(submitForm: NgForm) {
    const { valid } = submitForm
    if (valid) {
      // 验证通过处理逻辑
      console.log(this.formData)
    } else {
      // 验证不通过处理逻辑
    }
  }
  isShowErrors(field: NgModel, submitForm: NgForm) {
    return (
      field.invalid && (field.dirty || field.touched || submitForm.submitted)
    )
  }
}
```

@tab app.validator.ts

```ts
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms'

export const checkPasswordValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')
    const rePassword = control.get('rePassword')
    if (
      password?.value &&
      rePassword?.value &&
      password?.value !== rePassword?.value
    ) {
      // 如果密码不相同返回passwordError错误
      return { passwordError: true }
    }
    return null
  }
}

export const checkEmailValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.getRawValue()
    const reg = /^([\w]+)@([\w]+)\.([a-zA-Z]{2,4})$/
    if (email && !reg.test(email)) {
      // 校验不通过返回email类型错误
      return { email: true }
    }
    return null
  }
}

export const checkUsernameValidator = (): AsyncValidatorFn => {
  return (control: AbstractControl): Promise<ValidationErrors | null> => {
    return new Promise((resolve) => {
      // setTimeout模拟接口请求
      setTimeout(() => {
        const username = control.getRawValue()
        // 用户名为test@qq.com的时候模拟提示已存在该用户
        if (username && username === 'test@qq.com') {
          return resolve({ repeat: true })
        }
        return resolve(null)
      }, 500)
    })
  }
}
```

@tab app.check-email.directive.ts

```ts
import { Directive, Input } from '@angular/core'
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms'
import { checkEmailValidator } from './app.validator'

@Directive({
  selector: '[appCheckEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckEmailDirective,
      multi: true
    }
  ]
})
export class CheckEmailDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return checkEmailValidator()(control)
  }
}
```

@tab app.check-username.directive.ts

```ts
import { Directive } from '@angular/core'
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors
} from '@angular/forms'
import { checkUsernameValidator } from './app.validator'

@Directive({
  selector: '[appCheckUsername]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: CheckUsernameDirective,
      multi: true
    }
  ]
})
export class CheckUsernameDirective implements AsyncValidator {
  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    return checkUsernameValidator(control)
  }
}
```

@tab app.check-password.directive.ts

```ts
import { Directive } from '@angular/core'
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms'
import { checkPasswordValidator } from './app.validator'

@Directive({
  selector: '[appCheckPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckPasswordDirective,
      multi: true
    }
  ]
})
export class CheckPasswordDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return checkPasswordValidator()(control)
  }
}
```

:::

### 响应式表单详解

响应式表单提供了一种模型驱动的方式来处理表单输入，拥有更高的可控性，也是比较推荐的表单使用方式。我们还是像模板驱动表单一样先创建一个最简单的 Form 表单结构。

和模板驱动表单不同的是响应式表单初始化数据需要创建一个 `FormGroup` 实例，如`app.component.ts`中的`new FormGroup()`，然后把这个 `FormGroup` 模型关联到视图，如`app.component.html`中的`[formGroup]="formData"`，表单中的输入项通过由 `FormControlName` 指令提供的 `formControlName` 属性把每个输入框和 `FormGroup` 中定义的表单控件绑定起来。

::: code-tabs
@tab app.component.html

```html
<form [formGroup]="formData" (ngSubmit)="onSubmit()">
  <div>
    <label for="username">用户名：</label>
    <input name="username" type="text" formControlName="username" />
  </div>
  <div>
    <label for="password">密码：</label>
    <input name="password" type="password" formControlName="password" />
  </div>
  <div>
    <label for="password">确认密码：</label>
    <input name="rePassword" type="password" formControlName="password" />
  </div>
  <button type="submit">注册</button>
</form>
```

@tab app.component.ts

```ts
import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  formData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl('')
  })
  onSubmit() {
    console.log(this.formData.value)
  }
}
```

:::

#### 使用 FormBuilder 服务生成控件

当需要与多个表单打交道时，手动创建多个表单控件实例会非常繁琐。`FormBuilder` 服务提供了一些便捷方法来生成表单控件。`FormBuilder` 在幕后也使用同样的方式来创建和返回这些实例，只是用起来更简单。

通过下列步骤可以利用这项服务。

- 导入 `FormBuilder` 类
- 注入这个 `FormBuilder` 服务
- 生成表单内容

由于 `FormBuilder` 是一个可注入的服务提供者，它是由 `ReactiveFormModule` 提供的。需要把它添加到组件的构造函数中就可以注入这个依赖，如下所示：

```ts
import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  formData = this.fb.group({
    username: [''],
    password: [''],
    rePassword: ['']
  })

  onSubmit() {
    console.log(this.formData.value)
  }
}
```

可以对比下两种方式的区别，会发现使用 `FormBuilder`代码比较简洁，不用去`new` 很多的实例了。

::: code-tabs
@tab instances

```ts
formData = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
  rePassword: new FormControl('')
})
```

@tab form builder

```ts
formData = this.fb.group({
  username: [''],
  password: [''],
  rePassword: ['']
})
```

:::

#### 响应式表单校验规则

只需要把静态方法 `Validators.required` 设置为控件值数组中的第二项即可，如下所示，将 `username` `password` `rePassword`字段均添加必填项的校验。

```ts
formData = this.fb.group({
  username: ['', Validators.required],
  password: ['', Validators.required],
  rePassword: ['', Validators.required]
})
```

除了`Validators.required`，`Validators`还提供如`min` `max` `pattern`等内置验证器，其他更多内置验证器及说明请参考 API [Validators](https://angular.cn/api/forms/Validators)说明。

在模板驱动表单中错误信息的可以根据`username.`的形式取相关校验字段信息：

```html
<div *ngIf="username.invalid && (username.dirty || username.touched)">
  <span *ngIf="username.errors?.['required']">请输入用户名</span>
</div>
```

而在响应式表单中的输入项是由 `formControlName` 属性绑定，无法直接通过`username.`形式访问，需要通过`FormGroup`的实例`formData`调用`get`方法来获取表单项的实例进行访问。

```html
<div
  *ngIf="
    formData.get('username')?.invalid &&
    (formData.get('username')?.dirty || formData.get('username')?.touched)
  "
>
  <span *ngIf="formData.get('username')?.errors?.['required']">
    请输入用户名
  </span>
</div>
```

为了方便使用，可以将错误信息获取做下简单的封装，在`app.component.ts`中新增两个方法`isShowErrors`和`isShowError`：

```ts
isShowErrors(field: string) {
  return (
    this.formData.get(field)?.invalid &&
    (this.formData.get(field)?.dirty || this.formData.get(field)?.touched)
  );
}

isShowError(errorName: string, field: string) {
  return this.formData.get(field)?.errors?.[errorName];
}
```

然后就可以很方便的在模版中使用了：

```html
<div *ngIf="isShowErrors('username')">
  <span *ngIf="isShowError('required', 'username')"> 请输入用户名 </span>
</div>
```

#### 响应式表单自定义验证器

响应式表单自定义验证器不需要像模版驱动表单一样创建相关的指令，可以直接复用上面`app.validator.ts`里面的自定义验证器，`app.component.ts`中直接引入并使用`checkEmailValidator`，并在`app.component.html`文件模版中加上错误信息展示。

```ts
formData = this.fb.group({
  username: ['', [Validators.required, checkEmailValidator()]],
  password: ['', Validators.required],
  rePassword: ['', Validators.required]
})
```

```html
<div *ngIf="isShowErrors('username')">
  <span *ngIf="isShowError('required', 'username')"> 请输入用户名 </span>
  <span *ngIf="isShowError('email', 'username')"> 请输入正确的邮箱 </span>
</div>
```

#### 响应式表单交叉验证器

同上复用`app.validator.ts`里面的`checkPasswordValidator`。要想给 `FormGroup` 添加验证器，就要在创建时把一个新的验证器传给它的第二个参数。`validators`即支持单个也支持多个交叉验证器。

::: warning
如果你的交叉验证器方法是用的`function`而非`箭头函数`的形式，请在后面加上`.apply(this)`，不然验证器会无效。
:::

```ts
formData = this.fb.group(
  {
    username: ['', [Validators.required, checkEmailValidator()]],
    password: ['', [Validators.required]],
    rePassword: ['', [Validators.required]]
  },
  {
    validators: checkPasswordValidator()
    // validators: [checkPasswordValidator()], // 数组模式可添加多个交叉验证器
  }
)
```

由于`checkPasswordValidator`是`FormGroup`上面，错误信息的获取需要从`this.formData.errors?.['passwordError']`取值，稍微改造下`isShowError`的方法，如果没有传`field`字段的话错误信息从`formData.errors`中获取。

```ts
isShowError(errorName: string, field?: string) {
  if (field) {
    return this.formData.get(field)?.errors?.[errorName];
  } else {
    return this.formData.errors?.[errorName];
  }
}
```

然后在模版中按需要展示相应的错误信息：

```html
<div>
  <label for="rePassword">确认密码：</label>
  <input name="rePassword" type="password" formControlName="rePassword" />
  <div *ngIf="isShowErrors('rePassword') || isShowError('passwordError')">
    <span *ngIf="isShowError('required', 'rePassword')"> 请输入确认密码 </span>
    <span *ngIf="isShowError('passwordError')"> 两次密码输入不一致 </span>
  </div>
</div>
```

#### 响应式表单异步验证器

同上响应式表单自定义验证器的写法，需要将控件值第二项的数组改成对象形式，`validators`是同步验证，`asyncValidators`为异步验证，可以直接将之前写好的`checkUsernameValidator`拿过来直接使用。由于存在异步验证，输入变化的时候实际情况会频繁的触发异步验证调用接口，增加`updateOn`为`blur`可以进行优化下，将触发时机改为输入框`blur`之后。

::: code-tabs
@tab 对象形式

```ts
formData = this.fb.group({
  username: [
    '',
    {
      validators: [Validators.required, checkEmailValidator()],
      asyncValidators: checkUsernameValidator(),
      // asyncValidators: [checkUsernameValidator()], // 数组形式可添加多个
      updateOn: 'blur'
    }
  ],
  password: ['', [Validators.required]],
  rePassword: ['', [Validators.required]]
})
```

@tab 数组形式

```ts
formData = this.fb.group({
  username: ['', [Validators.required, checkEmailValidator()]],
  password: ['', Validators.required],
  rePassword: ['', Validators.required]
})
```

:::

然后在页面模版中添加相应的错误信息展示：

```html
<div>
  <label for="username">用户名：</label>
  <input name="username" type="text" formControlName="username" />
  <div *ngIf="isShowErrors('username')">
    <span *ngIf="isShowError('required', 'username')"> 请输入用户名 </span>
    <span *ngIf="isShowError('email', 'username')"> 请输入正确的邮箱 </span>
    <span *ngIf="isShowError('repeat', 'username')"> 用户名已存在 </span>
  </div>
</div>
```

#### 响应式表单完整代码

::: code-tabs
@tab app.component.html

```html
<form [formGroup]="formData" (ngSubmit)="onSubmit()">
  <div>
    <label for="username">用户名：</label>
    <input name="username" type="text" formControlName="username" />
    <div *ngIf="isShowErrors('username')">
      <span *ngIf="isShowError('required', 'username')"> 请输入用户名 </span>
      <span *ngIf="isShowError('email', 'username')"> 请输入正确的邮箱 </span>
      <span *ngIf="isShowError('repeat', 'username')"> 用户名已存在 </span>
    </div>
  </div>
  <div>
    <label for="password">密码：</label>
    <input name="password" type="password" formControlName="password" />
    <div *ngIf="isShowErrors('password')">
      <span *ngIf="isShowError('required', 'password')"> 请输入密码 </span>
    </div>
  </div>
  <div>
    <label for="rePassword">确认密码：</label>
    <input name="rePassword" type="password" formControlName="rePassword" />
    <div *ngIf="isShowErrors('rePassword') || isShowError('passwordError')">
      <span *ngIf="isShowError('required', 'rePassword')">
        请输入确认密码
      </span>
      <span *ngIf="isShowError('passwordError')"> 两次密码输入不一致 </span>
    </div>
  </div>
  <button type="submit">注册</button>
</form>
```

@tab app.component.ts

```ts
import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import {
  checkEmailValidator,
  checkPasswordValidator,
  checkUsernameValidator
} from './app.validator'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  formData = this.fb.group(
    {
      username: [
        '',
        {
          validators: [Validators.required, checkEmailValidator()],
          asyncValidators: checkUsernameValidator(),
          // asyncValidators: [checkUsernameValidator()], // 数组形式可添加多个
          updateOn: 'blur'
        }
      ],
      password: ['', [Validators.required]],
      rePassword: ['', [Validators.required]]
    },
    {
      validators: checkPasswordValidator()
      // validators: [checkPasswordValidator.], // 数组模式可添加多个交叉验证器
    }
  )

  isShowErrors(field: string) {
    return (
      this.formData.get(field)?.invalid &&
      (this.formData.get(field)?.dirty || this.formData.get(field)?.touched)
    )
  }

  isShowError(errorName: string, field?: string) {
    if (field) {
      return this.formData.get(field)?.errors?.[errorName]
    } else {
      return this.formData.errors?.[errorName]
    }
  }

  onSubmit() {
    const { valid, value } = this.formData
    if (valid) {
      // 验证通过处理逻辑
      console.log(value)
    } else {
      // 验证不通过处理逻辑
    }
  }
}
```

@tab app.validator.ts

```ts
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms'

export const checkPasswordValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')
    const rePassword = control.get('rePassword')
    if (
      password?.value &&
      rePassword?.value &&
      password?.value !== rePassword?.value
    ) {
      // 如果密码不相同返回passwordError错误
      return { passwordError: true }
    }
    return null
  }
}

export const checkEmailValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.getRawValue()
    const reg = /^([\w]+)@([\w]+)\.([a-zA-Z]{2,4})$/
    if (email && !reg.test(email)) {
      // 校验不通过返回email类型错误
      return { email: true }
    }
    return null
  }
}

export const checkUsernameValidator = (): AsyncValidatorFn => {
  return (control: AbstractControl): Promise<ValidationErrors | null> => {
    return new Promise((resolve) => {
      // setTimeout模拟接口请求
      setTimeout(() => {
        const username = control.getRawValue()
        // 用户名为test@qq.com的时候模拟提示已存在该用户
        if (username && username === 'test@qq.com') {
          return resolve({ repeat: true })
        }
        return resolve(null)
      }, 500)
    })
  }
}
```

:::

## 生命周期

`Angular`支持以下的生命周期，具体说明请参考[文档说明](https://angular.cn/guide/lifecycle-hooks)，按照先后顺序如下所示：

- `OnChanges`
- `OnInit`
- `DoCheck`
- `AfterContentInit`
- `AfterContentChecked`
- `AfterViewInit`
- `AfterViewChecked`
- `DoCheck`
- `AfterContentChecked`
- `AfterViewChecked`
- `OnDestroy`

常用的有`OnInit` `AfterViewInit` `OnDestroy`，对应`Vue`中的`created` `mounted` `destroy`。

## 模板变量

在`Vue`中可以通过`ref`的形式来访问模板，在`Angular`中通过模板变量的形式来访问部分数据，需要使用井号 `#` 来声明一个模板变量。下面模板变量 `#phone` 声明了一个名为 `phone` 的变量，其值为此`<input>` 元素。

```html
<input #phone placeholder="phone number" />
```

可以在组件模板中的任何地方引用某个模板变量。这里的 `<button>` 就引用了 `phone` 变量。

```html
<input #phone placeholder="phone number" />

<button type="button" (click)="callPhone(phone.value)">Call</button>
```

执行`callPhone`方法后会打印出`<input>`的输入内容。

```ts
callPhone(value: string) {
  console.log(value);
}
```

除了在模版中使用，还可以使用 `Angular` 提供的装饰器`@ViewChild`在 `ts` 文件中访问，比如模版初始化后进行 `DOM` 的操作或者设置`input`的值。类似于 `Vue` 中通过`$refs` 操作 `DOM` 一样，`phone`的类型为`ElementRef`。

::: warning
需要在`AfterViewInit`之后执行相关操作，类似`Vue`中需要在`mounted`之后操作`DOM`
:::

```ts
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('phone') phone: ElementRef | undefined

  callPhone(value: string) {
    console.log(value)
  }

  ngAfterViewInit(): void {
    if (this.phone?.nativeElement) {
      this.phone.nativeElement.value = 'liubing.me' // 设置值
      this.phone.nativeElement.style.color = 'red' // 修改样式
    }
  }
}
```

除了普通元素，还支持组件模版变量，通过命令`ng g c my-component --skip-tests`快速生成并注册一个组件`app-my-component`。  
在模版中使用该组件，指定模版变量名`myComponent`，写了两个点击事件用于获取该组件内部的变量名`name`的值和更新这个值。

```html
<app-my-component #myComponent></app-my-component>

<button type="button" (click)="getName(myComponent)">Get Name</button>
<button type="button" (click)="updateName(myComponent)">Update Name</button>
```

在`ts`中同样可以使用`@ViewChild`来访问该组件，`AfterViewInit`之后可以获取该组件的内部变量和执行内部的方法等擦操作。也类似于`Vue`中通过`$refs`访问组件内部变量和方法。

```ts
import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { MyComponentComponent } from './my-component/my-component.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('myComponent') myComponent!: MyComponentComponent

  getName(component: MyComponentComponent) {
    console.log(component.name)
  }

  updateName(component: MyComponentComponent) {
    component.name = 'liubing.me'
  }

  ngAfterViewInit(): void {
    console.log(this.myComponent.name)
    console.log(this.myComponent.testFun())
  }
}
```

## 组件基础

### 定义组件

可以使用 `CLI` 提供的命令`ng g c [name]`来快速创建一个组件，输入命令`ng g c test --skip-tests`跳过测试文件创建一个`app-test`组件。

::: code-tabs
@tab test.component.html

```html
<p>test works!</p>
```

@tab test.component.ts

```ts
import { Component } from '@angular/core'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent {}
```

:::

### 使用组件

`CLI`命令创建的组件会自动在模块文件`app.module.ts`中注册，如果是手动创建的需要在`NgModule`中的`declarations`中注册组件。

```ts
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { TestComponent } from './test/test.component'

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

在页面`app.component.html`中使用，此时会出现`test works!`字样。

```html
<app-test></app-test>
```

### 组件传参

在`Vue`中可以通过定义组件的`props`，在`Angular`需要使用`@Input()`的装饰器来传入数据。  
我们在`test.component.ts`中定义需要传入的参数`name`，在模版文件`test.component.html`中显示`name`，在`app.component.ts`中定义传入的值`testName`，最后在`app.component.html`中组件上绑定值。

::: code-tabs

@tab test.component.ts

```ts {9}
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  @Input() name!: string

  ngOnInit(): void {
    console.log(this.name)
  }
}
```

@tab test.component.html

```html {2}
<p>test works!</p>
<p>Name: {{ name }}</p>
```

@tab app.component.ts

```ts {8}
import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  testName = '测试名字'
}
```

@tab app.component.html

```html
<app-test [name]="testName"></app-test>
```

:::

### 监听事件

`app-test`组件现在能够接受外部的数据，有时候组件本身也需要和外部组件即父级组件进行交互，比如`app-test`组件中有个按钮，点击后需要通知父级组件，在`Vue`可以直接派发`emit`事件，而在`Angular`中使用`@Output()`装饰器来引发事件，以通知父组件这一变化。为了引发事件，`@Output()` 必须是 `EventEmitter` 类型，它是 `@angular/core` 中用来发出自定义事件的类。

#### 配置子组件

`test.component.html`中新增一个`Update Name`的按钮，点击后会执行`updateName`的方法,`test.component.ts`中需要先引入`Output`和`EventEmitter`，通过`@Output()`定义一个往外派发的`clickEvent`事件，`updateName`中调用`clickEvent`的`emit`方法。

::: code-tabs
@tab test.component.html

```html {3}
<p>test works!</p>
<p>Name: {{ name }}</p>
<button (click)="updateName()">Update Name</button>
```

@tab test.component.ts

```ts {1,10,16-18}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  @Input() name!: string
  @Output() clickEvent = new EventEmitter()

  ngOnInit(): void {
    console.log(this.name)
  }

  updateName() {
    this.clickEvent.emit()
  }
}
```

:::

#### 配置父组件

在`app.component.html`中将`clickEvent`绑定到模版中，子组件点击`Update Name`按钮会派发事件从而执行`app.component.ts`中定义的`handleClick()`方法修改`name`的值。

::: code-tabs
@tab app.component.html

```html
<app-test [name]="testName" (clickEvent)="handleClick()"></app-test>
```

@tab app.component.ts

```ts {10-12}
import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  testName = '测试名字'

  handleClick() {
    this.testName = 'liubing.me'
  }
}
```

:::

### 监听变化

有时候我们需要知道组件中的数据是否有变化，在 Vue 中可以通过`watch`去监听想要的数据变化，`Angular`中可以通过`OnChanges`的生命周期去监听数据变化。

我们在`test.component.ts`中引入`OnChanges`，在点击`Update Name`按钮的时候去会触发`ngOnChanges`，通过`changes['name']`可以取到`currentValue`新值和`previousValue`旧值。

```ts {5,16,20-24}
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnChanges, OnInit {
  @Input() name!: string
  @Output() clickEvent = new EventEmitter()

  ngOnChanges(changes: SimpleChanges): void {
    const { currentValue, previousValue } = changes['name']
    console.log('新值: ', currentValue)
    console.log('旧值: ', previousValue)
  }

  ngOnInit(): void {
    console.log(this.name)
  }

  updateName() {
    this.clickEvent.emit()
  }
}
```

刷新页面后会发现初始化的时候会默认触发一次`ngOnChanges`，`previousValue`旧值为`undefined`，其实`changes['name']`中还额外提供一个字段`firstChange`表示是否是首次变化，可以通过该字段是否为`true`去判断默认初始化的时候是否需要执行相关逻辑。

### 插槽使用(内容投影)

在`Angular`中插槽的叫法叫`内容投影`，具体可分为`单槽内容投影` `多槽内容投影` `条件内容投影`。

#### 单槽内容投影

使用方法和`Vue`类似，`Angular`中使用`<ng-content>`元素来指定插槽的内容。

::: info
`<ng-content>` 元素是一个占位符，它不会创建真正的 DOM 元素。`<ng-content>` 的那些自定义属性将被忽略。
:::

我接着上面的代码示例在`test.component.html`中在`Name`下方添加`<ng-content>`元素，然后在`app.component.html`就可以将插槽的内容应用到`app-test`组件中。

::: code-tabs
@tab test.component.html

```html {3}
<p>test works!</p>
<p>Name: {{ name }}</p>
<ng-content></ng-content>
<button (click)="updateName()">Update Name</button>
```

@tab app.component.html

```html {2}
<app-test [name]="testName" (clickEvent)="handleClick()">
  <div>我是默认插槽内容</div>
</app-test>
```

:::

#### 多插槽内容投影

一个组件可以具有多个插槽。每个插槽可以指定一个 CSS 选择器，该选择器会决定将哪些内容放入该插槽。该模式称为多插槽内容投影。使用此模式，你必须指定希望投影内容出现在的位置。你可以通过使用 `<ng-content>` 的 `select` 属性来完成此任务。

要创建使用多插槽内容投影的组件，请执行以下操作：

1. 创建一个组件
2. 在组件模板中，添加 `<ng-content>` 元素
3. 将 `select` 属性添加到 `<ng-content>` 元素上。`Angular` 使用的[选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)支持标签名、属性、CSS 类和 :not 伪类的任意组合。

在`test.component.html`中新增几个示例用的插槽：

- `select="[name=question1]"`指定一个`name`为`question1`的插槽。
- `select="question2"`指定一个`question2`的插槽，可以理解为上面的简写写法。
- `select=".test-slot"`指定一个`.test-slot`的插槽，使用`class="test-slot"`或者`class`中含有`test-slot`的元素都将显示在该插槽位置。
- `select="#test-slot"`指定一个`#test-slot`的插槽，使用`id="test-slot"`的的元素都将显示在该插槽位置。

最后在`app.component.html`中的`app-test`组件内部使用。

::: code-tabs
@tab test.component.html

```html {2,3,7,8}
<p>test works!</p>
<ng-content select="[name=question1]"></ng-content>
<ng-content select="question2"></ng-content>
<p>Name: {{ name }}</p>
<ng-content></ng-content>
<button (click)="updateName()">Update Name</button>
<ng-content select=".test-slot"></ng-content>
<ng-content select="#test-slot"></ng-content>
```

@tab app.component.html

```html {3-6}
<app-test [name]="testName" (clickEvent)="handleClick()">
  <div>我是默认插槽内容</div>
  <div name="question1">我是question1插槽内容</div>
  <div question2>我是question2插槽内容</div>
  <div class="test-slot">.test-slot</div>
  <div id="test-slot">#test-slot</div>
</app-test>
```

:::

## 其他待补充
