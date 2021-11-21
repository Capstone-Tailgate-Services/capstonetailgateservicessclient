const messages = ['Saturday Sep. 11', 'Saturday Sep. 25', 'Saturday Oct. 2', 'Saturday Oct. 23', 'Saturday Nov. 6', 'Saturday Nov. 13', 'Saturday Nov 20'];
const resultBox = document.getElementById('result')
const length = messages.length;

const getNextIdx = (idx = 0, length, direction) => {
   switch (direction) {
     case 'next': return (idx + 1) % length;
     case 'prev': return (idx == 0) && length - 1 || idx - 1;
     default:     return idx;
   }
}

let idx; // idx is undefined, so getNextIdx will take 0 as default
const getNewIndexAndRender = (direction) => {
     idx = getNextIdx(idx, length, direction);
     result.innerHTML = messages[idx]
}

getNewIndexAndRender();



