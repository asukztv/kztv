function add_new_device(event){
    let new_device_form = get_active_new_device_form(event);
    let input_data = get_device_form_data(new_device_form);
    add_device_to_db(input_data)
    .done((new_device_log) => {
        $('#device-table').find('.new-device-form').last().after(new_device_log);
        $(new_device_form).remove();
    });
}

function cancel_add_new_device(event){
    let new_device_form = get_active_new_device_form(event);
    $(new_device_form).remove();
}

function cancel_update_device(event){
    let active_device_edit_form = get_active_device_edit_form(event);
    let device_id = get_device_form_data(active_device_edit_form).id;
    get_device_log(device_id)
    .done(old_device_log => {
        $(active_device_edit_form).replaceWith(old_device_log);
    })
}

function check_type(event){
    let select = event.target;
    let selected_type = $(select).children('option:selected').val();
    if(selected_type == 'new'){
        let new_type_input = '<input type="text" name="type" class="form-control" placeholder="Тип"></input>';
        $(select).after(new_type_input);
    }
    else{
        $(select).siblings('input').remove();
    }
}

function delete_device(event){
    let active_device_log = get_active_device_log(event);
    let device_id = get_device_log_data($(active_device_log)).id;
    delete_device_from_db(device_id)
    .done(() => {
        $(active_device_log).remove();
    })
}

function hide_device_more_info(event){
    let active_device_log = get_active_device_log(event);
    let device_additional_info = $(active_device_log).find('.additional-info');

    $(device_additional_info).animate({
            height: 0,
            padding: 0
    }, 500, function(){
        $(device_additional_info).remove()
    });

    let btn_more = event.currentTarget;
    $(btn_more).attr('onclick', 'show_device_more_info(event)');
}

function show_device_edit_form(event){
    let active_device_log = get_active_device_log(event);
    let device_id = get_device_log_data($(active_device_log)).id;
    get_device_form(device_id)
    .done(device_edit_form => {
        $(active_device_log).replaceWith(device_edit_form);
    })
}

function show_device_more_info(event){
    let active_device_log = get_active_device_log(event);
    let device_id = get_device_log_data($(active_device_log)).id;
    get_device_more_info(device_id)
    .done(device_additional_info_response => {
        $(active_device_log).children('.table-row-content').append(device_additional_info_response);
        let device_additional_info = $(active_device_log).find('.additional-info');
        let content_height = $(device_additional_info).children().first().height();

        $(device_additional_info).animate({
            height: content_height + 24,    //height = content_height + (padding-top + padding-bottom)
            padding: '12px'
        }, 500);
    });

    let btn_more = event.currentTarget;
    $(btn_more).attr('onclick', 'hide_device_more_info(event)');
}

function show_new_device_form(){
    get_device_form()
    .done(new_device_form => {
        $('#device-table').find('[name="body"]').prepend(new_device_form);  // table_rows from the Devices view
    })
}

function update_device(event){
    let active_device_edit_form = get_active_device_edit_form(event);
    let input_data = get_device_form_data(active_device_edit_form);
    update_device_in_db(input_data)
    .done(updated_device_log => {
        $(active_device_edit_form).replaceWith(updated_device_log);
    });
}