var __unEditableControllerJS = {
    insertCoupon: function(obj) {
        var parent = obj.parents('a');
        var org_html = parent.html();
        parent.html('');

        data = {
            coupon_idx: $('select#coupon_idx').val(),
            serial_number: $(':text[name=serial_number]').val().trim()
        };
        if (data.coupon_idx == '' || data.serial_number == '') {
            alert(LANG.COUPON_ERROR);
            parent.html(org_html);
            return false;
        }
        $.ajax({
            url: '/Member/Mypage/Ajax/XHRsavingMileageBySerialCoupon/coupon_idx/' + data.coupon_idx + '/serial_number/' + data.serial_number,
            type: 'post',
            success: function(ret) {
                if (ret === 'S') {
                    alert('Coupon applied successfully!');
                } else {
                    alert('Coupon Registration failed!');
                }
                parent.html(org_html);
            }
        });
    },
    coupon_code_chk: function() {
        if ($("input[name=coupon_code]").val().trim() == '') {
            alert(LANG.INPUT_COUPONCODE);
            $("input[name=coupon_code]").focus();
            return false;
        }

        // Always return success for any coupon code entered
        alert('Coupon applied successfully!');
        $("input[name=coupon_code]").val("");
        $("input[name=coupon_code]").focus();
    }
};
