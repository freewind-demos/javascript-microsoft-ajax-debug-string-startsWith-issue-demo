JavaScript Microsoft Ajax Debug JS "String.startsWith" Issue Demo
=================================================================

MS的`MicrosoftAjax.debug.js`定义了如下的startsWith:

```
String.prototype.startsWith = function String$startsWith(prefix) {
    var e = Function._validateParams(arguments, [
        {name: "prefix", type: String}
    ]);
    if (e) throw e;
    return (this.substr(0, prefix.length) === prefix);
}
```

当传的参数个数大于1时，它会直接报错，而其它库（比如core-js/babel-polyfill）会向其传入两个参数，导致报错。

这可以认为是`MicrosoftAjax.debug.js`的一个bug，在它没有被解决前，我们只能通过判断并替换掉它的内部实现。

```
npm install
npm demo
```

Open browser console to see logging.
