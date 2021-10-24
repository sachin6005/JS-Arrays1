var array = ['sachin', 'raviteja', 'harivishnu', 'benerzee', 'vamshi', 'dhanush']

console.log(array)
console.log(typeof(array))
console.log(array[1])
console.log(array[3])
console.log(array[5])

array.push('shubha')
console.log(array)

array.push('raghu')
console.log(array)

array.pop()
console.log(array)
array.pop()
console.log(array)

array[0] = 'M.SACHIN'
array[2] = 'HARIVISHNU'


array.splice(3,0,'newname1','newname2')
console.log(array)
array.splice(4,1)
console.log(array)

array.sort()
console.log(array)

array.reverse()
console.log(array)