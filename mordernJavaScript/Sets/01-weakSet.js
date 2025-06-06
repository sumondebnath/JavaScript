
    // We Can add only object in the WeakSet.

let ws = new WeakSet();

ws.add({a:10});
ws.add({a:20});
ws.add({a:30});
ws.add({a:20});
ws.add({a:10});

console.log(ws);