$(document).ready(function () {
    $('.accordion_title').click(function () {
      $(".accordion_content").not($(this).next()).slideUp(400);
      $(this).next().slideToggle(400);
      $(".accordion_item").not($(this).closest(".accordion_item")).removeClass("open-acc");
      $(this).closest(".accordion_item").toggleClass("open-acc");
    });
});
prop_card = document.getElementById('prop-grid')
function fill() {
  prop_card.innerHTML = ''
  for (let i = 0; i < data.length; i++) {
    var property = data[i];
    // console.log(property)
    var prop_data;
    prop_data = `
      <div class="prop_card">
        <div class="prop_image">
        <img src="${property.img}" alt="a crib" />
        </div>
        <div class="prop_card_content">
          <p class="prop_type">
            ${property.type}
          </p>
          <div class="prop_addr">
            <p>${property.addr}</p>
            <span class="iconify" data-inline="false" data-icon="bi:bookmark" style="color: #5628d2; font-size: 25px; margin-left: auto;" onclick="javascript:alert('Property has been bookmarked.');" id="bb"></span>
          </div>
          <div class="more">MORE --></div>						
        </div>
      </div>
    `
    if (property.loc != 'ot') {
      prop_card.innerHTML+=prop_data
    }
  };
};
function filter(fq, ft) {
  // console.log(fq, ft)
  prop_card.innerHTML = ''
  for (let i = 0; i < data.length; i++) {
    var property = data[i];
    var prop_data;
    prop_data = `
      <div class="prop_card">
        <div class="prop_image">
        <img src="${property.img}" alt="a crib" />
        </div>
        <div class="prop_card_content">
          <p class="prop_type">
            ${property.type}
          </p>
          <div class="prop_addr">
            <p>${property.addr}</p>
            <span class="iconify" data-inline="false" data-icon="bi:bookmark" style="color: #5628d2; font-size: 25px; margin-left: auto;" onclick="javascript:alert('Property has been bookmarked.');" id="bb"></span>
          </div>
          <div class="more">MORE --></div>						
        </div>
      </div>
    `
    // console.log(property[ft] == fq)
    if (property[ft] == fq) {
      prop_card.innerHTML+=prop_data
    }
  }
  // d = document.getElementById(ft)
  // d.innerHTML+='<span class="iconify" data-inline="false" data-icon="ant-design:check-circle-filled" style="color: #5628d2; font-size: 22px;"></span>'
};
function search(sq) {
  prop_card.innerHTML = ''
  for (let i = 0; i < data.length; i++) {
    var property = data[i];
    var prop_data;
    prop_data = `
      <div class="prop_card">
        <div class="prop_image">
        <img src="${property.img}" alt="a crib" />
        </div>
        <div class="prop_card_content">
          <p class="prop_type">
            ${property.type}
          </p>
          <div class="prop_addr">
            <p>${property.addr}</p>
            <span class="iconify" data-inline="false" data-icon="bi:bookmark" style="color: #5628d2; font-size: 25px; margin-left: auto;" onclick="javascript:alert('Property has been bookmarked.');" id="bb"></span>
          </div>
          <div class="more">MORE --></div>						
        </div>
      </div>
    `
    if (((property.type.toLowerCase()).indexOf(sq.toLowerCase())) > -1) {
      prop_card.innerHTML+=prop_data
    }	

  }		
}

