<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'startwithdiet_com_1');

/** MySQL database username */
define('DB_USER', 'py5pd2yl');

/** MySQL database password */
define('DB_PASSWORD', '!UwJ6Vzp');

/** MySQL hostname */
define('DB_HOST', 'mysql.startwithdiet.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '*FoVQQ3LI_P!7oejKg:VDjg1FJ*je("KTyCRKO_F8PtrgZ%k2R!wRq$O/MtA0@Vw');
define('SECURE_AUTH_KEY',  'eU+odN$5FrHbMRRF_1LbVK*CnM4@NMNY_VO@go0x`9EG5p72R|_az85OxQc;4+p@');
define('LOGGED_IN_KEY',    'N^#/Bb0"vN_s_m9B^n/$dyS9ovE5vW!:FZzd(EqnR2hsM1PRaiSnBPCZ`a&k$o%z');
define('NONCE_KEY',        'HWc/ypC_c$lFg@QKtel:t3P7UFnOjaKr:Kmqi"_)hGUwDjYsZW$G9?9n#a1oyNYW');
define('AUTH_SALT',        'Y@rCw!e:uiR?D+3kJ(GIXbf+*;sc2^(o#iZyMAmNfStr"pFtS@Ol9wX~Z*1KbaYM');
define('SECURE_AUTH_SALT', 'Ta@CiDSDy95Mj*Z8M`+yb)H`BZJdGk4uxPswn6iYAce0zxK%"*Ud*5W/5j!S!pEA');
define('LOGGED_IN_SALT',   'm#0f(rCVgzBL%p+|"yO0pQqg?B$f($rA#DL$jr55Q0frh$Oe!UFREs7$zZb0+JgT');
define('NONCE_SALT',       'y9K`A!bI5pz%HcFfh_fzPGNKIuX9tl;$B0~)/)AN6L"xO?TS"vxbdqW~?"_|5u1o');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_xsdnx5_';

/**
 * Limits total Post Revisions saved per Post/Page.
 * Change or comment this line out if you would like to increase or remove the limit.
 */
define('WP_POST_REVISIONS',  10);

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

