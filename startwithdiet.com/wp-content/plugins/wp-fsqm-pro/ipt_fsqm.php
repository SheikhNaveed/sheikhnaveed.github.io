<?php
/*
Plugin Name: eForm - WordPress Form Builder
Plugin URI: https://eform.live
Description: A robust plugin to gather feedback and run survey or host Quiz on your WordPress Blog. Stores the gathered data on database.
Author: iPanelThemes
Version: 3.6.6
Author URI: https://ipanelthemes.com/
License: GPLv3
Text Domain: ipt_fsqm
*/

/**
 * Copyright iPanelThemes.com, 2013-2017
 * This WordPress Plugin is comprised of two parts:
 *
 * (1) The PHP code and integrated HTML are licensed under the GPL license as is
 * WordPress itself. You will find a copy of the license text in the same
 * directory as this text file. Or you can read it here:
 * http://wordpress.org/about/gpl/
 *
 * (2) All other parts of the plugin including, but not limited to the CSS code,
 * images, and design are licensed according to the license purchased.
 * Read about licensing details here:
 * http://themeforest.net/licenses/regular_extended
 */

if ( ! function_exists( 'ipt_error_log' ) ) {
	/**
	 * Logs error in the WordPress debug mode
	 *
	 * @param      mixed  $var    The variable
	 */
	function ipt_error_log( $var ) {
		// Do nothing if not in debugging environment
		if ( ! defined( 'WP_DEBUG' ) || true != WP_DEBUG ) {
			return;
		}
		// Log the variable
		error_log( print_r( $var, true ) );
	}
}

// Autoloaders
class IPT_eForm_Autoloader {
	/**
	 * Load Main Form Classes
	 *
	 * @param      string  $name   Class name
	 */
	static public function load_classes( $name ) {
		$path = trailingslashit( dirname( __FILE__ ) ) . 'classes/';
		$filename = 'class-' . str_replace( '_', '-', strtolower( $name ) ) . '.php';
		if ( file_exists( $path . $filename ) ) {
			require_once $path . $filename;
		}
	}

	/**
	 * Load library classes, like front UI or admin UI
	 *
	 * @param      string  $name   Class name
	 */
	static public function load_lib( $name ) {
		$path = trailingslashit( dirname( __FILE__ ) ) . 'lib/classes/';
		$filename = 'class-' . str_replace( '_', '-', strtolower( $name ) ) . '.php';
		if ( file_exists( $path . $filename ) ) {
			require_once $path . $filename;
		}
	}

	/**
	 * Load material UI class
	 *
	 * @param      string  $name   Class name
	 */
	static public function load_material( $name ) {
		$path = trailingslashit( dirname( __FILE__ ) ) . 'material/classes/';
		$filename = 'class-' . str_replace( '_', '-', strtolower( $name ) ) . '.php';
		if ( file_exists( $path . $filename ) ) {
			require_once $path . $filename;
		}
	}
}
/**
 * Register the loaders
 */
spl_autoload_register( 'IPT_eForm_Autoloader::load_classes' );
spl_autoload_register( 'IPT_eForm_Autoloader::load_lib' );
spl_autoload_register( 'IPT_eForm_Autoloader::load_material' );

// Include widgets
// Autoloader is not needed because widget function needs to be called anyway
require_once dirname( __FILE__ ) . '/widgets/class-ipt-fsqm-form-widget.php';
require_once dirname( __FILE__ ) . '/widgets/class-ipt-fsqm-popup-widget.php';
require_once dirname( __FILE__ ) . '/widgets/class-ipt-fsqm-trends-widget.php';

if ( is_admin() ) {
	require_once dirname( __FILE__ ) . '/classes/class-ipt-fsqm-admin.php';
} else {
	// Silence is golden
}

/**
 * Include the envato market plugin for auto-update
 */
require_once dirname( __FILE__ ) . '/classes/class-envato-market-github.php';

/**
 * Holds the plugin information
 *
 * @global array $ipt_fsqm_info
 */
global $ipt_fsqm_info;

/**
 * Holds the global settings
 *
 * @global array $ipt_fsqm_settings
 */
global $ipt_fsqm_settings;

$ipt_fsqm = new IPT_FSQM_Loader( __FILE__, 'ipt_fsqm', '3.6.6', 'ipt_fsqm', 'http://ipanelthemes.com/kb/fsqm/', 'http://ipanelthemes.com/kb/support/forum/wordpress-plugins/wp-feedback-survey-quiz-manager-pro/' );

$ipt_fsqm->load();
