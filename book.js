function makeCard() {
    let title = $('#title').val();
    let name = $('#name').val();
    let txt = $('#txt').val();
    alert('저장되었습니다! 감사합니다');
    let temp_html = `
<p class="card-group">
<div class="card border-primary mb-3" style="max-width: 18rem;">
<div class="card-header">홍길동</div>
<div class="card-body text-primary">
    <h5 class="card-title">14조 화이팅</h5>
    <p class="card-text">응원합니다.</p>
</div>
</p>`;
    $('#card').append(temp_html);
}