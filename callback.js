Function.prototype.myBind = function (context, ...args) {
  return (...callArgs) => {
    return this.apply(context, args.concat(callArgs));
  };
};

Array.prototype.quickSort = function(comparator) {
  if (arguments[1] === 10) {
    return this.sort(comparator);
  }

  this.quickSort(comparator, 10);
};

console.log([1,2, 4, 3].quickSort());
