var MyHashSet = /** @class */ (function () {
    function MyHashSet() {
        this.set = [];
    }
    MyHashSet.prototype.add = function (key) {
        if (this.set) {
            if (!this.set.includes(key)) {
                this.set.push(key);
            }
        }
    };
    MyHashSet.prototype.remove = function (key) {
        this.set = this.set.filter(function (value) { return value !== key; });
    };
    MyHashSet.prototype.contains = function (key) {
        if (this.set.includes(key)) {
            return true;
        }
        return false;
    };
    return MyHashSet;
}());
;
var myHashSet = new MyHashSet();
myHashSet.add(1);
//console.log(myHashSet);
myHashSet.add(2);
console.log(myHashSet);
// console.log(myHashSet.contains(1));
// console.log(myHashSet.contains(3));
myHashSet.add(2);
// console.log(myHashSet);     
// console.log(myHashSet.contains(2));
myHashSet.remove(2);
console.log(myHashSet);
console.log(myHashSet.contains(2));
/**
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/ 
