function func1(callback) {
  setTimeout(() => {
    console.log("task1");
    callback();
  }, 3000);
}

function func2() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
}

func1(func2);
