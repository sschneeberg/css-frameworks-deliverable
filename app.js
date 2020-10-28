//This is an attempt at sliding cards that is too complicated and will be reworked
/*
function toggleSize(e) {
    const classlist = e.target.classList;
    classlist.add('clicked');
    const classlistArray = Array.from(e.target.classList);
    console.log(classlist);
    if (classlistArray.indexOf('s3') != -1) {
        //normal sized card
        classlist.remove('s3');
        classlist.add('s6'); //make big
        document.querySelectorAll('.expander').forEach(function(e) {
            let classlist = e.target.classList;
            const classlistArray = Array.from(e.target.classList);
            if (classlistArray.indexOf('s3') != -1) {
                classlist.remove('s3');
                classlist.add('s2');
            }
        })
    } else if (classlistArray.indexOf('s6') != -1) {
        //big card
        classlist.splice(classList.indexOf('s6'), 1);
        classlist.push('s3'); //make normal
        if (classlistArray.indexOf('s2') != -1) {
            classlist.remove('s2');
            classlist.add('s3');
        }
    }

} */

document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    //add click listeners to section4 cols to change 's4' to s6 on clicked one and s2 on everything else
    //if already clicked or if another clicked turn everything back to s4 or shift which is s6 
    /*document.querySelectorAll('.expander').forEach(function(e) {
        e.addEventListener('click', toggleSize);
    })*/
});

/* Note: inserting element through javascript does not work b/c hidden classes are at work to create the animation

<div class="container3">
<div class="progress">
<div class="indeterminate"></div>
</div>
</div> 

const container3 = document.createElement('div');
container3.classList.add('container3');
const loadMsg = document.querySelector('.loading');
document.getElementById('three').insertBefore(container3, loadMsg);

const progress = document.createElement('div');
progress.classList.add('progress');
container3.appendChild(progress);

const indeterminate = document.createElement('div');
indeterminate.classList.add('indeterminate');
progress.appendChild('indeterminate');

*/