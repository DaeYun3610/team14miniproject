/*function makeCard() {
    let title = $('#title').val();
    let name = $('#name').val();
    let txt = $('#txt').val();
    alert('저장되었습니다! 감사합니다');
    let temp_html = `
<p class="card-group">
<div class="card border-primary mb-3" style="max-width: 18rem;">
<div class="card-header">${title}</div>
<div class="card-body text-primary">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${txt}</p>
</div>
</p>`;
    $('#card').append(temp_html);
}
*/
function makeCard() {
    let title = $('#title').val();
    let name = $('#name').val();
    let txt = $('#txt').val();
    alert('저장되었습니다! 감사합니다');
    let temp_html = ` 
    <div id = "onecard" class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">${title}</div>
        <div class="card-body text-primary">
            <h5 class="card-title">${name}</h5>
            <div class="card-text">${txt}</div>
        </div>
    </div>
</div>`
    $('#cardcontainer').append(temp_html);
}

/*$(function(){
    $("#txt").keydown(function(e){
    if(e.key === 'Enter'){
        makeCard()
    }
 })

 })*/
 /*$("#txt").keydown(function(e){
    if(e.key === 'Enter'){
        makeCard()
    }
})*/

$(document).ready(function(){
    $("#txt").keydown(function(e){
        if(e.isComposing || e.keyCode === 229) return ;
        if(e.key === 'Enter'){
            makeCard()
        }
    })
})
