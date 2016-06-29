/* 

*/
function mergeSort (array, p, r) {
	if(array.length > 0) {
		var q = Math.floor((r-p)/2);
		var left = mergeSort(array, p, q);
		var right = mergeSort(array, q+1, r);
	}
}