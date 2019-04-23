/**
 * FSQM Popup helper function
 *
 * @author SwashataATiPanelThemes.com
 * @license    Themeforest Split License
 */
jQuery(document).ready(function($) {
	var i, popUpDialog, newAnchor;
	if ( window.iptFSQMModalPopupForms === undefined ) {
		window.iptFSQMModalPopupForms = [];
	}

	/**
	 * Gets the mobile operating system.
	 *
	 * @return     {string}  The mobile operating system.
	 * @link http://stackoverflow.com/a/21742107
	 */
	function getMobileOperatingSystem() {
	  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

	      // Windows Phone must come first because its UA also contains "Android"
	    if (/windows phone/i.test(userAgent)) {
	        return "Windows Phone";
	    }

	    if (/android/i.test(userAgent)) {
	        return "Android";
	    }

	    // iOS detection from: http://stackoverflow.com/a/9039885/177710
	    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
	        return "iOS";
	    }

	    return "unknown";
	}

	if ( window.iptFSQMModalPopupForms.length ) {
		for ( i = 0; i < window.iptFSQMModalPopupForms.length; i++ ) {
			popUpDialog = window.iptFSQMModalPopupForms[i];
			if ( typeof ( popUpDialog ) !== 'object' ) {
				continue;
			}
			newAnchor = $( '<a><span class="fsqm-popup-inner">' + ( popUpDialog.icon != '' ? '<i class="' + popUpDialog.icon + '"></i> ' : '' ) + '<span class="fsqm-popup-label">' + popUpDialog.label + '</span></span></a>' );
			newAnchor.addClass( 'ipt-fsqm-popup-anchor ' + 'ipt-fsqm-popup-pos-' + popUpDialog.position );
			if ( 'circ' == popUpDialog.style ) {
				newAnchor.addClass( 'ipt-fsqm-popup-circular' );
				newAnchor.attr( 'title', popUpDialog.label );
			}
			newAnchor.data( 'fsqmpopUpPosition', popUpDialog.position );
			newAnchor.data( 'eFormDialog', popUpDialog );
			newAnchor.data( 'formId', popUpDialog.formID );
			newAnchor.css({
				color: popUpDialog.color,
				backgroundColor: popUpDialog.bgcolor
			});
			newAnchor.attr( 'data-remodal-target', 'ipt-fsqm-popup-form-' + popUpDialog.formID );
			$('body').append(newAnchor);
		}

		$( document ).find( '.ipt-fsqm-popup-anchor, a[data-eform-popup]' ).each( function() {
			var elm = $( this ),
			eFormIziModalDiv = $( '#ipt-fsqm-popup-form-' + elm.data( 'formId' ) ),
			eFormDialog = eFormIziModalDiv.data( 'eformPopup' );
			eFormIziModalDiv.iziModal( {
				title: eFormDialog.header,
				subtitle: eFormDialog.subtitle,
				theme: '',
				headerColor: eFormDialog.bgcolor,
				icon: eFormDialog.icon,
				iconColor: eFormDialog.color,
				zindex: '999999',
				iframe: true,
				iframeHeight: 800,
				iframeURL: eFormDialog.url,
				group: 'eForm-popup',
				loop: true,
				fullscreen: true,
				history: true,
				bodyOverflow: true,
				width: eFormDialog.width
			} );
			elm.data( 'eFormIziModal', eFormIziModalDiv );
		} )

		$( document ).on( 'click', '.ipt-fsqm-popup-anchor, a[data-eform-popup]', function( e ) {
			e.preventDefault();
			var elm = $( this ),
			modal = elm.data( 'eFormIziModal' );
			var eFormIziModalDiv = $( '#ipt-fsqm-popup-form-' + elm.data( 'formId' ) ),
			eFormDialog = eFormIziModalDiv.data( 'eformPopup' );
			// Check if Apple Device
			// If so, don't open modal, open the form
			if ( 'iOS' == getMobileOperatingSystem() ) {
				window.location.href = eFormDialog.url;
				return;
			}
			if ( modal ) {
				modal.iziModal( 'open' );
			} else {
				eFormIziModalDiv.iziModal( {
					title: eFormDialog.header,
					subtitle: eFormDialog.subtitle,
					theme: '',
					headerColor: eFormDialog.bgcolor,
					icon: eFormDialog.icon,
					iconColor: eFormDialog.color,
					zindex: '999999',
					iframe: true,
					iframeHeight: 800,
					iframeURL: eFormDialog.url,
					group: 'eForm-popup',
					loop: true,
					fullscreen: true,
					history: true,
					bodyOverflow: true,
					width: eFormDialog.width
				} );
				elm.data( 'eFormIziModal', eFormIziModalDiv );
				eFormIziModalDiv.iziModal( 'open' );
			}
		} );

		var checkButtonMargin = function() {
			$('.ipt-fsqm-popup-anchor').each(function() {
				var width = $(this).outerWidth(),
				height = $(this).outerHeight();
				switch ( $(this).data( 'fsqmpopUpPosition' ) ) {
					case 'r' :
					case 'l' :
						$(this).css({
							marginTop: ( width / 2 ) * -1 + 'px'
						});
						break;
					case 'bc' :
						$(this).css({
							marginLeft: ( width / 2 ) * -1 + 'px'
						});
						break;
				}
			});
		};
		checkButtonMargin();
		$(window).on( 'resize', $.debounce( 250, checkButtonMargin ) );
	}
});
