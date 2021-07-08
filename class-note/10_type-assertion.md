# Type Assertion

## type assertion
```ts
const div = document.querySelector('#main') as HTMLDivElement;
div.innerHTML = 'hello';
```
이전에 에러난 코드를 type assertion을 이용하면 고칠 수 있었다.
```ts
setTimeout(() => {
    let tony = book.findContactByPhone(112222333, PhoneType.Home);
    let app = document.querySelector('#app') as HTMLDivElement;
    app.innerHTML = JSON.stringify(tony);
}, 1000);
```