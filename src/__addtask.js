function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (ck) {pug_html = pug_html + "\u003Csection\u003E";
if ((ck.permision_modifytask === 'true')) {
pug_html = pug_html + "\u003Carticle class=\"container mt-5\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-lg-8\"\u003E\u003Cform class=\"box card validator border-primary\" id=\"addtask\" role=\"validator\"\u003E\u003Cdiv class=\"card-header bg-primary text-white\" ripple=\"ripple\"\u003E\u003Ch2 class=\"h5 mb-0\"\u003EThêm nhiệm vụ\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card-body p-3\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-lg\"\u003E\u003Cdiv class=\"form-label-group mb-4\"\u003E\u003Cinput class=\"form-control\" id=\"text\" type=\"text\" placeholder=\"Tên nhiệm vụ\" required=\"required\"\u002F\u003E\u003Clabel for=\"text\"\u003ETên nhiệm vụ\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-lg\"\u003E\u003Cdiv class=\"input-group mb-4\"\u003E\u003Cdiv class=\"input-group-prepend\"\u003E\u003Cspan class=\"input-group-text\"\u003EĐộ ưu tiên\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cselect class=\"custom-select\" id=\"select\" required=\"required\"\u003E\u003Coption value=\"0\"\u003ELow\u003C\u002Foption\u003E\u003Coption value=\"1\" selected=\"selected\"\u003ENormal\u003C\u002Foption\u003E\u003Coption value=\"2\"\u003EMedium\u003C\u002Foption\u003E\u003Coption value=\"3\"\u003EHigh\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"input-group mb-4\"\u003E\u003Cdiv class=\"input-group-prepend\"\u003E\u003Cspan class=\"input-group-text\"\u003ETạo bởi\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-control\" id=\"cru\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-label-group mb-4\"\u003E\u003Cinput class=\"form-control\" id=\"datepicker\" type=\"text\" placeholder=\"Active Date (dd\u002Fmm\u002Fyyyy)\" autocomplete=\"off\" required=\"required\"\u002F\u003E\u003Clabel for=\"datepicker\"\u003ENgày có hiệu lực\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-lg\"\u003E\u003Cdiv class=\"form-group mb-4\"\u003E\u003Cdiv class=\"custom-file\"\u003E\u003Cinput class=\"custom-file-input\" id=\"customFile\" type=\"file\" name=\"customFile\"\u002F\u003E\u003Clabel class=\"custom-file-label\" id=\"customFileLabel\" for=\"customFile\"\u003EChọn tập tin\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"input-group mb-4\"\u003E\u003Cdiv class=\"input-group-prepend\"\u003E\u003Cspan class=\"input-group-text\"\u003ENgười nhận\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cselect class=\"custom-select select2\" id=\"asuser\" required=\"required\"\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-label-group mb-4\"\u003E\u003Cinput class=\"form-control\" id=\"color\" type=\"text\" placeholder=\"Dự kiến (VD: 3h, 1d...)\"\u002F\u003E\u003Clabel for=\"color\"\u003EDự kiến (VD: 3h, 1d...)\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-lg\"\u003E\u003Cdiv class=\"form-label-group mb-4\"\u003E\u003Cinput class=\"form-control\" id=\"material\" type=\"text\" placeholder=\"Chất liệu\"\u002F\u003E\u003Clabel for=\"material\"\u003EChất liệu\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-lg\"\u003E\u003Cdiv class=\"form-label-group mb-4\"\u003E\u003Cinput class=\"form-control\" id=\"namepro\" type=\"text\" placeholder=\"Tên dự án\"\u002F\u003E\u003Clabel for=\"namepro\"\u003ETên dự án\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col\"\u003E\u003Cdiv class=\"form-label-group mb-4\"\u003E\u003Ctextarea class=\"form-control\" id=\"message\" rows=\"4\" placeholder=\"Description\" required=\"required\"\u003E\u003C\u002Ftextarea\u003E\u003Clabel for=\"message\"\u003ENội dung\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col text-right\"\u003E\u003Cbutton class=\"add-button btn btn-primary\" type=\"submit\" name=\"btnAddNew\" ripple=\"ripple\"\u003EThêm mới\u003Ci class=\"fa fa-save ml-2\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-lg-4\"\u003E\u003Ch5 class=\"h5 mb-4\"\u003EXem trước\u003C\u002Fh5\u003E\u003Cul class=\"sortable connectedSortable list-group\" data-step=\"step-2\"\u003E\u003Cli class=\"list-group-item list-group-item-action status-1\"\u003E\u003Cdiv class=\"move\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"content\"\u003E\u003Cdiv class=\"pot pot-1\"\u003E\u003Ca href=\"javascript:void(0)\"\u003E\u003Ch3 data-text=\"data-text\"\u003ETiêu đề\u003C\u002Fh3\u003E\u003C\u002Fa\u003E\u003Cp class=\"mb-0 pb-2 pr-5\"\u003E\u003Cspan data-message=\"data-message\"\u003ENội dung\u003C\u002Fspan\u003E\u003Cbutton class=\"pdf btn btn-link btn-sm\" type=\"button\"\u003EXem PDF\u003Ci class=\"fa fa-file-pdf ml-2\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003Cbutton class=\"btn btn-sm btn-tg\" type=\"button\" data-toggle=\"collapse\" data-target=\"#demotoggle\" aria-expanded=\"false\" aria-controls=\"demotoggle\"\u003E\u003Ci class=\"fa fa-angle-down\"\u003E\u003C\u002Fi\u003E\u003C\u002Fbutton\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"collapse collapse show\" id=\"demotoggle\"\u003E\u003Cdiv class=\"details small\"\u003E\u003Chr\u002F\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col\"\u003E\u003Ci class=\"fa fa-briefcase mr-2\"\u003E\u003C\u002Fi\u003E\u003Ca href=\"javascript:void(0)\" data-namepro=\"data-namepro\"\u003ETên dự án\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-auto\"\u003E\u003Cspan data-color=\"data-color\"\u003EDự kiến\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-auto\"\u003E\u003Cspan data-material=\"data-material\"\u003EChất liệu\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Chr\u002F\u003E\u003Cdiv class=\"create small\"\u003E\u003Cdiv class=\"row no-gutters\"\u003E\u003Cdiv class=\"col\"\u003E\u003Ci class=\"fa fa-user mr-2\"\u003E\u003C\u002Fi\u003E\u003Ca href=\"javascript:void(0)\"\u003ENgười tạo\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-auto\"\u003E\u003Cspan class=\"text-date timedemo\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Chr\u002F\u003E\u003Cdiv class=\"row no-gutters\"\u003E\u003Cdiv class=\"col\"\u003E\u003Ci class=\"fa fa-cog mr-2\"\u003E\u003C\u002Fi\u003E\u003Ca href=\"javascript:void(0)\"\u003ENgười thực hiện\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-auto\"\u003E\u003Cspan class=\"text-date timedemo\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003Ch5 class=\"h5 mt-4\"\u003EChú thích\u003C\u002Fh5\u003E\u003Chr\u002F\u003E\u003Cp class=\"mb-1\"\u003E\u003Cstrong\u003EL\u003C\u002Fstrong\u003E: low - độ ưu tiên thấp\u003C\u002Fp\u003E\u003Cp class=\"mb-1\"\u003E\u003Cstrong\u003EN\u003C\u002Fstrong\u003E: normal - độ ưu tiên mặc định\u003C\u002Fp\u003E\u003Cp class=\"mb-1\"\u003E\u003Cstrong\u003EM\u003C\u002Fstrong\u003E: medium - độ ưu tiên trung bình\u003C\u002Fp\u003E\u003Cp class=\"mb-1\"\u003E\u003Cstrong\u003EH\u003C\u002Fstrong\u003E: high - độ ưu tiên cao\u003C\u002Fp\u003E\u003Cp class=\"mb-1 small\"\u003EThời gian của\u003Ccode class=\"ml-2 mr-2\"\u003ENgười thực hiện\u003C\u002Fcode\u003Esẽ được tính từ khi nhiệm vụ được kéo sang bảng thực hiện.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Farticle\u003E";
}
pug_html = pug_html + "\u003C\u002Fsection\u003E";}.call(this,"ck" in locals_for_with?locals_for_with.ck:typeof ck!=="undefined"?ck:undefined));;document.write(huUmDVVqcl);;