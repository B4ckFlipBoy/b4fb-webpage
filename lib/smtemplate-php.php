<?php
/**
 * Created by PhpStorm.
 * User: phorn
 * Date: 04.09.18
 * Time: 20:29
 */
require_once('smarty-master/libs/Smarty.class.php');
require_once('smtemplate_config.php');

class SMTemplate extends Smarty {
    function __construct()
    {
        parent::__construct();

        global $smtamplate_config;
        $this->template_dir = $smtamplate_config['template_dir'];
        $this->compile_dir = $smtamplate_config['compile_dir'];
        $this->cache_dir = $smtamplate_config['cache_dir'];
        $this->config_dir = $smtamplate_config['config_dir'];
    }

    function render($template){
        $this->display($template . '.tpl');
    }
}