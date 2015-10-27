
//global variables and global functions must start with 'gemni_'
//var gemni_fusiontables_test_data_source = '1W8Ey9xunQSlPonnswPmDzteNigcs6BiGyMDqebU8';
var gemni_fusiontables_data_source = '1iaRPBwrhj9ARVg7zVtRwIosPpGz5tLotzJ5faFWo';
//var gemni_fusiontables_proxy_url = 'https://script.google.com/macros/s/AKfycbzin3CdprjOHd82n0__7jFww1X7uUF5Q3V8QbOsDP0sPkbqsBw/exec';
var gemni_fusiontables_proxy_url = 'https://script.google.com/macros/s/AKfycbzibxv690AXZaU8aBe62N4G6WQuWRcOCt63lowhBTCQVxAKhQ/exec';

window['gemni_oauth2_url'] = 'https://accounts.google.com/o/oauth2/auth';
window['gemni_oauth2_client_id'] = '1050962967129-23bddqdtu08rr7sr1h8aqci6sre0n98k.apps.googleusercontent.com';
window['gemni_oauth2_scopes'] = ['https://www.googleapis.com/auth/fusiontables', 'https://www.googleapis.com/auth/userinfo.profile'];
window['gemni_api_key'] = 'AIzaSyBCtOJekpZmo0yLArsg0N00yQgELV4Z8S4';
window['gemni_fusiontables_api'] = 'https://www.googleapis.com/fusiontables/v2/query';
window['gemni_fusiontables_scope'] = 'https://www.googleapis.com/auth/fusiontables';
window['gemni_oauth2_request'] =
{
	authUrl : window['gemni_oauth2_url'],
	clientId : window['gemni_oauth2_client_id'],
	scopes : window['gemni_oauth2_scopes']
};
//var gemni_fusiontables_scope = window['gemni_fusiontables_scope'];
var gemni_markers = [];
var gemni_main_div;
var gemni_map_div;
var gemni_map;
var gemni_map_min_zoom = 3;
var gemni_overlay;
var gemni_panorama_div;
var gemni_panorama;
var gemni_panorama_mode = 0;
var gemni_panorama_visible = 1;
//var gemni_panorama_menu;
var gemni_panorama_menu_div;
var gemni_interval;
var gemni_clusterer;
var gemni_auto_complete;
var gemni_auto_complete_on_map;
var gemni_auto_complete_input;
var gemni_filter_input;
var gemni_auto_complete_div;
var gemni_text_input_div;
var gemni_content_div;
var gemni_map_context_menu;
var gemni_map_marker_partial_context_menu;
var gemni_map_marker_full_context_menu;
var gemni_panorama_context_menu;
var gemni_panorama_marker_partial_context_menu;
var gemni_panorama_marker_full_context_menu;
var gemni_ignore_panorama_location = true;
var gemni_loaded_cookie = false;
var gemni_loaded_url = false;
//var gemni_usertoken = window['gemni_usertoken'];
//var gemni_test_data_access = window['gemni_test_data_access'];
window['gemni_must_test_data_access'] = false;
var gemni_has_data_access = false;
var gemni_geocoder = new google.maps.Geocoder();
var gemni_map_geocoder_marker;
var gemni_map_geocoder_marker_context_menu;
var gemni_panorama_geocoder_marker;
var gemni_panorama_geocoder_marker_context_menu;
//var gemni_panorama_address_control_options = ;
var gemni_panorama_circle = new google.maps.Circle({center: new google.maps.LatLng(0, 0), radius: 500, strokeWeight: 0});
var gemni_map_initial_latlng;
var gemni_map_initial_zoom;
var gemni_map_initial_type;
var gemni_panorama_initial_position;
var gemni_panorama_initial_pov;
//var gemni_cookie_data;
var gemni_cookie_values;
//var gemni_panorama_initial_mode;
var gemni_future_marker_click_full;
var gemni_future_marker_click_id;
var gemni_future_marker_click_on_panorama;
var gemni_preloaded_marker_click_id;
var gemni_preloaded_marker_click_on_panorama;
var gemni_gdata_load = false;
//var gemni_need_logout_button = window['gemni_need_logout_button'];
window['gemni_need_logout_button'] = false;
var gemni_restart_button_div;
var gemni_logout_button_div;
var gemni_location_button_div;
var gemni_geocoder_marker_initial_position;
var gemni_geocoder_marker_click_on_panorama = false;
var gemni_locale;
var gemni_initial_user_location;
var gemni_filter_input_subdiv;
var gemni_auto_complete_input_subdiv;
var gemni_map_layers_toggle_subdiv;
var gemni_button_bar_subdiv;
var gemni_reload_bounds;
var gemni_moved_marker_id;
var gemni_disposition_button_div;
var gemni_fullscreen_button_div;
var gemni_fullscreen_button;
var gemni_panorama_center_button_div;
var gemni_extra_panorama_buttons_subdiv;
var gemni_panorama_menu_subdiv;
var gemni_user_location_available = geo_position_js.init();
var gemni_drawing_manager;
//var gemni_map_add_marker_button_div;
var gemni_search_button_div;
var gemni_filter_button_div;
var gemni_layers_button_div;
var gemni_map_layers;
var gemni_map_layers_togglers;
var gemni_map_layers_toggle_div;
var gemni_mobile = false;
var gemni_panorama_was_visible = false;
var gemni_oauth2_refresh;
var gemni_marker_counter_span;
//var gemni_mouseover_marker_in_panorama = false;
//var gemni_client = window['gemni_client'];
/*window[''] = function(data)
{
	
}*/
window['gemni_client'] = {};

jQuery.support.placeholder = false;
test = document.createElement('input');
if('placeholder' in test)
{
	jQuery.support.placeholder = true;
}

function gemni_check_mobile()
{
	var a = navigator.userAgent||navigator.vendor||window.opera;
	if(/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
	{
		gemni_mobile = true;
	}
	//gemni_mobile = false;
}

function gemni_check_input_placeholder(input)
{
	if(!jQuery.support.placeholder)
	{
		input.onfocus = function()
		{
			if (input['placeholder'] != '' && input.className == 'hasPlaceholder')
			{
				input.value = '';
				input.className = '';
			}
		};
		input.onblur = function()
		{
			if (input['placeholder'] != '' && (input.value == '') && (input.className != 'hasPlaceholder'))
			{
				input.value = input['placeholder'];
				input.className = 'hasPlaceholder';
			}
		};
		if (input.value == '')
		{
			input.value = input['placeholder'];
			input.className = 'hasPlaceholder';
		}
	}
}

function gemni_check_filter_placeholder()
{
	if(!jQuery.support.placeholder)
	{ 
		//alert("doesnt support placeholder!");
		var current = gemni_filter_input;
		//alert(current != null);
		current.onfocus = function()
		{
			if (current['placeholder'] != '' && current.className == 'hasPlaceholder')
			{
				current.value = '';
				current.className = '';
			}
		};
		current.onblur = function()
		{
			if (current['placeholder'] != '' && (current.value == '') && (current.className != 'hasPlaceholder'))
			{
				current.value = current['placeholder'];
				current.className = 'hasPlaceholder';
			}
		};
		current.value = current['placeholder'];
		current.className = 'hasPlaceholder';
	}
	else
	{
		//alert("support placeholder!");
	}
}

function gemni_check_auto_complete_placeholder()
{
	if(!jQuery.support.placeholder)
	{ 
		//alert("doesnt support placeholder!");
		//var current = $('gemni_auto_complete_input');
		var current = gemni_auto_complete_input;
		//alert(current != null);
		current.onfocus = function()
		{
			if (current['placeholder'] != '' && current.className == 'hasPlaceholder')
			{
				current.value = '';
				current.className = '';
			}
		};
		current.onblur = function()
		{
			if (current['placeholder'] != '' && (current.value == '') && (current.className != 'hasPlaceholder'))
			{
				current.value = current['placeholder'];
				current.className = 'hasPlaceholder';
			}
		};
		current.value = current['placeholder'];
		current.className = 'hasPlaceholder';
	}
	else
	{
		//alert("support placeholder!");
	}
}

/*function loadjscssfile(filename, filetype)
{
	if (filetype == "js")
	{ //if filename is a external JavaScript file
		var fileref = document.createElement('script');
		fileref.setAttribute("type","text/javascript");
		fileref.setAttribute("src", filename);
		//document.getElementsByTagName("head")[0].appendChild(fileref);
	}
	else if (filetype == "css")
	{ //if filename is an external CSS file
		var fileref = document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
		//document.getElementsByTagName("head")[0].appendChild(fileref);
	}
	if (typeof fileref!="undefined")
	{
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}*/

function gemni_build_geocoder_markers(map, panorama)
{
	var latlng = new google.maps.LatLng(0, 0);
	//var symbol = {path: google.maps.SymbolPath.CIRCLE};
	gemni_map_geocoder_marker = new google.maps.Marker
	({
		position: latlng, 
		cursor: 'pointer',
		label: ' ',
		zIndex: -1,
		visible: false,
		draggable: false
	});
	gemni_panorama_geocoder_marker = new google.maps.Marker
	({
		position: latlng, 
		cursor: 'pointer',
		label: ' ',
		zIndex: -1,
		visible: false,
		draggable: false
	});
	gemni_create_geocoder_marker_infowindow_contents(gemni_map_geocoder_marker);
	gemni_create_geocoder_marker_infowindow_contents(gemni_panorama_geocoder_marker);
	
	google.maps.event.addListener(gemni_map_geocoder_marker, 'dragend', gemni_dragend_geocoder_marker);
	google.maps.event.addListener(gemni_panorama_geocoder_marker, 'dragend', gemni_dragend_geocoder_marker);
		
	gemni_map_geocoder_marker_context_menu = new MapMarkerContextMenu(gemni_map, gemni_overlay);
	/*if (gemni_has_data_access)
	{
		
	}*/
	/*gemni_map_geocoder_marker_context_menu.addItem('Search position'.toLocaleString(), null, 'Search marker position data'.toLocaleString(), 'search', function(map, marker, latlng)
	{
		gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker);
		gemni_discover_place_info(marker);
		if (!marker.getInfoState())
		{
			if (!marker.getInfoWindow())
			{
				gemni_create_marker_infowindow_contents(marker);
			}
			marker.getInfoWindow().close();
			marker.getBrother().setInfoState(false);
			marker.getInfoWindow().open(map, marker);
			marker.setInfoState(true);
			//discoverPlaceInfo(marker.getPosition(), infowindow);
		}
		else
		{
			
		}
	});*/
	gemni_map_geocoder_marker_context_menu.addItem('Delete activity'.toLocaleString(), null, 'Delete this activity'.toLocaleString(), 'delete', function(map, marker, latlng)
	{
		gemni_map_geocoder_marker.setMap(null);
		gemni_panorama_geocoder_marker.setMap(null);
	});
	gemni_map_geocoder_marker_context_menu.addItem('Center map'.toLocaleString(), null, 'Center map here'.toLocaleString(), 'center', function(map, marker, latlng)
	{
		if (gemni_panorama_mode != 2 || !gemni_panorama.getVisible())
		{
			gemni_map.panTo(latlng);
		}
	});
	gemni_map_geocoder_marker_context_menu.addItem('Show panorama'.toLocaleString(), null, 'Show panorama here'.toLocaleString(), 'pegman', function(map, marker, latlng)
	{
		gemni_panorama.setPosition(latlng);
		if (!gemni_panorama.getVisible())
		{
			gemni_panorama.setVisible(true);
		}
	});
	gemni_map_geocoder_marker_context_menu.addControl(gemni_map_geocoder_marker);
	gemni_install_longclick(gemni_map_geocoder_marker, 500);
	
	gemni_panorama_geocoder_marker_context_menu = new PanoramaMarkerContextMenu(gemni_panorama, gemni_panorama_div);
	
	/*gemni_panorama_geocoder_marker_context_menu.addItem('Search position'.toLocaleString(), null, 'Search marker position data'.toLocaleString(), 'search', function(panorama, marker, latlng)
	{
		gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker);
		gemni_discover_place_info(marker.getBrother());
		if (!marker.getInfoState())
		{
			if (!marker.getInfoWindow())
			{
				gemni_create_marker_infowindow_contents(marker);
			}
			marker.getBrother().setInfoState(false);
			marker.getInfoWindow().open(panorama, marker);
			marker.setInfoState(true);
			//discoverPlaceInfo(marker.getBrother().getPosition(), infowindow);
		}
		else
		{
			
		}
	});*/
	gemni_panorama_geocoder_marker_context_menu.addItem('Delete activity'.toLocaleString(), null, 'Delete this activity'.toLocaleString(), 'delete', function(panorama, marker, latlng)
	{
		gemni_map_geocoder_marker.setMap(null);
		gemni_panorama_geocoder_marker.setMap(null);
	});
	gemni_panorama_geocoder_marker_context_menu.addItem('Center map'.toLocaleString(), null, 'Center map here'.toLocaleString(), 'center', function(panorama, marker, latlng)
	{
		gemni_map.panTo(latlng);
		if (gemni_panorama_mode != 2 || !gemni_panorama.getVisible())
		{
			
		}
	});
	gemni_panorama_geocoder_marker_context_menu.addItem('Show panorama'.toLocaleString(), null, 'Show panorama here'.toLocaleString(), 'pegman', function(panorama, marker, latlng)
	{
		gemni_panorama.setPosition(latlng);
		if (!gemni_panorama.getVisible())
		{
			gemni_panorama.setVisible(true);
		}
	});
	gemni_panorama_geocoder_marker_context_menu.addControl(gemni_panorama_geocoder_marker);
	gemni_install_longclick(gemni_panorama_geocoder_marker, 500);
	
	google.maps.event.addListener(gemni_map_geocoder_marker, 'click', function()
	{
		//gemni_set_geocoder_marker_contents(marker);
		//alert("click");
		if (gemni_map_geocoder_marker_context_menu.getCurrentControl() == gemni_map_geocoder_marker)
		{
			return;
		}
		if (!gemni_map_geocoder_marker.getInfoState())
		{
			if (gemni_panorama_geocoder_marker.getInfoState())
			{
				gemni_panorama_geocoder_marker.setInfoState(false);
				gemni_panorama_geocoder_marker.getInfoWindow().close();
			}
			gemni_map_geocoder_marker.setInfoState(true);
			gemni_map_geocoder_marker.getInfoWindow().open(gemni_map, gemni_map_geocoder_marker);
		}
		else
		{
			gemni_map_geocoder_marker.setInfoState(false);
			gemni_panorama_geocoder_marker.setInfoState(false);
			gemni_map_geocoder_marker.getInfoWindow().close();
		}
	});
	google.maps.event.addListener(gemni_panorama_geocoder_marker, 'click', function()
	{
		//alert("click");
		//gemni_set_geocoder_marker_contents(marker.getBrother());
		if (gemni_panorama_geocoder_marker_context_menu.getCurrentControl() == gemni_panorama_geocoder_marker)
		{
			return;
		}
		if (!gemni_panorama_geocoder_marker.getInfoState())
		{
			if (gemni_map_geocoder_marker.getInfoState())
			{
				gemni_map_geocoder_marker.setInfoState(false);
				gemni_map_geocoder_marker.getInfoWindow().close();
			}
			gemni_panorama_geocoder_marker.setInfoState(true);
			gemni_panorama_geocoder_marker.getInfoWindow().open(gemni_panorama, gemni_panorama_geocoder_marker);
		}
		else
		{
			gemni_panorama_geocoder_marker.setInfoState(false);
			gemni_map_geocoder_marker.setInfoState(false);
			gemni_panorama_geocoder_marker.getInfoWindow().close();
		}
	});
	
	gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
	gemni_set_geocoder_marker_contents(gemni_panorama_geocoder_marker, '');
	//alert("build ok");
}

function gemni_clear_infowindow_listeners(infowindow)
{
	google.maps.event.clearListeners(infowindow, 'closeclick');
}

function gemni_create_cookie(name,value,days)
{
	if (days)
	{
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else
	{
		var expires = "";
	}
	document.cookie = name+"="+value+expires+"; path=/";
}

function gemni_read_cookie(name)
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++)
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function gemni_erase_cookie(name)
{
	gemni_create_cookie(name,"",-1);
}

function gemni_clear_marker_listeners(marker)
{
	google.maps.event.clearListeners(marker, 'dragstart');
	google.maps.event.clearListeners(marker, 'dragend');
	google.maps.event.clearListeners(marker, 'click');
	google.maps.event.clearListeners(marker, 'rightclick');
	google.maps.event.clearListeners(marker, 'dblclick');
	google.maps.event.clearListeners(marker, 'longpress');
	google.maps.event.clearListeners(marker, 'mouseover');
	google.maps.event.clearListeners(marker, 'mouseout');
	if (marker.getInfoWindow())
	{
		gemni_clear_infowindow_listeners(marker.getInfoWindow());
	}
	if (marker.getEditorWindow())
	{
		gemni_clear_infowindow_listeners(marker.getEditorWindow());
	}
}

/*function sendGet(url) {
	jQuery.get(url);
}*/

function gemni_move_marker(rowID)
{
	var marker = gemni_find_marker(rowID);
	if (marker)
	{
		gemni_moved_marker_id = rowID;
	}
	//alert("gemni_move_marker " + rowID);
}

function gemni_close_editorwindow(rowID)
{
	var marker = gemni_find_marker(rowID);
	if (marker)
	{
		var editor_window = marker.getEditorWindow();
		if (editor_window)
		{
			marker.setDraggable(false);
			marker.getBrother().setDraggable(false);
			editor_window.setWindowState(false);
			editor_window.close();
		}
	}
}

function gemni_reset_editorwindow(form)
{
	form.reset();
}

function gemni_submit_editorwindow(form)
{
	var title_input = form['title_text'];
	var date_input = form['date_text'];
	var address_input = form['address_text'];
	var contact_input = form['contact_text'];
	var modalities_input = form['modalities_text'];
	var comments_input = form['comments_area'];
	
	var title = title_input['className'] == 'hasPlaceholder' ? '' : title_input['value'];
	var date = date_input['className'] == 'hasPlaceholder' ? '' : date_input['value'];
	var address = address_input['className'] == 'hasPlaceholder' ? '' : address_input['value'];
	var contact = contact_input['className'] == 'hasPlaceholder' ? '' : contact_input['value'];
	var modalities = modalities_input['className'] == 'hasPlaceholder' ? '' : modalities_input['value'];
	
	var access = (form['access_radio'].value == 'private' ? 1 : 0);
	var cost = (form['cost_radio'].value == 'paid' ? 1 : 0);
	
	var dayperiods = '';
	if (form['mor_checkbox'].checked)
	{
		dayperiods += 'mor ';
	}
	if (form['eve_checkbox'].checked)
	{
		dayperiods += 'eve ';
	}
	if (form['nig_checkbox'].checked)
	{
		dayperiods += 'nig ';
	}
	if (form['daw_checkbox'].checked)
	{
		dayperiods += 'daw ';
	}
	
	var weekdays = '';
	if (form['sun_checkbox'].checked)
	{
		weekdays += 'sun ';
	}
	if (form['mon_checkbox'].checked)
	{
		weekdays += 'mon ';
	}
	if (form['tue_checkbox'].checked)
	{
		weekdays += 'tue ';
	}
	if (form['wed_checkbox'].checked)
	{
		weekdays += 'wed ';
	}
	if (form['thu_checkbox'].checked)
	{
		weekdays += 'thu ';
	}
	if (form['fri_checkbox'].checked)
	{
		weekdays += 'fri ';
	}
	if (form['sat_checkbox'].checked)
	{
		weekdays += 'sat ';
	}
	
	var comments = comments_input['className'] == 'hasPlaceholder' ? '' : comments_input['value'];
	
	var rowID = form['rowID']['value'];
	var marker = gemni_find_marker(rowID);
	if (marker)
	{
		gemni_update_marker_contents(marker, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities);
	}
	//marker.setDraggable(false);
	//marker.getBrother().setDraggable(false);
	//marker.getEditorWindow().setWindowState(false);
	//marker.getEditorWindow().close();
	return false;
}

function gemni_install_calendar(trigger, input, area)
{
	trigger.onfocus = function(){};
	trigger.onmouseover = function(){};
	Calendar.setup
	({
        inputField: input,
        showsTime: true,
        timeFormat: "24",
		ifFormat: "%Y-%m-%d %H:%M:%S",
		weekNumbers: false,
		showOthers: true,
		useMousePosition: true,
		button: trigger
    });
}

function gemni_check_editorwindow(form)
{
	//alert(form.toString());
	//var form = document.getElementById('editorwindow_form_' + rowID);
	gemni_check_input_placeholder(form['date_text']);
	gemni_check_input_placeholder(form['title_text']);
	gemni_check_input_placeholder(form['address_text']);
	gemni_check_input_placeholder(form['contact_text']);
	gemni_check_input_placeholder(form['modalities_text']);
	gemni_check_input_placeholder(form['comments_area']);
	//gemni_install_calendar(form['date_text'], form['date_text'], form);
}

function gemni_build_editorwindow_content(rowID, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities)
{
	var editorwindow_content = 
	"<div class='editorwin'>" +
	"<div class='editordiv'>" +
	"<form style='display: block;'>" +
	"<fieldset>" +
	"<legend>" + "Activity Editor".toLocaleString() + "</legend>" + 
	"<input name='rowID' type='hidden' value='" + rowID + "'>" +
	//"<label>" + "Date".toLocaleString() + ":&nbsp;" +
	"<input title='" + "Date".toLocaleString() + "' placeholder='" + "Date".toLocaleString() + "' name='date_text' type='hidden' value='" + date + "'/>" +
	
	"<label style='float: left; text-align: right; white-space: nowrap;' for='title_text'>" + "Title".toLocaleString() + ":&nbsp;</label>" +
	"<span style='display: block; overflow: hidden;'><input style='width: 100%;' title='" + "Title".toLocaleString() + "' placeholder='" + "Title".toLocaleString() + "' id='title_text' name='title_text' type='text' value='" + title + "'/></span>" +
	
	"<label style='float: left; text-align: right; white-space: nowrap;' for='address_text'>" + "Address".toLocaleString() + ":&nbsp;</label>" +
	"<span style='display: block; overflow: hidden;'><input style='width: 100%;' title='" + "Address".toLocaleString() + "' placeholder='" + "Address".toLocaleString() + "' id='address_text' name='address_text' type='text' value='" + address + "'/></span>" +
	
	"<label style='float: left; text-align: right; white-space: nowrap;' for='contact_text'>" + "Contact".toLocaleString() + ":&nbsp;</label>" +
	"<span style='display: block; overflow: hidden;'><input style='width: 100%;' title='" + "Contact".toLocaleString() + "' placeholder='" + "Contact".toLocaleString() + "' id='contact_text' name='contact_text' type='text' value='" + contact + "'/></span>" +
	
	"<label style='float: left; text-align: right; white-space: nowrap;' for='modalities_text'>" + "Modalities".toLocaleString() + ":&nbsp;</label>" +
	"<span style='display: block; overflow: hidden;'><input style='width: 100%;' title='" + "Modalities".toLocaleString() + "' placeholder='" + "Modalities".toLocaleString() + "' id='modalities_text' name='modalities_text' type='text' value='" + modalities + "'/></span>" +
	
	"<label style='text-align: right; white-space: nowrap;'>" + "Access".toLocaleString() + ":&nbsp;</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Public".toLocaleString() + "' name='access_radio' type='radio' value='public'" + (access != 1 ? " checked='checked'" :"") + "/>" + "Public".toLocaleString() + "</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Private".toLocaleString() + "' name='access_radio' type='radio' value='private'" + (access == 1 ? " checked='checked'" :"") + "/>" + "Private".toLocaleString() + "</label>" +
	
	"<br><label style='text-align: right; white-space: nowrap;'>" + "Cost".toLocaleString() + ":&nbsp;</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Gratuitous".toLocaleString() + "' name='cost_radio' type='radio' value='free'" + (cost != 1 ? " checked='checked'" :"") + "/>" + "Gratuitous".toLocaleString() + "</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Paid".toLocaleString() + "' name='cost_radio' type='radio' value='paid'" + (cost == 1 ? " checked='checked'" :"") + "/>" + "Paid".toLocaleString() + "</label>" +
	
	"<br><label style='text-align: right; white-space: nowrap;'>" + "Periods".toLocaleString() + ":&nbsp;</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Morning".toLocaleString() + "' name='mor_checkbox' type='checkbox' value='mor'" + (dayperiods && dayperiods.indexOf('mor') != -1 ? " checked='checked'" :"") + "/>" + "Morning".toLocaleString() + "</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Evening".toLocaleString() + "' name='eve_checkbox' type='checkbox' value='eve'" + (dayperiods && dayperiods.indexOf('eve') != -1 ? " checked='checked'" :"") + "/>" + "Evening".toLocaleString() + "</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Night".toLocaleString() + "' name='nig_checkbox' type='checkbox' value='nig'" + (dayperiods && dayperiods.indexOf('nig') != -1 ? " checked='checked'" :"") + "/>" + "Night".toLocaleString() + "</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Dawn".toLocaleString() + "' name='daw_checkbox' type='checkbox' value='daw'" + (dayperiods && dayperiods.indexOf('daw') != -1 ? " checked='checked'" :"") + "/>" + "Dawn".toLocaleString() + "</label>" +
	
	"<br><label style='text-align: right; white-space: nowrap;'>" + "Days".toLocaleString() + ":&nbsp;</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Sun".toLocaleString() + "' name='sun_checkbox' type='checkbox' value='sun'" + (weekdays && weekdays.indexOf('sun') != -1 ? " checked='checked'" :"") + "/>" + "Sun".toLocaleString() + "</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Mon".toLocaleString() + "' name='mon_checkbox' type='checkbox' value='mon'" + (weekdays && weekdays.indexOf('mon') != -1 ? " checked='checked'" :"") + "/>" + "Mon".toLocaleString() + "</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Tue".toLocaleString() + "' name='tue_checkbox' type='checkbox' value='tue'" + (weekdays && weekdays.indexOf('tue') != -1 ? " checked='checked'" :"") + "/>" + "Tue".toLocaleString() + "</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Wed".toLocaleString() + "' name='wed_checkbox' type='checkbox' value='wed'" + (weekdays && weekdays.indexOf('wed') != -1 ? " checked='checked'" :"") + "/>" + "Wed".toLocaleString() + "</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Thu".toLocaleString() + "' name='thu_checkbox' type='checkbox' value='thu'" + (weekdays && weekdays.indexOf('thu') != -1 ? " checked='checked'" :"") + "/>" + "Thu".toLocaleString() + "</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Fri".toLocaleString() + "' name='fri_checkbox' type='checkbox' value='fri'" + (weekdays && weekdays.indexOf('fri') != -1 ? " checked='checked'" :"") + "/>" + "Fri".toLocaleString() + "</label>" +
	"<label style='text-align: right; white-space: nowrap'>" +
	"<input style='' title='" + "Sat".toLocaleString() + "' name='sat_checkbox' type='checkbox' value='sat'" + (weekdays && weekdays.indexOf('sat') != -1 ? " checked='checked'" :"") + "/>" + "Sat".toLocaleString() + "</label>" +
	
	"<br><label style='text-align: left; white-space: nowrap;'>" + "Informations".toLocaleString() + ":&nbsp;" +
	"<br><textarea title='" + "Informations".toLocaleString() + "' placeholder='" + "Informations".toLocaleString() + "' name='comments_area' wrap='soft' rows='2' style='display: block; resize: none;overflow-x: hidden; width:100%;'>" + comments + "</textarea></label>" +
	
	"<img style='border:1px solid gray; cursor:pointer' src='images/geocode.gif' title='" + "Search activity location data".toLocaleString() + "' value='" + "Find".toLocaleString() + "' onmousedown='gemni_discover_marker_address(this.parentNode.parentNode.address_text, \"" + rowID + "\")' onkeydown='if(e.keycode == 13 || e.keycode == 32){gemni_discover_marker_address(this.parentNode.parentNode.address_text, \"" + rowID + "\");}'>" +
	//"<img style='border:1px solid gray; cursor:pointer' src='images/center.gif' title='" + "Move activity".toLocaleString() + "' value='" + "Move".toLocaleString() + "' onmousedown='gemni_move_marker(\"" + rowID + "\")' onkeydown='if(e.keycode == 13 || e.keycode == 32){gemni_move_marker(\"" + rowID + "\");}'>" +
	"<img style='border:1px solid gray; cursor:pointer' src='images/apply.gif' title='" + "Save activity data".toLocaleString() + "' value='" + "Save".toLocaleString() + "' onmousedown='gemni_submit_editorwindow(this.parentNode.parentNode)' onkeydown='if(e.keycode == 13 || e.keycode == 32){gemni_submit_editorwindow(this.parentNode.parentNode);}'>" +
	"<img style='border:1px solid gray; cursor:pointer' src='images/undo.gif' title='" + "Reset activity data".toLocaleString() + "' value='" + "Reset".toLocaleString() + "' onmousedown='gemni_reset_editorwindow(this.parentNode.parentNode)' onkeydown='if(e.keycode == 13 || e.keycode == 32){gemni_reset_editorwindow(this.parentNode.parentNode);}'>" +
	"<img style='border:1px solid gray; cursor:pointer' src='images/close.gif' title='" + "Close activity editor".toLocaleString() + "' value='" + "Close".toLocaleString() + "' onmousedown='gemni_close_editorwindow(\"" + rowID + "\")' onkeydown='if(e.keycode == 13 || e.keycode == 32){gemni_close_editorwindow(\"" + rowID + "\");}' onload='gemni_check_editorwindow(this.parentElement.parentElement)'>" +
	"</fieldset>" +
	"</form></div></div>";
	return editorwindow_content;
}

/*function find_in_array(obj, array)
{
	for (var i = 0;i < array.length;i++)
	{
		if (array[i] == obj)
		{
			return i;
		}
	}
	return -1;
}*/
function gemni_find_current_user_location(callback)
{
	var location;
	
	if (gemni_user_location_available)
	{
		geo_position_js.getCurrentPosition(function(position)
		{
			location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			callback(location);
		},
		function()
		{
			//handle_no_geolocation(browser_support_flag);
		});
	}
}
  
/*function handle_no_geolocation(error_flag)
{
	if (error_flag == true)
	{
		//alert("Geolocation service failed.");
		//initialLocation = newyork;
	}
	else
	{
		//alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
		//initialLocation = siberia;
	}
	//map.setCenter(initialLocation);
}*/

function gemni_create_map_layers()
{
	//gemni_map_layers = new Array();
	
	var traffic_layer = new google.maps.TrafficLayer();
	var transit_layer = new google.maps.TransitLayer();
	var streetview_layer = new google.maps.StreetViewCoverageLayer();
	//var weather_layer = new google.maps.weather.WeatherLayer();
	//var cloud_layer = new google.maps.weather.CloudLayer();
		
	gemni_map_layers_toggle_div = document.createElement('DIV');
	gemni_map_layers_toggle_div.style.display = 'block';
	gemni_map_layers_toggle_div.style.backgroundColor = 'white';
	gemni_map_layers_toggle_div.style.border = '1px solid gray';
	//gemni_map_layers_toggle_div.style.paddingTop = '5px';
	
	var traffic_layer_toggle_div = document.createElement('DIV');
	traffic_layer_toggle_div.style.display = 'inline';
	traffic_layer_toggle_div.style.backgroundColor = 'white';
	traffic_layer_toggle_div.style.paddingRight = '2px';
	traffic_layer_toggle_div.style.font = 'menu';
	traffic_layer_toggle_div.style.fontSize = '12px';
	//traffic_layer_toggle_div.style.border = '1px solid gray';
	var traffic_layer_toggle_radio = document.createElement('INPUT');
	traffic_layer_toggle_radio.type = 'CHECKBOX';
	traffic_layer_toggle_radio.id = 'traffic_layer_toggle_radio';
	traffic_layer_toggle_radio.title = 'Traffic'.toLocaleString();
	var traffic_layer_toggle_label = document.createElement('LABEL');
	traffic_layer_toggle_label.setAttribute('for', 'traffic_layer_toggle_radio');
	traffic_layer_toggle_label.title = 'Traffic'.toLocaleString();
	traffic_layer_toggle_label.innerHTML = 'Traffic'.toLocaleString();
	traffic_layer_toggle_div.appendChild(traffic_layer_toggle_radio);
	traffic_layer_toggle_div.appendChild(traffic_layer_toggle_label);
	traffic_layer_toggle_radio.onchange = function()
	{
		if (!traffic_layer.getMap())
		{
			traffic_layer.setMap(gemni_map);
		}
		else
		{
			traffic_layer.setMap(null);
		}
	}
	
	var transit_layer_toggle_div = document.createElement('DIV');
	transit_layer_toggle_div.style.display = 'inline';
	transit_layer_toggle_div.style.backgroundColor = 'white';
	transit_layer_toggle_div.style.paddingRight = '2px';
	transit_layer_toggle_div.style.font = 'menu';
	transit_layer_toggle_div.style.fontSize = '12px';
	//transit_layer_toggle_div.style.border = '1px solid gray';
	var transit_layer_toggle_radio = document.createElement('INPUT');
	transit_layer_toggle_radio.type = 'CHECKBOX';
	transit_layer_toggle_radio.id = 'transit_layer_toggle_radio';
	transit_layer_toggle_radio.title = 'Transit'.toLocaleString();
	var transit_layer_toggle_label = document.createElement('LABEL');
	transit_layer_toggle_label.setAttribute('for', 'transit_layer_toggle_radio');
	transit_layer_toggle_label.title = 'Transit'.toLocaleString();
	transit_layer_toggle_label.innerHTML = 'Transit'.toLocaleString();
	transit_layer_toggle_div.appendChild(transit_layer_toggle_radio);
	transit_layer_toggle_div.appendChild(transit_layer_toggle_label);
	transit_layer_toggle_radio.onchange = function()
	{
		if (!transit_layer.getMap())
		{
			transit_layer.setMap(gemni_map);
		}
		else
		{
			transit_layer.setMap(null);
		}
	}
	
	var streetview_layer_toggle_div = document.createElement('DIV');
	streetview_layer_toggle_div.style.display = 'inline';
	streetview_layer_toggle_div.style.backgroundColor = 'white';
	streetview_layer_toggle_div.style.paddingRight = '2px';
	streetview_layer_toggle_div.style.font = 'menu';
	streetview_layer_toggle_div.style.fontSize = '12px';
	//streetview_layer_toggle_div.style.border = '1px solid gray';
	var streetview_layer_toggle_radio = document.createElement('INPUT');
	streetview_layer_toggle_radio.type = 'CHECKBOX';
	streetview_layer_toggle_radio.id = 'streetview_coverage_layer_toggle_radio';
	streetview_layer_toggle_radio.title = 'StreetView'.toLocaleString();
	var streetview_layer_toggle_label = document.createElement('LABEL');
	streetview_layer_toggle_label.setAttribute('for', 'streetview_coverage_layer_toggle_radio');
	streetview_layer_toggle_label.title = 'StreetView'.toLocaleString();
	streetview_layer_toggle_label.innerHTML = 'StreetView'.toLocaleString();
	streetview_layer_toggle_div.appendChild(streetview_layer_toggle_radio);
	streetview_layer_toggle_div.appendChild(streetview_layer_toggle_label);
	streetview_layer_toggle_radio.onchange = function()
	{
		if (!streetview_layer.getMap())
		{
			streetview_layer.setMap(gemni_map);
		}
		else
		{
			streetview_layer.setMap(null);
		}
	}
	
	/*var weather_layer_toggle_div = document.createElement('DIV');
	//weather_layer_toggle_div.style.display = 'inline';
	weather_layer_toggle_div.style.backgroundColor = 'white';
	weather_layer_toggle_div.style.paddingRight = '2px';
	//weather_layer_toggle_div.style.font = 'menu';
	//weather_layer_toggle_div.style.fontSize = '12pt';
	//weather_layer_toggle_div.style.border = '1px solid gray';
	var weather_layer_toggle_radio = document.createElement('INPUT');
	weather_layer_toggle_radio.type = 'CHECKBOX';
	weather_layer_toggle_radio.id = 'weather_layer_toggle_radio';
	weather_layer_toggle_radio.title = 'Weather'.toLocaleString();
	var weather_layer_toggle_label = document.createElement('LABEL');
	weather_layer_toggle_label.setAttribute('for', 'weather_layer_toggle_radio');
	weather_layer_toggle_label.title = 'Weather'.toLocaleString();
	weather_layer_toggle_label.innerHTML = 'Weather'.toLocaleString();
	weather_layer_toggle_div.appendChild(weather_layer_toggle_radio);
	weather_layer_toggle_div.appendChild(weather_layer_toggle_label);
	weather_layer_toggle_radio.onchange = function()
	{
		if (!weather_layer.getMap())
		{
			weather_layer.setMap(gemni_map);
		}
		else
		{
			weather_layer.setMap(null);
		}
	}*/
	
	/*var cloud_layer_toggle_div = document.createElement('DIV');
	//cloud_layer_toggle_div.style.display = 'inline';
	cloud_layer_toggle_div.style.backgroundColor = 'white';
	cloud_layer_toggle_div.style.paddingRight = '2px';
	cloud_layer_toggle_div.style.font = 'menu';
	cloud_layer_toggle_div.style.fontSize = '12px';
	//cloud_layer_toggle_div.style.border = '1px solid gray';
	var cloud_layer_toggle_radio = document.createElement('INPUT');
	cloud_layer_toggle_radio.type = 'CHECKBOX';
	cloud_layer_toggle_radio.id = 'cloud_layer_toggle_radio';
	cloud_layer_toggle_radio.title = 'Clouds'.toLocaleString();
	var cloud_layer_toggle_label = document.createElement('LABEL');
	cloud_layer_toggle_label.setAttribute('for', 'cloud_layer_toggle_radio');
	cloud_layer_toggle_label.title = 'Clouds'.toLocaleString();
	cloud_layer_toggle_label.innerHTML = 'Clouds'.toLocaleString();
	cloud_layer_toggle_div.appendChild(cloud_layer_toggle_radio);
	cloud_layer_toggle_div.appendChild(cloud_layer_toggle_label);
	cloud_layer_toggle_radio.onchange = function()
	{
		if (!cloud_layer.getMap())
		{
			cloud_layer.setMap(gemni_map);
		}
		else
		{
			cloud_layer.setMap(null);
		}
	}*/
	
	gemni_map_layers_toggle_div.appendChild(traffic_layer_toggle_div);
	gemni_map_layers_toggle_div.appendChild(transit_layer_toggle_div);
	gemni_map_layers_toggle_div.appendChild(streetview_layer_toggle_div);
	//gemni_map_layers_toggle_div.appendChild(weather_layer_toggle_div);
	//gemni_map_layers_toggle_div.appendChild(cloud_layer_toggle_div);
	
	//gemni_map_layers = {traffic: traffic_layer, transit: transit_layer, streetview: streetview_layer, weather: weather_layer, cloud: cloud_layer};
	gemni_map_layers = {traffic: traffic_layer, transit: transit_layer, streetview: streetview_layer};
	//gemni_map_layers_togglers = {traffic: traffic_layer_toggle_radio, transit: transit_layer_toggle_radio, streetview: streetview_layer_toggle_radio, weather: weather_layer_toggle_radio, cloud: cloud_layer_toggle_radio};
	gemni_map_layers_togglers = {traffic: traffic_layer_toggle_radio, transit: transit_layer_toggle_radio, streetview: streetview_layer_toggle_radio};
	
	if (gemni_cookie_values && gemni_cookie_values[16] && gemni_cookie_values[16] != ' ')
	{
		if (gemni_cookie_values[16] == '1')
		{
			traffic_layer.setMap(gemni_map);
			traffic_layer_toggle_radio.checked = true;
		}
	}
	
	if (gemni_cookie_values && gemni_cookie_values[17] && gemni_cookie_values[17] != ' ')
	{
		if (gemni_cookie_values[17] == '1')
		{
			transit_layer.setMap(gemni_map);
			transit_layer_toggle_radio.checked = true;
		}
	}
	
	if (gemni_cookie_values && gemni_cookie_values[18] && gemni_cookie_values[18] != ' ')
	{
		/*if (gemni_cookie_values[18] == '1')
		{
			weather_layer.setMap(gemni_map);
			weather_layer_toggle_radio.checked = true;
		}*/
		if (gemni_cookie_values[18] == '1')
		{
			streetview_layer.setMap(gemni_map);
			streetview_layer_toggle_radio.checked = true;
		}
	}
	
	//if (gemni_cookie_values && gemni_cookie_values[19] && gemni_cookie_values[19] != ' ')
	//{
		//window['gemni_oauth2_token'] = gemni_cookie_values[19];
	//}
	
	/*if (gemni_cookie_values && gemni_cookie_values[20] && gemni_cookie_values[20] != ' ')
	{
		if (gemni_cookie_values[20] == '1')
		{
			cloud_layer.setMap(gemni_map);
			cloud_layer_toggle_radio.checked = true;
		}
	}*/
	
	//gemni_map.controls[google.maps.ControlPosition.TOP_CENTER].push(gemni_map_layers_toggle_div);
}

function gemni_create_map_controls()
{
	gemni_auto_complete_div = document.createElement('DIV');
	gemni_auto_complete_div.className = 'gemni_auto_complete';
	gemni_auto_complete_div.style.display = 'inline';
	gemni_auto_complete_div.style.paddingTop = '5px';
	gemni_auto_complete_div.style.paddingLeft = gemni_mobile?'5px':'5px';
	gemni_auto_complete_div.index = 5;
	
	gemni_text_input_div = document.createElement('DIV');
	gemni_text_input_div.className = 'gemni_auto_complete';
	gemni_text_input_div.style.paddingTop = '5px';
	gemni_text_input_div.style.paddingLeft = '0px';
	gemni_text_input_div.style.display = 'block';
	//gemni_text_input_div.index = 5;
	
	gemni_auto_complete_input_subdiv = document.createElement('DIV');
	gemni_auto_complete_input_subdiv.style.display = 'block';
	//gemni_auto_complete_input_subdiv.style.border = '1px solid gray';
	var gemni_auto_complete_input_div = document.createElement('DIV');
	gemni_auto_complete_input_div.style.display = 'block';
	//gemni_auto_complete_input_div.style.backgroundColor = 'white';
	gemni_auto_complete_input = document.createElement('INPUT');
	gemni_auto_complete_input.style.border = '1px solid gray';
	//gemni_auto_complete_input.style.zIndex = 2;
	gemni_auto_complete_input.id = 'gemni_auto_complete_input';
	gemni_auto_complete_input.type = 'text';
	//gemni_auto_complete_input.style.zIndex = '5';
	//gemni_auto_complete_input.style.width = '18em';
	gemni_auto_complete_input_div.title = 'Search by location'.toLocaleString();
	gemni_auto_complete_input_div.appendChild(gemni_auto_complete_input);
	gemni_auto_complete_input_subdiv.appendChild(gemni_auto_complete_input_div);
	
	gemni_map_layers_toggle_subdiv = document.createElement('DIV');
	gemni_map_layers_toggle_subdiv.style.display = 'block';
	gemni_map_layers_toggle_subdiv.appendChild(gemni_map_layers_toggle_div);
	
	gemni_filter_input_subdiv = document.createElement('DIV');
	gemni_filter_input_subdiv.style.display = 'block';
	//gemni_filter_input_subdiv.style.border = '1px solid gray';
	
	var gemni_filter_input_div = document.createElement('DIV');
	gemni_filter_input_subdiv.appendChild(gemni_filter_input_div);
	//gemni_filter_input_div.style.backgroundColor = 'white';
	
	gemni_filter_input_div.style.display = 'block';
	gemni_filter_input = document.createElement('INPUT');
	gemni_filter_input.style.border = '1px solid gray';
	//gemni_filter_input.style.zIndex = 2;
	gemni_filter_input.id = 'gemni_filter_input';
	gemni_filter_input.type = 'text';
	//gemni_filter_input.style.zIndex = '5';
	//gemni_filter_input.style.width = '18em';
	gemni_filter_input.placeholder = 'Search activities'.toLocaleString();
	gemni_filter_input_div.title = 'Activity search'.toLocaleString();
	gemni_filter_input_div.appendChild(gemni_filter_input);
	
	gemni_button_bar_subdiv = document.createElement('DIV');
	gemni_button_bar_subdiv.style.display = 'inline';
	gemni_location_button_div = document.createElement('DIV');
	gemni_location_button_div.style.display = 'inline';
	gemni_location_button_div.title = 'Actual location'.toLocaleString();
	
	//var gemni_dynamic_button_bar_subdiv = document.createElement('DIV');
	//gemni_dynamic_button_bar_subdiv.style.display = 'inline';
	
	var gemni_location_button = document.createElement('IMG');
	gemni_location_button.style.borderWidth = '1px';
	gemni_location_button.style.borderStyle = 'solid';
	gemni_location_button.style.borderColor = 'gray';
	gemni_location_button.style.backgroundColor = 'white';
	gemni_location_button.style.cursor = 'pointer';
	gemni_location_button.style.width = '24px';
	gemni_location_button.style.height = '24px';
	gemni_location_button.src = 'images/location.gif';
	//gemni_location_button.type = 'button';
	//gemni_location_button.value = 'Actual location'.toLocaleString();
	gemni_location_button_div.appendChild(gemni_location_button);
	google.maps.event.addDomListener(gemni_location_button, 'click', function(e)
	{
		gemni_find_current_user_location(function(current_user_location)
		{
			if (current_user_location)
			{
				gemni_map.panTo(current_user_location);
				if (gemni_panorama.getVisible())
				{
					gemni_panorama.setPosition(current_user_location);
				}
				if (gemni_panorama.getVisible() && gemni_panorama_mode == 2)
				{
					gemni_map_geocoder_marker.setPosition(current_user_location);
					gemni_panorama_geocoder_marker.setPosition(current_user_location);
					gemni_map_geocoder_marker.setMap(gemni_map);
					gemni_panorama_geocoder_marker.setMap(gemni_panorama);
					gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
					if (!gemni_panorama_geocoder_marker.getInfoState())
					{
						gemni_map_geocoder_marker.setInfoState(false);
						gemni_map_geocoder_marker.getInfoWindow().close();
						gemni_panorama_geocoder_marker.setInfoState(true);
						gemni_panorama_geocoder_marker.getInfoWindow().open(gemni_panorama, gemni_panorama_geocoder_marker);
					}
				}
				else
				{
					
					gemni_map_geocoder_marker.setPosition(current_user_location);
					gemni_panorama_geocoder_marker.setPosition(current_user_location);
					gemni_map_geocoder_marker.setMap(gemni_map);
					gemni_panorama_geocoder_marker.setMap(gemni_panorama);
					gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
					if (!gemni_map_geocoder_marker.getInfoState())
					{
						gemni_panorama_geocoder_marker.setInfoState(false);
						gemni_panorama_geocoder_marker.getInfoWindow().close();
						gemni_map_geocoder_marker.setInfoState(true);
						gemni_map_geocoder_marker.getInfoWindow().open(gemni_map, gemni_map_geocoder_marker);
					}
				}
			}
			else
			{
				//alert("not found!");
			}
		});
	});
	
	gemni_fullscreen_button_div = document.createElement('DIV');
	
	gemni_fullscreen_button_div.title = 'Toggle full screen mode'.toLocaleString();
	
	gemni_fullscreen_button_div.style.display = 'inline';
	gemni_fullscreen_button = document.createElement('IMG');
	
	//disposition_button.type = 'button';
	
	gemni_fullscreen_button.style.borderWidth = '1px';
	gemni_fullscreen_button.style.borderStyle = 'solid';
	gemni_fullscreen_button.style.borderColor = 'gray';
	gemni_fullscreen_button.style.backgroundColor = 'white';
	gemni_fullscreen_button.style.cursor = 'pointer';
	gemni_fullscreen_button.style.width = '24px';
	gemni_fullscreen_button.style.height = '24px';
	gemni_fullscreen_button.src = 'images/toggle_fullscreen.gif';
	
	//disposition_button.value = 'Alter division'.toLocaleString();
	
	gemni_fullscreen_button_div.appendChild(gemni_fullscreen_button);
	/*if (!gemni_mobile)
	{
		
	}*/
	
	google.maps.event.addDomListener(gemni_fullscreen_button, 'click', function(e)
	{
		gemni_toggle_full_screen();
	});
	
	gemni_disposition_button_div = document.createElement('DIV');
	
	gemni_disposition_button_div.title = 'Toggle division between map and panorama'.toLocaleString();
	
	gemni_disposition_button_div.style.display = 'inline';
	var disposition_button = document.createElement('IMG');
	//disposition_button.type = 'button';
	
	disposition_button.style.borderWidth = '1px';
	disposition_button.style.borderStyle = 'solid';
	disposition_button.style.borderColor = 'gray';
	disposition_button.style.backgroundColor = 'white';
	disposition_button.style.cursor = 'pointer';
	disposition_button.style.width = '24px';
	disposition_button.style.height = '24px';
	disposition_button.src = 'images/disposition.gif';
	
	//disposition_button.value = 'Alter division'.toLocaleString();
	
	gemni_disposition_button_div.appendChild(disposition_button);
	/*if (!gemni_mobile)
	{
		
	}*/
	
	google.maps.event.addDomListener(disposition_button, 'click', function(e)
	{
		gemni_alternate_disposition();
	});
	
	var gemni_search_button = document.createElement('IMG');
	gemni_search_button.style.borderWidth = '1px';
	gemni_search_button.style.borderStyle = 'solid';
	gemni_search_button.style.borderColor = 'gray';
	gemni_search_button.style.backgroundColor = 'white';
	gemni_search_button.style.cursor = 'pointer';
	gemni_search_button.style.width = '24px';
	gemni_search_button.style.height = '24px';
	gemni_search_button.src = 'images/search.gif';
	//gemni_location_button.type = 'button';
	//gemni_location_button.value = 'Actual location'.toLocaleString();
	gemni_search_button_div = document.createElement('DIV');
	gemni_search_button_div.style.display = 'inline';
	gemni_search_button_div.title = 'Search by location'.toLocaleString();
	gemni_search_button_div.appendChild(gemni_search_button);
		
	google.maps.event.addDomListener(gemni_search_button, 'click', function(e)
	{
		if (gemni_auto_complete_input_subdiv.style.display == 'none')
		{
			gemni_text_input_div.display = 'block';
			gemni_filter_input_subdiv.style.display = 'none';
			gemni_map_layers_toggle_subdiv.style.display = 'none';
			gemni_auto_complete_input_subdiv.style.display = 'block';
			if (gemni_auto_complete_on_map)
			{
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
			}
			else
			{
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
			}
			//gemni_auto_complete_input.focus();
		}
		else
		{
			gemni_text_input_div.display = 'none';
			gemni_auto_complete_input.value = '';
			gemni_filter_input.value = '';
			gemni_auto_complete_input_subdiv.style.display = 'none';
			//gemni_extra_panorama_buttons_subdiv.style.display = 'inline';
			if (gemni_auto_complete_on_map)
			{
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
			}
			else
			{
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
			}
		}
		gemni_check_auto_complete_dimensions();
		google.maps.event.trigger(gemni_map, 'resize');
		google.maps.event.trigger(gemni_panorama, 'resize');
	});
	
	var gemni_filter_button = document.createElement('IMG');
	gemni_filter_button.style.borderWidth = '1px';
	gemni_filter_button.style.borderStyle = 'solid';
	gemni_filter_button.style.borderColor = 'gray';
	gemni_filter_button.style.backgroundColor = 'white';
	gemni_filter_button.style.cursor = 'pointer';
	gemni_filter_button.style.width = '24px';
	gemni_filter_button.style.height = '24px';
	gemni_filter_button.src = 'images/filter.gif';
	//gemni_location_button.type = 'button';
	//gemni_location_button.value = 'Actual location'.toLocaleString();
	gemni_filter_button_div = document.createElement('DIV');
	gemni_filter_button_div.style.display = 'inline';
	gemni_filter_button_div.title = 'Search activities'.toLocaleString();
	gemni_filter_button_div.appendChild(gemni_filter_button);
		
	google.maps.event.addDomListener(gemni_filter_button, 'click', function(e)
	{
		if (gemni_filter_input_subdiv.style.display == 'none')
		{
			gemni_text_input_div.display = 'block';
			gemni_auto_complete_input_subdiv.style.display = 'none';
			gemni_map_layers_toggle_subdiv.style.display = 'none';
			gemni_filter_input_subdiv.style.display = 'block';
			if (gemni_auto_complete_on_map)
			{
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
			}
			else
			{
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
			}
			//gemni_filter_input.focus();
		}
		else
		{
			gemni_text_input_div.display = 'none';
			gemni_auto_complete_input.value = '';
			gemni_filter_input.value = '';
			gemni_filter_input_subdiv.style.display = 'none';
			gemni_extra_panorama_buttons_subdiv.style.display = 'inline';
			if (gemni_auto_complete_on_map)
			{
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
			}
			else
			{
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
			}
		}
		gemni_check_auto_complete_dimensions();
		google.maps.event.trigger(gemni_map, 'resize');
		google.maps.event.trigger(gemni_panorama, 'resize');
	});
	
	var gemni_layers_button = document.createElement('IMG');
	gemni_layers_button.style.borderWidth = '1px';
	gemni_layers_button.style.borderStyle = 'solid';
	gemni_layers_button.style.borderColor = 'gray';
	gemni_layers_button.style.backgroundColor = 'white';
	gemni_layers_button.style.cursor = 'pointer';
	gemni_layers_button.style.width = '24px';
	gemni_layers_button.style.height = '24px';
	gemni_layers_button.src = 'images/layers.gif';
	//gemni_location_button.type = 'button';
	//gemni_location_button.value = 'Actual location'.toLocaleString();
	gemni_layers_button_div = document.createElement('DIV');
	gemni_layers_button_div.style.display = 'inline';
	gemni_layers_button_div.title = 'Layers'.toLocaleString();
	gemni_layers_button_div.appendChild(gemni_layers_button);
	
	google.maps.event.addDomListener(gemni_layers_button, 'click', function(e)
	{
		if (gemni_map_layers_toggle_subdiv.style.display == 'none')
		{
			gemni_text_input_div.display = 'block';
			gemni_auto_complete_input_subdiv.style.display = 'none';
			gemni_filter_input_subdiv.style.display = 'none';
			gemni_map_layers_toggle_subdiv.style.display = 'block';
			if (gemni_auto_complete_on_map)
			{
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
			}
			else
			{
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
			}
			//gemni_filter_input.focus();
		}
		else
		{
			gemni_text_input_div.display = 'none';
			gemni_map_layers_toggle_subdiv.style.display = 'none';
			if (gemni_auto_complete_on_map)
			{
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
			}
			else
			{
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
			}
		}
		gemni_check_auto_complete_dimensions();
		google.maps.event.trigger(gemni_map, 'resize');
		google.maps.event.trigger(gemni_panorama, 'resize');
	});
	
	gemni_button_bar_subdiv.appendChild(gemni_search_button_div);
	
	gemni_button_bar_subdiv.appendChild(gemni_filter_button_div);
	
	//gemni_button_bar_subdiv.appendChild(gemni_layers_button_div);
	
	gemni_button_bar_subdiv.appendChild(gemni_location_button_div);
	
	gemni_button_bar_subdiv.appendChild(gemni_disposition_button_div);
	
	gemni_button_bar_subdiv.appendChild(gemni_fullscreen_button_div);
	
	gemni_create_logout_button();
	
	var gemni_marker_counter_div = document.createElement('DIV');
	gemni_marker_counter_div.style.display = 'block';
	
	gemni_marker_counter_span = document.createElement('SPAN');
	gemni_marker_counter_span.style.backgroundColor = 'white';
	gemni_marker_counter_span.style.font = 'menu';
	gemni_marker_counter_span.style.fontSize = '12px';
	gemni_marker_counter_span.style.borderWidth = '1px';
	gemni_marker_counter_span.style.borderStyle = 'solid';
	gemni_marker_counter_span.style.borderColor = 'gray';
	
	gemni_marker_counter_div.appendChild(gemni_marker_counter_span);
		
	gemni_extra_panorama_buttons_subdiv = document.createElement('DIV');
	gemni_extra_panorama_buttons_subdiv.style.display = 'inline';
	
	gemni_button_bar_subdiv.appendChild(gemni_extra_panorama_buttons_subdiv);
	
	gemni_button_bar_subdiv.appendChild(gemni_marker_counter_div)
	
	//enable or disable marker filter
	
	gemni_filter_input_subdiv.style.display = 'none';
	
	gemni_auto_complete_input_subdiv.style.display = 'none';
	
	gemni_map_layers_toggle_subdiv.style.display = 'none';
	
	//gemni_auto_complete_div.appendChild(gemni_dynamic_button_bar_subdiv);
	
	//gemni_text_input_div.appendChild(gemni_auto_complete_input_subdiv);
	
	gemni_text_input_div.appendChild(gemni_auto_complete_input_subdiv);
	
	gemni_text_input_div.appendChild(gemni_filter_input_subdiv);
	
	gemni_text_input_div.appendChild(gemni_map_layers_toggle_subdiv);
	
	gemni_button_bar_subdiv.appendChild(gemni_text_input_div);
	
	gemni_auto_complete_div.appendChild(gemni_button_bar_subdiv);
	
	//gemni_auto_complete_div.appendChild(gemni_marker_counter_div);
	
	//gemni_auto_complete_div.appendChild(gemni_text_input_div);
	
	gemni_auto_complete = new google.maps.places.Autocomplete(gemni_auto_complete_input);
	gemni_auto_complete.bindTo('bounds', gemni_map);
	
	/*google.maps.event.addDomListener(gemni_auto_complete_input, 'keypress', function(e)
	{
		if (e.keyCode == 13)
		{
			var input_value = gemni_auto_complete_input.value;
			input_value = input_value.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
			var coordinates = input_value.split(",");
			if (coordinates.length != 2)
			{
				//alert(input_value);
				coordinates = input_value.split(" ");
			}
			if (coordinates.length == 2)
			{
				var lat = parseFloat(coordinates[0]);
				var lng = parseFloat(coordinates[1]);
				if (lat && lat != NaN && lng && lng != NaN)
				{
					var coordinates_location = new google.maps.LatLng(lat, lng);
					gemni_map.panTo(coordinates_location);
					if (gemni_panorama.getVisible())
					{
						gemni_panorama.setPosition(coordinates_location);
					}
					if (gemni_panorama.getVisible() && gemni_panorama_mode == 2)
					{
						gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
						gemni_map_geocoder_marker.setPosition(coordinates_location);
						gemni_panorama_geocoder_marker.setPosition(coordinates_location);
						gemni_map_geocoder_marker.setMap(gemni_map);
						gemni_panorama_geocoder_marker.setMap(gemni_panorama);
						//google.maps.event.trigger(gemni_panorama_geocoder_marker, 'click');
						if (!gemni_panorama_geocoder_marker.getInfoState())
						{
							//gemni_panorama_geocoder_marker.getInfoWindow().close();
							gemni_map_geocoder_marker.getInfoWindow().close();
							gemni_map_geocoder_marker.setInfoState(false);
							gemni_panorama_geocoder_marker.getInfoWindow().open(gemni_panorama, gemni_panorama_geocoder_marker);
							gemni_panorama_geocoder_marker.setInfoState(true);
							//discoverPlaceInfo(marker.getPosition(), infowindow);
						}
					}
					else
					{
						gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
						gemni_map_geocoder_marker.setPosition(coordinates_location);
						gemni_panorama_geocoder_marker.setPosition(coordinates_location);
						gemni_map_geocoder_marker.setMap(gemni_map);
						gemni_panorama_geocoder_marker.setMap(gemni_panorama);
						//google.maps.event.trigger(gemni_map_geocoder_marker, 'click');
						if (!gemni_map_geocoder_marker.getInfoState())
						{
							//gemni_map_geocoder_marker.getInfoWindow().close();
							gemni_panorama_geocoder_marker.getInfoWindow().close();
							gemni_panorama_geocoder_marker.setInfoState(false);
							gemni_map_geocoder_marker.getInfoWindow().open(gemni_map, gemni_map_geocoder_marker);
							gemni_map_geocoder_marker.setInfoState(true);
							//discoverPlaceInfo(marker.getPosition(), infowindow);
						}
					}
				}
				//e.stopPropagation();
			}
			//e.stopPropagation();
		}
	});*/
	
	google.maps.event.addListener(gemni_auto_complete, 'place_changed', function(e)
	{
		var place = gemni_auto_complete.getPlace();
		if (place && place.geometry && place.geometry.location && (!isNaN(place.geometry.location.lat())) && (!isNaN(place.geometry.location.lng())))
		{
			//alert("gemni_auto_complete")
			//alert(place.geometry.location.toString());
			if (gemni_panorama.getVisible())
			{
				gemni_panorama.setPosition(place.geometry.location);
			}
			//gemni_map.panTo(place.geometry.location);
			if (place.geometry.viewport)
			{
				gemni_map.fitBounds(place.geometry.viewport);
			}
			else
			{
				gemni_map.panTo(place.geometry.location);
			}
			if (gemni_panorama.getVisible() && gemni_panorama_mode == 2)
			{
				gemni_map_geocoder_marker.setPosition(place.geometry.location);
				gemni_panorama_geocoder_marker.setPosition(place.geometry.location);
				gemni_map_geocoder_marker.setMap(gemni_map);
				gemni_panorama_geocoder_marker.setMap(gemni_panorama);
				gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
				//google.maps.event.trigger(gemni_panorama_geocoder_marker, 'click');
				if (!gemni_panorama_geocoder_marker.getInfoState())
				{
					//gemni_panorama_geocoder_marker.getInfoWindow().close();
					gemni_map_geocoder_marker.setInfoState(false);
					gemni_map_geocoder_marker.getInfoWindow().close();
					gemni_panorama_geocoder_marker.setInfoState(true);
					gemni_panorama_geocoder_marker.getInfoWindow().open(gemni_panorama, gemni_panorama_geocoder_marker);
					//discoverPlaceInfo(marker.getPosition(), infowindow);
				}
			}
			else
			{
				gemni_map_geocoder_marker.setPosition(place.geometry.location);
				gemni_panorama_geocoder_marker.setPosition(place.geometry.location);
				gemni_map_geocoder_marker.setMap(gemni_map);
				gemni_panorama_geocoder_marker.setMap(gemni_panorama);
				gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
				//google.maps.event.trigger(gemni_map_geocoder_marker, 'click');
				if (!gemni_map_geocoder_marker.getInfoState())
				{
					//gemni_map_geocoder_marker.getInfoWindow().close();
					gemni_panorama_geocoder_marker.setInfoState(false);
					gemni_panorama_geocoder_marker.getInfoWindow().close();
					gemni_map_geocoder_marker.setInfoState(true);
					gemni_map_geocoder_marker.getInfoWindow().open(gemni_map, gemni_map_geocoder_marker);
					//discoverPlaceInfo(marker.getPosition(), infowindow);
				}
			}
		}
		else
		{
			var input_value = gemni_auto_complete_input.value;
			var lat;
			var lng;
			input_value = input_value.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
			var coordinates = input_value.split(",");
			if (coordinates.length != 2)
			{
				//alert(input_value);
				coordinates = input_value.split(" ");
			}
			if (coordinates.length == 2)
			{
				var lat = parseFloat(coordinates[0]);
				var lng = parseFloat(coordinates[1]);
			}
			if (lat && !isNaN(lat) && lng && !isNaN(lng))
			{
				var coordinates_location = new google.maps.LatLng(lat, lng);
				gemni_map.panTo(coordinates_location);
				if (gemni_panorama.getVisible())
				{
					gemni_panorama.setPosition(coordinates_location);
				}
				if (gemni_panorama.getVisible() && gemni_panorama_mode == 2)
				{
					gemni_map_geocoder_marker.setPosition(coordinates_location);
					gemni_panorama_geocoder_marker.setPosition(coordinates_location);
					gemni_map_geocoder_marker.setMap(gemni_map);
					gemni_panorama_geocoder_marker.setMap(gemni_panorama);
					gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
					//google.maps.event.trigger(gemni_panorama_geocoder_marker, 'click');
					if (!gemni_panorama_geocoder_marker.getInfoState())
					{
						//gemni_panorama_geocoder_marker.getInfoWindow().close();
						gemni_map_geocoder_marker.setInfoState(false);
						gemni_map_geocoder_marker.getInfoWindow().close();
						gemni_panorama_geocoder_marker.setInfoState(true);
						gemni_panorama_geocoder_marker.getInfoWindow().open(gemni_panorama, gemni_panorama_geocoder_marker);
						//discoverPlaceInfo(marker.getPosition(), infowindow);
					}
				}
				else
				{
					gemni_map_geocoder_marker.setPosition(coordinates_location);
					gemni_panorama_geocoder_marker.setPosition(coordinates_location);
					gemni_map_geocoder_marker.setMap(gemni_map);
					gemni_panorama_geocoder_marker.setMap(gemni_panorama);
					gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
					//google.maps.event.trigger(gemni_map_geocoder_marker, 'click');
					if (!gemni_map_geocoder_marker.getInfoState())
					{
						//gemni_map_geocoder_marker.getInfoWindow().close();
						gemni_panorama_geocoder_marker.setInfoState(false);
						gemni_panorama_geocoder_marker.getInfoWindow().close();
						gemni_map_geocoder_marker.setInfoState(true);
						gemni_map_geocoder_marker.getInfoWindow().open(gemni_map, gemni_map_geocoder_marker);
						//discoverPlaceInfo(marker.getPosition(), infowindow);
					}
				}
				//e.stopPropagation();
			}
			else
			{
				var normalGeocodingRequest;
				if (gemni_panorama_mode != 2 || !gemni_panorama.getVisible())
				{
					normalGeocodingRequest =
					{
						address: gemni_auto_complete_input.value,
						latLng: gemni_map.getCenter(),
						bounds: gemni_map.getBounds()
					}
				}
				else
				{
					gemni_panorama_circle.setCenter(gemni_panorama.getPosition());
					normalGeocodingRequest =
					{
						address: gemni_auto_complete_input.value,
						latLng: gemni_panorama_circle.getPosition(),
						bounds: gemni_panorama_circle.getBounds()
					}
					
				}
				gemni_geocoder.geocode(normalGeocodingRequest, function(results, status)
				{
					if (status == google.maps.GeocoderStatus.OK)
					{
						if (results[0])
						{
							place = results[0];
							gemni_auto_complete_input.value = place.formatted_address;
							if (place && place.geometry && place.geometry.location && (!isNaN(place.geometry.location.lat())) && (!isNaN(place.geometry.location.lng())))
							{
								//alert(place.geometry.location.toString());
								if (gemni_panorama.getVisible())
								{
									gemni_panorama.setPosition(place.geometry.location);
								}
								//gemni_map.panTo(place.geometry.location);
								if (place.geometry.viewport)
								{
									gemni_map.fitBounds(place.geometry.viewport);
								}
								else
								{
									gemni_map.panTo(place.geometry.location);
								}
								if (gemni_panorama.getVisible() && gemni_panorama_mode == 2)
								{
									gemni_map_geocoder_marker.setPosition(place.geometry.location);
									gemni_panorama_geocoder_marker.setPosition(place.geometry.location);
									gemni_map_geocoder_marker.setMap(gemni_map);
									gemni_panorama_geocoder_marker.setMap(gemni_panorama);
									gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
									//google.maps.event.trigger(gemni_panorama_geocoder_marker, 'click');
									if (!gemni_panorama_geocoder_marker.getInfoState())
									{
										//gemni_panorama_geocoder_marker.getInfoWindow().close();
										gemni_map_geocoder_marker.setInfoState(false);
										gemni_map_geocoder_marker.getInfoWindow().close();
										gemni_panorama_geocoder_marker.setInfoState(true);
										gemni_panorama_geocoder_marker.getInfoWindow().open(gemni_panorama, gemni_panorama_geocoder_marker);
										//discoverPlaceInfo(marker.getPosition(), infowindow);
									}
								}
								else
								{
									gemni_map_geocoder_marker.setPosition(place.geometry.location);
									gemni_panorama_geocoder_marker.setPosition(place.geometry.location);
									gemni_map_geocoder_marker.setMap(gemni_map);
									gemni_panorama_geocoder_marker.setMap(gemni_panorama);
									gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
									//google.maps.event.trigger(gemni_map_geocoder_marker, 'click');
									if (!gemni_map_geocoder_marker.getInfoState())
									{
										//gemni_map_geocoder_marker.getInfoWindow().close();
										gemni_panorama_geocoder_marker.setInfoState(false);
										gemni_panorama_geocoder_marker.getInfoWindow().close();
										gemni_map_geocoder_marker.setInfoState(true);
										gemni_map_geocoder_marker.getInfoWindow().open(gemni_map, gemni_map_geocoder_marker);
										//discoverPlaceInfo(marker.getPosition(), infowindow);
									}
								}
							}
						}
					}
				});
			}
		}
	});
	
	google.maps.event.addDomListener(gemni_filter_input, 'keypress', function(e)
	{
		if (e.keyCode == 13)
		{
			google.maps.event.trigger(gemni_map, 'idle');
		}
		/*else if (gemni_filter_input.value == '')
		{
			google.maps.event.trigger(gemni_map, 'idle');
		}*/
	});
	
	google.maps.event.addDomListener(gemni_filter_input, 'change', function()
	{
		//alert('gemni_filter_input change!');
		/*if (gemni_filter_input.value == '')
		{
			google.maps.event.trigger(gemni_map, 'idle');
		}*/
	});
	
	gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
	//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
	gemni_auto_complete_on_map = true;
	
	var filter_auto_complete = $(gemni_filter_input).autocomplete({
        onItemSelect: function(item)
		{
            /*var text = 'You selected <b>' + item.value + '</b>';
            if (item.data.length) {
                text += ' <i>' + item.data.join(', ') + '</i>';
            }
            alert(text);*/
            //google.maps.event.trigger(gemni_map, 'idle');
            //alert(item.data[0]);
            //alert(item.data[1]);
            //alert(item.data[2]);
            //alert(item.data[3]);
            var rowID = item.data[0];
            var lat = item.data[1];
            var lng = item.data[2];
            var latlng = new google.maps.LatLng(lat, lng);
            gemni_generate_marker_click_position(rowID, latlng, (gemni_panorama_mode == 2 && gemni_panorama.getVisible()), false);
			gemni_filter_input.value = '';
            google.maps.event.trigger(gemni_map, 'idle');
        },
        maxItemsToShow: 5,
        minChars: 0,
        useCache: false,
        selectFirst: false,
        autoFill: false,
        selectOnly: false,
        filterResults: false,
        sortResults: false,
        remoteDataType: 'json',
        dataSearcher: gemni_filter_auto_complete_search
    });
	
	gemni_check_auto_complete_dimensions();
}

//, contact, access, cost, morning, evening, night, dawn, sun, mon, tue, wed, thu, fri, sat

function gemni_reload_marker_contents_map_edit(marker)
{
	var rowID = marker.getRowID();
	var query = "SELECT ROWID, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities FROM " + gemni_fusiontables_data_source + " WHERE ROWID = '" + rowID + "'";
	//document.gemni_client.gemni_run_select(query, "gemni_reload_marker_contents_map_edit_callback", rowID);
	gemni_run_select(query, "gemni_reload_marker_contents_map_edit_callback");
}

function gemni_reload_marker_contents_map_edit_callback(data)
{
	if (!data['rows'])
	{
		return;
	}
	var parsed = data['rows'];
	var row = parsed[0];
	var rowID = row[0];
	var date = row[1];
	var address = row[2];
	var comments = row[3];
	var title = row[4];
	var contact = row[5];
	var access = row[6];
	var cost = row[7];
	var dayperiods = row[8];
	var weekdays = row[9];
	var modalities = row[10];
	
	var marker = gemni_find_marker(rowID);
	if (marker)
	{
		gemni_set_marker_contents(marker, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities);
		marker.setDraggable(true);
		marker.getBrother().setDraggable(true);
		marker.getEditorWindow().setWindowState(true);
		marker.getEditorWindow().open(gemni_map, marker);
	}
}

function gemni_reload_marker_contents_panorama_edit(marker)
{
	var rowID = marker.getRowID();
	var query = "SELECT ROWID, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities FROM " + gemni_fusiontables_data_source + " WHERE ROWID = '" + rowID + "'";
	//document.gemni_client.gemni_run_select(query, "gemni_reload_marker_contents_panorama_edit_callback", rowID);
	gemni_run_select(query, "gemni_reload_marker_contents_panorama_edit_callback");
}

function gemni_reload_marker_contents_panorama_edit_callback(data)
{
	if (!data['rows'] || data['rows']['length'] == 0)
	{
		return;
	}
	//var keep = new Array();
	var parsed = data['rows'];
	var row = parsed[0];
	var rowID = row[0];
	var date = row[1];
	var address = row[2];
	var comments = row[3];
	var title = row[4];
	var contact = row[5];
	var access = row[6];
	var cost = row[7];
	var dayperiods = row[8];
	var weekdays = row[9];
	var modalities = row[10];
	
	var marker = gemni_find_marker(rowID);
	if (marker)
	{
		gemni_set_marker_contents(marker, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities);
		marker.setDraggable(true);
		marker.getBrother().setDraggable(true);
		marker.getEditorWindow().setWindowState(true);
		marker.getEditorWindow().open(gemni_panorama, marker.getBrother());
	}
}

function gemni_reload_marker_contents(marker)
{
    var rowID = marker.getRowID();
	var query = "SELECT ROWID, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities FROM " + gemni_fusiontables_data_source + " WHERE ROWID = '" + rowID + "'";
	//document.gemni_client.gemni_run_select(query, "gemni_reload_marker_contents_callback", rowID);
	gemni_run_select(query, "gemni_reload_marker_contents_callback");
}

function gemni_reload_marker_contents_callback(data)
{
	if (!data['rows'] || data['rows']['length'] == 0)
	{
		return;
	}
	var parsed = data['rows'];
	var row = parsed[0];
	var rowID = row[0];
	var date = row[1];
	var address = row[2];
	var comments = row[3];
	var title = row[4];
	var contact = row[5];
	var access = row[6];
	var cost = row[7];
	var dayperiods = row[8];
	var weekdays = row[9];
	var modalities = row[10];
	var marker = gemni_find_marker(rowID);
	if (marker)
	{
		gemni_set_marker_contents(marker, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities);
	}
}

function gemni_reload_map_markers_interval()
{
	//alert("interval!");
	gemni_reload_map_markers();
}

function gemni_reload_map_markers_event()
{
	//alert('zoom:' + gemni_map.getZoom());
	//alert("gemni_reload_map_markers_event!");
	//alert(gemni_map.getBounds().toString());
	window.clearInterval(gemni_interval);
	gemni_reload_map_markers();
	//gemni_interval = window.setInterval(gemni_reload_map_markers_interval, 60000);
}

function gemni_reload_markers_contents()
{
	//alert("gemni_reload_markers_contents");
	//TODO: count total loaded markers in interface
	var marker_counter = 0;
	var bounds = gemni_map.getBounds();
	var sw = bounds.getSouthWest();
	var ne = bounds.getNorthEast();
	var query = "SELECT ROWID, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities FROM " + gemni_fusiontables_data_source + " WHERE mark IN (";
	var reload = 0;
	var first = true;
	for (var i in gemni_markers)
	{
		var marker = gemni_markers[i];
		if (marker && marker.getMap() && marker.getBrother().getMap() && marker.getInfoWindow())
		{
			if (marker.getInfoState() || marker.getBrother().getInfoState())
			{
				if (first)
				{
					query += "'" + marker.getRowID() + "'";
					first = false;
				}
				else
				{
					query += ",'" + marker.getRowID() + "'";
				}
				reload++;
			}
		}
		marker_counter++;
	}
	gemni_marker_counter_span.innerHTML = "&nbsp;" + "Activities".toLocaleString() + "&nbsp;:&nbsp;" + marker_counter + "&nbsp;";
	if (reload > 0)
	{
		query += ")"
		//alert(query);
		//document.gemni_client.gemni_run_select(query, "gemni_reload_markers_contents_callback", "");
		gemni_run_select(query, "gemni_reload_markers_contents_callback", "");
	}
}

function gemni_reload_markers_contents_callback(data)
{
	//alert(csv);
	if (!data['rows'] || data['rows']['length'] == 0)
	{
		return;
	}
	var parsed = data['rows'];
	for (var i = 0; i < parsed['length'];i++)
	{
		var row = parsed[i];
		var rowID = row[0];
		var date = row[1];
		var address = row[2];
		var comments = row[3];
		var title = row[4];
		var contact = row[5];
		var access = row[6];
		var cost = row[7];
		var dayperiods = row[8];
		var weekdays = row[9];
		var modalities = row[10];
		var marker = gemni_find_marker(rowID);
		if (marker)
		{
			gemni_set_marker_contents(marker, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities);
		}
	}
}

//TODO: novos filtros
function gemni_reload_map_markers()
{
	//alert('reloading!');
	gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker);
	gemni_set_geocoder_marker_contents(gemni_panorama_geocoder_marker);
	var i = 0;
	var j = 0;
	var clauses;
	var filter_clause_comments = "";
	//alert(gemni_filter_input.value);
	//alert(gemni_filter_input.className != 'hasPlaceholder');
	
	if ((gemni_filter_input.value.length > 0) && (gemni_filter_input.className != 'hasPlaceholder'))
	{
		//filter_clause_comments = " AND filter CONTAINS IGNORING CASE '" + gemni_filter_input.value + "'";
		clauses = gemni_parse_options(gemni_filter_input.value);
		for (i = 0;i < clauses.length;i++)
		{
			if (clauses[i] && clauses[i].length > 0)
			{
				if (clauses[i].charAt(0) == '!')
				{
					filter_clause_comments += " AND filter DOES NOT CONTAIN '" + clauses[i].substring(1).toLowerCase() + "'";
				}
				else
				{
					filter_clause_comments += " AND filter CONTAINS '" + clauses[i].toLowerCase() + "'";
				}
			}
		}
	}
	
	if (gemni_panorama_mode != 2 || !gemni_panorama.getVisible())
	{
		var bounds = gemni_map.getBounds();
		var sw = bounds.getSouthWest();
		var ne = bounds.getNorthEast();
		gemni_reload_bounds = bounds;
		var query;
		query = "SELECT ROWID, latitude, longitude, mark FROM " + gemni_fusiontables_data_source + " WHERE latitude > " + sw.lat() + " AND latitude < + " + ne.lat() + " AND longitude > " + sw.lng() + " AND longitude < " + ne.lng() + filter_clause_comments;
		//query = "SELECT ROWID, latitude, longitude, mark FROM " + gemni_fusiontables_data_source + " WHERE ST_INTERSECTS(latitude, RECTANGLE(LATLNG(" + sw.toUrlValue() + "), LATLNG(" + ne.toUrlValue() + ")))" + filter_clause_comments;
		//query = "SELECT ROWID, location, id FROM " + gemni_fusiontables_data_source + filter_clause_comments;
		//document.gemni_client.gemni_run_select(query, "gemni_reload_map_markers_callback", "");
		//alert(query);
		gemni_run_select(query, "gemni_reload_map_markers_callback", "");
	}
	else
	{
		//alert('using circle!');
		var position = gemni_panorama.getPosition();
		gemni_panorama_circle.setCenter(position);
		var bounds = gemni_panorama_circle.getBounds();
		var sw = bounds.getSouthWest();
		var ne = bounds.getNorthEast();
		gemni_reload_bounds = bounds;
		var query;
		query = "SELECT ROWID, latitude, longitude, mark FROM " + gemni_fusiontables_data_source + " WHERE latitude > " + sw.lat() + " AND latitude < + " + ne.lat() + " AND longitude > " + sw.lng() + " AND longitude < " + ne.lng() + filter_clause_comments;
		//query = "SELECT ROWID, latitude, longitude, mark FROM " + gemni_fusiontables_data_source + " WHERE ST_INTERSECTS(latitude, RECTANGLE(LATLNG(" + sw.toUrlValue() + "), LATLNG(" + ne.toUrlValue() + ")))" + filter_clause_comments;
		//query = "SELECT ROWID, location, id FROM " + gemni_fusiontables_data_source + filter_clause_comments;
		//document.gemni_client.gemni_run_select(query, "gemni_reload_map_markers_callback", "");
		//alert(query);
		gemni_run_select(query, "gemni_reload_map_markers_callback", "");
	}
	gemni_save_cookie();
}

function gemni_reload_map_markers_callback(data)
{
	//alert("data!");
	if (!data || !data['rows'])
	{
		//alert("nothing!");
		//return;
	}
	//alert(data['rows'].toString());
	var addeds = new Array();
	var present = new Array();
	var deleteds = new Array();
	var parsed = data['rows'];
	var first = true;
	var rowid;
	/*if (gemni_panorama.getVisible())
	{
		gemni_panorama_circle.setCenter(gemni_panorama.getPosition());
	}*/
	//var location;
	var lat;
	var lng;
	var id;
	var row;
	if (parsed)
	{
		for (var i = 0;i < parsed['length'];i++)
		{
			row = parsed[i];
			rowid = '' + row[0] + '';
			//location = row[1].split(',');
			lat = row[1];
			lng = row[2];
			id = row[3];
			if (lat)
			{
				gemni_load_map_marker(rowid, lat, lng, id, addeds, present);
			}
		}
	}
	gemni_clean_markers(deleteds, present);
	gemni_clusterer.addMarkers(addeds, true);
	gemni_clusterer.removeMarkers(deleteds, true);
	//alert(deleteds.length);
	gemni_clusterer.repaint();
	if (gemni_future_marker_click_id)
	{
		if (!gemni_future_marker_click_on_panorama)
		{
			var marker = gemni_find_marker(gemni_future_marker_click_id);
			if (marker)
			{
				if (gemni_future_marker_click_full)
				{
					marker.setFull(gemni_future_marker_click_full);
				}
				gemni_future_marker_click_full = null;
				gemni_future_marker_click_id = null;
				gemni_future_marker_click_on_panorama = null;
				
				if (!marker.getInfoState())
				{
					//google.maps.event.trigger(marker, 'click');
					gemni_map_marker_click(marker);
				}
			}
			else
			{
				//var query = "SELECT ROWID, location FROM " + gemni_fusiontables_data_source + " WHERE ROWID = '" + gemni_future_marker_click_id + "'";
				//gemni_run_select(query, "gemni_generate_marker_click_callback");
			}
		}
		else
		{
			var marker = gemni_find_marker(gemni_future_marker_click_id);
			if (marker)
			{
				if (gemni_future_marker_click_full)
				{
					marker.setFull(gemni_future_marker_click_full);
				}
				gemni_future_marker_click_full = null;
				gemni_future_marker_click_id = null;
				gemni_future_marker_click_on_panorama = null;
				if (!gemni_panorama.getVisible())
				{
					
				}
				if (gemni_panorama.getVisible())
				{
					if (!marker.getBrother().getInfoState())
					{
						//google.maps.event.trigger(marker.getBrother(), 'click');
						gemni_panorama_marker_click(marker);
					}
				}
				else
				{
					if (!marker.getInfoState())
					{
						//google.maps.event.trigger(marker, 'click');
						gemni_map_marker_click(marker);
					}
				}
			}
			else
			{
				//var query = "SELECT ROWID, location FROM " + gemni_fusiontables_data_source + " WHERE ROWID = '" + gemni_future_marker_click_id + "'";
				//gemni_run_select(query, "gemni_generate_marker_click_callback");
			}
		}
	}
	/*if (gemni_geocoder_marker_initial_position)
	{
		//alert("trigger!");
		if (gemni_preloaded_marker_click_on_panorama)
		{
			//alert("trigger!");
		}
		else
		{
			//alert("trigger!");
			google.maps.event.trigger(gemni_map_geocoder_marker, 'click');
		}
		gemni_geocoder_marker_initial_position = null;
	}*/
	gemni_reload_markers_contents();
}

function gemni_delete_markers(deleteds)
{
	for (var i = 0;i < deleteds.length;i++)
	{
		//deleted = deleteds[i];
		delete deleteds[i];
	}
}

function gemni_clean_markers(deleteds, present)
{
	//alert("clean markers start");
	var current;
	var deleted;
	var bounds = gemni_reload_bounds;
	var clusterable;
	/*if (gemni_panorama_mode != 2 || !gemni_panorama.getVisible())
	{
		bounds = gemni_map.getBounds();
	}
	else
	{
		gemni_panorama_circle.setCenter(gemni_panorama.getPosition());
		bounds = gemni_panorama_circle.getBounds();
	}*/
	//alert(gemni_markers.length);
	for (var i in gemni_markers)
	{
		current = gemni_markers[i];
		//alert(current.getRowID());
		//alert(present[current.getRowID()] != null);
		clusterable = current.getClusterable() && current.getBrother().getClusterable();
		//alert(clusterable);
		//alert(clusterable);
		//if (current && ((!bounds.contains(current.getPosition()) && clusterable) || (!present[current.getRowID()] && (bounds.contains(current.getPosition()) || clusterable))))
		if (current && clusterable && ((!bounds.contains(current.getPosition()) || !present[current.getRowID()]) || (bounds.contains(current.getPosition()) && !present[current.getRowID()])))
		{
			//alert('deleted ' + current.getRowID());
			deleteds.push(current);
			current.setMap(null);
			current.getBrother().setMap(null);
			gemni_clear_marker_listeners(current);
			delete gemni_markers[current.getRowID()];
			//gemni_markers.splice(i, 1);
		}
	}
	//alert("clean markers end");
}

function gemni_load_map_marker(rowID, lat, lng, id, addeds, present)
{
	var draggable = false;
	/*if (gemni_has_data_access)
	{
		draggable = true;
	}*/
	var latlng = new google.maps.LatLng(lat, lng);
	var title = 'ID:' + rowID;
	var marker = gemni_find_marker(rowID);
	if (marker)
	{
		present[rowID] = marker;
		if (!id || id == '')
		{
			marker.setUnsaved(true);
			//alert('unsaved');
		}
		else
		{
			marker.setUnsaved(false);
			//alert('saved');
		}
		if (!marker.getClusterable() || !marker.getBrother().getClusterable())
		{
			return;
		}
		if (!marker.getPosition().equals(latlng))
		{
			marker.setPosition(latlng);
			marker.setTitle(title);
			marker.getBrother().setPosition(latlng);
			marker.getBrother().setTitle(title);
		}
	}
	else
	{
		//var newmarker = gemni_build_marker(null, latlng, draggable, 'pointer', 'red');
		//alert("new marker: " + rowID);
		var newmarker = new google.maps.Marker
		({
			position: latlng, 
			cursor: 'pointer',
			draggable: draggable
		});
		//clusterer.addMarker(newmarker, true);
		newmarker.setTitle(title);
		//newmarker.setBrother(gemni_build_marker(gemni_panorama, latlng, draggable, 'pointer', 'red'));
		newmarker.setBrother(new google.maps.Marker
		({
			position: latlng, 
			cursor: 'pointer',
			draggable: draggable,
			map: gemni_panorama
		}));
		newmarker.getBrother().setTitle(title);
		newmarker.setRowID(rowID);
		newmarker.getBrother().setRowID(rowID);
		//markers.push(newmarker);
		gemni_markers[rowID] = newmarker;
		google.maps.event.addListener(newmarker, 'dragend', gemni_dragend_marker);
		google.maps.event.addListener(newmarker.getBrother(), 'dragend', gemni_dragend_marker);
		google.maps.event.addListener(newmarker, 'dragstart', gemni_dragstart_marker);
		google.maps.event.addListener(newmarker.getBrother(), 'dragstart', gemni_dragstart_marker);
		google.maps.event.addListener(newmarker.getBrother(), 'mouseover', gemni_mouseover_marker_in_panorama);
		google.maps.event.addListener(newmarker.getBrother(), 'mouseout', gemni_mouseout_marker_in_panorama);
		gemni_create_map_marker_context_menu(newmarker);
		gemni_create_panorama_marker_context_menu(newmarker.getBrother());
		create_map_marker_infowindow_loader(newmarker);
		//clusterer.addMarker(newmarker, true);
		present[rowID] = newmarker;
		addeds.push(newmarker);
		if (!id || id == '')
		{
			newmarker.setUnsaved(true);
		}
		else
		{
			newmarker.setUnsaved(false);
		}
		//if (draggable && (!id || id == ''))
		//{
			//newmarker.setSaved(false);
			//gemni_create_marker_infowindow_contents(newmarker);
			//gemni_set_marker_contents(newmarker, '', '', '' ,'');
			
			/*if (id == 'NEW_FROM_MAP')
			{
				if (!newmarker.getInfoWindow())
				{
					gemni_create_marker_infowindow_contents(newmarker);
				}
				if (newmarker.getEditorWindow().getWindowState())
				{
					newmarker.getEditorWindow().close();
				}
				if (newmarker.getInfoState() || newmarker.getBrother().getInfoState())
				{
					newmarker.getInfoWindow().close();
					newmarker.setInfoState(false);
					newmarker.getBrother().setInfoState(false);
					newmarker.getEditorWindow().open(gemni_map, newmarker);
					newmarker.getEditorWindow().setWindowState(true);
				}
				else
				{
					gemni_reload_marker_contents_map_edit(newmarker);
				}
			}
			else
			{
				if (!newmarker.getInfoWindow())
				{
					gemni_create_marker_infowindow_contents(newmarker);
				}
				if (newmarker.getEditorWindow().getWindowState())
				{
					newmarker.getEditorWindow().close();
				}
				if (newmarker.getInfoState() || newmarker.getBrother().getInfoState())
				{
					newmarker.getInfoWindow().close();
					newmarker.setInfoState(false);
					newmarker.getBrother().setInfoState(false);
					newmarker.getEditorWindow().open(gemni_panorama, newmarker);
					newmarker.getEditorWindow().setWindowState(true);
				}
				else
				{
					gemni_reload_marker_contents_panorama_edit(newmarker);
				}
			}*/
			//alert('new marker found');
			//alert('not saved!');
		//}
		//else
		//{
			//newmarker.setSaved(true);
			//alert('saved!');
		//}
		//keep.push(newmarker);
	}
}

function gemni_map_marker_click(marker)
{
	if (!marker.getInfoWindow())
	{
		gemni_create_marker_infowindow_contents(marker);
	}
	if (marker.getEditorWindow().getWindowState())
	{
		marker.setDraggable(false);
		marker.getBrother().setDraggable(false);
		marker.getEditorWindow().setWindowState(false);
		marker.getEditorWindow().close();
		return;
	}
	if ((gemni_map_marker_full_context_menu.getCurrentControl() == marker) || (gemni_map_marker_partial_context_menu.getCurrentControl() == marker))
	{
		return;
	}
	if (!marker.getInfoState())
	{
		if (marker.getBrother().getInfoState())
		{
			marker.getBrother().setInfoState(false);
			marker.getInfoWindow().close();
		}
		gemni_reload_marker_contents(marker);
		marker.setInfoState(true);
		marker.getInfoWindow().open(gemni_map, marker);
	}
	else
	{
		marker.getBrother().setInfoState(false);
		marker.setInfoState(false);
		marker.getInfoWindow().close();
	}
}

function gemni_panorama_marker_click(marker)
{
	if (!marker.getBrother().getInfoWindow())
	{
		gemni_create_marker_infowindow_contents(marker);
	}
	if (marker.getBrother().getEditorWindow().getWindowState())
	{
		marker.setDraggable(false);
		marker.getBrother().setDraggable(false);
		marker.getEditorWindow().setWindowState(false);
		marker.getEditorWindow().close();
		return;
	}
	if ((gemni_panorama_marker_full_context_menu.getCurrentControl() == marker.getBrother()) || (gemni_panorama_marker_partial_context_menu.getCurrentControl() == marker.getBrother()))
	{
		return;
	}
	if (!marker.getBrother().getInfoState())
	{
		if (marker.getInfoState())
		{
			marker.setInfoState(false);
			marker.getInfoWindow().close();
		}
		gemni_reload_marker_contents(marker.getBrother());
		marker.getBrother().setInfoState(true);
		marker.getInfoWindow().open(gemni_panorama, marker.getBrother());
	}
	else
	{
		marker.getBrother().setInfoState(false);
		marker.setInfoState(false);
		marker.getInfoWindow().close();
	}
}

function create_map_marker_infowindow_loader(marker)
{
	google.maps.event.addListener(marker, 'click', function()
	{
		if (!marker.getInfoWindow())
		{
			gemni_create_marker_infowindow_contents(marker);
		}
		if (marker.getEditorWindow().getWindowState())
		{
			marker.setDraggable(false);
			marker.getBrother().setDraggable(false);
			marker.getEditorWindow().setWindowState(false);
			marker.getEditorWindow().close();
			return;
		}
		if ((gemni_map_marker_full_context_menu.getCurrentControl() == marker) || (gemni_map_marker_partial_context_menu.getCurrentControl() == marker))
		{
			return;
		}
		if (!marker.getInfoState())
		{
			if (marker.getBrother().getInfoState())
			{
				marker.getBrother().setInfoState(false);
				marker.getInfoWindow().close();
			}
			gemni_reload_marker_contents(marker);
			marker.setInfoState(true);
			marker.getInfoWindow().open(gemni_map, marker);
		}
		else
		{
			marker.getBrother().setInfoState(false);
			marker.setInfoState(false);
			marker.getInfoWindow().close();
		}
	});

	google.maps.event.addListener(marker.getBrother(), 'click', function()
	{
		if (!marker.getBrother().getInfoWindow())
		{
			gemni_create_marker_infowindow_contents(marker);
		}
		if (marker.getBrother().getEditorWindow().getWindowState())
		{
			marker.setDraggable(false);
			marker.getBrother().setDraggable(false);
			marker.getEditorWindow().setWindowState(false);
			marker.getEditorWindow().close();
			return;
		}
		if ((gemni_panorama_marker_full_context_menu.getCurrentControl() == marker.getBrother()) || (gemni_panorama_marker_partial_context_menu.getCurrentControl() == marker.getBrother()))
		{
			return;
		}
		if (!marker.getBrother().getInfoState())
		{
			if (marker.getInfoState())
			{
				marker.setInfoState(false);
				marker.getInfoWindow().close();
			}
			gemni_reload_marker_contents(marker.getBrother());
			marker.getBrother().setInfoState(true);
			marker.getInfoWindow().open(gemni_panorama, marker.getBrother());
		}
		else
		{
			marker.getBrother().setInfoState(false);
			marker.setInfoState(false);
			marker.getInfoWindow().close();
		}
	});
}

function gemni_create_marker_infowindow_contents(marker)
{
	var infowindow = new google.maps.InfoWindow({disableAnimation: true, disableAutoPan: false});
	var editorwindow = new google.maps.InfoWindow({disableAnimation: true, disableAutoPan: false});
	google.maps.event.addListener(infowindow, 'closeclick', function()
	{
		marker.getBrother().setInfoState(false);
		marker.setInfoState(false);
	});
	google.maps.event.addListener(editorwindow, 'closeclick', function()
	{
		marker.setDraggable(false);
		marker.getBrother().setDraggable(false);
		editorwindow.setWindowState(false);
	});
	marker.setInfoWindow(infowindow);
	marker.setEditorWindow(editorwindow);
	//gemni_set_marker_contents(marker, '', '', '');
}

function gemni_create_geocoder_marker_infowindow_contents(marker)
{
	var infowindow = new google.maps.InfoWindow({disableAnimation: true, disableAutoPan: false});
	google.maps.event.addListener(infowindow, 'closeclick', function()
	{
		//marker.getBrother().setInfoState(false);
		marker.setInfoState(false);
	});
	marker.setInfoWindow(infowindow);
}

function gemni_update_marker_contents(marker, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities)
{
	var query = "UPDATE " + gemni_fusiontables_data_source + 
	" SET latitude = '" + marker.getPosition().lat() +
	"', longitude = '" + marker.getPosition().lng() + 
	"', location = '" + marker.getPosition().toUrlValue() + 
	"', date = '" + date + 
	"', address = '" + address + 
	"', comments = '" + comments + 
	"', title = '" + title + 
	"', contact = '" + contact + 
	"', access = '" + access + 
	"', cost = '" + cost + 
	"', dayperiods = '" + dayperiods + 
	"', weekdays = '" + weekdays + 
	"', modalities = '" + modalities + 
	"', filter = '" + (title + " " + address + " " + contact + " " + modalities + " " + comments).toLowerCase() + 
	"', mark = '" + marker.getRowID() + 
	"' WHERE ROWID = '" + marker.getRowID() + "'";
	//window['gemni_client']['gemni_run_update'](query, "gemni_update_marker_contents_callback", "");
	gemni_run_update(query, "gemni_update_marker_contents_callback", "");
	gemni_set_marker_contents(marker, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities)
}

/*function gemni_update_marker_contents(marker, date, address, comments, title)
{
	var query = "UPDATE " + gemni_fusiontables_data_source + " SET date = '" + date + "', address = '" + address + "', comments = '" + comments + "', title = '" + title + "', filter = '" + (title + " " + address + " " + comments).toLowerCase() + "', mark = '" + marker.getRowID() + "' WHERE ROWID = '" + marker.getRowID() + "'";
	window['gemni_client']['gemni_run_update'](query, "gemni_update_marker_contents_callback", "");
	gemni_set_marker_contents(marker, date, address, comments, title);
}*/

function gemni_update_marker_contents_callback()
{
	
}

function gemni_parse_options(data)
{
	//var data
	//var whitespace = 
	var result = [];
	if (data != null)
	{
		var c;
		var z = data.length;
		var insideQuotes = false;
		var buf = '';
		for (var i = 0; i < z; ++i)
		{
			c = data.charAt(i);
			//alert("c:[" + c + "]");
			if (c == '"')
			{
				result.push(buf);
				//alert("push:[" + buf + "]");
				buf = '';
				insideQuotes = !insideQuotes;
			}
			else if (c == '\\')
			{
				if ((z > i + 1)
				&& ((data.charAt(i + 1) == '"')
				|| (data.charAt(i + 1) == '\\')))
				{
					buf += data.charAt(i + 1);
					++i;
				}
				else
				{
					buf += "\\";
				}
			}
			else
			{
				if (insideQuotes)
				{
					buf += c;
				}
				else
				{
					if (c == ' ')
					{
						result.push(buf);
						//alert("push:[" + buf + "]");
						buf = '';
					}
					else
					{
						buf += c;
					}
				}
			}
		}
		result.push(buf);
		//alert("push:[" + buf + "]");
	}
	
	//String[] result = new String[resultBuffer.size()];
	//return ((String[]) resultBuffer.toArray(result));
	return result;
}

function gemni_parse_csv(csvString)
{
	var fieldEndMarker  = /([,\015\012] *)/g; /* Comma is assumed as field separator */
	var qFieldEndMarker = /("")*"([,\015\012] *)/g; /* Double quotes are assumed as the quote character */
	var startIndex = 0;
	var records = [], currentRecord = [];
	do
	{
		//If the to-be-matched substring starts with a double-quote, use the qFieldMarker regex, otherwise use fieldMarker.
		var endMarkerRE = (csvString.charAt(startIndex) == '"') ? qFieldEndMarker : fieldEndMarker;
		endMarkerRE.lastIndex = startIndex;
		var matchArray = endMarkerRE.exec(csvString);
		if (!matchArray || !matchArray.length)
		{
			break;
		}
		var endIndex = endMarkerRE.lastIndex - matchArray[matchArray.length - 1].length;
		var match = csvString.substring(startIndex, endIndex);
		if (match.charAt(0) == '"')
		{ // The matching field starts with a quoting character, so remove the quotes
			match = match.substring(1, match.length - 1).replace(/""/g, '"');
		}
		currentRecord.push(match);
		var marker = matchArray[0];
		if (marker.indexOf(',') < 0)
		{ // Field ends with newline, not comma
			records.push(currentRecord);
			currentRecord = [];
		}
		startIndex = endMarkerRE.lastIndex;
	}
	while (true);
	if (startIndex < csvString.length)
	{ // Maybe something left over?
		var remaining = csvString.substring(startIndex).trim();
		if (remaining)
		{
			currentRecord.push(remaining);
		}
	}
	if (currentRecord.length > 0)
	{ // Account for the last record
		records.push(currentRecord);
	}
	return records;
};

function gemni_complete_zeros(string, minimum_digits)
{
	string = string.toString();
	if (string.length < minimum_digits)
	{
		string = "0" + string;
	}
	return string;
}

function gemni_find_marker(rowID)
{
	/*var marker;
	for (var i = 0;i < gemni_markers.length;i++)
	{
		marker = gemni_markers[i];
		if (marker.getRowID() == rowID)
		{
			return marker;
		}
	}
	return null;*/
	return gemni_markers[rowID];
}

function gemni_create_map_marker(latlng, source)
{
	var currentDate = new Date();
	var year = currentDate.getFullYear();
	var month = gemni_complete_zeros(currentDate.getMonth() + 1, 2);
	var day = gemni_complete_zeros(currentDate.getDate(), 2);
	var hours = gemni_complete_zeros(currentDate.getHours(), 2);
	var minutes = gemni_complete_zeros(currentDate.getMinutes(), 2);
	//var seconds = gemni_complete_zeros(currentDate.getSeconds(), 2);
	var newmarkerDate = year + "." + month + "." + day + " " + hours + ":" + minutes;
	//var query = "INSERT INTO " + gemni_fusiontables_data_source + " (location, date, id) VALUES ('" + latlng.toUrlValue() + "', '" + newmarkerDate + "', '" + (source == 1?"NEW_FROM_MAP":"NEW_FROM_PANORAMA") + "')";
	var query = "INSERT INTO " + gemni_fusiontables_data_source + " (latitude, longitude, location, date) VALUES ('" + latlng.lat() + "', '" + latlng.lng() + "', '" + latlng.toUrlValue() + "', '" + newmarkerDate + "')";
	//window['gemni_client']['gemni_run_update'](query, "gemni_create_map_marker_callback", latlng.toUrlValue() + "," + source + "," + newmarkerDate);
	//window['gemni_run_update'](query, "gemni_create_map_marker_callback", latlng.toUrlValue() + "," + source + "," + newmarkerDate);
	gemni_run_update(query, "gemni_create_map_marker_callback", latlng.toUrlValue() + "," + source + "," + newmarkerDate);
}

function gemni_create_map_marker_callback(response, parameters)
{
	//response = response.replace(/;/g, '\n');
	//alert('gemni_create_map_marker_callback');
	var draggable = false;
	if (gemni_has_data_access)
	{
		//draggable = true;
	}
	var rowID = null;
	var lat = parameters.split(',')[0];
	var lng = parameters.split(',')[1];
	var source = parameters.split(',')[2];
	var date = parameters.split(',')[3];
	var latlng = new google.maps.LatLng(lat, lng);

	//alert(response);
	if (response)
	{
		//rowID = gemni_parse_csv(response)[1][0];
		//alert('response' + response.toString());
		rowID = response.rows[0];
		//alert('new rowid: ' + rowID);
	}
	if (rowID)
	{
		if (!gemni_find_marker(rowID))
		{
			var title = 'ID:' + rowID;
			//var newmarker = gemni_build_marker(null, latlng, draggable, 'pointer', 'red');
			var newmarker = new google.maps.Marker
			({
				position: latlng, 
				cursor: 'pointer',
				draggable: draggable
			});
			//clusterer.addMarker(newmarker, true);
			newmarker.setTitle(title);
			//newmarker.setBrother(gemni_build_marker(gemni_panorama, latlng, draggable, 'pointer', 'red'));
			newmarker.setBrother(new google.maps.Marker
			({
				position: latlng, 
				cursor: 'pointer',
				draggable: draggable,
				map: gemni_panorama
			}));
			newmarker.getBrother().setTitle(title);
			newmarker.setRowID(rowID);
			newmarker.getBrother().setRowID(rowID);
			gemni_markers[rowID] = newmarker;
			google.maps.event.addListener(newmarker, 'dragend', gemni_dragend_marker);
			google.maps.event.addListener(newmarker.getBrother(), 'dragend', gemni_dragend_marker);
			google.maps.event.addListener(newmarker, 'dragstart', gemni_dragstart_marker);
			google.maps.event.addListener(newmarker.getBrother(), 'dragstart', gemni_dragstart_marker);
			google.maps.event.addListener(newmarker.getBrother(), 'mouseover', gemni_mouseover_marker_in_panorama);
			google.maps.event.addListener(newmarker.getBrother(), 'mouseout', gemni_mouseout_marker_in_panorama);
			gemni_create_map_marker_context_menu(newmarker);
			gemni_create_panorama_marker_context_menu(newmarker.getBrother());
			gemni_create_marker_infowindow_contents(newmarker);
			create_map_marker_infowindow_loader(newmarker);
			gemni_set_marker_contents(newmarker, date, '', '', '', '', '', '', '', '', '', '');
			if (source == '1')
			{
				newmarker.setDraggable(true);
				newmarker.getBrother().setDraggable(true);
				newmarker.getEditorWindow().setWindowState(true);
				newmarker.getEditorWindow().open(gemni_map, newmarker);
			}
			else
			{
				newmarker.setDraggable(true);
				newmarker.getBrother().setDraggable(true);
				newmarker.getEditorWindow().setWindowState(true);
				newmarker.getEditorWindow().open(gemni_panorama, newmarker.getBrother());
			}
			gemni_clusterer.addMarker(newmarker);
		}
		var query = "UPDATE " + gemni_fusiontables_data_source + " SET mark = '" + rowID + "' WHERE ROWID = '" + rowID + "'";
		//window['gemni_client']['gemni_run_update'](query, "gemni_update_rowid_callback", "");
		gemni_run_update(query, "gemni_update_rowid_callback", "");
	}
	else
	{
		google.maps.event.trigger(gemni_map, 'idle');
	}
}

function gemni_update_rowid_callback(csv, parameters)
{
	
}

/*function discover_geocoder_marker_address()
{
	
}*/

function gemni_discover_marker_address(input, rowID)
{
	var marker = gemni_find_marker(rowID);
	if (marker)
	{
		//gemni_discover_place_info(marker);
		var reverseGeocodingRequest =
		{
			latLng: marker.getPosition()
		}
		gemni_geocoder.geocode(reverseGeocodingRequest, function(results, status)
		{
			if (status == google.maps.GeocoderStatus.OK)
			{
				if (results[0])
				{
					input.value = results[0].formatted_address;
				}
			}
		});
	}
}

function gemni_discover_place_info(marker)
{
	var infowindow = marker.getInfoWindow();
	if (!infowindow)
	{
		gemni_create_marker_infowindow_contents(marker);
		//gemni_set_marker_contents(marker, '', '', '');
	}
	var reverseGeocodingRequest =
	{
		latLng: marker.getPosition()
	}
	gemni_geocoder.geocode(reverseGeocodingRequest, function(results, status)
	{
		if (status == google.maps.GeocoderStatus.OK)
		{
			if (results[0])
			{
				var address = results[0].formatted_address;
				if (marker.getRowID())
				{
					var query = "UPDATE " + gemni_fusiontables_data_source + " SET address = '" + address + "' WHERE ROWID = '" +  marker.getRowID() + "'";
					//gemni_set_marker_contents(marker, address, marker.getEditorWindow().getCommentsValue(), marker.getEditorWindow().getTitleValue());
					//window['gemni_client']['gemni_run_update'](query, "gemni_discover_place_info_callback", marker.getRowID());
					gemni_run_update(query, "gemni_discover_place_info_callback", marker.getRowID());
				}
				if ((marker == gemni_map_geocoder_marker) || (marker == gemni_panorama_geocoder_marker))
				{
					gemni_set_geocoder_marker_contents(marker, address);
					//alert("click");
					//google.maps.event.trigger(marker, 'click');
				}
			}
		}
		else
		{
			//alert("Geocoder failed due to: " + status);
		}
	});
}

function gemni_discover_place_info_callback(response, rowID)
{
	var marker = gemni_find_marker(rowID);
	if (marker)
	{
		gemni_reload_marker_contents(marker);
	}
}

function gemni_create_drawing_button()
{
	//gemni_map_add_marker_button_div = document.createElement('DIV');
	//gemni_map_add_marker_button_div.style.display = 'inline';
	/*gemni_map_add_marker_button_div.title = 'Add marker here'.toLocaleString();
	if (gemni_has_data_access)
	{
		var drawing_options = {drawingControl:false, drawingMode: null};
		drawing_manager = new google.maps.drawing.DrawingManager(drawing_options);
		drawing_manager.setMap(gemni_map);
		google.maps.event.addListener(drawing_manager, 'markercomplete', function(marker)
		{
			marker.setMap(null);
			gemni_create_map_marker(marker.getPosition(), 1);
			drawing_manager.setDrawingMode(null);
		});
		var gemni_map_add_marker_button = document.createElement('IMG');
		//gemni_map_add_marker_button.type = 'button';
		//gemni_map_add_marker_button.value = 'Add marker'.toLocaleString();
		gemni_map_add_marker_button.style.borderWidth = '1px';
		gemni_map_add_marker_button.style.borderStyle = 'solid';
		gemni_map_add_marker_button.style.borderColor = 'gray';
		gemni_map_add_marker_button.style.backgroundColor = 'white';
		gemni_map_add_marker_button.style.cursor = 'pointer';
		gemni_map_add_marker_button.src = 'images/add.gif';
		gemni_map_add_marker_button_div.appendChild(gemni_map_add_marker_button);
		google.maps.event.addDomListener(gemni_map_add_marker_button, 'click', function(e)
		{
			//google.accounts.user.logout(function(){}, gemni_fusiontables_scope);
			if (drawing_manager.getDrawingMode() == null)
			{
				drawing_manager.setDrawingMode(google.maps.drawing.OverlayType.MARKER);
			}
			else
			{
				drawing_manager.setDrawingMode(null);
			}
		});
		gemni_button_bar_subdiv.appendChild(gemni_map_add_marker_button_div);
	}*/
}

function gemni_create_logout_button()
{
	if (gemni_need_logout_button)
	{
		gemni_logout_button_div = document.createElement('DIV');
		gemni_logout_button_div.style.display = 'inline';
		gemni_logout_button_div.title = 'Logout'.toLocaleString();
		gemni_logout_button = document.createElement('IMG');
		//gemni_logout_button.type = 'button';
		//gemni_logout_button.value = 'Logout'.toLocaleString();
		gemni_logout_button.style.borderWidth = '1px';
		gemni_logout_button.style.borderStyle = 'solid';
		gemni_logout_button.style.borderColor = 'gray';
		gemni_logout_button.style.backgroundColor = 'white';
		gemni_logout_button.style.cursor = 'pointer';
		gemni_logout_button.style.width = '24px';
		gemni_logout_button.style.height = '24px';
		gemni_logout_button.src = 'images/logout.gif';
		gemni_logout_button_div.appendChild(gemni_logout_button);
		google.maps.event.addDomListener(gemni_logout_button, 'click', function(e)
		{
			//google.accounts.user.logout(function(){}, gemni_fusiontables_scope);
			gemni_logout();
			//window.location.reload();
		});
		gemni_button_bar_subdiv.appendChild(gemni_logout_button_div);
	}
}

function gemni_create_restart_button()
{
	gemni_restart_button_div = document.createElement('DIV');
	gemni_restart_button_div.style.display = 'inline';
	gemni_restart_button_div.title = 'Restart'.toLocaleString();
	gemni_restart_button = document.createElement('IMG');
	gemni_restart_button.style.borderWidth = '1px';
	gemni_restart_button.style.borderStyle = 'solid';
	gemni_restart_button.style.borderColor = 'gray';
	gemni_restart_button.style.backgroundColor = 'white';
	gemni_restart_button.style.cursor = 'pointer';
	gemni_restart_button.style.width = '24px';
	gemni_restart_button.style.height = '24px';
	gemni_restart_button.src = 'images/remove.gif';
	//gemni_restart_button.type = 'button';
	//gemni_restart_button.value = 'Restart'.toLocaleString();
	gemni_restart_button_div.appendChild(gemni_restart_button);
	google.maps.event.addDomListener(gemni_restart_button, 'click', function(e)
	{
		//google.accounts.user.logout(function(){}, gemni_fusiontables_scope);
		//logout();
		gemni_erase_cookie('gemni.project.state.' + gemni_fusiontables_data_source);
		window.location.reload();
	});
	gemni_button_bar_subdiv.appendChild(gemni_restart_button_div);
}

function gemni_create_panorama_menu(controlDiv, map)
{
	controlDiv.style.display = 'inline';
	controlDiv.style.paddingTop = '5px';
	controlDiv.style.paddingLeft = gemni_mobile?'0px':'0px';
	controlDiv.style.textAlign = 'center';
	
	gemni_panorama_menu_subdiv = document.createElement('DIV');
	gemni_panorama_menu_subdiv.style.display = 'block';
	
	var geocoder_button_div = document.createElement('DIV');
	geocoder_button_div.title = 'Search position data'.toLocaleString();
	geocoder_button_div.style.display = 'inline';
	var geocoder_button = document.createElement('IMG');
	//search_button.type = 'button';
	//search_button.title = 'Search position data'.toLocaleString();
	//search_button.value = 'Search position'.toLocaleString();
	geocoder_button.style.borderWidth = '1px';
	geocoder_button.style.borderStyle = 'solid';
	geocoder_button.style.borderColor = 'gray';
	geocoder_button.style.backgroundColor = 'white';
	geocoder_button.style.cursor = 'pointer';
	geocoder_button.style.width = '24px';
	geocoder_button.style.height = '24px';
	geocoder_button.src = 'images/geocode.gif';
	geocoder_button_div.appendChild(geocoder_button);
	gemni_panorama_menu_subdiv.appendChild(geocoder_button_div);

	// Set CSS for the control border
	if (gemni_has_data_access)
	{
		var marker_button_div = document.createElement('DIV');
		marker_button_div.style.display = 'inline';
		marker_button_div.title = 'Add activity here'.toLocaleString();
		var marker_button = document.createElement('IMG');
		//marker_button.type = 'button';
		marker_button.style.borderWidth = '1px';
		marker_button.style.borderStyle = 'solid';
		marker_button.style.borderColor = 'gray';
		marker_button.style.backgroundColor = 'white';
		marker_button.style.cursor = 'pointer';
		marker_button.style.width = '24px';
		marker_button.style.height = '24px';
		marker_button.src = 'images/add.gif';
		//marker_button.value = 'Add marker'.toLocaleString();
		marker_button_div.appendChild(marker_button);
		gemni_panorama_menu_subdiv.appendChild(marker_button_div);
	}

	gemni_panorama_center_button_div = document.createElement('DIV');
	gemni_panorama_center_button_div.style.display = 'inline';
	//gemni_map_layers_toggle_div.style.display = 'inline';
	gemni_panorama_center_button_div.title = 'Center map here'.toLocaleString();
	var center_button = document.createElement('IMG');
	//center_button.type = 'button';
	//center_button.value = 'Center map'.toLocaleString();
	center_button.style.borderWidth = '1px';
	center_button.style.borderStyle = 'solid';
	center_button.style.borderColor = 'gray';
	center_button.style.backgroundColor = 'white';
	center_button.style.cursor = 'pointer';
	center_button.style.width = '24px';
	center_button.style.height = '24px';
	center_button.src = 'images/center.gif';
	gemni_panorama_center_button_div.appendChild(center_button);
	gemni_panorama_menu_subdiv.appendChild(gemni_panorama_center_button_div);
	
	var gemni_panorama_close_button_div = document.createElement('DIV');
	gemni_panorama_close_button_div.style.display = 'inline';
	gemni_panorama_close_button_div.title = 'Close panorama'.toLocaleString();
	var close_button = document.createElement('IMG');
	//center_button.type = 'button';
	//center_button.value = 'Center map'.toLocaleString();
	close_button.style.borderWidth = '1px';
	close_button.style.borderStyle = 'solid';
	close_button.style.borderColor = 'gray';
	close_button.style.backgroundColor = 'white';
	close_button.style.cursor = 'pointer';
	close_button.style.width = '24px';
	close_button.style.height = '24px';
	close_button.src = 'images/close.gif';
	gemni_panorama_close_button_div.appendChild(close_button);
	gemni_panorama_menu_subdiv.appendChild(gemni_panorama_close_button_div);

	google.maps.event.addDomListener(geocoder_button, 'click', function(e)
	{
		var dist = 20;
		var latlng = google.maps.geometry.spherical.computeOffset(gemni_panorama.getPosition(), dist, gemni_panorama.getPov().heading);
		gemni_map_geocoder_marker.setPosition(latlng);
		gemni_panorama_geocoder_marker.setPosition(latlng);
		gemni_map_geocoder_marker.setMap(map);
		gemni_panorama_geocoder_marker.setMap(gemni_panorama);
		gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
		gemni_discover_place_info(gemni_panorama_geocoder_marker);
		//google.maps.event.trigger(gemni_panorama_geocoder_marker, 'click');
		if (!gemni_panorama_geocoder_marker.getInfoState())
		{
			//gemni_panorama_geocoder_marker.getInfoWindow().close();
			gemni_map_geocoder_marker.setInfoState(false);
			gemni_map_geocoder_marker.getInfoWindow().close();
			gemni_panorama_geocoder_marker.setInfoState(true);
			gemni_panorama_geocoder_marker.getInfoWindow().open(gemni_panorama, gemni_panorama_geocoder_marker);
			//discoverPlaceInfo(marker.getPosition(), infowindow);
		}
		else
		{
			
		}
		
	});
	if (gemni_has_data_access)
	{
		google.maps.event.addDomListener(marker_button, 'click', function(e)
		{
			//alert(e.latLng);
			var dist = 20;
			var latlng = google.maps.geometry.spherical.computeOffset(gemni_panorama.getPosition(), dist, gemni_panorama.getPov().heading);
			if (gemni_moved_marker_id)
			{
				//alert("move_marker_end " + gemni_moved_marker_id);
				var query = "UPDATE " + gemni_fusiontables_data_source + " SET latitude = '" + latlng.lat() + "', longitude = '" + latlng.lng() + "', location = '" + latlng.toUrlValue() + "' WHERE ROWID = '" + gemni_moved_marker_id + "'";
				//window['gemni_client']['gemni_run_update'](query, "gemni_move_marker_callback", gemni_moved_marker_id);
				gemni_run_update(query, "gemni_move_marker_callback", gemni_moved_marker_id);
				//google.maps.event.trigger(gemni_map, 'idle');
				gemni_moved_marker_id = null;
			}
			else
			{
				gemni_create_map_marker(latlng, 2);
			}
		});
	}
	
	google.maps.event.addDomListener(center_button, 'click', function(e)
	{
		if (gemni_panorama_mode != 2 || !panorama.getVisible())
		{
			gemni_map.panTo(gemni_panorama.getPosition());
		}
	});
	
	google.maps.event.addDomListener(close_button, 'click', function(e)
	{
		gemni_panorama.setVisible(false);
	});
	
	controlDiv.appendChild(gemni_panorama_menu_subdiv);
}

function gemni_cancel_full_screen(el)
{
	var requestMethod = el.gemni_cancel_full_screen||el.webkitCancelFullScreen||el.mozCancelFullScreen||el.exitFullscreen;
	if (requestMethod)
	{ // cancel full screen.
		requestMethod.call(el);
	}
	else if (typeof window.ActiveXObject !== "undefined")
	{ // Older IE.
	var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null)
		{
			wscript.SendKeys("{F11}");
		}
	}
}

function gemni_request_full_screen(el)
{
	// Supports most browsers and their versions.
	var requestMethod = el.gemni_request_full_screen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen;
	if (requestMethod)
	{ // Native full screen.
		requestMethod.call(el);
	}
	else if (typeof window.ActiveXObject !== "undefined")
	{ // Older IE.
		var wscript = new ActiveXObject("WScript.Shell");
		if (wscript !== null)
		{
			wscript.SendKeys("{F11}");
		}
	}
	return false
}

function gemni_toggle_full_screen()
{
	var elem = document.body; // Make the body go full screen.
	var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);

	if (isInFullScreen)
    {
		gemni_cancel_full_screen(document);
	}
	else
	{
		gemni_request_full_screen(elem);
	}
	return false;
}

function gemni_alternate_disposition()
{
	//trick to force street reload of street view
	
	/*if (!gemni_mobile)
	{
		gemni_panorama_mode = ++gemni_panorama_mode % 3;
		var position = new google.maps.LatLng(gemni_panorama.getPosition().lat(), gemni_panorama.getPosition().lng());
		var antipode = new google.maps.LatLng(gemni_panorama.getPosition().lat() * -1, gemni_panorama.getPosition().lng() * -1);
		//gemni_ignore_panorama_location = true;
		gemni_panorama.setVisible(false);
		//gemni_ignore_panorama_location = true;
		gemni_panorama.setPosition(antipode);
		//panorama.setVisible(false);
		gemni_ignore_panorama_location = true;
		gemni_panorama.setPosition(position);
		gemni_ignore_panorama_location = true;
		gemni_panorama.setVisible(true);
	}
	else
	{
		if (gemni_panorama.getVisible())
		{
			gemni_panorama.setVisible(false);
		}
		else
		{
			gemni_panorama.setVisible(true);
		}
	}*/
	//alert("gemni_mobile=" + gemni_mobile);
	if (!gemni_mobile)
	{
		//alert("gemni_panorama_mode=" + gemni_panorama_mode); 
		gemni_panorama_mode = (gemni_panorama_mode + 1) % 3;
		//alert("gemni_panorama_mode=" + gemni_panorama_mode); 
	}
	else
	{
		if (gemni_panorama_mode == 2)
		{
			var proportion = window.innerWidth/window.innerHeight;
			//alert(gemni_content_div.offsetWidth);
			//alert(gemni_content_div.offsetHeight);
			//alert(proportion);
			if (proportion > 1)
			{
				gemni_panorama_mode = 0;
			}
			else
			{
				gemni_panorama_mode = 1;
			}
		}
		else
		{
			gemni_panorama_mode = 2;
		}
	}
	//var position = new google.maps.LatLng(gemni_panorama.getPosition().lat(), gemni_panorama.getPosition().lng());
	//var antipode = new google.maps.LatLng(gemni_panorama.getPosition().lat() * -1, gemni_panorama.getPosition().lng() * -1);
	//gemni_ignore_panorama_location = true;
	//gemni_panorama.setVisible(false);
	//gemni_panorama.setPosition(antipode);
	//gemni_panorama.setPosition(position);
	//gemni_ignore_panorama_location = false;
	//gemni_panorama.setVisible(true);
	
	gemni_check_panorama_size();
	
	if (gemni_panorama.getVisible())
	{
		
	}
	else
	{
		
	}
}

function gemni_initialize_window_dimensions()
{
	var proportion = window.innerWidth/window.innerHeight;
	//alert('gemni_check_window_dimensions');
	if (proportion > 1)
	{
		gemni_panorama_mode = 0;
	}
	else
	{
		gemni_panorama_mode = 1;
	}
	/*if (gemni_mobile)
	{
		gemni_panorama_mode = 2;
	}*/
	gemni_check_window_dimensions();
}

function gemni_resize_content_div()
{
	if (gemni_mobile)
	{
		//alert(gemni_content_div.clientHeight);
		//alert((gemni_content_div.clientHeight - gemni_text_input_div.offsetHeight) + "px");
		//gemni_main_div.style.height = (gemni_content_div.clientHeight - gemni_text_input_div.offsetHeight) + "px";
		//alert(gemni_content_div.style.height);
		//gemni_text_input_div.style.height = (document.documentElement.clientHeight - gemni_content_div.clientHeight) + "px";
		//alert(gemni_text_input_div.style.height);
	}
}

function gemni_check_window_dimensions()
{
	if (gemni_mobile)
	{
		gemni_resize_content_div();
		gemni_hide_address_bar();
	}
	
	if (gemni_mobile && gemni_panorama_mode != 2)
	{
		var proportion = window.innerWidth/window.innerHeight;
		//alert(gemni_content_div.offsetWidth);
		//alert(gemni_content_div.offsetHeight);
		//alert(proportion);
		if (proportion > 1)
		{
			if (gemni_panorama_mode == 1)
			{
				gemni_panorama_mode = 0;
				gemni_check_panorama_size();
			}
		}
		else
		{
			if (gemni_panorama_mode == 0)
			{
				gemni_panorama_mode = 1;
				gemni_check_panorama_size();
			}
		}
	}
	else
	{
		//gemni_check_panorama_size();
	}
	//}
	//gemni_check_panorama_size();
	gemni_check_auto_complete_dimensions();
	google.maps.event.trigger(gemni_map, 'resize');
	google.maps.event.trigger(gemni_panorama, 'resize');
	/*
	if (gemni_content_div.mozRequestFullScreen)
	{
		gemni_content_div.mozRequestFullScreen();
	}
	else if (gemni_content_div.webkitRequestFullScreen)
	{
		gemni_content_div.webkitRequestFullScreen();
	}
	*/
}

function gemni_check_auto_complete_dimensions()
{
	/*if (!gemni_mobile)
	{
		if (gemni_auto_complete_on_map)
		{
			gemni_auto_complete_input.style.width = gemni_map_div.offsetWidth * 0.5;
			gemni_filter_input.style.width = gemni_map_div.offsetWidth * 0.5;
		}
		else
		{
			gemni_auto_complete_input.style.width = gemni_panorama_div.offsetWidth * 0.5;
			gemni_filter_input.style.width = gemni_panorama_div.offsetWidth * 0.5;
		}
	}
	else
	{
		gemni_auto_complete_input.style.width = '100%';
		gemni_filter_input.style.width = '100%';
	}*/
	if (gemni_auto_complete_on_map)
	{
		gemni_auto_complete_input.style.width = gemni_map_div.offsetWidth * 0.5;
		gemni_filter_input.style.width = gemni_map_div.offsetWidth * 0.5;
	}
	else
	{
		gemni_auto_complete_input.style.width = gemni_panorama_div.offsetWidth * 0.5;
		gemni_filter_input.style.width = gemni_panorama_div.offsetWidth * 0.5;
	}
}

function gemni_check_panorama_size()
{
	//alert('checking panorama...');
	if (gemni_panorama_mode == 0)
	{
		//if (gemni_auto_complete_input_subdiv.style.display == 'none' && gemni_filter_input_subdiv.style.display == 'none')
		//{
			//gemni_layers_button_div.style.display = 'inline';
		//}
		
		gemni_panorama_marker_full_context_menu.item('Center map'.toLocaleString()).show();
		gemni_panorama_marker_partial_context_menu.item('Center map'.toLocaleString()).show();
		gemni_panorama_geocoder_marker_context_menu.item('Center map'.toLocaleString()).show();
		if (gemni_panorama.getVisible())
		{
			gemni_disposition_button_div.style.display = 'inline';
			gemni_panorama_center_button_div.style.display = 'inline';
			//gemni_layers_button_div.style.display = 'inline';
			gemni_map_div.style.width = '50%';
			gemni_map_div.style.height = '100%';
			gemni_map_div.style.left = '0px';
			gemni_map_div.style.right = '';
			gemni_map_div.style.top = '0px';
			gemni_map_div.style.bottom = '0px';
			gemni_map_div.style.display = 'block';
			gemni_panorama_div.style.width = '50%';
			gemni_panorama_div.style.height = '100%';
			gemni_panorama_div.style.left = '';
			gemni_panorama_div.style.right = '0px';
			gemni_panorama_div.style.top = '0px';
			gemni_panorama_div.style.bottom = '0px';
			gemni_panorama_div.style.display = 'block';
			/*if ($('#map_canvas').resizable('instance'))
			{
				$('#map_canvas').resizable('destroy');
			}*/
			/*$('#map_canvas').resizable({handles: "e", containment: "document", stop: function(event, ui)
			{
				if (gemni_panorama_mode == 0)
				{
					gemni_panorama_div.style.width = window.innerWidth - ui.size.width;
				}
				else if (gemni_panorama_mode == 1)
				{
					gemni_panorama_div.style.height = window.innerHeight - ui.size.height;
				}
				gemni_check_window_dimensions();
			}
			});*/
			if (!gemni_auto_complete_on_map)
			{
				gemni_auto_complete_div.style.paddingTop = '5px';
				gemni_auto_complete_div.style.paddingLeft = gemni_mobile?'5px':'5px';
				gemni_extra_panorama_buttons_subdiv.removeChild(gemni_panorama_menu_subdiv);
				gemni_panorama_menu_div.appendChild(gemni_panorama_menu_subdiv);
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
				gemni_panorama_menu_div.style.display = 'inline';
				gemni_auto_complete_on_map = true;
			}
			
			//$('#main_canvas').jqxSplitter({showSplitBar: true, width:'100%', height:'100%', orientation:'vertical', panels:[{size:'50%', collapsible: false},{size:'50%', collapsible: true}]});
			//$('#main_canvas').jqxSplitter('expand');
			
			google.maps.event.trigger(gemni_map, 'resize');
			google.maps.event.trigger(gemni_panorama, 'resize');
		}
		else
		{
			gemni_disposition_button_div.style.display = 'none';
			gemni_panorama_center_button_div.style.display = 'inline';
			//gemni_layers_button_div.style.display = 'inline';
			gemni_map_div.style.width = '100%';
			gemni_map_div.style.height = '100%';
			gemni_map_div.style.left = '0px';
			gemni_map_div.style.right = '0px';
			gemni_map_div.style.top = '0px';
			gemni_map_div.style.bottom = '0px';
			gemni_map_div.style.display = 'block';
			gemni_panorama_div.style.width = '0%';
			gemni_panorama_div.style.height = '0%';
			gemni_map_div.style.left = '0px';
			gemni_map_div.style.right = '0px';
			gemni_map_div.style.top = '0px';
			gemni_map_div.style.bottom = '0px';
			gemni_panorama_div.style.display = 'none';
			/*if ($('#map_canvas').resizable('instance'))
			{
				$('#map_canvas').resizable('destroy');
			}*/
			//$('#main_canvas').jqxSplitter({showSplitBar: false, width:'100%', height:'100%', orientation:'vertical', panels:[{size:'50%', collapsible: false},{size:'50%', collapsible: true}]});
			//$('#main_canvas').jqxSplitter('collapse');
			
			if (!gemni_auto_complete_on_map)
			{
				gemni_auto_complete_div.style.paddingTop = '5px';
				gemni_auto_complete_div.style.paddingLeft = gemni_mobile?'5px':'5px';
				gemni_extra_panorama_buttons_subdiv.removeChild(gemni_panorama_menu_subdiv);
				gemni_panorama_menu_div.appendChild(gemni_panorama_menu_subdiv);
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
				gemni_panorama_menu_div.style.display = 'inline';
				gemni_auto_complete_on_map = true;
			}
			
			google.maps.event.trigger(gemni_map, 'resize');
			google.maps.event.trigger(gemni_panorama, 'resize');
		}
	}
	else if (gemni_panorama_mode == 1)
	{
		//gemni_layers_button_div.style.display = 'inline';
		//if (gemni_auto_complete_input_subdiv.style.display == 'none' && gemni_filter_input_subdiv.style.display == 'none')
		//{
			//gemni_layers_button_div.style.display = 'inline';
		//}
		
		gemni_panorama_marker_full_context_menu.item('Center map'.toLocaleString()).show();
		gemni_panorama_marker_partial_context_menu.item('Center map'.toLocaleString()).show();
		gemni_panorama_geocoder_marker_context_menu.item('Center map'.toLocaleString()).show();
		if (gemni_panorama.getVisible())
		{
			gemni_disposition_button_div.style.display = 'inline';
			gemni_panorama_center_button_div.style.display = 'inline';
			//gemni_layers_button_div.style.display = 'inline';
			gemni_map_div.style.width = '100%';
			gemni_map_div.style.height = '50%';
			gemni_map_div.style.left = '0px';
			gemni_map_div.style.right = '0px';
			gemni_map_div.style.top = '0px';
			gemni_map_div.style.bottom = '';
			gemni_map_div.style.display = 'block';
			gemni_panorama_div.style.width = '100%';
			gemni_panorama_div.style.height = '50%';
			gemni_panorama_div.style.left = '0px';
			gemni_panorama_div.style.right = '0px';
			gemni_panorama_div.style.top = '';
			gemni_panorama_div.style.bottom = '0px';
			gemni_panorama_div.style.display = 'block';
			/*if ($('#map_canvas').resizable('instance'))
			{
				$('#map_canvas').resizable('destroy');
			}*/
			/*$('#map_canvas').resizable({handles: "s", containment: "document", stop: function(event, ui)
			{
				if (gemni_panorama_mode == 0)
				{
					gemni_panorama_div.style.width = window.innerWidth - ui.size.width;
				}
				else if (gemni_panorama_mode == 1)
				{
					gemni_panorama_div.style.height = window.innerHeight - ui.size.height;
				}
				gemni_check_window_dimensions();
			}
			});*/
			if (!gemni_auto_complete_on_map)
			{
				gemni_auto_complete_div.style.paddingTop = '5px';
				gemni_auto_complete_div.style.paddingLeft = gemni_mobile?'5px':'5px';
				gemni_extra_panorama_buttons_subdiv.removeChild(gemni_panorama_menu_subdiv);
				gemni_panorama_menu_div.appendChild(gemni_panorama_menu_subdiv);
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
				gemni_panorama_menu_div.style.display = 'inline';
				gemni_auto_complete_on_map = true;
			}
			
			//$('#main_canvas').jqxSplitter({showSplitBar: true, width:'100%', height:'100%', orientation:'horizontal', panels:[{size:'50%', collapsible: false},{size:'50%', collapsible: true}]});
			//$('#main_canvas').jqxSplitter('expand');
			
			google.maps.event.trigger(gemni_map, 'resize');
			google.maps.event.trigger(gemni_panorama, 'resize');
		}
		else
		{
			gemni_disposition_button_div.style.display = 'none';
			gemni_panorama_center_button_div.style.display = 'inline';
			//gemni_layers_button_div.style.display = 'inline';
			gemni_map_div.style.width = '100%';
			gemni_map_div.style.height = '100%';
			gemni_map_div.style.left = '0px';
			gemni_map_div.style.right = '0px';
			gemni_map_div.style.top = '0px';
			gemni_map_div.style.bottom = '0px';
			gemni_map_div.style.display = 'inline';
			gemni_panorama_div.style.width = '0%';
			gemni_panorama_div.style.height = '0%';
			gemni_panorama_div.style.left = '0px';
			gemni_panorama_div.style.right = '0px';
			gemni_panorama_div.style.top = '0px';
			gemni_panorama_div.style.bottom = '0px';
			gemni_panorama_div.style.display = 'none';
			/*if ($('#map_canvas').resizable('instance'))
			{
				$('#map_canvas').resizable('destroy');
			}*/
			//$('#main_canvas').jqxSplitter({showSplitBar: false, width:'100%', height:'100%', orientation:'horizontal', panels:[{size:'50%', collapsible: false},{size:'50%', collapsible: true}]});
			//$('#main_canvas').jqxSplitter('collapse');
			
			if (!gemni_auto_complete_on_map)
			{
				gemni_auto_complete_div.style.paddingTop = '5px';
				gemni_auto_complete_div.style.paddingLeft = gemni_mobile?'5px':'5px';
				gemni_extra_panorama_buttons_subdiv.removeChild(gemni_panorama_menu_subdiv);
				gemni_panorama_menu_div.appendChild(gemni_panorama_menu_subdiv);
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
				gemni_panorama_menu_div.style.display = 'inline';
				gemni_auto_complete_on_map = true;
			}
			
			google.maps.event.trigger(gemni_map, 'resize');
			google.maps.event.trigger(gemni_panorama, 'resize');
		}
	}
	else
	{
		gemni_panorama_marker_full_context_menu.item('Center map'.toLocaleString()).hide();
		gemni_panorama_marker_partial_context_menu.item('Center map'.toLocaleString()).hide();
		gemni_panorama_geocoder_marker_context_menu.item('Center map'.toLocaleString()).hide();
		if (gemni_panorama.getVisible())
		{
			//gemni_text_input_div.display = 'none';
			//gemni_layers_button_div.style.display = 'none';
			//if (gemni_map_layers_toggle_subdiv.style.display == 'inline')
			//{
				//gemni_map_layers_toggle_subdiv.style.display = 'none';
				//gemni_button_bar_subdiv.style.display = 'inline';
				//gemni_filter_button_div.style.display = 'inline';
				//gemni_search_button_div.style.display = 'inline';
				//gemni_extra_panorama_buttons_subdiv.style.display = 'inline';
				//if (gemni_auto_complete_on_map)
				//{
					//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
					//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
					//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
					//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
				//}
				//else
				//{
					//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
					//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
					//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
					//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
				//}
			//}
			//gemni_layers_button_div.style.display = 'none';
			gemni_disposition_button_div.style.display = 'inline';
			gemni_panorama_center_button_div.style.display = 'none';
			//gemni_layers_button_div.style.display = 'none';
			
			gemni_map_div.style.width = '0%';
			gemni_map_div.style.height = '0%';
			gemni_map_div.style.left = '0px';
			gemni_map_div.style.right = '0px';
			gemni_map_div.style.top = '0px';
			gemni_map_div.style.bottom = '0px';
			gemni_map_div.style.display = 'none';
			gemni_panorama_div.style.width = '100%';
			gemni_panorama_div.style.height = '100%';
			gemni_panorama_div.style.left = '0px';
			gemni_panorama_div.style.right = '0px';
			gemni_panorama_div.style.top = '0px';
			gemni_panorama_div.style.bottom = '0px';
			gemni_panorama_div.style.display = 'block';
			/*if ($('#map_canvas').resizable('instance'))
			{
				$('#map_canvas').resizable('destroy');
			}*/
			//$('#main_canvas').jqxSplitter({showSplitBar: false, width:'100%', height:'100%', orientation:'horizontal', panels:[{size:'50%', collapsible: true},{size:'50%', collapsible: false}]});
			//$('#main_canvas').jqxSplitter('collapse');
			
			if (gemni_auto_complete_on_map)
			{
				gemni_auto_complete_div.style.paddingTop = '5px';
				gemni_auto_complete_div.style.paddingLeft = gemni_mobile?'5px':'5px';
				gemni_panorama_menu_div.removeChild(gemni_panorama_menu_subdiv);
				gemni_extra_panorama_buttons_subdiv.appendChild(gemni_panorama_menu_subdiv);
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
				gemni_panorama_menu_div.style.display = 'none';
				gemni_auto_complete_on_map = false;
			}
			
			google.maps.event.trigger(gemni_map, 'resize');
			google.maps.event.trigger(gemni_panorama, 'resize');
		}
		else
		{
			gemni_disposition_button_div.style.display = 'none';
			gemni_panorama_center_button_div.style.display = 'none';
			//gemni_layers_button_div.style.display = 'inline';
			gemni_map_div.style.width = '100%';
			gemni_map_div.style.height = '100%';
			gemni_map_div.style.left = '0px';
			gemni_map_div.style.right = '0px';
			gemni_map_div.style.top = '0px';
			gemni_map_div.style.bottom = '0px';
			gemni_map_div.style.display = 'block';
			gemni_panorama_div.style.width = '0%';
			gemni_panorama_div.style.height = '0%';
			gemni_panorama_div.style.left = '0px';
			gemni_panorama_div.style.right = '0px';
			gemni_panorama_div.style.top = '0px';
			gemni_panorama_div.style.bottom = '0px';
			gemni_panorama_div.style.display = 'none';
			/*if ($('#map_canvas').resizable('instance'))
			{
				$('#map_canvas').resizable('destroy');
			}*/
			//$('#main_canvas').jqxSplitter({showSplitBar: false, width:'100%', height:'100%', orientation:'horizontal', panels:[{size:'50%', collapsible: false},{size:'50%', collapsible: true}]});
			//$('#main_canvas').jqxSplitter('collapse');
			
			if (!gemni_auto_complete_on_map)
			{
				gemni_auto_complete_div.style.paddingTop = '5px';
				gemni_auto_complete_div.style.paddingLeft = gemni_mobile?'5px':'5px';
				gemni_extra_panorama_buttons_subdiv.removeChild(gemni_panorama_menu_subdiv);
				gemni_panorama_menu_div.appendChild(gemni_panorama_menu_subdiv);
				gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				//gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].pop();
				gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_auto_complete_div);
				//gemni_map.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_text_input_div);
				
				gemni_panorama_menu_div.style.display = 'inline';
				gemni_auto_complete_on_map = true;
			}
			
			google.maps.event.trigger(gemni_map, 'resize');
			google.maps.event.trigger(gemni_panorama, 'resize');
		}
	}
	gemni_check_auto_complete_dimensions();
}

function gemni_check_panorama_visible()
{
	if (!gemni_panorama_was_visible)
	{
		if (gemni_panorama.getVisible())
		{
			gemni_panorama_was_visible = true;
			gemni_check_panorama_size();
		}
	}
	else
	{
		if (!gemni_panorama.getVisible())
		{
			gemni_panorama_was_visible = false;
			gemni_check_panorama_size();
		}
	}
	if (gemni_ignore_panorama_location)
	{
		return;
	}
	if (gemni_panorama.getVisible())
	{
		gemni_disposition_button_div.style.display = 'inline';
		//gemni_map.setCenter(gemni_panorama.getPosition());
		if (gemni_panorama_mode != 2)
		{
			gemni_map.setCenter(gemni_panorama.getPosition());
		}
		else
		{
			//gemni_map.setCenter(gemni_panorama.getPosition());
			gemni_panorama_center_button_div.style.display = 'none';
			//gemni_layers_button_div.style.display = 'none';
		}
	}
	else
	{
		gemni_disposition_button_div.style.display = 'none';
		if (gemni_panorama_mode != 2)
		{
			//gemni_panorama_center_button_div.style.display = 'none';
		}
		else
		{
			gemni_panorama_center_button_div.style.display = 'none';
			//gemni_layers_button_div.style.display = 'inline';
			//gemni_map.setCenter(gemni_panorama.getPosition());
		}
	}
}

function gemni_check_panorama_location()
{
	//alert('gemni_check_panorama_location');
	if (gemni_ignore_panorama_location)
	{
		return;
	}
	if (gemni_panorama.getVisible())
	{
		if (gemni_panorama_mode != 2)
		{
			//gemni_map.panTo(gemni_panorama.getPosition());
			gemni_map.setCenter(gemni_panorama.getPosition());
		}
		else
		{
			//gemni_map.setCenter(gemni_panorama.getPosition());
		}
	}
	else
	{
		//gemni_map.setCenter(gemni_panorama.getPosition());
	}
}

function gemni_discover_map_geocoder_marker_address()
{
	gemni_discover_place_info(gemni_map_geocoder_marker);
}

function gemni_discover_panorama_geocoder_marker_address()
{
	gemni_discover_place_info(gemni_panorama_geocoder_marker);
}

function gemni_build_geocoder_content(marker)
{
	var panorama = marker == gemni_panorama_geocoder_marker;
	var geocoder_content;
	var search_content;
	var address = marker.getInfoWindow().getAddressValue();
	var position = marker.getPosition();
	if (panorama)
	{
		search_content = "&nbsp;&nbsp;<a title='" + "Search position data".toLocaleString() + "' href='javascript:' onkeydown='if(e.keycode == 13 || e.keycode == 32){gemni_discover_panorama_geocoder_marker_address();}' onmousedown='gemni_discover_panorama_geocoder_marker_address()'>&#0187;&#0187;&#0187;</a>&nbsp;&nbsp;";
	}
	else
	{
		search_content = "&nbsp;&nbsp;<a title='" + "Search position data".toLocaleString() + "' href='javascript:' onkeydown='if(e.keycode == 13 || e.keycode == 32){gemni_discover_map_geocoder_marker_address();}' onmousedown='gemni_discover_map_geocoder_marker_address()'>&#0187;&#0187;&#0187;</a>&nbsp;&nbsp;";
	}
	if (address != '')
	{
		if (!panorama)
		{
			geocoder_content = 
			"<div class='infowin'>" +
			"<div class='infodiv'>" +
			"<a title='" + "Link".toLocaleString() + "' href='" + gemni_build_all_link_parameters() + "&glat=" + position.lat() + "&glng=" + position.lng() + "'>" +
			"<b>" + position.toUrlValue() + "</b></a>" +
			"<br>" + address +
			"</div></div>";
		}
		else
		{
			geocoder_content = 
			"<div class='infowin'>" +
			"<div class='infodiv'>" +
			"<a title='" + "Link".toLocaleString() + "' href='" + gemni_build_all_link_parameters() + "&glat=" + position.lat() + "&glng=" + position.lng() + "&gp=1'>" +
			"<b>" + position.toUrlValue() + "</b></a>" +
			"<br>" + address +
			"</div></div>";
		}
	}
	else
	{
		if (!panorama)
		{
			geocoder_content = 
			"<div class='infowin'>" +
			"<div class='infodiv'>" +
			"<a title='" + "Link".toLocaleString() + "' href='" + gemni_build_all_link_parameters() + "&glat=" + position.lat() + "&glng=" + position.lng() + "'>" +
			"<b>" + position.toUrlValue() + "</b></a>" +
			"&nbsp;&nbsp;" + search_content +
			"</div></div>";
		}
		else
		{
			geocoder_content = 
			"<div class='infowin'>" +
			"<div class='infodiv'>" +
			"<a title='" + "Link".toLocaleString() + "' href='" + gemni_build_all_link_parameters() + "&glat=" + position.lat() + "&glng=" + position.lng() + "&gp=1'>" +
			"<b>" + position.toUrlValue() + "</b></a>" +
			"&nbsp;&nbsp;" + search_content +
			"</div></div>";
		}
	}
	return geocoder_content;
}

function gemni_build_basic_link_parameters()
{
	var clean_url = window.location.href;
	if (window.location.href.indexOf('?') >= 0)
	{
		clean_url = window.location.href.substring(0, window.location.href.indexOf('?'));
	}
	var mapZoom = 18; //2
	var mapTypeID = gemni_map.getMapTypeId(); //3
	var visible = gemni_panorama.getVisible();
	var traffic = gemni_map_layers['traffic'].getMap()?1:0;
	var transit = gemni_map_layers['transit'].getMap()?1:0;
	//var weather = gemni_map_layers['weather'].getMap()?1:0;
	var streetview = gemni_map_layers['streetview'].getMap()?1:0;
	//var cloud = gemni_map_layers['cloud'].getMap()?1:0;
	
	if (visible)
	{
		//return clean_url + "?ds=" + gemni_fusiontables_data_source + "&mz=" + mapZoom + "&mt=" + mapTypeID + "&md=" + gemni_panorama_mode +
		//"&pv=1" + "&mltr=" + traffic + "&mlts=" + transit + "&mlwt=" + weather + "&mlsv=" + streetview + "&mlc=" + cloud;
		return clean_url + "?ds=" + gemni_fusiontables_data_source + "&mz=" + mapZoom + "&mt=" + mapTypeID + "&md=" + gemni_panorama_mode +
		"&pv=1" + "&mltr=" + traffic + "&mlts=" + transit + "&mlsv=" + streetview;
	}
	else
	{
		return clean_url + "?ds=" + gemni_fusiontables_data_source + "&mz=" + mapZoom + "&mt=" + mapTypeID + "&md=" + gemni_panorama_mode +
		"&pv=0" + "&mltr=" + traffic + "&mlts=" + transit + "&mlsv=" + streetview;
	}
}

function gemni_build_all_link_parameters()
{
	var clean_url = window.location.href;
	if (window.location.href.indexOf('?') >= 0)
	{
		clean_url = window.location.href.substring(0, window.location.href.indexOf('?'));
	}
	var mapLatLng = gemni_map.getCenter();
	var mapLat = mapLatLng.lat(); //0
	var mapLng = mapLatLng.lng(); //1
	var mapZoom = gemni_map.getZoom(); //2
	var mapTypeID = gemni_map.getMapTypeId(); //3
	
	var panoLatLng;
	var panoLat = ' '; //4
	var panoLng = ' '; //5
	var panoPov;
	var panoHeading = ' '; //6
	var panoPitch = ' '; //7
	var panoZoom = ' '; //8
	
	var traffic = gemni_map_layers['traffic'].getMap()?1:0;
	var transit = gemni_map_layers['transit'].getMap()?1:0;
	//var weather = gemni_map_layers['weather'].getMap()?1:0;
	var streetview = gemni_map_layers['streetview'].getMap()?1:0;
	//var cloud = gemni_map_layers['cloud'].getMap()?1:0;
	
	if (gemni_panorama.getVisible())
	{
		panoLatLng = gemni_panorama.getPosition();
		panoPov = gemni_panorama.getPov();
		
		panoLat = panoLatLng.lat();
		panoLng = panoLatLng.lng();
		
		panoHeading = panoPov.heading;
		panoPitch = panoPov.pitch;
		panoZoom = panoPov.zoom;
	}
	if (panoLatLng)
	{
		//return clean_url + "?ds=" + gemni_fusiontables_data_source + "&mz=" + mapZoom + "&mt=" + mapTypeID + "&md=" + gemni_panorama_mode +
		//"&pv=1" + "&mlat=" + mapLat + "&mlng=" + mapLng + "&plat=" + panoLat + "&plng=" + panoLng +
		//"&ph=" + panoHeading + "&pp=" + panoPitch + "&pz=" + panoZoom + "&mltr=" + traffic + "&mlts=" + transit + "&mlwt=" + weather + "&mlsv=" + streetview + "&mlc=" + cloud;
		return clean_url + "?ds=" + gemni_fusiontables_data_source + "&mz=" + mapZoom + "&mt=" + mapTypeID + "&md=" + gemni_panorama_mode +
		"&pv=1" + "&mlat=" + mapLat + "&mlng=" + mapLng + "&plat=" + panoLat + "&plng=" + panoLng +
		"&ph=" + panoHeading + "&pp=" + panoPitch + "&pz=" + panoZoom + "&mltr=" + traffic + "&mlts=" + transit + "&mlsv=" + streetview;
	}
	else
	{
		return clean_url + "?ds=" + gemni_fusiontables_data_source + "&mz=" + mapZoom + "&mt=" + mapTypeID + "&md=" + gemni_panorama_mode +
		"&pv=0" + "&mlat=" + mapLat + "&mlng=" + mapLng + "&mltr=" + traffic + "&mlts=" + transit + "&mlsv=" + streetview;
	}
}

function gemni_build_map_geocoder_marker_link()
{
	
}

function gemni_build_panorama_geocoder_marker_link()
{
	
}


function gemni_build_marker_link(marker)
{
	//var href = window.location.href;
	/*var clean_url = window.location.href;
	if (window.location.href.indexOf('?') >= 0)
	{
		clean_url = window.location.href.substring(0, window.location.href.indexOf('?'));
	}*/
	if (marker.getInfoState())
	{
		return gemni_build_basic_link_parameters() + "&mid=" + marker.getRowID();
	}
	else
	{
		return gemni_build_basic_link_parameters() + "&mid=" + marker.getRowID() + "&mop=1";
	}
}

function gemni_alternate_infowindow_mode(rowID)
{
	var marker = gemni_find_marker(rowID);
	if (marker)
	{
		marker.alternateFull();
		var editor_window = marker.getEditorWindow();
		var infowindow = marker.getInfoWindow();
		var date = editor_window.getDateValue();
		var address = editor_window.getAddressValue();
		var comments = editor_window.getCommentsValue();
		var title = editor_window.getTitleValue();
		var contact = editor_window.getContactValue();
		var access = editor_window.getAccessValue();
		var cost = editor_window.getCostValue();
		var dayperiods = editor_window.getDayPeriodsValue();
		var weekdays = editor_window.getWeekDaysValue();
		var modalities = editor_window.getModalitiesValue();
		var infowindow_content = gemni_build_infowindow_content(marker, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities);
		if (infowindow_content != infowindow.getContent())
		{
			infowindow.setContent(infowindow_content);
			//infowindow.updateContent_();
			//infowindow.open();
			if (marker.getInfoState())
			{
				infowindow.open(gemni_map, marker);
			}
			else if (marker.getBrother().getInfoState())
			{
				infowindow.open(gemni_panorama, marker.getBrother());
			}
		}
	}
}

function gemni_build_infowindow_content(marker, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities)
{
	//alert(title);
	//alert(marker.getFull());
	var infowindow_content;
	if (marker.getFull())
	{
		if (access == 1)
		{
			access = "Private".toLocaleString();
		}
		else
		{
			access = "Public".toLocaleString();
		}
		
		if (cost == 1)
		{
			cost = "Paid".toLocaleString();
		}
		else
		{
			cost = "Gratuitous".toLocaleString();
		}
		
		var periods = " ";
		if (dayperiods.indexOf('mor') != -1)
		{
			periods += "" + "Morning".toLocaleString() + "  ";
			//periods += "[*]";
		}
		else
		{
			//periods += "[&nbsp;]";
		}
		
		if (dayperiods.indexOf('eve') != -1)
		{
			periods += "" + "Evening".toLocaleString() + "  ";
			//periods += "[*]";
		}
		else
		{
			//periods += "[&nbsp;]";
		}
		
		if (dayperiods.indexOf('nig') != -1)
		{
			periods += "" + "Night".toLocaleString() + "  ";
			//periods += "[*]";
		}
		else
		{
			//periods += "[&nbsp;]";
		}
		
		if (dayperiods.indexOf('daw') != -1)
		{
			periods += "" + "Dawn".toLocaleString() + " ";
			//periods += "[*]";
		}
		else
		{
			//periods += "[&nbsp;]";
		}
		
		var days = " ";
		if (weekdays.indexOf('sun') != -1)
		{
			days += "" + "Sun".toLocaleString() + "  ";
			//days += "[*]";
		}
		else
		{
			//days += "[&nbsp;]";
		}
		
		if (weekdays.indexOf('mon') != -1)
		{
			days += "" + "Mon".toLocaleString() + "  ";
			//days += "[*]";
		}
		else
		{
			//days += "[&nbsp;]";
		}
		
		if (weekdays.indexOf('tue') != -1)
		{
			days += "" + "Tue".toLocaleString() + "  ";
			//days += "[*]";
		}
		else
		{
			//days += "[&nbsp;]";
		}
		
		if (weekdays.indexOf('wed') != -1)
		{
			days += "" + "Wed".toLocaleString() + "  ";
			//days += "[*]";
		}
		else
		{
			//days += "[&nbsp;]";
		}
		
		if (weekdays.indexOf('thu') != -1)
		{
			days += "" + "Thu".toLocaleString() + "  ";
			//days += "[*]";
		}
		else
		{
			//days += "[&nbsp;]";
		}
		
		if (weekdays.indexOf('fri') != -1)
		{
			days += "" + "Fri".toLocaleString() + "  ";
			//days += "[*]";
		}
		else
		{
			//days += "[&nbsp;]";
		}
		
		if (weekdays.indexOf('sat') != -1)
		{
			days += "" + "Sat".toLocaleString() + " ";
			//days += "[*]";
		}
		else
		{
			//days += "[&nbsp;]";
		}
		
		infowindow_content = 
		"<div class='infowin'>" +
		"<div class='infodiv'>" +
		//date + "<br>" +
		"<a title='" + "Link".toLocaleString() + "' href='" + gemni_build_marker_link(marker) + "'><b>" + title + "</b></a>&nbsp;&nbsp;&nbsp;&nbsp;" +
		"<a title='" + "Reduce".toLocaleString() + "' href='javascript:' onkeydown='if(e.keycode == 13 || e.keycode == 32){gemni_alternate_infowindow_mode(\"" + marker.getRowID() + "\");}' onmousedown='gemni_alternate_infowindow_mode(\"" + marker.getRowID() + "\");'>&#0171;&#0171;&#0171;</a>&nbsp;&nbsp;" +
		"<br>" + "Address".toLocaleString() + ": " + address +
		"<br>" + "Contact".toLocaleString() + ": " + contact +
		"<br>" + "Modalities".toLocaleString() + ": " + modalities +
		"<br>" + "Access".toLocaleString() + ": " + access +
		"<br>" + "Cost".toLocaleString() + ": " + cost +
		"<br>" + "Periods".toLocaleString() + ": " + periods +
		"<br>" + "Days".toLocaleString() + ": " + days +
		"<br>" + comments +
		//"</div>";
		"</div></div>";
	}
	else
	{
		infowindow_content = 
		"<div class='infowin'>" +
		"<div class='infodiv'>" +
		//date + "<br>" +
		"<a title='" + "Link".toLocaleString() + "' href='" + gemni_build_marker_link(marker) + "'><b>" + title + "</b></a>&nbsp;&nbsp;&nbsp;&nbsp;" +
		"<a title='" + "Detail".toLocaleString() + "' href='javascript:' onkeydown='if(e.keycode == 13 || e.keycode == 32){gemni_alternate_infowindow_mode(\"" + marker.getRowID() + "\");}' onmousedown='gemni_alternate_infowindow_mode(\"" + marker.getRowID() + "\");'>&#0187;&#0187;&#0187;</a>&nbsp;&nbsp;" +
		//"</div>";
		"</div></div>";
	}
	return infowindow_content;
}

function gemni_set_marker_contents(marker, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities)
{
	var editor_window = marker.getEditorWindow();
	editor_window.setDateValue(date);
	editor_window.setAddressValue(address);
	editor_window.setCommentsValue(comments);
	editor_window.setTitleValue(title);
	editor_window.setContactValue(contact);
	editor_window.setAccessValue(access);
	editor_window.setCostValue(cost);
	editor_window.setDayPeriodsValue(dayperiods);
	editor_window.setWeekDaysValue(weekdays);
	editor_window.setModalitiesValue(modalities);
	
	if (!editor_window.getWindowState())
	{
		var editor_content = gemni_build_editorwindow_content(marker.getRowID(), date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities);
		if (editor_content != marker.getEditorWindow().getContent())
		{
			//alert('editor_content_changed');
			marker.getEditorWindow().setContent(editor_content);
			//marker.getEditorWindow().updateContent_();
			//check_editorwindow_placeholders(marker.getRowID());
		}
	}
	var infowindow_content = gemni_build_infowindow_content(marker, date, address, comments, title, contact, access, cost, dayperiods, weekdays, modalities);
	if (infowindow_content != marker.getInfoWindow().getContent())
	{
		marker.getInfoWindow().setContent(infowindow_content);
		//marker.getInfoWindow().updateContent_();
	}
}

function gemni_set_geocoder_marker_contents(marker, address)
{
	if (marker)
	{
		marker.setTitle(marker.getPosition().toUrlValue());
		if (address != null)
		{
			marker.getInfoWindow().setAddressValue(address);
		}
		var geocoder_content = gemni_build_geocoder_content(marker);
		if (geocoder_content != marker.getInfoWindow().getContent())
		{
			marker.getInfoWindow().setContent(geocoder_content);
			//marker.getInfoWindow().updateContent_();
		}
	}
}

function gemni_dragstart_marker(mouseevent)
{
	var marker;
	var current;
	for (var i in gemni_markers)
	{
		current = gemni_markers[i];
		if (current)
		{
			if (current.getPosition().equals(mouseevent.latLng))
			{
				marker = current;
			}
			if (current.getBrother().getPosition().equals(mouseevent.latLng))
			{
				marker = current.getBrother();
			}
		}
	}
	if (marker)
	{
		marker.setDragging(true);
		marker.getBrother().setDragging(true);
	}
}

function gemni_dragend_marker(mouseevent)
{
	//alert("gemni_dragend_marker");
	//alert(mouseevent.latLng);
	var marker;
	var current;
	var mustRepaint = false;
	for (var i in gemni_markers)
	{
		current = gemni_markers[i];
		if (current)
		{
			if (current.getPosition().equals(mouseevent.latLng))
			{
				marker = current;
			}
			if (current.getBrother().getPosition().equals(mouseevent.latLng))
			{
				marker = current.getBrother();
				mustRepaint = true;
			}
		}
	}
	if (marker)
	{
		marker.setDragging(false);
		marker.getBrother().setDragging(false);
		marker.getBrother().setPosition(marker.getPosition());
		//var query = "UPDATE " + gemni_fusiontables_data_source + " SET latitude = '" + marker.getPosition().lat() + "', longitude = '" + marker.getPosition().lng() + "', location = '" + marker.getPosition().toUrlValue() + "' WHERE ROWID = '" + marker.getRowID() + "'";
		//window['gemni_client']['gemni_run_update'](query, "gemni_dragend_marker_callback", marker.getRowID());
		/*if (mustRepaint && (gemni_map.getZoom() <= gemni_clusterer.getMaxZoom()))
		{
			//clusterer.redraw();
			gemni_clusterer.repaint();
		}*/
		if (mustRepaint)
		{
			//clusterer.redraw();
			gemni_clusterer.repaint();
		}
	}
	else
	{
		
	}
}

function gemni_mouseover_marker_in_panorama(mouseevent)
{
	gemni_panorama.setMouseOverMarker(true);
}

function gemni_mouseout_marker_in_panorama(mouseevent)
{
	gemni_panorama.setMouseOverMarker(false);
}

function gemni_dragend_geocoder_marker(mouseevent)
{
	var marker;
	if (gemni_map_geocoder_marker.getPosition().equals(mouseevent.latLng))
	{
		marker = gemni_map_geocoder_marker;
	}
	else if (gemni_panorama_geocoder_marker.getPosition().equals(mouseevent.latLng))
	{
		marker = gemni_panorama_geocoder_marker;
	}
	if (marker)
	{
		//marker.getBrother().setPosition(marker.getPosition());
		gemni_map_geocoder_marker.setPosition(marker.getPosition());
		gemni_panorama_geocoder_marker.setPosition(marker.getPosition());
		gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
		gemni_set_geocoder_marker_contents(gemni_panorama_geocoder_marker, '');
	}
}

function gemni_dragend_marker_callback(response, parameters)
{
	
}

function gemni_move_marker_callback(response, parameters)
{
	google.maps.event.trigger(gemni_map, 'idle');
}


function gemni_create_map_marker_context_menu(marker)
{
	if (gemni_has_data_access)
	{
		gemni_map_marker_full_context_menu.addControl(marker);
		gemni_install_longclick(marker, 500);
		//alert('gemni_install_longclick');
	}
	else
	{
		gemni_map_marker_partial_context_menu.addControl(marker);
		gemni_install_longclick(marker, 500);
		//alert('gemni_install_longclick');
	}
}

function gemni_delete_marker_callback(response, parameters)
{
	
}

function gemni_create_panorama_marker_context_menu(marker)
{
	if (gemni_has_data_access)
	{
		gemni_panorama_marker_full_context_menu.addControl(marker);
		gemni_install_longclick(marker, 500);
	}
	else
	{
		gemni_panorama_marker_partial_context_menu.addControl(marker);
		gemni_install_longclick(marker, 500);
	}
}

function gemni_create_context_menus(map, panorama)
{
	gemni_map_context_menu = new MapContextMenu({map:map});

	// Add some items to the menu
	gemni_map_context_menu.addItem('Search position'.toLocaleString(), null, 'Search position data'.toLocaleString(), 'geocode', function(map, latlng)
	{
		gemni_map_geocoder_marker.setPosition(latlng);
		gemni_panorama_geocoder_marker.setPosition(latlng);
		gemni_map_geocoder_marker.setMap(map);
		gemni_panorama_geocoder_marker.setMap(gemni_panorama);
		gemni_set_geocoder_marker_contents(gemni_map_geocoder_marker, '');
		gemni_discover_place_info(gemni_map_geocoder_marker);
		//google.maps.event.trigger(gemni_map_geocoder_marker, 'click');
		if (!gemni_map_geocoder_marker.getInfoState())
		{
			gemni_panorama_geocoder_marker.setInfoState(false);
			gemni_panorama_geocoder_marker.getInfoWindow().close();
			gemni_map_geocoder_marker.setInfoState(true);
			gemni_map_geocoder_marker.getInfoWindow().open(map, gemni_map_geocoder_marker);
		}
		else
		{
			
		}
	});
	
	if (gemni_has_data_access)
	{
		gemni_map_context_menu.addItem('Add activity'.toLocaleString(), null, 'Add actvity here'.toLocaleString(), 'add', function(map, latlng)
		{
			if (gemni_moved_marker_id)
			{
				//alert("move_marker_end " + gemni_moved_marker_id);
				var query = "UPDATE " + gemni_fusiontables_data_source + " SET latitude = '" + latlng.lat() + "', longitude = '" + latlng.lng() + "', location = '" + latlng.toUrlValue() + "' WHERE ROWID = '" + gemni_moved_marker_id + "'";
				//window['gemni_client']['gemni_run_update'](query, "gemni_move_marker_callback", gemni_moved_marker_id);
				gemni_run_update(query, "gemni_move_marker_callback", gemni_moved_marker_id);
				//google.maps.event.trigger(gemni_map, 'idle');
				gemni_moved_marker_id = null;
			}
			else
			{
				gemni_create_map_marker(latlng, 1);
			}
		});
	}

	gemni_map_context_menu.addItem('Center map'.toLocaleString(), null, 'Center map here'.toLocaleString(), 'center', function(map, latlng)
	{
		if (gemni_panorama_mode != 2 || !panorama.getVisible())
		{
			gemni_map.panTo(latlng);
		}
	});

	gemni_map_context_menu.addItem('Show panorama'.toLocaleString(), null, 'Show panorama here'.toLocaleString(), 'pegman', function(map, latlng)
	{
		gemni_panorama.setPosition(latlng);
		if (!gemni_panorama.getVisible())
		{
			gemni_panorama.setVisible(true);
		}
	});
	
	gemni_map_marker_partial_context_menu = new MapMarkerContextMenu(map, gemni_overlay);
	
	gemni_map_marker_partial_context_menu.addItem('Center map'.toLocaleString(), null, 'Center map here'.toLocaleString(), 'center', function(map, marker, latlng)
	{
		if (gemni_panorama_mode != 2 || !panorama.getVisible())
		{
			gemni_map.panTo(latlng);
		}
	});
	
	gemni_map_marker_partial_context_menu.addItem('Show panorama'.toLocaleString(), null, 'Show panorama here'.toLocaleString(), 'pegman', function(map, marker, latlng)
	{
		gemni_panorama.setPosition(latlng);
		if (!gemni_panorama.getVisible())
		{
			gemni_panorama.setVisible(true);
		}
	});

	gemni_map_marker_full_context_menu = new MapMarkerContextMenu(map, gemni_overlay);
	
	if (gemni_has_data_access)
	{
		/*gemni_map_marker_full_context_menu.addItem('Search position'.toLocaleString(), null, 'Search marker position data'.toLocaleString(), 'search', function(map, marker, latlng)
		{
			gemni_discover_place_info(latlng, marker);
			if (!marker.getInfoState())
			{
				if (!marker.getInfoWindow())
				{
					gemni_create_marker_infowindow_contents(marker);
				}
				marker.getInfoWindow().close();
				marker.getBrother().setInfoState(false);
				marker.setFull(true);
				marker.getInfoWindow().open(map, marker);
				marker.setInfoState(true);
				//discoverPlaceInfo(marker.getPosition(), infowindow);
			}
			else
			{
				
			}
		});*/
		
		gemni_map_marker_full_context_menu.addItem('Edit activity'.toLocaleString(), null, 'Edit this activity'.toLocaleString(), 'edit', function(map, marker, latlng)
		{
			if (!marker.getInfoWindow())
			{
				gemni_create_marker_infowindow_contents(marker);
			}
			if (marker.getEditorWindow().getWindowState())
			{
				marker.getEditorWindow().close();
			}
			if (marker.getInfoState() || marker.getBrother().getInfoState())
			{
				marker.setInfoState(false);
				marker.getInfoWindow().close();
				marker.getBrother().setInfoState(false);
				marker.setDraggable(true);
				marker.getBrother().setDraggable(true);
				marker.getEditorWindow().setWindowState(true);
				marker.getEditorWindow().open(map, marker);
			}
			else
			{
				gemni_reload_marker_contents_map_edit(marker);
			}
		});

		gemni_map_marker_full_context_menu.addItem('Delete activity'.toLocaleString(), null, 'Delete this activity'.toLocaleString(), 'delete', function(map, marker, latlng)
		{
			gemni_clusterer.removeMarker(marker);
			gemni_clear_marker_listeners(marker);
			marker.setMap(null);
			marker.getBrother().setMap(null);
			delete gemni_markers[marker.getRowID()];
			var query = "DELETE FROM " + gemni_fusiontables_data_source + " WHERE ROWID = '" +  marker.getRowID() + "'";
			//window['gemni_client']['gemni_run_update'](query, "gemni_delete_marker_callback", "");
			gemni_run_update(query, "gemni_delete_marker_callback", "");
			//clusterer.redraw();
		});
		
		gemni_map_marker_full_context_menu.addItem('Center map'.toLocaleString(), null, 'Center map here'.toLocaleString(), 'center', function(map, marker, latlng)
		{
			if (gemni_panorama_mode != 2 || !panorama.getVisible())
			{
				gemni_map.panTo(latlng);
			}
		});
		
		gemni_map_marker_full_context_menu.addItem('Show panorama'.toLocaleString(), null, 'Show panorama here'.toLocaleString(), 'pegman', function(map, marker, latlng)
		{
			gemni_panorama.setPosition(latlng);
			if (!gemni_panorama.getVisible())
			{
				gemni_panorama.setVisible(true);
			}
		});
	}
	
	gemni_panorama_marker_partial_context_menu = new PanoramaMarkerContextMenu(panorama, gemni_panorama_div);
	
	gemni_panorama_marker_partial_context_menu.addItem('Center map'.toLocaleString(), null, 'Center map here'.toLocaleString(), 'center', function(panorama, marker, latlng)
	{
		if (gemni_panorama_mode != 2 || !panorama.getVisible())
		{
			gemni_map.panTo(latlng);
		}
	});
	
	gemni_panorama_marker_partial_context_menu.addItem('Show panorama'.toLocaleString(), null, 'Show panorama here'.toLocaleString(), 'pegman', function(panorama, marker, latlng)
	{
		gemni_panorama.setPosition(latlng);
		if (!gemni_panorama.getVisible())
		{
			gemni_panorama.setVisible(true);
		}
	});

	gemni_panorama_marker_full_context_menu = new PanoramaMarkerContextMenu(panorama, gemni_panorama_div);
	
	if (gemni_has_data_access)
	{
		/*gemni_panorama_marker_full_context_menu.addItem('Search position'.toLocaleString(), null, 'Search marker position data'.toLocaleString(), 'search', function(panorama, marker, latlng)
		{
			gemni_discover_place_info(latlng, marker.getBrother());
			if (!marker.getInfoState())
			{
				if (!marker.getInfoWindow())
				{
					gemni_create_marker_infowindow_contents(marker);
				}
				marker.getBrother().setInfoState(false);
				marker.setFull(true);
				marker.getInfoWindow().open(panorama, marker);
				marker.setInfoState(true);
				//discoverPlaceInfo(marker.getBrother().getPosition(), infowindow);
			}
			else
			{
				
			}
		});*/
		
		gemni_panorama_marker_full_context_menu.addItem('Edit activity'.toLocaleString(), null, 'Edit this activity'.toLocaleString(), 'edit', function(panorama, marker, latlng)
		{
			if (!marker.getInfoWindow())
			{
				gemni_create_marker_infowindow_contents(marker);
			}
			if (marker.getEditorWindow().getWindowState())
			{
				//gemni_reload_marker_contents(marker);
				marker.getEditorWindow().close();
				//return;
			}
			if (marker.getInfoState() || marker.getBrother().getInfoState())
			{
				marker.setInfoState(false);
				marker.getInfoWindow().close();
				marker.getBrother().setInfoState(false);
				marker.setDraggable(true);
				marker.getBrother().setDraggable(true);
				marker.getEditorWindow().setWindowState(true);
				marker.getEditorWindow().open(panorama, marker);
			}
			else
			{
				gemni_reload_marker_contents_panorama_edit(marker);
			}
		});
		
		gemni_panorama_marker_full_context_menu.addItem('Delete activity'.toLocaleString(), null, 'Delete this activity'.toLocaleString(), 'delete', function(panorama, marker, latlng)
		{
			var i = marker.getBrother().getRowID();
			gemni_clusterer.removeMarker(marker.getBrother());
			gemni_clear_marker_listeners(marker.getBrother());
			marker.setMap(null);
			marker.getBrother().setMap(null);
			delete gemni_markers[i];
			var query = "DELETE FROM " + gemni_fusiontables_data_source + " WHERE ROWID = '" +  marker.getRowID() + "'";
			//window['gemni_client']['gemni_run_update'](query, "gemni_delete_marker_callback", "");
			gemni_run_update(query, "gemni_delete_marker_callback", "");
		});
	}
	
	gemni_panorama_marker_full_context_menu.addItem('Center map'.toLocaleString(), null, 'Center map here'.toLocaleString(), 'center', function(panorama, marker, latlng)
	{
		if (gemni_panorama_mode != 2 || !panorama.getVisible())
		{
			gemni_map.panTo(latlng);
		}
	});
	
	gemni_panorama_marker_full_context_menu.addItem('Show panorama'.toLocaleString(), null, 'Show panorama here'.toLocaleString(), 'pegman', function(panorama, marker, latlng)
	{
		gemni_panorama.setPosition(latlng);
		if (!gemni_panorama.getVisible())
		{
			gemni_panorama.setVisible(true);
		}
	});
}

//

function gemni_generate_marker_click_position(rowID, position, onPanorama, forcePanorama)
{
	//rowID = rowID.toString();
	if (forcePanorama)
	{
		onPanorama = true;
	}
	else
	{
		onPanorama = onPanorama && gemni_panorama && gemni_panorama.getVisible();
	}
	gemni_future_marker_click_on_panorama = onPanorama;
	//alert(onPanorama);
	if (!onPanorama)
	{
		var marker = gemni_find_marker(rowID);
		if (marker)
		{
			if (gemni_future_marker_click_full)
			{
				marker.setFull(gemni_future_marker_click_full);
			}
			gemni_future_marker_click_full = null;
			if (gemni_panorama.getVisible())
			{
				gemni_panorama.setPosition(marker.getPosition());
			}
			gemni_map.setCenter(marker.getPosition());
			
			if (!marker.getInfoState())
			{
				//alert('map marker click triggering');
				//google.maps.event.trigger(marker, 'click');
				gemni_map_marker_click(marker);
			}
		}
		else
		{
			gemni_future_marker_click_id = rowID;
			if (gemni_panorama.getVisible())
			{
				gemni_panorama.setPosition(position);
			}
			gemni_map.setCenter(position);
		}
	}
	else
	{
		var marker = gemni_find_marker(rowID);
		if (marker)
		{
			if (gemni_future_marker_click_full)
			{
				marker.setFull(gemni_future_marker_click_full);
			}
			gemni_future_marker_click_full = null;
			gemni_panorama.setPosition(marker.getPosition());
			if (forcePanorama)
			{
				if (!gemni_panorama.getVisible())
				{
					gemni_panorama.setVisible(true);
				}
			}
			
			if (!marker.getBrother().getInfoState())
			{
				//alert('panorama marker click triggering');
				//google.maps.event.trigger(marker.getBrother(), 'click');
				gemni_panorama_marker_click(marker);
			}
		}
		else
		{
			gemni_future_marker_click_id = rowID;
			gemni_panorama.setPosition(position);
			if (!gemni_panorama.getVisible())
			{
				gemni_panorama.setVisible(true);
			}
			gemni_map.setCenter(position);
		}
	}
}

function gemni_generate_marker_click(rowID, onPanorama, forcePanorama)
{
	//alert("gemni_generate_marker_click");
	rowID = rowID.toString();
	if (forcePanorama)
	{
		onPanorama = true;
	}
	else
	{
		onPanorama = onPanorama && gemni_panorama && gemni_panorama.getVisible();
	}
	gemni_future_marker_click_on_panorama = onPanorama;
	//alert(onPanorama);
	if (!onPanorama)
	{
		var marker = gemni_find_marker(rowID);
		if (marker)
		{
			if (gemni_future_marker_click_full)
			{
				marker.setFull(gemni_future_marker_click_full);
			}
			gemni_future_marker_click_full = null;
			if (gemni_panorama.getVisible())
			{
				gemni_panorama.setPosition(marker.getPosition());
			}
			gemni_map.setCenter(marker.getPosition());
			//alert('map marker click triggering');
			//google.maps.event.trigger(marker, 'click');
			gemni_map_marker_click(marker);
		}
		else
		{
			var query = "SELECT ROWID, latitude, longitude FROM " + gemni_fusiontables_data_source + " WHERE ROWID = '" + rowID + "'";
			gemni_run_select(query, "gemni_generate_marker_click_callback");
		}
	}
	else
	{
		var marker = gemni_find_marker(rowID);
		if (marker)
		{
			if (gemni_future_marker_click_full)
			{
				marker.setFull(gemni_future_marker_click_full);
			}
			gemni_future_marker_click_full = null;
			gemni_panorama.setPosition(marker.getPosition());
			if (forcePanorama)
			{
				if (!gemni_panorama.getVisible())
				{
					gemni_panorama.setVisible(true);
				}
			}
			//alert('panorama marker click triggering');
			//google.maps.event.trigger(marker.getBrother(), 'click');
			gemni_panorama_marker_click(marker);
		}
		else
		{
			var query = "SELECT ROWID, latitude, longitude FROM " + gemni_fusiontables_data_source + " WHERE ROWID = '" + rowID + "'";
			gemni_run_select(query, "gemni_generate_marker_click_callback");
		}
	}
}

function gemni_generate_marker_click_callback(data)
{
	//alert("gemni_generate_marker_click_callback");
	if (!data['rows'] || data['rows']['length'] == 0)
	{
		return;
	}
	var parsed = data['rows'];
	var row = parsed[0];
	var rowid = row[0];
	//var location = row[1].split(',');
	var lat = row[1];
	var lng = row[2];
	var position = new google.maps.LatLng(lat, lng);
	gemni_future_marker_click_id = rowid;
	if (gemni_future_marker_click_on_panorama)
	{
		gemni_panorama.setPosition(position);
		if (!gemni_panorama.getVisible())
		{
			gemni_panorama.setVisible(true);
		}
	}
	gemni_map.setCenter(position);
}

function gemni_save_cookie_from_url(values)
{
	var cookie = '';
	for (var i = 0;i < values.length;i++)
	{
		cookie += values[i] + "+";
	}
	//alert("save-cookie: " + cookie);
	//alert('url: ' + 'gemni.project.state.' + gemni_fusiontables_data_source);
	//alert('url: ' + cookie);
	gemni_create_cookie('gemni.project.state.' + gemni_fusiontables_data_source, cookie, 15);
}

function gemni_save_cookie()
{
	var values = new Array();
	var mapLatLng = gemni_map.getCenter();
	var mapLat = mapLatLng.lat(); //0
	var mapLng = mapLatLng.lng(); //1
	var mapZoom = gemni_map.getZoom(); //2
	var mapTypeID = gemni_map.getMapTypeId(); //3
	
	var panoLatLng;
	var panoLat = ' '; //4
	var panoLng = ' '; //5
	var panoPov;
	var panoHeading = ' '; //6
	var panoPitch = ' '; //7
	var panoZoom = ' '; //8
	
	if (gemni_panorama.getVisible())
	{
		panoLatLng = gemni_panorama.getPosition();
		panoPov = gemni_panorama.getPov();
		
		panoLat = panoLatLng.lat();
		panoLng = panoLatLng.lng();
		
		panoHeading = panoPov.heading;
		panoPitch = panoPov.pitch;
		panoZoom = panoPov.zoom;
	}
	
	values[0] = (mapLat);
	values[1] = (mapLng);
	values[2] = (mapZoom);
	values[3] = (mapTypeID);
	values[4] = (panoLat);
	values[5] = (panoLng);
	values[6] = (panoHeading);
	values[7] = (panoPitch);
	values[8] = (panoZoom);
	values[9] = gemni_panorama_mode;
	values[10] = gemni_panorama.getVisible()?1:0;
	values[11] = ' ';
	values[12] = ' ';
	values[13] = ' ';
	values[14] = ' ';
	values[15] = ' ';
	values[16] = gemni_map_layers['traffic'].getMap()?1:0;
	values[17] = gemni_map_layers['transit'].getMap()?1:0;
	values[18] = gemni_map_layers['streetview'].getMap()?1:0;
	//values[19] = window['gemni_oauth2_token']?window['gemni_oauth2_token']:' ';
	//values[18] = gemni_map_layers['weather'].getMap()?1:0;
	//values[20] = gemni_map_layers['cloud'].getMap()?1:0;
	
	var cookie = '';
	
	for (var i = 0;i < values.length;i++)
	{
		cookie += values[i] + "+";
	}
	//alert(cookie);
	//alert("save-cookie: " + cookie);
	//alert('normal: ' + 'gemni.project.state.' + gemni_fusiontables_data_source);
	//alert(cookie);
	gemni_create_cookie('gemni.project.state.' + gemni_fusiontables_data_source, cookie, 15);
}

function gemni_get_url_vars()
{
    var vars = [], hash;
    if (window.location.href.indexOf('?') < 0)
    {
	    return null;
    }
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function gemni_load_url_ds()
{
	var vars = gemni_get_url_vars();
	var i;
	if (vars && vars["ds"])
	{
		gemni_fusiontables_data_source = vars["ds"];
	}
	/*else
	{
		window.location.href = window.location.href + "?ds=" + gemni_fusiontables_data_source;
	}*/
}

function gemni_load_url_vars()
{
	var vars = gemni_get_url_vars();
	var i;
	if (vars)
	{
		if (!gemni_loaded_cookie)
		{
			gemni_cookie_values = new Array();
			for (i = 0;i < 21;i++)
			{
				gemni_cookie_values[i] = ' '; 
			}
		}
		if (vars["mlat"] && vars["mlng"])
		{
			gemni_cookie_values[0] = vars["mlat"];
			gemni_cookie_values[1] = vars["mlng"];
			gemni_loaded_url = true;
			//gemni_map_initial_latlng = new google.maps.LatLng(vars["mlat"], vars["mlng"]);
		}
		if (vars["mz"])
		{
			gemni_cookie_values[2] = vars["mz"];
			gemni_loaded_url = true;
			//gemni_map_initial_zoom = parseInt(vars["mz"]);
		}
		if (vars["mt"])
		{
			gemni_cookie_values[3] = vars["mt"];
			gemni_loaded_url = true;
			//gemni_map_initial_type = vars["mtid"];
		}
		if (vars["plat"] && vars["plng"])
		{
			gemni_cookie_values[4] = vars["plat"];
			gemni_cookie_values[5] = vars["plng"];
			gemni_loaded_url = true;
			//gemni_panorama_initial_position = new google.maps.LatLng(vars["plat"], vars["plng"]);
		}
		if (vars["ph"] && vars["pp"] && vars["pz"])
		{
			gemni_cookie_values[6] = vars["ph"];
			gemni_cookie_values[7] = vars["pp"];
			gemni_cookie_values[8] = vars["pz"];
			gemni_loaded_url = true;
			//gemni_panorama_initial_pov = {heading: parseFloat(vars["ph"]), pitch: parseFloat(vars["pp"]), zoom: parseInt(vars["pz"])};
		}
		if (vars["md"])
		{
			gemni_cookie_values[9] = vars["md"];
			gemni_loaded_url = true;
			//gemni_panorama_mode = parseInt(vars["md"]);
		}
		if (vars["ds"])
		{
			//gemni_cookie_values[10] = vars["ds"];
			gemni_fusiontables_data_source = vars["ds"];
		}
		if (vars["pv"])
		{
			gemni_cookie_values[10] = vars["pv"];
			gemni_loaded_url = true;
			//gemni_panorama_mode = parseInt(vars["mode"]);
		}
		if (vars["mid"])
		{
			gemni_cookie_values[11] = vars["mid"];
			gemni_loaded_url = true;
			//gemni_panorama_mode = parseInt(vars["mode"]);
		}
		if (vars["mop"])
		{
			gemni_cookie_values[12] = vars["mop"];
			gemni_loaded_url = true;
			//gemni_panorama_mode = parseInt(vars["mode"]);
		}
		if (vars["glat"] && vars["glng"])
		{
			gemni_cookie_values[13] = vars["glat"];
			gemni_cookie_values[14] = vars["glng"];
			gemni_loaded_url = true;
			//gemni_panorama_mode = parseInt(vars["mode"]);
		}
		if (vars["gp"])
		{
			gemni_cookie_values[15] = vars["gp"];
			gemni_loaded_url = true;
			//gemni_panorama_mode = parseInt(vars["mode"]);
		}
		if (vars["mltr"])
		{
			gemni_cookie_values[16] = vars["mltr"];
			gemni_loaded_url = true;
		}
		if (vars["mlts"])
		{
			gemni_cookie_values[17] = vars["mlts"];
			gemni_loaded_url = true;
		}
		if (vars["mlwt"])
		{
			gemni_cookie_values[18] = vars["mlwt"];
			gemni_loaded_url = true;
		}
		/*if (window['gemni_oauth2_token'])
		{
			gemni_cookie_values[19] = window['gemni_oauth2_token'];
		}*/
		/*if (vars["mlsv"])
		{
			gemni_cookie_values[19] = vars["mlsv"];
			gemni_loaded_url = true;
		}*/
		/*if (vars["mlc"])
		{
			gemni_cookie_values[20] = vars["mlc"];
			gemni_loaded_url = true;
		}*/
		//gemni_loaded_url = refresh;
		
		if (gemni_loaded_url)
		{
			gemni_save_cookie_from_url(gemni_cookie_values);
			//alert("forced reload");
			var clean_url = window.location.href.substring(0, window.location.href.indexOf('?'));
			window.location.href = clean_url + "?ds=" + gemni_fusiontables_data_source;
		}
	}
	/*else
	{
		window.location.href = window.location.href + "?ds=" + gemni_fusiontables_data_source;
	}*/
}

function gemni_load_cookie()
{
	var cookie = gemni_read_cookie('gemni.project.state.' + gemni_fusiontables_data_source);
	//alert('load: ' + cookie);
	if (cookie)
	{
		var values = cookie.split('+');
		//alert('load-length: ' + values.length);
		if (values.length >= 11)
		{
			if (values[3] == ' ' || values[9] == ' ')
			{
				return;
			}
			if ((values[4] != ' ') && (values[5] != ' ') && (values[6] != ' ') && (values[7] != ' ') && (values[8] != ' '))
			{
				gemni_panorama_initial_position = new google.maps.LatLng(values[4], values[5]);
				gemni_panorama_initial_pov = {heading: parseFloat(values[6]), pitch: parseFloat(values[7]), zoom: parseInt(values[8])};
			}
			gemni_map_initial_type = values[3];
			//gemni_map.setMapTypeId();
			if (values[0] != ' ' && values[1] != ' ')
			{
				gemni_map_initial_latlng = new google.maps.LatLng(values[0], values[1]);
			}
			//gemni_map.setCenter(new google.maps.LatLng(values[0], values[1]));
			if (values[2] != ' ')
			{
				gemni_map_initial_zoom = parseInt(values[2]);
			}
			//gemni_map.setZoom(parseInt(values[2]));
			if (gemni_mobile)
			{
				gemni_panorama_mode = 2;
			}
			gemni_panorama_mode = parseInt(values[9]);
			if (gemni_mobile)
			{
				if (gemni_panorama_mode != 2)
				{
					var proportion = window.innerWidth/window.innerHeight;
					//alert(gemni_content_div.offsetWidth);
					//alert(gemni_content_div.offsetHeight);
					//alert(proportion);
					if (proportion > 1)
					{
						gemni_panorama_mode = 0;
					}
					else
					{
						gemni_panorama_mode = 1;
					}
				}
			}
			gemni_panorama_visible = values[10];
			gemni_preloaded_marker_click_id = values[11];
			gemni_preloaded_marker_click_on_panorama = values[12] == '1';
			if (values[13] && values[14] && values[13] != ' ' && values[14] != ' ')
			{
				gemni_geocoder_marker_initial_position = new google.maps.LatLng(values[13], values[14]);
			}
			gemni_geocoder_marker_click_on_panorama = values[15] == '1';
			
			//gemni_cookie_data = cookie;
			gemni_cookie_values = values;
			/*if (values[10] && values[10].length > 0)
			{
				//gemni_fusiontables_datasource = values[10];
				gemni_fusiontables_data_source = values[10];
			}*/
			gemni_loaded_cookie = true;
		}
		else
		{
			//alert("bad cookie");
		}
	}
	else
	{
		//alert("no cookie");
	}
}

function gemni_reload_cookie()
{
	if (gemni_panorama_initial_position)
	{
		gemni_panorama.setPosition(gemni_panorama_initial_position);
		gemni_panorama.setPov(gemni_panorama_initial_pov);
	}
	gemni_map.setMapTypeId(gemni_map_initial_type);
	gemni_map.setCenter(gemni_map_initial_latlng);
	gemni_map.setZoom(gemni_map_initial_zoom);
}

function gemni_test_data_source(data_source)
{
	var query = "SELECT ROWID, latitude, longitude, date, title, address, comments, mark, filter FROM " + data_source + " LIMIT 1";
	gemni_run_select(query, "gemni_test_data_source_callback", "");
}

function gemni_test_data_source_callback(data, parameters)
{
	//alert('gemni_test_data_source_callback');
	if (data)
	{
		//gemni_fusiontables_data_source = gemni_fusiontables_data_source;
		//alert(data.toString());
		if (!gemni_main_div)
		{
			gemni_start();
		}
	}
	else
	{
		//alert(data.toString());
		var clean_url = window.location.href.substring(0, window.location.href.indexOf('?'));
		window.location.href = clean_url + "?ds=" + gemni_fusiontables_data_source;
	}
	//alert("gemni_test_data_source_callback");
	//start();
}

function gemni_test_data_access()
{
	//document.gemni_client.testTableAccess(gemni_fusiontables_data_source, "gemni_test_data_access_callback", "");
	//gemni_fusiontables_data_source = '123028';
	//window['gemni_client']['gemni_run_update']("UPDATE " + gemni_fusiontables_data_source + " SET mark = '0', date = '0', address = '0', comments = '0', title = '0', filter = '0' WHERE ROWID = '987654321012345678'", "gemni_test_data_access_callback", "");
	gemni_run_update("UPDATE " + gemni_fusiontables_data_source + " SET mark = '0', date = '0', address = '0', comments = '0', title = '0', filter = '0' WHERE ROWID = '987654321012345678'", "gemni_test_data_access_callback", "");
}

function gemni_test_data_access_callback(result, parameters)
{
	//alert("result: [" + result + "]");
	//gemni_has_data_access = true;
	if (result != null)
	{
		gemni_has_data_access = true;
	}
	else if (window['gemni_client'] == window)
	{
		/*if (window['gemni_usertoken'])
		{
			runSecureSelect("SHOW TABLES", "test_secure_select_callback");
		}*/
		gemni_has_data_access = true;
	}
	//alert(result);
	gemni_test_data_source(gemni_fusiontables_data_source);
	//initialize();
}

function gemni_null_success_callback(data)
{
	//alert('success');
	//alert("success_callback");
	//alert(data.toString());
	/*if (!gemni_main_div)
	{
		start();
	}*/
	
}

function gemni_null_error_callback(data)
{
	//alert("error_callback");
	//alert(data.toString());
	/*if (!gemni_main_div)
	{
		start();
	}*/
	/*if (window['gemni_oauth2_token'])
	{
		try
		{
			if (!(oauth2.expiresIn(window['gemni_oauth2_request']) > 0))
			{
				oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
				return;
			}
			else
			{
				
			}
		}
		catch (e)
		{
			oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
			return;
		}
	}*/
}

//function filter_response(data, type)
//{
	//alert(data.toString());
	//alert(type.toString());
	//return data;
//}
	 
function createXMLHttpRequest()
{
	var ua;
	if(window.XMLHttpRequest)
	{
		try
		{
			ua = new XMLHttpRequest();
		}
		catch(e)
		{
			ua = false;
		}
	}
	else if(window.ActiveXObject)
	{
		try
		{
			ua = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e)
		{
			ua = false;
		}
	}  
	return ua;  
}

/*function runSecureSelect(query, callback)
{
	var url = gemni_fusiontables_scope;
	var data_values = {sql: query, jsonCallback: callback};
	//var headers = {"Authorization": "AuthSub token=" + window['gemni_usertoken']};
	jQuery.ajax(url, {crossDomain: true, beforeSend: function(xhr){xhr.setRequestHeader('Authorization', window['gemni_usertoken']);}, data: data_values, success: gemni_null_success_callback, error: gemni_null_error_callback, contentType: 'text/plain; charset=UTF-8', dataType: 'json'});
}*/

/*function test_secure_select_callback(data)
{
	if (!data['rows'] || data['rows'][0]['length'] == 0)
	{
		alert("invalid data!");
		return;
	}
	alert(data.table.toString());
}*/

function gemni_oauth2_refresh_callback(token)
{
	//alert('oauth2_refresh_callback');
	//alert(token.access_token);
	//alert(token.error);
	//window['gemni_oauth2_token'] = token;
	if (token.access_token)
	{
		window['gemni_oauth2_token'] = token.access_token;
		var expires_in = parseInt(token.expires_in) * 1000 - (60 * 1000);
		if (expires_in > 0)
		{
			window['gemni_oauth2_refresh'] = setTimeout(function() {gapi.auth.authorize({client_id: window['gemni_oauth2_client_id'], immediate: true, scope: 'https://www.googleapis.com/auth/fusiontables https://www.googleapis.com/auth/userinfo.profile'}, gemni_oauth2_refresh_callback);}, expires_in);
		}
		else
		{
			setTimeout(function() {gapi.auth.authorize({client_id: window['gemni_oauth2_client_id'], immediate: true, scope: 'https://www.googleapis.com/auth/fusiontables https://www.googleapis.com/auth/userinfo.profile'}, gemni_oauth2_refresh_callback);}, 500);
		}
	}
	else
	{
		setTimeout(function() {gapi.auth.authorize({client_id: window['gemni_oauth2_client_id'], immediate: false, scope: 'https://www.googleapis.com/auth/fusiontables https://www.googleapis.com/auth/userinfo.profile'}, gemni_oauth2_refresh_callback);}, 500);
	}
}

function gemni_oauth2_error_callback(error)
{
	//alert('gemni_oauth2_error_callback');
	if (window['gemni_oauth2_token'])
	{	
		//setTimeout(function() {oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);}, 500);
		if (window['gemni_oauth2_refresh'])
		{
			clearTimeout(window['gemni_oauth2_refresh']);
			window['gemni_oauth2_refresh'] = null;
		}
		setTimeout(function() {gapi.auth.authorize({client_id: window['gemni_oauth2_client_id'], immediate: true, scope: 'https://www.googleapis.com/auth/fusiontables https://www.googleapis.com/auth/userinfo.profile'}, gemni_oauth2_refresh_callback);}, 500);
	}
	else
	{
		//setTimeout(function() {oauth2.login(window['gemni_oauth2_request'], oauth2_success_callback, gemni_oauth2_error_callback);}, 500);
	}
}

function gemni_filter_auto_complete_callback_install(callback)
{
	window['gemni_filter_input_callback'] = callback;
}

//TODO: novos filtros
function gemni_filter_auto_complete_search(filter, callback)
{
	if (!filter)
	{
		//alert('clearing filter');
		callback({});
		google.maps.event.trigger(gemni_map, 'idle');
		return;
	}
	if (filter.length < 2)
	{
		//alert('clearing filter');
		callback({});
		google.maps.event.trigger(gemni_map, 'idle');
		return;
	}
	gemni_filter_auto_complete_callback_install(callback);
	var i = 0;
	var j = 0;
	var clauses;
	var filter_clause_comments = " WHERE mark NOT EQUAL TO ''";
	//alert(gemni_filter_input.value);
	//alert(gemni_filter_input.className != 'hasPlaceholder');
	if ((gemni_filter_input.value.length > 0) && (gemni_filter_input.className != 'hasPlaceholder'))
	{
		//filter_clause_comments = " AND filter CONTAINS IGNORING CASE '" + gemni_filter_input.value + "'";
		clauses = gemni_parse_options(gemni_filter_input.value);
		for (i = 0;i < clauses.length;i++)
		{
			if (clauses[i] && clauses[i].length > 0)
			{
				if (clauses[i].charAt(0) == '!')
				{
					filter_clause_comments += " AND filter DOES NOT CONTAIN '" + clauses[i].substring(1).toLowerCase() + "'";
				}
				else
				{
					filter_clause_comments += " AND filter CONTAINS '" + clauses[i].toLowerCase() + "'";
				}
			}
		}
		
		//alert(filter_clause_comments);
	}
	if (gemni_panorama_mode != 2 || !gemni_panorama.getVisible())
	{
		//var bounds = gemni_map.getBounds();
		var center = gemni_map.getCenter();
		//var sw = bounds.getSouthWest();
		//var ne = bounds.getNorthEast();
		//gemni_reload_bounds = bounds;
		var query;
		filter_clause_comments += " ORDER BY ST_DISTANCE(location, LATLNG(" + center.toUrlValue() + ")) LIMIT 5";
		//filter_clause_comments +=  " ORDER BY title ASC LIMIT 5";
		query = "SELECT title, ROWID, latitude, longitude, location FROM " + gemni_fusiontables_data_source + filter_clause_comments;
		//document.gemni_client.gemni_run_select(query, "gemni_reload_map_markers_callback", "");
		//alert(query);
		gemni_run_select(query, "gemni_filter_auto_complete_callback", "");
	}
	else
	{
		//alert('using circle!');
		var position = gemni_panorama.getPosition();
		//gemni_panorama_circle.setCenter(position);
		//var bounds = gemni_panorama_circle.getBounds();
		//var sw = bounds.getSouthWest();
		//var ne = bounds.getNorthEast();
		//gemni_reload_bounds = bounds;
		var query;
		filter_clause_comments += " ORDER BY ST_DISTANCE(location, LATLNG(" + position.toUrlValue() + ")) LIMIT 5";
		//filter_clause_comments +=  " ORDER BY title ASC LIMIT 5";
		query = "SELECT title, ROWID, latitude, longitude, location FROM " + gemni_fusiontables_data_source + filter_clause_comments;
		//document.gemni_client.gemni_run_select(query, "gemni_reload_map_markers_callback", "");
		//alert(query);
		gemni_run_select(query, "gemni_filter_auto_complete_callback", "");
	}
}

function gemni_filter_auto_complete_callback(data)
{
	if (!data || !data['rows'])
	{
		//alert("nothing!");
		return;
	}
	//alert(data['rows'][0].toString());
	/*var processed_data = {};
	for (data['rows'][0])
	{
		
	}*/
	window['gemni_filter_input_callback'](data['rows']);
}

function gemni_run_select(query, callback, parameters)
{
	var url = gemni_fusiontables_api;
	var data_values;
	if (window['gemni_oauth2_token'])
	{
		/*try
		{
			if (oauth2.expiresIn(window['gemni_oauth2_request']) > 0)
			{
				data_values = {access_token: window['gemni_oauth2_token'], sql: query, jsonCallback: callback};
			}
			else
			{
				//if (!window['gemni_oauth2_select_task'])
				//{
					//window['gemni_oauth2_select_task'] = function() {gemni_run_select(query, callback, parameters);};
				//}
				oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
				return;
			}
		}
		catch (e)
		{
			oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
			return;
		}*/
		/*if (!window['gemni_oauth2_select_task'])
		{
			window['gemni_oauth2_select_task'] = function() {gemni_run_select(query, callback, parameters);};
		}
		oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);*/
		//return;
		data_values = {sql: query, access_token: window['gemni_oauth2_token']};
		jQuery.ajax(url, {data: data_values, success: window[callback], error: gemni_oauth2_error_callback, contentType: 'text/plain; charset=UTF-8', dataType: 'jsonp'});
		//url = (url) + ('?sql=') + encodeURIComponent(query) + ('&access_token=') + encodeURIComponent(window['gemni_oauth2_token']);
		//data_values = {sql: query, key: window['gemni_api_key']};
		//jQuery.ajax(url, {data: data_values, success: window[callback], error: gemni_null_error_callback, contentType: 'text/plain; charset=UTF-8', dataType: 'jsonp'});
	}
	else
	{
		//url = (url) + ('?sql=') + encodeURIComponent(query) + ('&key=') + encodeURIComponent(window['gemni_api_key']);
		data_values = {sql: query, key: window['gemni_api_key']};
		jQuery.ajax(url, {data: data_values, success: window[callback], error: gemni_null_error_callback, contentType: 'text/plain; charset=UTF-8', dataType: 'jsonp'});
	}
	
	/*if (window['gemni_oauth2_token'])
	{
		try
		{
			if (!(oauth2.expiresIn(window['gemni_oauth2_request']) > 0))
			{
				oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
				return;
			}
			else
			{
				
			}
		}
		catch (e)
		{
			oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
			return;
		}
	}*/
}

function gemni_run_update(query, callback, parameters)
{
	var url = gemni_fusiontables_api;
	var data_values;
	var headers_values;
	if (window['gemni_oauth2_token'])
	{
		//try
		//{
			//if (oauth2.expiresIn(window['gemni_oauth2_request']) > 0)
			//{
				//data_values = {sql: query, oauth2_token: window['gemni_oauth2_token'], ftcallback: callback, ftparameters: parameters};
			//}
			//else
			//{
				//if (!window['gemni_oauth2_update_task'])
				//{
					//window['gemni_oauth2_update_task'] = function() {gemni_run_update(query, callback, parameters);};
				//}
				//oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
				//return;
			//}
		//}
		//catch (e)
		//{
			//oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
			//return;
		//}
		//url = (url) + ('?sql=') + encodeURIComponent(query) + ('&access_token=') + encodeURIComponent(window['gemni_oauth2_token']);
		headers_values =
		{
        	"Authorization": "Bearer " + window['gemni_oauth2_token'],
        	"Content-type": "application/x-www-form-urlencoded"
      	}
		data_values = {sql: query, key: window['gemni_api_key'], access_token: window['gemni_oauth2_token']};
	}
	/*else if (window['gemni_authsub_token'])
	{
		//url = encodeURIComponent(url) + encodeURIComponent('?sql=') + encodeURIComponent(query) + encodeURIComponent('&authsub_token=') + encodeURIComponent(window['gemni_usertoken']) + encodeURIComponent('&ftcallback=') + encodeURIComponent(callback) + encodeURIComponent('&ftparameters=') + encodeURIComponent(parameters);
		data_values = {sql: query, authsub_token: window['gemni_authsub_token'], ftcallback: callback, ftparameters: parameters, key: window['gemni_api_key']};
	}*/
	else
	{
		//url = (url) + ('?sql=') + encodeURIComponent(query) + ('&key=') + encodeURIComponent(window['gemni_api_key']);
		//url = encodeURIComponent(url) + encodeURIComponent('?sql=') + encodeURIComponent(query) + encodeURIComponent('&username=') + encodeURIComponent(window['gemni_username']) + encodeURIComponent('&password=') + encodeURIComponent(window['gemni_password']) + encodeURIComponent('&ftcallback=') + encodeURIComponent(callback) + encodeURIComponent('&ftparameters=') + encodeURIComponent(parameters);
		headers_values =
		{
        	"Authorization": "Bearer " + window['gemni_oauth2_token'],
        	"Content-type": "application/x-www-form-urlencoded"
      	}
		data_values = {sql: query, key: window['gemni_api_key']};
	}
	//alert(url);
	//requestCrossDomain(url, proxy_callback);
	//jQuery.ajax(url, {type: 'POST', beforeSend: function(xhr){xhr.ftcallback = callback; xhr.ftparameters = parameters}, data: data_values, success: gemni_proxy_success_callback, error: gemni_proxy_error_callback, complete: gemni_proxy_complete_callback, dataType: 'json', crossDomain: true});
	jQuery.ajax(url, {type: 'POST', beforeSend: function(xhr){xhr.ftcallback = callback; xhr.ftparameters = parameters}, headers: headers_values, data: data_values, success: gemni_proxy_success_callback, error: gemni_proxy_error_callback, complete: gemni_proxy_complete_callback, dataType: 'json', crossDomain: true});
	//alert(url);
	//alert(encodeURIComponent(url));
	//doAjax(url, "proxy_callback");
	/*if (window['gemni_oauth2_token'])
	{
		try
		{
			if (!(oauth2.expiresIn(window['gemni_oauth2_request']) > 0))
			{
				oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
				return;
			}
			else
			{
				
			}
		}
		catch (e)
		{
			oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
			return;
		}
	}*/
}

/*function gemni_run_update(query, callback, parameters)
{
	var url = gemni_fusiontables_proxy_url;
	var data_values;
	if (window['gemni_oauth2_token'])
	{
		//try
		//{
			//if (oauth2.expiresIn(window['gemni_oauth2_request']) > 0)
			//{
				//data_values = {sql: query, oauth2_token: window['gemni_oauth2_token'], ftcallback: callback, ftparameters: parameters};
			//}
			//else
			//{
				//if (!window['gemni_oauth2_update_task'])
				//{
					//window['gemni_oauth2_update_task'] = function() {gemni_run_update(query, callback, parameters);};
				//}
				//oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
				//return;
			//}
		//}
		//catch (e)
		//{
			//oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
			//return;
		//}
		data_values = {sql: query, oauth2_token: window['gemni_oauth2_token'], ftcallback: callback, ftparameters: parameters};
	}
	else if (window['gemni_authsub_token'])
	{
		//url = encodeURIComponent(url) + encodeURIComponent('?sql=') + encodeURIComponent(query) + encodeURIComponent('&authsub_token=') + encodeURIComponent(window['gemni_usertoken']) + encodeURIComponent('&ftcallback=') + encodeURIComponent(callback) + encodeURIComponent('&ftparameters=') + encodeURIComponent(parameters);
		data_values = {sql: query, authsub_token: window['gemni_authsub_token'], ftcallback: callback, ftparameters: parameters, api_key: window['gemni_api_key']};
	}
	else
	{
		//url = encodeURIComponent(url) + encodeURIComponent('?sql=') + encodeURIComponent(query) + encodeURIComponent('&username=') + encodeURIComponent(window['gemni_username']) + encodeURIComponent('&password=') + encodeURIComponent(window['gemni_password']) + encodeURIComponent('&ftcallback=') + encodeURIComponent(callback) + encodeURIComponent('&ftparameters=') + encodeURIComponent(parameters);
		data_values = {sql: query, username: window['gemni_username'], password: window['gemni_password'], ftcallback: callback, ftparameters: parameters, api_key: window['gemni_api_key']};
	}
	//alert(url);
	//requestCrossDomain(url, proxy_callback);
	jQuery.ajax(url, {type: 'get', beforeSend: function(xhr){xhr.ftcallback = callback; xhr.ftparameters = parameters}, data: data_values, success: gemni_proxy_success_callback, error: gemni_proxy_error_callback, complete: gemni_proxy_complete_callback, dataType: 'json', crossDomain: true});
	//alert(url);
	//alert(encodeURIComponent(url));
	//doAjax(url, "proxy_callback");
	if (window['gemni_oauth2_token'])
	{
		try
		{
			if (!(oauth2.expiresIn(window['gemni_oauth2_request']) > 0))
			{
				oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
				return;
			}
			else
			{
				
			}
		}
		catch (e)
		{
			oauth2.login(window['gemni_oauth2_request'], gemni_oauth2_refresh_callback, gemni_oauth2_error_callback);
			return;
		}
	}
}*/

function gemni_filter_nothing(data, type)
{
	//alert(data);
	//return data;
}

function gemni_proxy_success_callback(data, status, request)
{
	//alert("gemni_proxy_success_callback");
	//alert(request.responseText);
	//alert(request.responseXML);
	window[request['ftcallback']](data, request['ftparameters']);
}

function gemni_proxy_error_callback(request, status, error)
{
	//alert("gemni_proxy_error_callback");
	//alert(status);
	//alert(error);
	//alert(request.responseText);
	//alert(request.responseXML);
	//window[request['ftcallback']](null, request['ftparameters']);
	gemni_oauth2_error_callback(error);
	window[request['ftcallback']](null, null);
}

function gemni_proxy_complete_callback(request, status)
{
	//alert("gemni_proxy_complete_callback");
	//alert(status);
	//alert(request.responseText);
	//alert(request.responseXML);
	//alert(request['ftcallback']);
	//window[request['ftcallback']](request.responseText, request['ftparameters']);
}

var gemni_icons = new Array();

gemni_icons["red"] = new google.maps.MarkerImage("http://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png",
// This marker is 32 pixels wide by 32 pixels tall.
new google.maps.Size(32, 32),
// The origin for this image is 0,0.
new google.maps.Point(0,0),
// The anchor for this image is at 16,32.
new google.maps.Point(16, 32));

var gemni_icon_shadow = new google.maps.MarkerImage('http://maps.google.com/mapfiles/ms/micons/msmarker.shadow.png',
// The shadow image is larger in the horizontal dimension
// while the position and offset are the same as for the main image.
new google.maps.Size(59, 32),
new google.maps.Point(0,0),
new google.maps.Point(16, 32));

// Shapes define the clickable region of the icon.
// The type defines an HTML &lt;area&gt; element 'poly' which
// traces out a polygon as a series of X,Y points. The final
// coordinate closes the poly by connecting to the first
// coordinate.

var gemni_icon_shape =
{
	coord: [19,0, 24,5, 24,12, 23,13, 23,14, 20,17, 20,18, 19,19, 
	19,20, 18,21, 18,22, 17,23, 17,26, 16,27, 16,31, 14,31, 14,26, 13,25, 
	13,23, 12,22, 12,20, 10,18, 10,17, 7,14, 7,13, 6,12, 6,6, 7,5, 7,4, 11,0],
	type: 'poly'
};


function gemni_get_marker_image(iconColor)
{
	if ((typeof(iconColor)=="undefined") || (iconColor==null))
	{
		iconColor = "red";
	}
	if (!gemni_icons[iconColor])
	{
		gemni_icons[iconColor] = new google.maps.MarkerImage("http://www.google.com/intl/en_us/mapfiles/ms/micons/"+ iconColor +"-dot.png");
		// This marker is 32 pixels wide by 32 pixels tall.
		/*new google.maps.Size(32, 32),*/
		// The origin for this image is 0,0.
		/*new google.maps.Point(0,0),*/
		// The anchor for this image is at 16,32.
		/*new google.maps.Point(16, 32));*/
	}
	return gemni_icons[iconColor];
}

function gemni_build_marker(map, latlng, drag, cursor, color)
{
	var marker = new google.maps.Marker(
	{
		position: latlng,
		map: map,
		cursor: cursor,
		/*shadow: gemni_icon_shadow,*/
		icon: gemni_get_marker_image(color),
		/*shape: gemni_icon_shape,*/
		draggable: drag
	}
	);
	return marker;
}

function gemni_initialize()
{
	//alert("called initialize");
	/*if (window.location.href.indexOf("https:") == -1)
	{
		window.location.href = "https://" + window.location.host + window.location.pathname;
		return;
	}*/
	//gemni_content_div = document.getElementById('content_canvas');
	gemni_check_mobile();
	google.maps.event.addListener(window, "orientationchange", gemni_check_window_dimensions);
	if (gemni_mobile)
	{
		//window.addEventListener("load", function(){gemni_hide_address_bar();});
		//gemni_hide_address_bar();
	}
	gemni_load_url_ds();
	gemni_load_cookie();
	gemni_load_url_vars();
	if (gemni_loaded_url)
	{
		//alert("forced reload");
		return;
	}
	/*if (gemni_gdata_load)
	{
		gdata_load();
	}*/
	if (window['gemni_must_test_data_access'])
	{
		gemni_test_data_access();
	}
	else
	{
		gemni_test_data_source(gemni_fusiontables_data_source);
	}
}

function gemni_hide_address_bar()
{
	if(document.documentElement.scrollHeight<window.outerHeight/window.devicePixelRatio)
	{
		document.documentElement.style.height=(window.outerHeight/window.devicePixelRatio)+'px';
		setTimeout(function() {window.scrollTo(1, 1);}, 0);
	}
	else
	{
		var scrollLeft = window.pageXOffset;
		var scrollTop = window.pageYOffset;
		if (!typeof(scrollTop) == 'number')
		{
			scrollLeft = document.body.scrollLeft;
			scrollTop = document.body.scrollTop;
		}
		//alert('scrollLeft: ' + scrollLeft);
		//alert('scrollTop: ' + scrollTop);
		if (scrollTop <= 0)
		{
			setTimeout(function() {window.scrollTo(1, 1);}, 0);
		}
	}
	//if(document.documentElement.scrollWidth<window.outerWidth/window.devicePixelRatio)
	//document.documentElement.style.width=(window.outerWidth/window.devicePixelRatio)+'px';
}

function gemni_install_longclick(draggable, length)
{
	new LongClick(draggable, length);
}

function gemni_start()
{
	//alert("start");
	//var reservelatlng = new google.maps.LatLng(-23.547277, -46.636663);
	var reservelatlng = new google.maps.LatLng(-23.550365, -46.633945);
	//gemni_initial_user_location = gemni_find_current_user_location();
	//if (gemni_initial_user_location)
	//{
		//latlng = gemni_initial_user_location;
	//}
	//gemni_content_div = document.getElementById("content_canvas");
	gemni_main_div = document.getElementById("gemni_main_canvas");
	gemni_panorama_div = document.getElementById("gemni_panorama_canvas");
	gemni_map_div = document.getElementById("gemni_map_canvas");
	
	/*$('#map_canvas').resizable({handles: "e", containment: "document", stop: function(event, ui)
	{
		if (gemni_panorama_mode == 0)
		{
			gemni_panorama_div.style.width = window.innerWidth - ui.size.width;
		}
		else if (gemni_panorama_mode == 1)
		{
			gemni_panorama_div.style.height = window.innerHeight - ui.size.height;
		}
		gemni_check_window_dimensions();
	}
	});*/
	
	var streetViewOptions;
	var mapOptions;
	//alert(gemni_loaded_cookie);
	if (gemni_loaded_cookie)
	{
		if (!gemni_map_initial_latlng)
		{
			gemni_map_initial_latlng = reservelatlng;
			//alert("gemni_map_initial_latlng not set");
		}
		if (!gemni_map_initial_zoom)
		{
			gemni_map_initial_zoom = 18;
			//alert("gemni_map_initial_zoom not set");
		}
		if (gemni_panorama_initial_position && (gemni_panorama_visible == 1))
		{
			streetViewOptions =
			{
				addressControl: true,
				addressControlOptions: {position: google.maps.ControlPosition.LEFT_BOTTOM},
				linksControl: true,
				panControl: !gemni_mobile,
				//panControl: false,
				panControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
				zoomControl: true,
				zoomControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
				imageDateControl: true,
				enableCloseButton: false,
				disableDoubleClickZoom: true,
				fullScreenControl: false,
				fullScreenControlOptions: {position: google.maps.ControlPosition.RIGHT_BOTTOM},
				position: gemni_panorama_initial_position,
				pov: gemni_panorama_initial_pov
			};
		}
		else
		{
			streetViewOptions =
			{
				addressControl: true,
				addressControlOptions: {position: google.maps.ControlPosition.LEFT_BOTTOM},
				linksControl: true,
				panControl: !gemni_mobile,
				//panControl: false,
				panControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
				zoomControl: true,
				zoomControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
				imageDateControl: true,
				enableCloseButton: false,
				disableDoubleClickZoom: true,
				fullScreenControl: false,
				fullScreenControlOptions: {position: google.maps.ControlPosition.RIGHT_BOTTOM},
				position: gemni_map_initial_latlng,
				visible: gemni_panorama_visible == 1
			};
		}
		
		mapOptions =
		{
			zoom: gemni_map_initial_zoom,
			minZoom: gemni_map_min_zoom,
			center: gemni_map_initial_latlng,
			mapTypeId: gemni_map_initial_type,
			rotateControl: true,
			rotateControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
			panControl: !gemni_mobile,
			panControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
			zoomControl: true,
			zoomControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
			mapTypeControl: true,
			mapTypeControlOptions: {position: google.maps.ControlPosition.TOP_RIGHT},
			scaleControl: !gemni_mobile,
			streetViewControl: true,
			streetViewControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
			overviewMapControl: true,
			disableDoubleClickZoom: true,
			fullScreenControl: false,
			fullScreenControlOptions: {position: google.maps.ControlPosition.RIGHT_BOTTOM},
			streetView: new google.maps.StreetViewPanorama(gemni_panorama_div, streetViewOptions)
		};
	}
	else
	{
		streetViewOptions =
		{
			addressControl: true,
			addressControlOptions: {position: google.maps.ControlPosition.LEFT_BOTTOM},
			linksControl: true,
			panControl: !gemni_mobile,
			panControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
			zoomControl: true,
			zoomControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
			imageDateControl: true,
			enableCloseButton: false,
			disableDoubleClickZoom: true,
			fullScreenControl: false,
			fullScreenControlOptions: {position: google.maps.ControlPosition.RIGHT_BOTTOM},
			position: reservelatlng
		};
		mapOptions =
		{
			zoom: 18,
			minZoom: gemni_map_min_zoom,
			center: reservelatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			rotateControl: true,
			rotateControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
			panControl: !gemni_mobile,
			panControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
			zoomControl: true,
			zoomControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
			mapTypeControl: true,
			mapTypeControlOptions: {position: google.maps.ControlPosition.TOP_RIGHT},
			scaleControl: !gemni_mobile,
			streetViewControl: true,
			streetViewControlOptions: {position: google.maps.ControlPosition.LEFT_TOP},
			overviewMapControl: true,
			disableDoubleClickZoom: true,
			fullScreenControl: false,
			fullScreenControlOptions: {position: google.maps.ControlPosition.RIGHT_BOTTOM},
			streetView: new google.maps.StreetViewPanorama(gemni_panorama_div, streetViewOptions)
		};
	}
	gemni_map = new google.maps.Map(gemni_map_div, mapOptions);
	gemni_overlay = new google.maps.OverlayView();
	gemni_overlay.draw = function() {};
	gemni_overlay.setMap(gemni_map);
	var clustererOptions = 
	{
		imagePath: 'images/cluster/m'
	};
	gemni_clusterer = new MarkerClusterer(gemni_map, null, clustererOptions);
	//gemni_clusterer.setPrintable(true);
	gemni_clusterer.setImagePath('images/cluster/m');
	gemni_clusterer.setAverageCenter(true);
	gemni_clusterer.setGridSize(60);
	gemni_clusterer.setMaxZoom(17);
	gemni_panorama = gemni_map.getStreetView();
	gemni_panorama.setDiv(gemni_panorama_div);
	gemni_create_context_menus(gemni_map, gemni_panorama);
	gemni_create_map_layers();
	
	gemni_create_map_controls();
	//gemni_create_drawing_button();
	//gemni_create_logout_button();
	//gemni_create_restart_button();
	gemni_panorama_menu_div = document.createElement('DIV');
	gemni_create_panorama_menu(gemni_panorama_menu_div, gemni_map);
	gemni_panorama_menu_div.className = 'gemni_panorama_menu';
	gemni_panorama_menu_div.style.paddingLeft = '5px'
	//gemni_panorama_menu_div.style.display = 'inline';
	gemni_panorama_menu_div.index = 5;
	gemni_panorama.controls[google.maps.ControlPosition.TOP_LEFT].push(gemni_panorama_menu_div);
	gemni_build_geocoder_markers(gemni_map, gemni_panorama);
	/*if (gemni_mobile)
	{
		gemni_initialize_window_dimensions();
	}*/
	
	$("#main_canvas").bind("resize", gemni_check_window_dimensions);
	window.onresize = gemni_check_window_dimensions;
	//google.maps.event.addListener(gemni_panorama, 'visible_changed', gemni_check_panorama_size);
	google.maps.event.addListener(gemni_panorama, 'visible_changed', gemni_check_panorama_visible);
	google.maps.event.addListener(gemni_panorama, 'position_changed', gemni_check_panorama_location);
	google.maps.event.addListener(gemni_clusterer, 'clusteringbegin', function()
	{
		window.clearInterval(gemni_interval);
	});
	google.maps.event.addListener(gemni_clusterer, 'clusteringend', function()
	{
		gemni_interval = window.setInterval(gemni_reload_map_markers_interval, 30000);
	});
	if (gemni_preloaded_marker_click_id && gemni_preloaded_marker_click_id != ' ')
	{
		gemni_future_marker_click_full = true;
		gemni_generate_marker_click(gemni_preloaded_marker_click_id, gemni_preloaded_marker_click_on_panorama, gemni_preloaded_marker_click_on_panorama);
		gemni_preloaded_marker_click_id = null;
		gemni_preloaded_marker_click_on_panorama = null;
	}
	if (gemni_geocoder_marker_initial_position && gemni_geocoder_marker_initial_position != ' ')
	{
		gemni_map_geocoder_marker.setPosition(gemni_geocoder_marker_initial_position);
		gemni_panorama_geocoder_marker.setPosition(gemni_geocoder_marker_initial_position);
		gemni_map_geocoder_marker.setMap(gemni_map);
		gemni_panorama_geocoder_marker.setMap(gemni_panorama);
		if (gemni_geocoder_marker_click_on_panorama)
		{
			gemni_discover_place_info(gemni_panorama_geocoder_marker);
			google.maps.event.trigger(gemni_panorama_geocoder_marker, 'click');
		}
		else
		{
			gemni_discover_place_info(gemni_map_geocoder_marker);
			google.maps.event.trigger(gemni_map_geocoder_marker, 'click');
			//google.maps.event.trigger(gemni_map_geocoder_marker, 'click');
		}
	}
	google.maps.event.addListener(gemni_map, 'maptypeid_changed', gemni_reload_map_markers_event);
	google.maps.event.addListener(gemni_map, 'idle', gemni_reload_map_markers_event);
	//google.maps.event.addListener(gemni_map, 'longpress', function(e)
	//{
		//alert('rightclick');
		//google.maps.event.trigger(gemni_map, 'rightclick', e);
	//});
	
	gemni_check_filter_placeholder();
	gemni_install_longclick(gemni_map, 500);
	//gemni_check_window_dimensions();
	gemni_ignore_panorama_location = false;
	gemni_check_panorama_size();
	if (!gemni_loaded_cookie)
	{
		gemni_initialize_window_dimensions();
		gemni_find_current_user_location(function(current_user_location)
		{
			if (current_user_location)
			{
				gemni_map.panTo(current_user_location);
				if (gemni_panorama.getVisible())
				{
					gemni_panorama.setPosition(current_user_location);
				}
			}
			else
			{
				//alert("not found!");
			}
		});
	}
	else
	{
		gemni_check_window_dimensions();
		gemni_reload_cookie();
	}
	//gemni_check_panorama_visible();
	//var transitLayer = new google.maps.TransitLayer();
	//transitLayer.setMap(gemni_map);
	//gemni_panorama_div.style.zIndex = 0;
	//gemni_check_auto_complete_placeholder();
}

//exporting some things
window['gemni_fusiontables_scope'] = gemni_fusiontables_scope;
window['gemni_initialize'] = gemni_initialize;
window['gemni_submit_editorwindow'] = gemni_submit_editorwindow;
window['gemni_install_calendar'] = gemni_install_calendar;
window['gemni_discover_marker_address'] = gemni_discover_marker_address;
window['gemni_close_editorwindow'] = gemni_close_editorwindow;
window['gemni_discover_map_geocoder_marker_address'] = gemni_discover_map_geocoder_marker_address;
window['gemni_generate_marker_click'] = gemni_generate_marker_click;
window['gemni_alternate_infowindow_mode'] = gemni_alternate_infowindow_mode;
window['gemni_reload_marker_contents_map_edit_callback'] = gemni_reload_marker_contents_map_edit_callback;
window['gemni_reload_marker_contents_panorama_edit_callback'] = gemni_reload_marker_contents_panorama_edit_callback;
window['gemni_reload_marker_contents_callback'] = gemni_reload_marker_contents_callback;
window['gemni_reload_map_markers_callback'] = gemni_reload_map_markers_callback;
window['gemni_update_marker_contents_callback'] = gemni_update_marker_contents_callback;
window['gemni_generate_marker_click_callback'] = gemni_generate_marker_click_callback;
window['gemni_create_map_marker_callback'] = gemni_create_map_marker_callback;
window['gemni_update_rowid_callback'] = gemni_update_rowid_callback;
window['gemni_discover_place_info_callback'] = gemni_discover_place_info_callback;
window['gemni_dragend_marker_callback'] = gemni_dragend_marker_callback;
window['gemni_delete_marker_callback'] = gemni_delete_marker_callback;
window['gemni_test_data_source_callback'] = gemni_test_data_source_callback;
window['gemni_test_data_access_callback'] = gemni_test_data_access_callback;
window['gemni_null_success_callback'] = gemni_null_success_callback;
window['gemni_null_error_callback'] = gemni_null_error_callback;
window['gemni_oauth2_refresh'] = gemni_oauth2_refresh;

// @js_externs function setup_calendar(params) = {};function logout() = {};function gemni_run_select(query, callback, parameters) = {} 