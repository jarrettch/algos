let list1 = [1, 2, 3]
let list2 = [4, 5, 6]

const newMerge3 = function(list1, list2) {
 let result = []
 let i = 0
 let j = 0
 while (i < list1.length || j < list2.length) {
 	if (list1[i]) {
		result.push(list1[i])
      	i++
 	}
 	if (list2[j]) {
		result.push(list2[j])
      	j++
 	}
 }
	return result
}

console.log(newMerge3(list1, list2))