/**
 * This function returns the minimum number of jumps a cat must take to get
 * from start to finish
 * @param {int} start 
 * @param {int} finish 
 * @returns int
 */
function solution(start, finish) {
    var diff = finish - start
    return Math.floor(diff / 3) + (diff % 3)
  }