function add_new_device(event){
    let new_device_form = get_active_new_device_form(event);
    let input_data = get_form_data(new_device_form);
    add_device_to_db(input_data)
    .done((new_device) => {
        new_device_data = JSON.parse(new_device);
        new_device_data = preteat_log_data(new_device_data);
        let new_device_log = generate_device_log(new_device_data);
        let table_last_log = $('table#device_table').children('tbody').children('.device-log:first');
            if(table_last_log.length){
                $(table_last_log).before($(new_device_log));
            }
            else{
                $('table#device_table').children('tbody').append($(new_device_log));
            }
            $(new_device_form).remove();
    });
}

function cancel_add_new_device(event){
    let new_device_form = get_active_new_device_form(event);
    $(new_device_form).remove();
}

function cancel_update_device(event){
    let active_device_edit_form = get_active_device_edit_form(event);
    let device_old = get_form_old_data(active_device_edit_form);
    device_old = preteat_log_data(device_old);
    let device_old_log = generate_device_log(device_old);
    $(active_device_edit_form).replaceWith($(device_old_log));
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
    $(active_device_log).next().remove();

    let btn_more = event.currentTarget;
    $(btn_more).attr('onclick', 'show_device_more_info(event)');
}

function show_device_edit_form(event){
    let active_device_log = get_active_device_log(event);
    let device_log_data = get_device_log_data(active_device_log);
    device_log_data = preteat_form_data(device_log_data);
    let device_edit_form = generate_edit_device_form(device_log_data);
    device_edit_form = save_form_old_data(device_edit_form);
    $(active_device_log).replaceWith($(device_edit_form));
}

function show_device_more_info(event){
    let active_device_log = get_active_device_log(event);
    let device_id = get_device_log_data($(active_device_log)).id;
    $(active_device_log).after('<tr class="addition_info"><td>Дополнительная информация об устройстве #' + device_id + '</td></tr>');

    let btn_more = event.currentTarget;
    $(btn_more).attr('onclick', 'hide_device_more_info(event)');
}

function show_new_device_form(){
    $('#device-table').find('[name="body"]').prepend($(table_rows.new_device_form));  // table_rows from the Devices view
}

function update_device(event){
    let active_device_edit_form = get_active_device_edit_form(event);
    let input_data = get_form_data(active_device_edit_form);
    update_device_in_db(input_data)
    .done((updated_device) => {
        updated_device = JSON.parse(updated_device);
        updated_device = preteat_log_data(updated_device);
        let updated_device_log = generate_device_log(updated_device);
        $(active_device_edit_form).replaceWith($(updated_device_log));
    });
}